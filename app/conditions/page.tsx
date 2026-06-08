import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SchemaOrg } from "@/components/schema-org";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import {
  Bone,
  Heart,
  Brain,
  Activity,
  Accessibility,
  Zap,
  Car,
  Headphones,
  ArrowRight,
  Phone,
  Calendar,
  XCircle,
} from "lucide-react";
import { BUSINESS_INFO, SITE_CONFIG } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { SITE_IMAGES } from "@/lib/site-images";

export const metadata = generateMetadata({
  title: "Conditions We Treat",
  description: `Expert chiropractic care for back pain, neck pain, headaches, sciatica, joint pain, sports injuries, whiplash, and poor posture in ${BUSINESS_INFO.address.city}, KY. Find relief at ${SITE_CONFIG.shortName}.`,
  canonical: `${SITE_CONFIG.url}/conditions`,
});

type Condition = {
  icon: typeof Bone;
  title: string;
  description: string;
  symptoms: string[];
  causes: string;
  slug: string;
};

const conditions: Condition[] = [
  {
    icon: Bone,
    title: "Back Pain",
    description:
      "Comprehensive relief for lower back, mid-back, and upper back pain through targeted chiropractic adjustments and personalized care plans.",
    symptoms: [
      "Persistent aching or stiffness along the spine",
      "Sharp pain that limits bending or twisting",
      "Radiating pain into the legs or buttocks",
      "Muscle spasms in the lower or upper back",
    ],
    causes:
      "Often caused by poor posture, muscle strain, herniated discs, sedentary lifestyle, or improper lifting techniques.",
    slug: "back-pain",
  },
  {
    icon: Heart,
    title: "Neck Pain",
    description:
      "Effective treatment for chronic and acute neck pain, restoring mobility and relieving tension in the cervical spine.",
    symptoms: [
      "Stiff neck with reduced range of motion",
      "Dull or sharp pain at the base of the skull",
      "Headaches originating from the neck",
      "Shoulder and upper back tension",
    ],
    causes:
      "Commonly triggered by poor posture, tech neck, sleeping in awkward positions, whiplash, or repetitive strain.",
    slug: "neck-pain",
  },
  {
    icon: Brain,
    title: "Headaches & Migraines",
    description:
      "Drug-free relief for tension headaches, cervicogenic headaches, and migraines by addressing the spinal misalignments that contribute to them.",
    symptoms: [
      "Throbbing or tension pain in the head",
      "Pain that starts at the neck and moves upward",
      "Sensitivity to light or sound during episodes",
      "Frequent tension or pressure around the forehead",
    ],
    causes:
      "Often linked to spinal misalignment in the neck, muscle tension, poor posture, or stress-related triggers.",
    slug: "headaches-migraines",
  },
  {
    icon: Activity,
    title: "Sciatica",
    description:
      "Targeted relief for sciatic nerve pain using gentle adjustments and decompression techniques to reduce nerve irritation.",
    symptoms: [
      "Sharp, shooting pain down the leg",
      "Numbness or tingling in the buttock or leg",
      "Burning sensation along the sciatic nerve path",
      "Weakness in the affected leg or foot",
    ],
    causes:
      "Typically caused by a herniated disc, spinal stenosis, piriformis syndrome, or degenerative disc disease compressing the sciatic nerve.",
    slug: "sciatica",
  },
  {
    icon: Accessibility,
    title: "Joint Pain",
    description:
      "Restore mobility and reduce inflammation in the shoulders, knees, hips, elbows, and other joints through precise chiropractic adjustments.",
    symptoms: [
      "Aching or throbbing in the joints",
      "Swelling and stiffness around affected joints",
      "Reduced range of motion or flexibility",
      "Pain during movement or weight-bearing activities",
    ],
    causes:
      "Joint pain can stem from arthritis, repetitive use injuries, misalignment, sports overuse, or age-related degeneration.",
    slug: "joint-pain",
  },
  {
    icon: Zap,
    title: "Sports Injuries",
    description:
      "Accelerate healing and return to peak performance with specialized sports chiropractic care and rehabilitation programs.",
    symptoms: [
      "Pain or swelling after physical activity",
      "Limited mobility in the injured area",
      "Muscle strains or ligament sprains",
      "Recurring injuries or slow recovery times",
    ],
    causes:
      "Sports injuries often result from overtraining, improper form, inadequate warm-up, impact trauma, or repetitive motion stress.",
    slug: "sports-injuries",
  },
  {
    icon: Car,
    title: "Whiplash",
    description:
      "Expert treatment for whiplash and auto accident injuries to facilitate full recovery and prevent chronic pain complications.",
    symptoms: [
      "Neck pain and stiffness after an accident",
      "Headaches at the base of the skull",
      "Dizziness or blurred vision",
      "Pain that worsens with neck movement",
    ],
    causes:
      "Whiplash is caused by sudden acceleration-deceleration forces during rear-end collisions or other auto accidents.",
    slug: "whiplash",
  },
  {
    icon: Headphones,
    title: "Poor Posture",
    description:
      "Correct postural imbalances and prevent future pain with our comprehensive posture correction programs and ergonomic guidance.",
    symptoms: [
      "Rounded shoulders and forward head posture",
      "Chronic back or neck pain",
      "Fatigue from prolonged sitting or standing",
      "Frequent tension headaches",
    ],
    causes:
      "Modern lifestyle factors including prolonged sitting, desk work, smartphone use, weak core muscles, and improper ergonomics.",
    slug: "poor-posture",
  },
];

