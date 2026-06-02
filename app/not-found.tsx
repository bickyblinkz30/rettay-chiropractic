import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
      <div className="container-wide relative z-10 text-center">
        <div className="text-8xl sm:text-9xl font-display font-bold text-white/10">404</div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white -mt-6">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-primary-200 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="accent" asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Return Home
            </Link>
          </Button>
          <Button size="lg" variant="outline-light" asChild>
            <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
