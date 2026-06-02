import { AnimatedSection } from "@/components/animated-section";
import { StatsSection } from "@/components/sections/stats";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  Users,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  Target,
  TrendingUp,
  ClipboardList,
  Heart,
} from "lucide-react";
import { BUSINESS_INFO, SITE_CONFIG } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/schema-org";

export const metadata = generateMetadata({
  title: "About Us",
  description: `Meet Dr. Lawrence Mikkelson at ${BUSINESS_INFO.legalName} in ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state}. With ${BUSINESS_INFO.yearsExperience}+ years of experience, our patient-first approach delivers personalized, evidence-based chiropractic care.`,
  canonical: `${SITE_CONFIG.url}/about`,
});

const approaches = [
  {
    icon: ClipboardList,
    title: "Comprehensive Assessment",
    description:
      "We begin with a thorough evaluation of your health history, physical condition, and lifestyle to understand the root cause of your discomfort.",
  },
  {
    icon: Target,
    title: "Personalized Treatment Plans",
    description:
      "Every patient receives a customized care plan designed specifically for their unique needs, goals, and recovery timeline.",
  },
  {
    icon: TrendingUp,
    title: "Evidence-Based Care",
    description:
      "We stay current with the latest chiropractic research and techniques to provide safe, effective treatments backed by scientific evidence.",
  },
  {
    icon: Heart,
    title: "Long-Term Wellness",
    description:
      "Beyond pain relief, we focus on preventive care and healthy habits that support lasting musculoskeletal health and overall well-being.",
  },
];

const reasons = [
  {
    title: "Experienced & Trusted Provider",
    description: `Over ${BUSINESS_INFO.yearsExperience} years serving the ${BUSINESS_INFO.address.city} community with compassionate, expert care.`,
  },
  {
    title: "Patient-Centered Philosophy",
    description:
      "Your health goals drive every decision. We listen, educate, and partner with you throughout your wellness journey.",
  },
  {
    title: "Modern Techniques & Technology",
    description:
      "We combine time-tested chiropractic methods with modern diagnostic tools and advanced treatment techniques.",
  },
  {
    title: "Most Insurance Accepted",
    description:
      "We work with a wide range of insurance providers to make quality care accessible and affordable for your family.",
  },
  {
    title: "Convenient Florence Location",
    description: `Our office at ${BUSINESS_INFO.address.street} makes it easy to get the care you need close to home.`,
  },
  {
    title: "Commitment to Excellence",
    description:
      "We maintain the highest standards of care and are dedicated to continuous improvement and patient satisfaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaOrg type="LocalBusiness" />

      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        aria-label="About hero"
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
              About{" "}
              <span className="text-accent">Rettay Chiropractic</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-200 max-w-xl leading-relaxed">
              Expert chiropractic care in {BUSINESS_INFO.address.city},{" "}
              {BUSINESS_INFO.address.state} with a commitment to your long-term
              health and wellness.
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

      {/* Meet Dr. Lawrence Mikkelson */}
      <section className="section-padding" aria-labelledby="meet-title">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left" className="relative" as="div">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden flex items-center justify-center">
                <Users className="h-32 w-32 text-primary-200" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-soft">
                <span className="text-3xl font-display font-bold">
                  {BUSINESS_INFO.yearsExperience}+
                </span>
                <p className="text-sm font-medium">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15} as="div">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Meet Your Chiropractor
              </span>
              <h2
                id="meet-title"
                className="text-3xl sm:text-4xl font-display font-bold mt-3"
              >
                Dr. Lawrence Mikkelson
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                With over {BUSINESS_INFO.yearsExperience} years of dedicated
                service in {BUSINESS_INFO.address.city}, KY, Dr. Lawrence
                Mikkelson has been helping patients achieve optimal health
                through personalized chiropractic care.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Dr. Mikkelson believes in a patient-first approach, taking the
                time to understand each individual&apos;s unique health needs
                and goals. His philosophy centers on treating the whole person,
                not just the symptoms, combining advanced chiropractic
                techniques with a genuine commitment to patient education and
                long-term wellness.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {BUSINESS_INFO.yearsExperience}+ Years
                    </p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {BUSINESS_INFO.patientsServed}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Patients Served
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {BUSINESS_INFO.rating} Stars
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {BUSINESS_INFO.reviewCount} Reviews
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section
        className="section-padding bg-secondary/50"
        aria-labelledby="approach-title"
      >
        <div className="container-wide">
          <AnimatedSection
            as="div"
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              How We Help
            </span>
            <h2
              id="approach-title"
              className="text-3xl sm:text-4xl font-display font-bold mt-3"
            >
              Our Approach to Care
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We follow a comprehensive, evidence-based approach to help you
              achieve lasting health and vitality.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {approaches.map((approach, index) => (
              <AnimatedSection
                key={approach.title}
                as="div"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-2xl p-8 border border-border/60 shadow-soft h-full hover:shadow-medium transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-6">
                    <approach.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" aria-labelledby="why-title">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left" as="div">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2
                id="why-title"
                className="text-3xl sm:text-4xl font-display font-bold mt-3"
              >
                Why Patients Trust{" "}
                <span className="text-primary">
                  {SITE_CONFIG.shortName}
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                We&apos;re committed to providing exceptional care that makes a
                real difference in our patients&apos; lives.
              </p>

              <ul className="mt-8 space-y-5">
                {reasons.map((reason) => (
                  <li key={reason.title} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">
                        {reason.title}
                      </strong>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {reason.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15} as="div">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-8 lg:p-10 border border-primary-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <Star className="h-8 w-8 fill-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-primary">
                      {BUSINESS_INFO.rating}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Average Rating ({BUSINESS_INFO.reviewCount}+ reviews)
                    </p>
                  </div>
                </div>

                <blockquote className="border-l-4 border-primary pl-5 italic text-muted-foreground leading-relaxed">
                  &ldquo;Dr. Mikkelson has completely transformed my quality of
                  life. His personalized approach and genuine care make every
                  visit a positive experience. I&apos;ve never felt better!&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-accent fill-accent"
                    />
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-primary-200/50">
                  <Button size="lg" variant="default" asChild>
                    <Link href="/testimonials">
                      Read More Patient Stories
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <StatsSection />
      <CTASection />
    </>
  );
}
