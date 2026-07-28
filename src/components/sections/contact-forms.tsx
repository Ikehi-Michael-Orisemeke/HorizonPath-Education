"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { countries, programmeTypes } from "@/content/contact";
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
import { contactContent } from "@/content/contact";

const baseSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  country: z.string().min(1, "Please select a destination"),
  programme: z.string().min(1, "Please select a programme type"),
  message: z.string().min(10, "Please provide at least 10 characters"),
});

type FormData = z.infer<typeof baseSchema>;

function ContactFormFields({
  submitLabel,
}: {
  submitLabel: string;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      programme: "",
      message: "",
    },
  });

  const country = watch("country");
  const programme = watch("programme");

  const handleFormSubmit = async (data: FormData) => {
    // TODO: wire to MOE CRM API — get endpoint from SK
    await new Promise((r) => setTimeout(r, 800));
    console.log("[HorizonPath Form]", data);
    toast.success("Thank you! We'll be in touch within one business day.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" {...register("firstName")} placeholder="Jane" />
          {errors.firstName && (
            <p className="text-xs text-destructive">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" {...register("lastName")} placeholder="Smith" />
          {errors.lastName && (
            <p className="text-xs text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register("phone")} placeholder="+44 7700 900000" />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Destination country</Label>
          <Select value={country} onValueChange={(v) => setValue("country", v)}>
            <SelectTrigger>
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
          {errors.country && (
            <p className="text-xs text-destructive">{errors.country.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Programme type</Label>
          <Select value={programme} onValueChange={(v) => setValue("programme", v)}>
            <SelectTrigger>
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
            <p className="text-xs text-destructive">{errors.programme.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your academic background and goals..."
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        disabled={isSubmitting}
        data-cursor-accent
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending..." : submitLabel}
      </Button>
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
            <ContactFormFields submitLabel="Start Your Application" />
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
            <ContactFormFields submitLabel="Send Enquiry" />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
