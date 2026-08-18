import { Hero } from "@/components/Hero";
import { HomeServices } from "@/components/ServicesBento";
import { Testimonials } from "@/components/Testimonials";
import { AstronautBanner } from "@/components/AstronautBanner";

export default function IndexPage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <HomeServices />
      <Testimonials />
      <AstronautBanner />
    </main>
  );
}
