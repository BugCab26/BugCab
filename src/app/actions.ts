"use server";

export async function sendContactMessage(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Name, email, and message are required." };
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const autoreplyTemplateId = process.env.EMAILJS_AUTOREPLY_TEMPLATE_ID;

  if (!serviceId || !templateId || !publicKey) {
    // Development fallback / warning when config is missing
    console.warn("--- [Contact Form Submission] ---");
    console.warn(`Name: ${name}`);
    console.warn(`Email: ${email}`);
    console.warn(`Phone: ${phone || "N/A"}`);
    console.warn(`Company: ${company || "N/A"}`);
    console.warn(`Service: ${service || "N/A"}`);
    console.warn(`Message: ${message}`);
    console.warn("---------------------------------");
    console.warn(
      "Warning: EmailJS environment variables (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY) are not fully defined in .env.local. Logging to console instead of sending email.",
    );

    // Return a success indicator for local testing
    return {
      success: true,
      message:
        "Form submitted successfully (logged to console; please set EMAILJS_PUBLIC_KEY in .env.local to enable live EmailJS sending).",
    };
  }

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
        template_params: {
          from_name: name,
          name: name,
          from_email: email,
          email: email,
          reply_to: email,
          phone: phone || "Not provided",
          company: company || "Not provided",
          service: service || "General Inquiry",
          message: message,
        },
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
            service: service || "General Inquiry",
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
