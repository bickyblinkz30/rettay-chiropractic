import { generateMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/schema-org";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata = generateMetadata({
  title: "Accessibility Statement",
  description: `Accessibility statement for ${BUSINESS_INFO.legalName}. We are committed to ensuring digital accessibility for people with disabilities.`,
});

export default function AccessibilityPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div className="container-wide relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Accessibility Statement
          </h1>
          <p className="mt-3 text-primary-200">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
              Our Commitment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {BUSINESS_INFO.legalName} is committed to ensuring digital accessibility for people
              with disabilities. We are continually improving the user experience for everyone and
              applying the relevant accessibility standards to ensure we provide equal access to all
              users.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
              Accessibility Standards
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA,
              which outline best practices for making web content accessible to people with
              disabilities. Our website is designed with accessibility in mind, including proper
              semantic HTML, keyboard navigation, sufficient color contrast, ARIA labels, and
              screen reader support.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
              Features
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Skip navigation links for keyboard users",
                "Semantic heading structure for screen readers",
                "ARIA labels on interactive elements",
                "Sufficient color contrast ratios",
                "Keyboard-navigable menus and forms",
                "Focus indicators on all interactive elements",
                "Alternative text for images",
                "Resizable text without loss of functionality",
                "Reduced motion support for vestibular disorders",
                "Descriptive link text and form labels",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#10003;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
              Ongoing Efforts
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We recognize that accessibility is an ongoing effort. We regularly review our website
              to identify and fix accessibility issues. Our goal is to ensure that all visitors can
              access and use our website effectively.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you encounter any accessibility barriers on our website or have suggestions for
              improvement, please contact us:
            </p>
            <div className="mt-3 space-y-1 text-muted-foreground">
              <p>Phone: {BUSINESS_INFO.phoneFormatted}</p>
              <p>Email: {BUSINESS_INFO.email}</p>
            </div>
          </div>
        </div>
      </section>

      <SchemaOrg type="LocalBusiness" />
    </>
  );
}
