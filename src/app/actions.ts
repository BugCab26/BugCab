"use server";

export async function sendContactMessage(prevState: any, formData: FormData) {
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const phone = (formData.get("phone") as string) || "";
  const company = (formData.get("company") as string) || "";
  const service = (formData.get("service") as string) || "";
  const message = (formData.get("message") as string) || "";
  const attachment = formData.get("attachment") as File | null;

  if (!name || !email || !message) {
    return { success: false, error: "Name, email, and message are required." };
  }

  let attachmentBase64 = "";
  let attachmentName = "";
  let attachmentSize = "";

  if (attachment && attachment.size > 0) {
    if (attachment.size > 10 * 1024 * 1024) {
      return { success: false, error: "Attached file exceeds maximum size limit of 10MB." };
    }
    attachmentName = attachment.name;
    attachmentSize =
      attachment.size > 1024 * 1024
        ? `${(attachment.size / (1024 * 1024)).toFixed(2)} MB`
        : `${(attachment.size / 1024).toFixed(0)} KB`;

    // EmailJS limits template_params payload to 50KB total.
    // Only embed raw base64 if small enough (<= 35KB) to prevent EmailJS 50KB limit errors.
    if (attachment.size <= 35000) {
      try {
        const buffer = Buffer.from(await attachment.arrayBuffer());
        attachmentBase64 = `data:${attachment.type || "application/octet-stream"};base64,${buffer.toString("base64")}`;
      } catch (err) {
        console.error("Error converting attachment to base64:", err);
      }
    }
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const autoreplyTemplateId = process.env.EMAILJS_AUTOREPLY_TEMPLATE_ID;

  if (!serviceId || !templateId || !publicKey) {
    console.warn("--- [Contact Form Submission] ---");
    console.warn(`Name: ${name}`);
    console.warn(`Email: ${email}`);
    console.warn(`Phone: ${phone || "N/A"}`);
    console.warn(`Company: ${company || "N/A"}`);
    console.warn(`Service: ${service || "N/A"}`);
    console.warn(`Message: ${message}`);
    console.warn(
      `Attachment: ${attachmentName ? `${attachmentName} (${attachmentSize})` : "None"}`,
    );
    console.warn("---------------------------------");
    console.warn(
      "Warning: EmailJS environment variables (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY) are not fully defined in .env.local. Logging to console instead of sending email.",
    );

    return {
      success: true,
      message:
        "Form submitted successfully (logged to console; please set EMAILJS_PUBLIC_KEY in .env.local to enable live EmailJS sending).",
    };
  }

  const phoneValue = phone.trim() || "Not provided";
  const companyValue = company.trim() || "Not provided";
  const serviceValue = service.trim() || "General Inquiry";
  const briefValue = attachmentName
    ? `File Attached: ${attachmentName} (${attachmentSize})`
    : "No file attached";

  const templateParams: Record<string, any> = {
    // Name variations
    from_name: name,
    name: name,
    user_name: name,
    customer_name: name,

    // Email variations
    from_email: email,
    email: email,
    user_email: email,
    customer_email: email,
    reply_to: email,

    // Phone / WhatsApp variations
    phone: phoneValue,
    phone_number: phoneValue,
    user_phone: phoneValue,
    whatsapp: phoneValue,
    contact_number: phoneValue,
    mobile: phoneValue,

    // Company variations
    company: companyValue,
    company_name: companyValue,
    user_company: companyValue,

    // Service variations
    service: serviceValue,
    services: serviceValue,
    service_name: serviceValue,
    project_service: serviceValue,
    requirement: serviceValue,

    // Message variations
    message: message,
    project_details: message,

    // Brief / Attachment variations
    brief: briefValue,
    attachment_name: attachmentName || "",
    attachment_size: attachmentSize || "",
    attachment: attachmentBase64 || briefValue,
    content: attachmentBase64 || briefValue,
  };

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://bugcab.com",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey || undefined,
        template_params: templateParams,
      }),
    });

    if (!res.ok) {
      const responseData = await res.text();
      console.error("EmailJS API error:", responseData);
      return {
        success: false,
        error: responseData || "Failed to send email via EmailJS.",
      };
    }

    // Try sending auto-reply to the customer (fire-and-forget, non-blocking)
    if (autoreplyTemplateId) {
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://bugcab.com",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: autoreplyTemplateId,
          user_id: publicKey,
          accessToken: privateKey || undefined,
          template_params: {
            to_name: name,
            name: name,
            to_email: email,
            email: email,
            reply_to: "bugcab.com@gmail.com",
            from_name: "BugCab Team",
            service: serviceValue,
            phone: phoneValue,
            company: companyValue,
          },
        }),
      })
        .then(async (replyRes) => {
          if (!replyRes.ok) {
            const replyErr = await replyRes.text();
            console.error("EmailJS Auto-Reply API error:", replyErr);
          }
        })
        .catch((err) => {
          console.error("Error sending EmailJS auto-reply:", err);
        });
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error: any) {
    console.error("Error sending contact message:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred.",
    };
  }
}
