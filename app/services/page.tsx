import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Bone,
  ArrowRight,
  ArrowUpDown,
  Activity,
  Heart,
  Zap,
  Car,
  Accessibility,
  Shield,
  Phone,
  Calendar,
} from "lucide-react";
import { BUSINESS_INFO, SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Our Chiropractic Services",
  description: `Comprehensive chiropractic services in ${BUSINESS_INFO.address.city}, KY. From chiropractic adjustments and spinal alignment to sciatica treatment and sports injury recovery — discover expert care tailored to you.`,
  canonical: `${SITE_CONFIG.url}/services`,
});

const iconMap: Record<string, typeof Bone> = {
  "chiropractic-adjustments": Bone,
  "spinal-alignment": ArrowUpDown,
  "sciatica-treatment": Activity,
  "sports-injury-recovery": Zap,
  "neck-back-pain-treatment": Heart,
  "auto-injury-care": Car,
  "posture-correction": Accessibility,
  "wellness-care": Shield,
};

const descriptions: Record<string, string> = {
  "chiropractic-adjustments":
    "Precise, gentle spinal adjustments to restore alignment and optimize nervous system function.",
  "spinal-alignment":
    "Comprehensive spinal correction techniques to improve posture and alleviate pain.",
  "sciatica-treatment":
    "Targeted relief for sciatic nerve pain with proven, non-invasive treatment methods.",
  "sports-injury-recovery":
    "Accelerate healing and return to peak performance with specialized sports rehabilitation.",
  "neck-back-pain-treatment":
    "Effective relief for chronic and acute neck and back pain through personalized care plans.",
  "auto-injury-care":
    "Expert treatment for whiplash and auto accident injuries to facilitate full recovery.",
  "posture-correction":
    "Improve your posture and prevent future pain with our posture correction programs.",
  "wellness-care":
    "Maintain optimal health and prevent injuries with ongoing chiropractic wellness care.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        aria-label="Services hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container-wide relative z-10 py-32 lg:py-40">
          <AnimatedSection as="div" className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Our{" "}
              <span className="text-accent">Chiropractic Services</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-200 max-w-xl leading-relaxed">
              From pain relief to performance optimization, discover how our
              comprehensive range of services can help you live pain-free and
              move better.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Appointment
                </Link>
              </Button>
              <Button size="xl" variant="outline-light" asChild>
                <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: {BUSINESS_INFO.phoneFormatted}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" aria-labelledby="services-title">
        <div className="container-wide">
          <AnimatedSection
            as="div"
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              What We Offer
            </span>
            <h2
              id="services-title"
              className="text-3xl sm:text-4xl font-display font-bold mt-3"
            >
              Comprehensive Care for Every Need
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Whether you&apos;re recovering from an injury or optimizing your
              wellness, we have a service designed for you.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {FOOTER_LINKS.services.map((service, index) => {
              const slug = service.href.replace("/services/", "");
              const Icon = iconMap[slug] || Bone;
              const description = descriptions[slug] || "";
              return (
                <AnimatedSection
                  key={service.label}
                  as="div"
                  delay={index * 0.06}
                >
                  <Link
                    href={service.href}
                    className="group block h-full bg-white rounded-2xl border border-border/60 p-6 lg:p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
