import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { ZodError } from "zod";

/**
 * Contact API Route
 * Implements OWASP security controls:
 * - A04:2021 - Input validation with Zod
 * - A04:2021 - Rate limiting via middleware
 * - A03:2021 - Output sanitization
 * - A09:2021 - Security logging
 */

// Rate limiting for contact form (stricter than general API)
const submitAttempts = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 60 * 60 * 1000; // 1 hour window
  
  const attempts = submitAttempts.get(ip) || [];
  const recentAttempts = attempts.filter((time) => time > windowStart);
  
  // Max 5 submissions per hour
  if (recentAttempts.length >= 5) {
    return false;
  }
  
  recentAttempts.push(now);
  submitAttempts.set(ip, recentAttempts);
  return true;
}

function sanitizeHtml(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/&/g, "&amp;");
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0] ?? "unknown";

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Honeypot check - if filled, silently accept but don't process (bot trap)
    if (validatedData.honeypot) {
      console.log(`Honeypot triggered from IP: ${ip}`);
      return NextResponse.json(
        { success: true, message: "Message sent successfully" },
        { status: 200 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeHtml(validatedData.name);
    const sanitizedMessage = sanitizeHtml(validatedData.message);

    // Log for security monitoring
    console.log(`Contact form submission from ${ip}:`, {
      email: validatedData.email,
      nameLength: sanitizedName.length,
      messageLength: sanitizedMessage.length,
      timestamp: new Date().toISOString(),
    });

    // In production, send email here
    // Example: await sendEmail({ ...validatedData, name: sanitizedName, message: sanitizedMessage });
    
    // For now, simulate success
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach((err: { path: (string | number)[]; message: string }) => {
        if (err.path[0]) {
          fieldErrors[String(err.path[0])] = err.message;
        }
      });
      
      return NextResponse.json(
        { error: "Validation failed", details: fieldErrors },
        { status: 400 }
      );
    }

    // Log unexpected errors for security monitoring
    console.error("Contact form error:", error instanceof Error ? error.message : "Unknown error");
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
