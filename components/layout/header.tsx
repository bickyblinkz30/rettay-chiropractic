"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAVIGATION, BUSINESS_INFO } from "@/lib/constants";

function SpineIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Vertebrae bodies */}
      <rect x="6" y="1"  width="12" height="5" rx="2.5" />
      <rect x="6" y="9"  width="12" height="5" rx="2.5" />
      <rect x="6" y="17" width="12" height="5" rx="2.5" />
      <rect x="6" y="25" width="12" height="5" rx="2.5" />
      {/* Transverse processes — left */}
      <rect x="0" y="2.5"  width="6" height="2" rx="1" />
      <rect x="0" y="10.5" width="6" height="2" rx="1" />
      <rect x="0" y="18.5" width="6" height="2" rx="1" />
      <rect x="0" y="26.5" width="6" height="2" rx="1" />
      {/* Transverse processes — right */}
      <rect x="18" y="2.5"  width="6" height="2" rx="1" />
      <rect x="18" y="10.5" width="6" height="2" rx="1" />
      <rect x="18" y="18.5" width="6" height="2" rx="1" />
      <rect x="18" y="26.5" width="6" height="2" rx="1" />
    </svg>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-border/50"
          : "bg-transparent",
      )}
      role="banner"
    >
      <nav className="container-wide flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 shrink-0 transition-colors",
            isScrolled ? "text-foreground" : "text-white",
          )}
          aria-label="Rettay Chiropractic Office PSC — Home"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground shrink-0">
            <SpineIcon className="w-[18px] h-[22px]" />
          </div>
          <div className="hidden sm:flex flex-col justify-center leading-tight">
            <span className="text-[11px] lg:text-xs font-bold tracking-[0.12em] uppercase whitespace-nowrap">
              Rettay Chiropractic
            </span>
            <span
              className={cn(
                "text-[9px] lg:text-[10px] font-semibold tracking-[0.2em] uppercase",
                isScrolled ? "text-foreground/55" : "text-white/65",
              )}
            >
              Office PSC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? isScrolled
                    ? "text-primary bg-primary-50"
                    : "text-white bg-white/15"
                  : isScrolled
                    ? "text-foreground/80 hover:text-primary hover:bg-primary-50"
                    : "text-white/90 hover:text-white hover:bg-white/10",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneLink}`}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white",
            )}
          >
            <Phone className="h-4 w-4" />
            <span>{BUSINESS_INFO.phoneFormatted}</span>
          </a>
          <Button size="sm" asChild>
            <Link href="/contact">
              <Calendar className="h-4 w-4 mr-1.5" />
              Schedule
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10",
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-border shadow-medium overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="container-wide py-4 space-y-1">
              {/* Mobile brand name */}
              <div className="flex items-center gap-2.5 px-4 py-3 mb-2 border-b border-border/50">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shrink-0">
                  <SpineIcon className="w-4 h-5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-foreground">
                    Rettay Chiropractic
                  </span>
                  <span className="text-[8px] font-semibold tracking-[0.2em] uppercase text-foreground/50">
                    Office PSC
                  </span>
                </div>
              </div>

              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary bg-primary-50"
                      : "text-foreground/80 hover:text-primary hover:bg-primary-50",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneLink}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-primary/20 text-primary font-medium hover:bg-primary-50 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                <Button className="w-full" asChild>
                  <Link href="/contact">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
