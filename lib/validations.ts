import { z } from "zod";

/**
 * Contact form validation schema with security hardening
 * Implements input sanitization and rate limiting considerations
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s\-'.]+$/,
      "Name contains invalid characters"
    ),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .regex(
      /^[\w\s\-.,!?():;@'\"\n]+$/,
      "Message contains invalid characters"
    ),
  honeypot: z.string().max(0).optional(), // Anti-spam honeypot field
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Newsletter subscription validation schema
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email is too long"),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

/**
 * Project filter validation schema
 */
export const projectFilterSchema = z.object({
  category: z.enum(["all", "frontend", "backend", "fullstack", "mobile", "other"]),
  search: z.string().max(100).optional(),
});

export type ProjectFilterData = z.infer<typeof projectFilterSchema>;
