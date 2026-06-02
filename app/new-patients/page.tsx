import { generateMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/schema-org";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, CheckCircle, FileText, Users, ClipboardList, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata = generateMetadata({
  title: "New Patients",
  description:
    "Welcome to Rettay Chiropractic. Everything you need to know for your first visit — what to expect, how to prepare, insurance information, and new patient forms.",
});

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Complete New Patient Forms",
    description:
      "Fill out our new patient paperwork online before your visit to save time. We'll send you the forms via email once your appointment is scheduled.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Comprehensive Consultation",
    description:
      "Dr. Mikkelson will discuss your health history, current symptoms, and goals. This is your opportunity to ask questions and express any concerns.",
  },
  {
    number: "03",
    icon: Users,
    title: "Thorough Examination",
    description:
      "A complete chiropractic examination including posture analysis, range of motion testing, orthopedic and neurological assessments, and digital X-rays if needed.",
  },
  {
    number: "04",
    icon: Calendar,
    title: "Personalized Treatment Plan",
    description:
      "Dr. Mikkelson will explain his findings and recommend a customized treatment plan tailored to your specific condition and health goals.",
  },
];

const faqs = [
  {
    q: "How long does the first visit take?",
    a: "Your initial visit typically takes 45–60 minutes. This includes completing paperwork, a thorough consultation, comprehensive examination, and a discussion of your treatment options.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable, loose-fitting clothing is recommended. Athletic wear or clothing that allows easy movement is ideal. We do have gowns available if needed.",
  },
  {
    q: "Do I need X-rays?",
    a: "Not necessarily. Digital X-rays are used only when clinically necessary to diagnose specific conditions. Dr. Mikkelson will determine if X-rays are needed based on your consultation and examination.",
  },
  {
    q: "Will my insurance cover the visit?",
    a: "We accept most major insurance plans. Contact our office with your insurance information, and we'll verify your coverage and explain any out-of-pocket costs before your visit.",
  },
  {
    q: "Do I need a referral?",
    a: "No referral is needed to see a chiropractor in Kentucky. You can schedule an appointment directly with our office.",
  },
];

export default function NewPatientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden" aria-labelledby="np-hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              New Patients
            </span>
            <h1 id="np-hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
              Welcome to Rettay Chiropractic
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-primary-200 max-w-2xl mx-auto">
              Your journey to better health starts here. Here&apos;s everything you need to know
              for your first visit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link href="/contact">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Your First Visit
                </Link>
              </Button>
              <Button size="lg" variant="outline-light" asChild>
                <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
                  Call: {BUSINESS_INFO.phoneFormatted}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding" aria-labelledby="expect-title">
        <div className="container-wide">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Your First Visit
            </span>
            <h2 id="expect-title" className="text-3xl sm:text-4xl font-display font-bold mt-3">
              What to Expect
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We&apos;ve designed our new patient process to be thorough, comfortable, and
              efficient. Here&apos;s what you can expect.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.title} delay={index * 0.1} as="div">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white font-display font-bold text-sm shrink-0">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-primary-200 mt-2" />
                      )}
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="section-padding bg-secondary/50" aria-labelledby="insurance-title">
        <div className="container-wide">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Insurance & Payment
            </span>
            <h2 id="insurance-title" className="text-3xl sm:text-4xl font-display font-bold mt-3">
              We Work With Your Insurance
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We accept most major insurance plans and will verify your benefits before your
              first visit, so there are no surprises.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border/60">
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Insurance Verification</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Contact our office with your insurance information, and we&apos;ll verify your
                  chiropractic benefits and explain any applicable copays or deductibles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border/60">
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Flexible Payment Options</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  We offer flexible payment plans for patients without insurance. CareCredit is
                  also accepted for your convenience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border/60">
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">Accepted Insurance Plans</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Aetna, Anthem, BlueCross BlueShield, Cigna, Humana, Medicare, UnitedHealthcare,
                  Tricare, Workers&apos; Comp, and most auto insurance PIP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" aria-labelledby="faq-title">
        <div className="container-wide">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Common Questions
            </span>
            <h2 id="faq-title" className="text-3xl sm:text-4xl font-display font-bold mt-3">
              New Patient FAQs
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={faq.q}
                as="div"
                delay={index * 0.05}
                className="bg-white rounded-xl border border-border/60 p-6"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-sm">
                    {faq.q}
                    <Clock className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-200 mb-8 max-w-xl mx-auto">
              Take the first step toward better health. Schedule your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link href="/contact">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline-light" asChild>
                <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
                  Call: {BUSINESS_INFO.phoneFormatted}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SchemaOrg type="LocalBusiness" />
    </>
  );
}
