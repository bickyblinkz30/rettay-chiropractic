import { generateMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/schema-org";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { BUSINESS_INFO } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";

export const metadata = generateMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${BUSINESS_INFO.legalName}. Learn how we protect and handle your personal information.`,
});

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as your name, email address, phone number, and health information when you fill out forms on our website or contact us. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and browsing behavior.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services, including scheduling appointments, processing your requests, sending appointment reminders, responding to your inquiries, and complying with legal obligations under HIPAA and other applicable laws.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and practice, provided they agree to keep your information confidential. We may also disclose information when required by law or to protect our rights.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "HIPAA Compliance",
    content:
      "As a healthcare provider, we are committed to protecting the privacy and security of your protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA). We maintain strict policies and procedures to safeguard your medical information.",
  },
  {
    title: "Cookies",
    content:
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. You can control cookies through your browser settings. Disabling cookies may affect certain features of our website.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information held by us. You may also opt out of receiving communications from us at any time. To exercise these rights, please contact us using the information provided below.",
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
  },
  {
    title: "Contact Us",
    content: `If you have any questions or concerns about this privacy policy or our data practices, please contact us at ${BUSINESS_INFO.email} or call ${BUSINESS_INFO.phoneFormatted}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        {/* Hero background image */}
        <OptimizedImage
          src={SITE_IMAGES.heroPolicy}
          alt="Rettay Chiropractic clinic — professional and trustworthy patient care"
          fill
          priority
          className="object-cover object-center"
          containerClassName="absolute inset-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/93 via-primary-900/89 to-primary-800/80" />
        <div className="container-wide relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-primary-200">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            At {BUSINESS_INFO.legalName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
            we are committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website or
            use our services.
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
