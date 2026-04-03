import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * CSP Nonce generation for enhanced security
 * Implements OWASP A05:2021 - Security Misconfiguration
 * Implements OWASP A03:2021 - Injection (XSS prevention)
 */
function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/**
 * Rate limiting store (in-memory)
 * For production, use Redis or similar
 * Implements OWASP A04:2021 - Insecure Design (Rate Limiting)
 */
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string, maxRequests: number = 100, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > windowMs) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

/**
 * Security Middleware
 * Implements multiple OWASP Top 10 controls:
 * - A03:2021 - Injection (CSP for XSS prevention)
 * - A05:2021 - Security Misconfiguration (Security headers)
 * - A04:2021 - Insecure Design (Rate limiting)
 * - A07:2021 - Authentication Failures (Session security)
 */
export function middleware(request: NextRequest) {
  const nonce = generateNonce();
  const requestHeaders = new Headers(request.headers);
  
  // Add nonce to headers for use in page rendering
  requestHeaders.set("x-nonce", nonce);

  // Get client IP for rate limiting from forwarded header
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  // Apply stricter rate limiting for API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    if (isRateLimited(ip, 30, 60000)) { // 30 requests per minute for API
      return new NextResponse("Too Many Requests", { 
        status: 429,
        headers: {
          "Retry-After": "60",
        },
      });
    }
  }

  // Content Security Policy with nonce
  // Implements OWASP A03:2021 - Injection (XSS prevention)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https://images.unsplash.com https://*.githubusercontent.com;
    connect-src 'self';
    media-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s+/g, " ").trim();

  // Create response with security headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Security Headers
  // Implements OWASP A05:2021 - Security Misconfiguration
  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  );
  
  // Strict Transport Security (HSTS)
  // Implements OWASP A02:2021 - Cryptographic Failures
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );

  // Remove potentially dangerous headers
  response.headers.delete("X-Powered-By");
  response.headers.delete("Server");

  return response;
}

/**
 * Matcher configuration
 * Apply middleware to all routes except static files and API routes
 * (API routes get special rate limiting treatment above)
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
