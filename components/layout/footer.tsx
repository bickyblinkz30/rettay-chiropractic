import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, FOOTER_LINKS } from "@/lib/constants";

function SpineIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="1"  width="12" height="5" rx="2.5" />
      <rect x="6" y="9"  width="12" height="5" rx="2.5" />
      <rect x="6" y="17" width="12" height="5" rx="2.5" />
      <rect x="6" y="25" width="12" height="5" rx="2.5" />
      <rect x="0" y="2.5"  width="6" height="2" rx="1" />
      <rect x="0" y="10.5" width="6" height="2" rx="1" />
      <rect x="0" y="18.5" width="6" height="2" rx="1" />
      <rect x="0" y="26.5" width="6" height="2" rx="1" />
      <rect x="18" y="2.5"  width="6" height="2" rx="1" />
      <rect x="18" y="10.5" width="6" height="2" rx="1" />
      <rect x="18" y="18.5" width="6" height="2" rx="1" />
      <rect x="18" y="26.5" width="6" height="2" rx="1" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="Rettay Chiropractic Office PSC — Home">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 text-white shrink-0">
                <SpineIcon className="w-5 h-[26px]" />
              </div>
              <div className="flex flex-col justify-center leading-tight">
                <span className="text-sm font-bold tracking-[0.1em] uppercase text-white">
                  Rettay Chiropractic
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-300">
                  Office PSC
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-200 leading-relaxed">
              Helping you move better, feel better, and live pain-free. Professional chiropractic
              care tailored to your needs in Florence, KY.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneLink}`}
                className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </span>
                {BUSINESS_INFO.phoneFormatted}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </span>
                {BUSINESS_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-primary-200">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  {BUSINESS_INFO.address.street}
                  <br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{" "}
                  {BUSINESS_INFO.address.zip}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-300 mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-200 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-300 mb-5">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-200 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-300 mb-5 mt-8">
              Legal
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-200 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & CTA */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-300 mb-5">
              Office Hours
            </h3>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between text-primary-200">
                <span>Mon – Thu</span>
                <span>{BUSINESS_INFO.hours.monday}</span>
              </div>
              <div className="flex justify-between text-primary-200">
                <span>Friday</span>
                <span>{BUSINESS_INFO.hours.friday}</span>
              </div>
              <div className="flex justify-between text-primary-200">
                <span>Saturday</span>
                <span>{BUSINESS_INFO.hours.saturday}</span>
              </div>
              <div className="flex justify-between text-primary-200">
                <span>Sunday</span>
                <span>{BUSINESS_INFO.hours.sunday}</span>
              </div>
            </div>
            <Button variant="accent" className="w-full" asChild>
              <Link href="/contact">
                Schedule Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800/50">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-300">
          <p>&copy; {currentYear} {BUSINESS_INFO.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-primary-700">|</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
