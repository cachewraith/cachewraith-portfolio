import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/animations/animated-section";
import { ContactForm } from "@/components/features/contact-form";
import { SocialLinks } from "@/components/features/social-links";
import { Card } from "@/components/ui/card";
import { GradientMesh } from "@/components/animations/gradient-mesh";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss your project or opportunities. I'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden min-h-screen">
      <GradientMesh />
      
      <Container className="relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Get In Touch
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear
              from you. Fill out the form below or reach out through social media.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Contact Information
                </h2>
                <p className="text-text-secondary">
                  I&apos;m always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent-primary/10">
                    <Mail className="h-5 w-5 text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Email</p>
                    <a
                      href="mailto:hello@cachewraith.dev"
                      className="text-text-primary hover:text-accent-primary transition-colors"
                    >
                      hello@cachewraith.dev
                    </a>
                  </div>
                </Card>

                <Card className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent-secondary/10">
                    <MapPin className="h-5 w-5 text-accent-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Location</p>
                    <p className="text-text-primary">Remote / Worldwide</p>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Follow Me
                </h3>
                <SocialLinks showLabels />
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <Card className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-text-primary mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}
