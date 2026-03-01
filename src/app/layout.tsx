import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";

import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nina Doinjashvili | Applied AI Engineer",
  description: "Machine Learning Systems & AI Automation. Portfolio showcasing production ML, deep learning, AI agents, and automation workflows.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "AI Automation", "n8n", "TensorFlow", "LangChain", "GPT-4"],
  authors: [{ name: "Nina Doinjashvili" }],
  creator: "Nina Doinjashvili",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ninadnj.github.io/Portfolio_2026",
    title: "Nina Doinjashvili | Applied AI Engineer",
    description: "Machine Learning Systems & AI Automation Portfolio",
    siteName: "Nina Doinjashvili Portfolio",
    images: [
      {
        url: "https://ninadnj.github.io/Portfolio_2026/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Nina Doinjashvili Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nina Doinjashvili | Applied AI Engineer",
    description: "Machine Learning Systems & AI Automation Portfolio",
    images: ["https://ninadnj.github.io/Portfolio_2026/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}>
        {/* Skip to main content for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
