import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const title = "Nina Doinjashvili | Applied AI Engineer";
const description =
  "Applied AI Engineer in Paris. Client systems for booking, loyalty, retail operations, and social publishing, plus open-source projects in agent memory, MCP, and evaluation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ninadnj.github.io"),
  title,
  description,
  alternates: { canonical: "/Portfolio_2026/" },
  authors: [{ name: "Nina Doinjashvili" }],
  creator: "Nina Doinjashvili",
  keywords: [
    "Applied AI Engineer",
    "LLM agents",
    "MCP",
    "n8n",
    "RAG",
    "Python",
    "API integrations",
    "AI evaluation",
    "Paris",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/Portfolio_2026/",
    title,
    description,
    siteName: "Nina Doinjashvili",
  },
  twitter: { card: "summary", title, description },
  icons: {
    icon: [{ url: "/Portfolio_2026/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
