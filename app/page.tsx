import { HeroSection } from "@/components/sections/hero";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { ServicesGridSection } from "@/components/sections/services-grid";
import { ConditionsGridSection } from "@/components/sections/conditions-grid";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { InsuranceSection } from "@/components/sections/insurance";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <StatsSection />
      <ServicesGridSection />
      <ConditionsGridSection />
      <TestimonialsSection />
      <InsuranceSection />
      <CTASection />
    </>
  );
}
