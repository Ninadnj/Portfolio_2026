"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Workflows } from "@/components/sections/Workflows"
import { Projects } from "@/components/sections/Projects"
import { SideProjects } from "@/components/sections/SideProjects"
import { Blog } from "@/components/sections/Blog"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"
import { Terminal } from "@/components/Terminal"
import { SystemHealth } from "@/components/SystemHealth"
import { ArrowUp, Github, FileDown, TerminalSquare, Linkedin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

export default function Home() {
  const { t } = useLanguage()
  const [terminalOpen, setTerminalOpen] = useState(false)

  // Keyboard shortcut for terminal (Ctrl/Cmd + `)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "`") {
        e.preventDefault()
        setTerminalOpen(prev => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Workflows />
      <Projects />
      <SideProjects />
      <Blog />
      <Skills />
      <Contact />

      {/* System Health Monitor */}
      <SystemHealth />

      {/* Terminal Easter Egg */}
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        {/* Terminal Toggle */}
        <button
          onClick={() => setTerminalOpen(true)}
          className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-accent hover:bg-accent/10 transition-all shadow-lg group"
          title="Open Terminal (Ctrl + `)"
        >
          <TerminalSquare className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
        </button>

        {/* GitHub */}
        <Link
          href="https://github.com/Ninadnj"
          target="_blank"
          className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-accent hover:bg-accent/10 transition-all shadow-lg group"
          title="GitHub Profile"
        >
          <Github className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/nina-doinjashvili-8928815a/"
          target="_blank"
          className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-accent hover:bg-accent/10 transition-all shadow-lg group"
          title="LinkedIn Profile"
        >
          <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
        </Link>

        {/* Resume Download */}
        <a
          href={`${process.env.NODE_ENV === 'production' ? '/Portfolio_2026' : ''}/Nina_Resume_2026.pdf`}
          download="Nina_Resume_2026.pdf"
          className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-accent hover:bg-accent/10 transition-all shadow-lg group"
          title="Download Resume"
        >
          <FileDown className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
        </a>
      </div>

      <footer className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-lg tracking-tight text-foreground" style={{ fontWeight: 500 }}>Nina<span className="text-accent">.</span></Link>

              {/* GitHub & Resume in Footer */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/Ninadnj"
                  target="_blank"
                  className="text-[11px] lowercase tracking-[0.05em] text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5"
                >
                  <Github className="h-3 w-3" /> github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nina-doinjashvili-8928815a/"
                  target="_blank"
                  className="text-[11px] lowercase tracking-[0.05em] text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5"
                >
                  <Linkedin className="h-3 w-3" /> linkedin
                </Link>
                <a
                  href={`${process.env.NODE_ENV === 'production' ? '/Portfolio_2026' : ''}/Nina_Resume_2026.pdf`}
                  download="Nina_Resume_2026.pdf"
                  className="text-[11px] lowercase tracking-[0.05em] text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5"
                >
                  <FileDown className="h-3 w-3" /> resume
                </a>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <button
                onClick={() => setTerminalOpen(true)}
                className="text-[11px] lowercase tracking-[0.05em] text-muted-foreground/50 hover:text-muted-foreground transition-all flex items-center gap-1.5"
              >
                <TerminalSquare className="h-3 w-3" /> ctrl + `
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[11px] lowercase tracking-[0.05em] text-muted-foreground hover:text-foreground transition-all flex items-center gap-2 group"
              >
                {t.footer.top} <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
