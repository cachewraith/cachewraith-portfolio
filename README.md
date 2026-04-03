# CacheWraith Portfolio

A stunning, modern Software Engineer portfolio built with Next.js 14, featuring ultra-modern design, smooth animations, and comprehensive security implementations.

## Features

### Design & UX
- Ultra-modern aesthetic with gradient accents
- Smooth micro-interactions and transitions
- Glassmorphism and subtle blur effects
- Animated backgrounds (floating particles, gradient meshes)
- Smooth scroll animations with parallax effects
- Theme toggle: Light / Dark / System
- Fully responsive (Mobile, Tablet, Desktop)

### Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Theme Management**: next-themes
- **Icons**: Lucide React
- **Validation**: Zod

### Security (OWASP Top 10)
- Content Security Policy (CSP) with nonce
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Input sanitization and Zod validation
- Rate limiting on API routes
- XSS prevention
- HSTS (HTTPS enforcement)

### Performance
- Next.js Image optimization (WebP, AVIF)
- Lazy loading components
- Intersection Observer for animations
- Optimized fonts (Inter, JetBrains Mono)
- 90+ Lighthouse score target

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                   # Next.js App Router
├── components/            # React components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities & constants
├── types/                 # TypeScript types
├── middleware.ts          # Security middleware
└── next.config.ts         # Next.js config
```

## Customization

Update your personal information in `lib/constants.ts`.

## License

MIT License

