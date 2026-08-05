"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import {
  countries,
  programmeTypes,
  phoneCodes,
  nextSteps,
  contactContent,
} from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const applicationSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  email: z.string().email("Please enter a valid email address."),
  phoneCode: z.string().min(1, "Please select a country code."),
  phoneNumber: z.string().min(6, "Please enter a phone number."),
  destination: z.string().min(1, "Please select a destination."),
  programme: z.string().min(1, "Please select a programme type."),
  message: z.string().max(2000).optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, {
      message: "Please confirm you're happy for us to get in touch.",
    }),
  updates: z.boolean().optional(),
});

type FormData = z.infer<typeof applicationSchema>;

function ContactFormFields({
  submitLabel,
  mode,
}: {
  submitLabel: string;
  mode: "application" | "enquiry";
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneCode: "+234",
      phoneNumber: "",
      destination: "",
      programme: "",
      message: "",
      consent: false,
      updates: false,
    },
  });

  const phoneCode = watch("phoneCode");
  const destination = watch("destination");
  const programme = watch("programme");
  const consent = watch("consent");
  const updates = watch("updates");

  const handleFormSubmit = async (data: FormData) => {
    // TODO: wire to CRM /api — replace mock delay
    await new Promise((r) => setTimeout(r, 900));
    console.log(`[HorizonPath ${mode}]`, {
      ...data,
      phone: `${data.phoneCode} ${data.phoneNumber}`,
    });
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal/30 bg-teal/5 px-6 py-12 text-center lg:px-8"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          {contactContent.success.title}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          {contactContent.success.description}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => setSubmitted(false)}
        >
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${mode}-firstName`}>
            First name<span className="ml-0.5 text-teal">*</span>
          </Label>
          <Input
            id={`${mode}-firstName`}
            autoComplete="given-name"
            placeholder="e.g. Ifeoma"
            aria-invalid={!!errors.firstName}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-xs font-medium text-destructive">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${mode}-lastName`}>
            Last name<span className="ml-0.5 text-teal">*</span>
          </Label>
          <Input
            id={`${mode}-lastName`}
            autoComplete="family-name"
            placeholder="e.g. Okafor"
            aria-invalid={!!errors.lastName}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-xs font-medium text-destructive">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${mode}-email`}>
            Email<span className="ml-0.5 text-teal">*</span>
          </Label>
          <Input
            id={`${mode}-email`}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs font-medium text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${mode}-phoneNumber`}>
            Phone<span className="ml-0.5 text-teal">*</span>
          </Label>
          <div className="flex gap-2">
            <Select
              value={phoneCode}
              onValueChange={(v) =>
                setValue("phoneCode", v, { shouldValidate: true })
              }
            >
              <SelectTrigger
                className="w-[7.5rem] shrink-0"
                aria-label="Country code"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {phoneCodes.map((code) => (
                  <SelectItem key={code.value} value={code.value}>
                    {code.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              id={`${mode}-phoneNumber`}
              type="tel"
              autoComplete="tel-national"
              placeholder="801 234 5678"
              className="flex-1"
              aria-invalid={!!errors.phoneNumber}
              {...register("phoneNumber")}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-xs font-medium text-destructive">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>
            Destination country<span className="ml-0.5 text-teal">*</span>
          </Label>
          <Select
            value={destination}
            onValueChange={(v) =>
              setValue("destination", v, { shouldValidate: true })
            }
          >
            <SelectTrigger aria-invalid={!!errors.destination}>
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.destination && (
            <p className="text-xs font-medium text-destructive">
              {errors.destination.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label>
            Programme type<span className="ml-0.5 text-teal">*</span>
          </Label>
          <Select
            value={programme}
            onValueChange={(v) =>
              setValue("programme", v, { shouldValidate: true })
            }
          >
            <SelectTrigger aria-invalid={!!errors.programme}>
              <SelectValue placeholder="Select programme" />
            </SelectTrigger>
            <SelectContent>
              {programmeTypes.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.programme && (
            <p className="text-xs font-medium text-destructive">
              {errors.programme.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${mode}-message`}>
          Message{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id={`${mode}-message`}
          maxLength={2000}
          placeholder="Tell us a bit about your academic background and goals — anything that helps your advisor prepare."
          {...register("message")}
        />
      </div>

      <fieldset className="space-y-3 border-0 p-0">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id={`${mode}-consent`}
            checked={!!consent}
            onChange={(e) =>
              setValue("consent", e.target.checked, { shouldValidate: true })
            }
            className={cn(
              "mt-1 h-4 w-4 shrink-0 rounded border-input accent-navy",
              errors.consent && "outline outline-2 outline-offset-1 outline-destructive"
            )}
          />
          <label
            htmlFor={`${mode}-consent`}
            className="text-sm leading-relaxed text-ink"
          >
            I agree to be contacted about my application.
            <span className="ml-0.5 text-teal">*</span>
          </label>
        </div>
        {errors.consent && (
          <p className="pl-7 text-xs font-medium text-destructive">
            {errors.consent.message}
          </p>
        )}

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id={`${mode}-updates`}
            checked={!!updates}
            onChange={(e) => setValue("updates", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-input accent-navy"
          />
          <label
            htmlFor={`${mode}-updates`}
            className="text-sm leading-relaxed text-ink"
          >
            Send me occasional updates from HorizonPath Education.
          </label>
        </div>
      </fieldset>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        disabled={isSubmitting}
        data-cursor-accent
        className="w-full"
      >
        {isSubmitting ? "Sending..." : submitLabel}
      </Button>

      <div className="border-t border-border/60 pt-6">
        <h4 className="text-xs font-extrabold uppercase tracking-widest text-ink">
          What happens next?
        </h4>
        <ol className="mt-4 space-y-3">
          {nextSteps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm text-ink">
              <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-silver/60 text-[11px] font-bold text-navy">
                {i + 1}
              </span>
              <span className="leading-relaxed text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        By submitting, you agree to our privacy practices. We&apos;ll only use
        this to help with your application.
      </p>

      <div className="sr-only" aria-live="polite">
        {isSubmitting ? "Sending your application." : ""}
      </div>
    </form>
  );
}

export function ContactForms() {
  const { enquiry, application } = contactContent;

  return (
    <Tabs defaultValue="application" className="w-full">
      <TabsList className="w-full sm:w-auto">
        <TabsTrigger value="application" className="flex-1 sm:flex-none">
          Start Application
        </TabsTrigger>
        <TabsTrigger value="enquiry" className="flex-1 sm:flex-none">
          General Enquiry
        </TabsTrigger>
      </TabsList>

      <TabsContent value="application">
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm lg:p-8">
          <h3 className="font-display text-xl font-bold text-ink">
            {application.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {application.description}
          </p>
          <div className="mt-6">
            <ContactFormFields
              mode="application"
              submitLabel="Start Your Application"
            />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="enquiry">
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm lg:p-8">
          <h3 className="font-display text-xl font-bold text-ink">
            {enquiry.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {enquiry.description}
          </p>
          <div className="mt-6">
            <ContactFormFields mode="enquiry" submitLabel="Send Enquiry" />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
