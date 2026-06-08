import { generateMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/schema-org";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";

export const metadata = generateMetadata({
  title: "FAQs",
  description: "Frequently asked questions about chiropractic care at Rettay Chiropractic in Florence, KY. Learn about treatments, insurance, and what to expect.",
});

const faqCategories = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What is chiropractic care?",
        a: "Chiropractic care is a healthcare discipline focused on the diagnosis and treatment of musculoskeletal disorders, particularly those involving the spine. It emphasizes manual therapy, including spinal manipulation and joint adjustments, to restore function, reduce pain, and support the body's natural ability to heal itself.",
      },
      {
        q: "Is chiropractic care safe?",
        a: "Yes, chiropractic care is widely recognized as one of the safest drug-free, non-invasive therapies available for the treatment of neuromusculoskeletal conditions. Chiropractic adjustments are evidence-based and have an excellent safety record. Dr. Mikkelson tailors each treatment to the individual patient's needs and health status.",
      },
      {
        q: "Do chiropractic adjustments hurt?",
        a: "Most patients experience immediate relief after an adjustment. Some may feel mild soreness, similar to what you might feel after exercise, which typically resolves within 24 hours. Dr. Mikkelson uses gentle, precise techniques to ensure your comfort throughout the treatment.",
      },
      {
        q: "How many sessions will I need?",
        a: "The number of visits varies depending on your condition, its severity, and your health goals. Some patients experience significant relief in just a few visits, while chronic conditions may require ongoing care. Dr. Mikkelson will discuss a personalized treatment plan during your initial consultation.",
      },
    ],
  },
  {
    category: "Treatment & Conditions",
    questions: [
      {
        q: "What conditions do you treat?",
        a: "We treat a wide range of conditions including back pain, neck pain, headaches and migraines, sciatica, joint pain, sports injuries, whiplash from auto accidents, poor posture, and more. If you're unsure whether we can help with your specific condition, give us a call.",
      },
      {
        q: "What techniques do you use?",
        a: "Dr. Mikkelson uses a variety of evidence-based chiropractic techniques including diversified spinal adjustments, activator method, flexion-distraction, soft tissue therapy, and rehabilitative exercises. The technique used is tailored to your specific condition and comfort level.",
      },
      {
        q: "Do you treat pregnant women?",
        a: "Yes, we provide safe and gentle chiropractic care for pregnant women. Many women find chiropractic care helpful for managing pregnancy-related back pain, pelvic discomfort, and preparing the body for labor.",
      },
      {
        q: "Can chiropractic help with children?",
        a: "Yes, chiropractic care can be beneficial for children of all ages. Pediatric chiropractic is gentle and specifically adapted for growing bodies. Common childhood conditions we address include postural issues, sports injuries, and general wellness.",
      },
    ],
  },
  {
    category: "Insurance & Payment",
    questions: [
      {
        q: "Do you accept insurance?",
        a: "We accept most major insurance plans including Aetna, Anthem, BlueCross BlueShield, Cigna, Humana, Medicare, UnitedHealthcare, Tricare, and more. We also accept Workers' Comp and auto insurance PIP for accident-related injuries.",
      },
      {
        q: "How much does a visit cost without insurance?",
        a: "We offer competitive self-pay rates and flexible payment options. Please contact our office to discuss our fee schedule and payment plans. We believe cost should never prevent you from getting the care you need.",
      },
      {
        q: "Do you accept Medicare?",
        a: "Yes, we accept Medicare. Our team can help you understand your Medicare benefits for chiropractic care and any associated out-of-pocket costs.",
      },
      {
        q: "How do I verify my insurance coverage?",
        a: "Simply call our office with your insurance information, and we'll verify your benefits for you. We'll explain what's covered and any estimated out-of-pocket costs before your first visit.",
      },
    ],
  },
  {
    category: "Your First Visit",
    questions: [
      {
        q: "What should I bring to my first appointment?",
        a: "Please bring your photo ID, insurance card, a list of current medications, and any relevant medical records or imaging reports (X-rays, MRIs) if available. If you've completed our new patient forms online, that's all you need!",
      },
      {
        q: "How long is the first visit?",
        a: "Your initial visit typically takes 45 to 60 minutes. This includes completing paperwork (if not done online), a comprehensive consultation, a thorough examination, and a discussion of our findings and recommended treatment plan.",
      },
      {
        q: "What should I wear?",
        a: "Comfortable, loose-fitting clothing is recommended. Athletic wear or clothing that allows easy movement is ideal. We do have gowns available if needed for certain examinations.",
      },
      {
        q: "Do I need a referral?",
        a: "No referral is needed to see a chiropractor in Kentucky. You can schedule an appointment directly with our office.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden" aria-labelledby="faqs-hero-title">
        {/* Hero background image — clinic treatment room */}
        <OptimizedImage
          src={SITE_IMAGES.heroFaqs}
          alt="Chiropractic clinic treatment room with professional equipment and anatomy posters"
          fill
          priority
          className="object-cover object-center"
          containerClassName="absolute inset-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/93 via-primary-900/89 to-primary-800/80" />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              FAQs
            </span>
            <h1 id="faqs-hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-primary-200 max-w-2xl mx-auto">
              Everything you need to know about chiropractic care at Rettay Chiropractic.
              Can&apos;t find what you&apos;re looking for? Give us a call.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding" aria-labelledby="faq-content-title">
        <div className="container-wide max-w-4xl mx-auto">
          {faqCategories.map((category, catIndex) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <AnimatedSection as="div" delay={catIndex * 0.05}>
                <h2
                  id={`cat-${catIndex}`}
                  className="text-2xl font-display font-bold mb-6 text-primary-900"
                >
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, qIndex) => (
                    <AccordionItem
                      key={faq.q}
                      value={`${catIndex}-${qIndex}`}
                      className="bg-white rounded-xl border border-border/60 px-6"
                    >
                      <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-primary-200 mb-8 max-w-xl mx-auto">
              We&apos;re here to help. Contact us directly and we&apos;ll be happy to answer any
              questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline-light" asChild>
                <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {BUSINESS_INFO.phoneFormatted}
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
