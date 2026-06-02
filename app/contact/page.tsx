import { generateMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/schema-org";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { BUSINESS_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";

export const metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Contact Rettay Chiropractic in Florence, KY. Call (859) 274-9894 or visit us at 7560 B Burlington Pike to schedule your appointment.",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden" aria-labelledby="contact-hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Contact Us
            </span>
            <h1 id="contact-hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-primary-200 max-w-2xl mx-auto">
              We&apos;re here to help you start your journey to better health. Call, email, or
              visit our office in Florence, KY.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding" aria-labelledby="contact-info-title">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection as="div">
                <h2 id="contact-info-title" className="text-2xl font-display font-bold">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mt-2">
                  Reach out to us using any of the methods below.
                </p>
              </AnimatedSection>

              <div className="space-y-5">
                <AnimatedSection as="div" delay={0.1}>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneLink}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border/60 shadow-soft hover:shadow-medium transition-all group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {BUSINESS_INFO.phoneFormatted}
                      </p>
                    </div>
                  </a>
                </AnimatedSection>

                <AnimatedSection as="div" delay={0.15}>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border/60 shadow-soft hover:shadow-medium transition-all group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-semibold group-hover:text-primary transition-colors break-all">
                        {BUSINESS_INFO.email}
                      </p>
                    </div>
                  </a>
                </AnimatedSection>

                <AnimatedSection as="div" delay={0.2}>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border/60 shadow-soft">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Our Office</p>
                      <p className="font-semibold">
                        {BUSINESS_INFO.address.street}
                        <br />
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{" "}
                        {BUSINESS_INFO.address.zip}
                      </p>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                          `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.zip}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-2 hover:underline"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection as="div" delay={0.25}>
                  <div className="p-4 bg-white rounded-xl border border-border/60 shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Office Hours</p>
                        <p className="font-semibold">Mon–Thu: 8:00 AM – 6:00 PM</p>
                      </div>
                    </div>
                    <div className="space-y-1.5 text-sm ml-16">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday – Thursday</span>
                        <span className="font-medium">{BUSINESS_INFO.hours.monday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Friday</span>
                        <span className="font-medium">{BUSINESS_INFO.hours.friday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">{BUSINESS_INFO.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">{BUSINESS_INFO.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Quick CTA buttons */}
              <AnimatedSection as="div" delay={0.3} className="flex flex-col gap-3">
                <Button size="lg" variant="accent" asChild>
                  <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Click to Call
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`mailto:${BUSINESS_INFO.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Click to Email
                  </a>
                </Button>
              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right" as="div">
                <div className="bg-white rounded-2xl border border-border/60 p-6 sm:p-8 shadow-soft">
                  <h2 className="text-2xl font-display font-bold mb-2">
                    Request an Appointment
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we&apos;ll contact you within 24 hours to confirm
                    your appointment.
                  </p>
                  <AppointmentForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary/50" aria-label="Office location map">
        <div className="container-wide">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
              Visit Our Office
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Conveniently located in Florence, KY, near the intersection of Burlington Pike and
              Mall Road.
            </p>
          </AnimatedSection>

          <div className="rounded-2xl overflow-hidden shadow-soft border border-border/60">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.zip}`
              )}&output=embed&z=15`}
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${BUSINESS_INFO.displayName} office location at ${BUSINESS_INFO.address.street}`}
            />
          </div>
        </div>
      </section>

      <SchemaOrg type="LocalBusiness" />
    </>
  );
}
