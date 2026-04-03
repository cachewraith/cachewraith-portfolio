"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { ZodError } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, silently reject (bot detection)
    if (formData.honeypot) {
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      // Validate form data (throws if invalid)
      contactFormSchema.parse(formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, replace with actual API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(validatedData),
      // });

      setStatus("success");
      setStatusMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        setStatus("idle");
      } else {
        setStatus("error");
        setStatusMessage("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {/* Honeypot field - hidden from users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="John Doe"
          autoComplete="name"
          disabled={status === "submitting"}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="john@example.com"
          autoComplete="email"
          disabled={status === "submitting"}
        />
      </div>

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell me about your project..."
        rows={5}
        disabled={status === "submitting"}
      />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
          >
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
            <p className="text-green-600 dark:text-green-400 text-sm">{statusMessage}</p>
          </motion.div>
        ) : status === "error" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
          >
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
            <p className="text-red-600 dark:text-red-400 text-sm">{statusMessage}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full md:w-auto"
        isLoading={status === "submitting"}
        leftIcon={<Send className="h-4 w-4" />}
      >
        Send Message
      </Button>
    </form>
  );
}
