import { generateMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/schema-org";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { HeroOverlay } from "@/components/sections/hero-overlay";
import { BUSINESS_INFO } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";

export const metadata = generateMetadata({
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${BUSINESS_INFO.legalName}. Please read these terms carefully before using our website or services.`,
});

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the website of Rettay Chiropractic Office PSC, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.",
  },
  {
    title: "Medical Disclaimer",
    content:
      "The information provided on this website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.",
  },
  {
    title: "Appointments and Cancellations",
    content:
      "Appointments are scheduled based on availability. We require at least 24 hours' notice for cancellations. Late cancellations or missed appointments may be subject to a fee. Please contact our office as soon as possible if you need to reschedule.",
  },
  {
    title: "Insurance and Payment",
    content:
      "It is your responsibility to verify your insurance coverage prior to your appointment. Payment is due at the time of service unless other arrangements have been made. We accept cash, credit cards, and most major insurance plans.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, images, and software, is the property of Rettay Chiropractic Office PSC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
  },
  {
    title: "Website Use",
    content:
      "You agree to use our website for lawful purposes only. You may not use our website in any way that could damage, disable, or impair the site or interfere with any other party's use of the site. You may not attempt to gain unauthorized access to any part of our website or systems.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Rettay Chiropractic Office PSC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services. Our total liability for any claim arising from your use of our website or services shall not exceed the amount paid by you for the specific service giving rise to the claim.",
  },
  {
    title: "External Links",
    content:
      "Our website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website after any changes constitutes acceptance of the new terms.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of the Commonwealth of Kentucky. Any disputes arising under these terms shall be resolved in the courts of Boone County, Kentucky.",
  },
  {
    title: "Contact Information",
    content: `If you have any questions about these Terms and Conditions, please contact us at ${BUSINESS_INFO.email} or call ${BUSINESS_INFO.phoneFormatted}.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        {/* Hero background image */}
        <OptimizedImage
          src={SITE_IMAGES.heroPolicy}
          alt="Rettay Chiropractic Office PSC — professional healthcare in Florence, KY"
          fill
          priority
          className="object-cover object-center"
          containerClassName="absolute inset-0"
          sizes="100vw"
        />
        <HeroOverlay />
        <div className="container-wide relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-primary-200">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            These Terms and Conditions govern your use of the website and services provided by{" "}
            {BUSINESS_INFO.legalName}. Please read these terms carefully.
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={section.title}>
                <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SchemaOrg type="LocalBusiness" />
    </>
  );
}
