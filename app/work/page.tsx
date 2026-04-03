import { Metadata } from "next";
import { WorkPageClient } from "./page-client";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore my portfolio of projects spanning web development, security tools, and cloud infrastructure.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