const notTreated = [
  "Broken bones or fractures (requires emergency medical care)",
  "Advanced stages of cancer with bone metastasis",
  "Active infections of the spine or joints",
  "Severe osteoporosis with high fracture risk",
  "Cauda equina syndrome (requires immediate surgery)",
  "Open wounds or skin infections in the treatment area",
];

export default function ConditionsPage() {
  return (
    <>
      <SchemaOrg type="LocalBusiness" />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        aria-label="Conditions hero"
      >
        {/* Hero background image — chiropractic treatment in progress */}
        <OptimizedImage
          src={SITE_IMAGES.heroConditions}
          alt="Chiropractor providing hands-on treatment to a patient"
          fill
          priority
          className="object-cover object-center"
          containerClassName="absolute inset-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/92 via-primary-900/88 to-primary-800/78" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-400/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container-wide relative z-10 py-32 lg:py-40">
          <AnimatedSection as="div" className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Conditions{" "}
              <span className="text-accent">We Treat</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-200 max-w-xl leading-relaxed">
              Find Relief from Pain and Discomfort
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

      {/* Conditions Grid */}
      <section className="section-padding" aria-labelledby="conditions-title">
        <div className="container-wide">
          <AnimatedSection
            as="div"
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              What We Treat
            </span>
            <h2
              id="conditions-title"
              className="text-3xl sm:text-4xl font-display font-bold mt-3"
            >
              Comprehensive Care for Common Conditions
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              At {SITE_CONFIG.shortName}, we treat a wide range of
              musculoskeletal conditions using gentle, effective chiropractic
              techniques tailored to your needs.
            </p>
          </AnimatedSection>

          {/* Featured visual — replaced by clinic photo when available */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="relative h-56 md:h-auto overflow-hidden">
                <OptimizedImage
                  src={SITE_IMAGES.services.backPain}
                  alt="Patient receiving back pain treatment at Rettay Chiropractic"
                  fill
                  className="object-cover"
                  containerClassName="absolute inset-0"
                />
              </div>
              <div className="relative h-56 md:h-auto overflow-hidden">
                <OptimizedImage
                  src={SITE_IMAGES.services.neckPain}
                  alt="Neck pain treatment and chiropractic care"
                  fill
                  className="object-cover"
                  containerClassName="absolute inset-0"
                />
              </div>
              <div className="relative h-56 md:h-auto overflow-hidden">
                <OptimizedImage
                  src={SITE_IMAGES.services.sports}
                  alt="Sports injury recovery and rehabilitation"
                  fill
                  className="object-cover"
                  containerClassName="absolute inset-0"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {conditions.map((condition, index) => {
              const Icon = condition.icon;
              return (
                <AnimatedSection
                  key={condition.title}
                  as="div"
                  delay={index * 0.05}
                >
                  <Card className="h-full border border-border/60 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-start gap-5">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold mb-2">
                            {condition.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {condition.description}
                          </p>

                          <div className="mt-5">
                            <h4 className="text-sm font-semibold text-primary mb-2">
                              Common Symptoms
                            </h4>
                            <ul className="space-y-1.5">
                              {condition.symptoms.map((symptom) => (
                                <li
                                  key={symptom}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                                  {symptom}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <p className="mt-5 text-sm text-muted-foreground border-t border-border/60 pt-4">
                            <span className="font-semibold text-foreground">
                              Common Causes:{" "}
                            </span>
                            {condition.causes}
                          </p>

                          <div className="mt-5">
                            <Link
                              href="/contact"
                              className="inline-flex items-center text-sm font-medium text-primary gap-1 hover:gap-2 transition-all"
                            >
                              Get Treatment <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions We Don't Treat */}
      <section
        className="section-padding bg-secondary/50"
        aria-labelledby="not-treated-title"
      >
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection as="div" className="text-center mb-10">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Important Notice
              </span>
              <h2
                id="not-treated-title"
                className="text-3xl sm:text-4xl font-display font-bold mt-3"
              >
                Conditions We Don&apos;t Treat
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                While we treat many musculoskeletal conditions, some medical
                conditions require specialized medical care outside the scope of
                chiropractic practice.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} as="div">
              <Card className="border border-border/60 shadow-soft">
                <CardContent className="p-6 lg:p-8">
                  <ul className="space-y-4">
                    {notTreated.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground border-t border-border/60 pt-5">
                    If you&apos;re unsure whether we can help with your
                    specific condition,{" "}
                    <Link
                      href="/contact"
                      className="text-primary font-medium underline underline-offset-2 hover:text-primary-600 transition-colors"
                    >
                      contact us
                    </Link>{" "}
                    and we&apos;ll be happy to discuss your options or refer you
                    to the appropriate specialist.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative overflow-hidden"
        aria-labelledby="cta-title"
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

        <div className="container-wide relative z-10">
          <AnimatedSection
            as="div"
            className="text-center max-w-2xl mx-auto"
          >
            <h2
              id="cta-title"
              className="text-3xl sm:text-4xl font-display font-bold text-white"
            >
              Don&apos;t Let Pain Hold You Back
            </h2>
            <p className="mt-4 text-lg text-primary-200 leading-relaxed">
              Take the first step toward lasting relief. Schedule an appointment
              with {SITE_CONFIG.shortName} today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
    </>
  );
}
