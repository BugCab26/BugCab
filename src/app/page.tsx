import { Hero } from "@/components/Hero";
import { HomeServices } from "@/components/ServicesBento";
import { Testimonials } from "@/components/Testimonials";
import { AstronautBanner } from "@/components/AstronautBanner";

export default function IndexPage() {
  return (
    <main className="relative overflow-x-hidden max-w-[95vw] sm:max-w-none mx-auto px-2 sm:px-0">
      <Hero />
      <HomeServices />
      <Testimonials />
      <AstronautBanner />
    </main>
  );
}
