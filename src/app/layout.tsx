import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-sketch",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Nina Doinjashvili | Portfolio",
  description: "Portfolio featuring production RAG agents, LLM applications, workflow automation, API integrations, and full-stack systems.",
  keywords: [
    "AI Automation Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "RAG Engineer",
    "Machine Learning Engineer",
    "AI Agents",
    "Agentic AI",
    "RAG",
    "Retrieval Augmented Generation",
    "LLM Applications",
    "Tool Calling",
    "Function Calling",
    "Structured Outputs",
    "Vector Search",
    "Embeddings",
    "Evaluation",
    "MCP",
    "Claude Agent SDK",
    "AI Automation",
    "n8n",
    "LangChain",
    "Python",
    "FastAPI",
    "Docker",
    "Google Cloud Run",
    "Hugging Face",
    "OpenAI API",
    "Anthropic Claude",
    "Google Gemini",
    "REST API Integration",
    "Workflow Automation"
  ],
  authors: [{ name: "Nina Doinjashvili" }],
  creator: "Nina Doinjashvili",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ninadnj.github.io/Portfolio_2026",
    title: "Nina Doinjashvili | Portfolio",
    description: "Production RAG agents, LLM applications, n8n workflow automation, API integrations, and ML systems.",
    siteName: "Nina Doinjashvili Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Nina Doinjashvili | Portfolio",
    description: "Production RAG agents, LLM applications, n8n workflow automation, API integrations, and ML systems.",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased font-sans`}>
        {/* Skip to main content for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
