"use client";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/animated-section";
import { ContactForm } from "@/components/features/contact-form";
import { SocialLinks } from "@/components/features/social-links";
import { FloatingOrbs } from "@/components/animations/floating-orbs";
import { Mail, MapPin, MessageSquare, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <FloatingOrbs count={4} />
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5" />
      
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-accent-primary/10">
                <MessageSquare className="h-5 w-5 text-accent-primary" />
              </div>
              <span className="text-accent-primary text-sm font-medium uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
              Let&apos;s Build Something
              <span className="block bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-text-secondary text-lg">
              Have a project in mind? I&apos;d love to hear about it. 
              Let&apos;s discuss how we can work together.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info - Left Side */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Info Cards */}
              <Card className="p-6 hover:shadow-lg hover:shadow-accent-primary/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                    <p className="text-sm text-text-secondary mb-2">Drop me a line anytime</p>
                    <a
                      href="mailto:hello@cachewraith.dev"
                      className="text-accent-primary hover:underline font-medium"
                    >
                      hello@cachewraith.dev
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg hover:shadow-accent-secondary/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-secondary/10 group-hover:bg-accent-secondary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-accent-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Location</h4>
                    <p className="text-sm text-text-secondary mb-2">Available worldwide</p>
                    <p className="text-text-primary font-medium">Remote / Global</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg hover:shadow-accent-tertiary/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-tertiary/10 group-hover:bg-accent-tertiary/20 transition-colors">
                    <Clock className="h-6 w-6 text-accent-tertiary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Response Time</h4>
                    <p className="text-sm text-text-secondary mb-2">Quick replies guaranteed</p>
                    <p className="text-text-primary font-medium">Within 24 hours</p>
                  </div>
                </div>
              </Card>

              {/* Social Section */}
              <div className="pt-4">
                <h4 className="text-sm font-medium text-text-secondary mb-4">
                  Or connect via social media
                </h4>
                <SocialLinks showLabels />
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form - Right Side */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <Card className="p-6 md:p-8 h-full relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-primary/10 to-transparent" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Send a Message
                  </h3>
                </div>
                <ContactForm />
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
