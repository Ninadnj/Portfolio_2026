"use client"

import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Workflows } from "@/components/sections/Workflows"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Workflows />
      <Projects />
      <Contact />

      <footer className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div>
              <Link href="/" className="text-lg tracking-tight text-foreground" style={{ fontWeight: 500 }}>Nina<span className="text-accent">.</span></Link>
            </div>

            <div className="flex items-center gap-10">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[11px] lowercase tracking-[0.05em] text-muted-foreground hover:text-foreground transition-all flex items-center gap-2 group"
              >
                top <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3">
            <p className="text-[10px] lowercase tracking-[0.08em] text-muted-foreground/50">
              © 2025 all rights reserved.
            </p>
            <p className="text-[10px] lowercase tracking-[0.08em] text-muted-foreground/50">
              paris, france
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
