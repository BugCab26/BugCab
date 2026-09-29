import { Counter } from "./Counter";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background pt-28 sm:pt-36 pb-12 sm:pb-16 flex flex-col justify-center"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 w-full flex flex-col justify-between flex-1">
        {/* Main headline — full width, left-aligned */}
        <div className="max-w-5xl">
          {/* Hidden from UI, visible to Google */}
          <h1 className="sr-only">
            BugCab — IT Solutions Company in Erode, Tamil Nadu | Web, Mobile App &amp; Digital
            Marketing Agency India
          </h1>

          {/* Visual H1 animation */}
          <div
            aria-hidden="true"
            className="font-display text-[9.2vw] xs:text-[9vw] sm:text-[8vw] lg:text-[110px] xl:text-[130px] font-black leading-[0.95] tracking-tighter uppercase"
          >
            {[
              { text: "WE BUILD.", isRed: false, delay: "0.1s" },
              { text: "WE LAUNCH.", isRed: true, delay: "0.33s" },
              { text: "WE SCALE.", isRed: false, delay: "0.56s" },
            ].map((item) => (
              <span
                key={item.text}
                className="block animate-kinetic-blur"
                style={{ animationDelay: item.delay }}
              >
                <span className={item.isRed ? "text-[#FF3B30]" : "text-foreground"}>
                  {item.text}
                </span>
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium">
            BugCab is an IT solutions company based in Erode, Tamil Nadu — building digital products
            and delivering IT services for businesses and professionals across India, including
            custom websites, mobile apps, UI/UX designs, digital marketing, and tech consulting.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 w-full">
          {[
            { value: 2, suffix: "+", label: "PROJECTS DELIVERED" },
            { value: 2, suffix: "+", label: "HAPPY CLIENTS" },
            { value: 98, suffix: "%", label: "CLIENT RETENTION" },
            { value: 4, suffix: "", label: "CORE SERVICES" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-none">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2.5 text-[11px] sm:text-sm font-black tracking-wide text-foreground uppercase leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
