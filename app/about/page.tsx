import { Metadata } from "next";
import { AboutPageClient } from "./page-client";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my experience, skills, and journey as a software engineer.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
