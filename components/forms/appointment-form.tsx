"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\(\)\.\+]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const serviceOptions = [
  { value: "chiropractic-adjustments", label: "Chiropractic Adjustments" },
  { value: "spinal-alignment", label: "Spinal Alignment" },
  { value: "sciatica-treatment", label: "Sciatica Treatment" },
  { value: "sports-injury-recovery", label: "Sports Injury Recovery" },
  { value: "neck-back-pain", label: "Neck & Back Pain Treatment" },
  { value: "auto-injury-care", label: "Auto Injury Care" },
  { value: "posture-correction", label: "Posture Correction" },
  { value: "wellness-care", label: "Wellness Care" },
  { value: "other", label: "Other / Not Sure" },
];

export function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    // In production, this would send to an API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Appointment request:", data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl bg-primary-50 border border-primary-100 p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
          <Calendar className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
          Request Received!
        </h3>
        <p className="text-primary-700">
          Thank you for scheduling an appointment. We&apos;ll contact you within 24 hours to
          confirm your visit.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Smith"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-destructive" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(859) 274-9894"
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-destructive" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">
            Service Needed <span className="text-destructive">*</span>
          </Label>
          <Select
            id="service"
            placeholder="Select a service"
            options={serviceOptions}
            aria-invalid={errors.service ? "true" : "false"}
            {...register("service")}
          />
          {errors.service && (
            <p className="text-xs text-destructive" role="alert">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredDate">
          Preferred Date <span className="text-destructive">*</span>
        </Label>
        <Input
          id="preferredDate"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          aria-invalid={errors.preferredDate ? "true" : "false"}
          {...register("preferredDate")}
        />
        {errors.preferredDate && (
          <p className="text-xs text-destructive" role="alert">
            {errors.preferredDate.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your condition or any questions you have..."
          rows={4}
          {...register("message")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Submitting...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Request Appointment
          </span>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-primary">
          Privacy Policy
        </a>
        . We&apos;ll never share your information.
      </p>
    </form>
  );
}
