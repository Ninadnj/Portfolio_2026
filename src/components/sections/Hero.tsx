"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileDown, Github, Linkedin } from "lucide-react"

import { useLanguage } from "@/context/LanguageContext"

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function Hero() {
    const { t } = useLanguage()

    return (
        <section
            id="home"
            className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden border-b border-border"
        >
            {/* Technical grid backdrop, faded toward the edges */}
            <div className="absolute inset-0 bg-grid bg-dots mask-fade-edges opacity-[0.6] pointer-events-none" />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "var(--gradient-mesh)" }}
            />

            <div className="container relative z-10 mx-auto px-6 max-w-5xl">
                {/* Status line */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="flex items-center gap-2.5 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/70 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="mono-label">{t.hero.status}</span>
                </motion.div>

                {/* Role headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.05, ease }}
                    className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight lowercase text-foreground leading-[1.04]"
                >
                    {t.hero.role}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.12, ease }}
                    className="mt-3 text-lg sm:text-2xl md:text-3xl font-normal tracking-tight lowercase text-muted-foreground"
                >
                    {t.hero.role_line}
                </motion.p>

                {/* Narrative */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease }}
                    className="mt-8 max-w-xl body-text text-base sm:text-lg"
                >
                    {t.hero.description}
                </motion.p>

                {/* Technical tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease }}
                    className="mt-9 flex flex-wrap gap-2"
                >
                    {t.hero.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.38, ease }}
                    className="mt-11 flex flex-wrap items-center gap-3"
                >
                    <Button size="lg" className="btn-premium btn-primary-cta lowercase group" asChild>
                        <Link href="#demos">
                            {t.hero.view_projects}
                            <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="btn-premium lowercase border-border hover:bg-secondary/50"
                        asChild
                    >
                        <Link href="#contact">{t.hero.contact}</Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="btn-premium lowercase border-border hover:bg-secondary/50"
                        asChild
                    >
                        <a href="/Portfolio_2026/Nina_Resume_2026.pdf" download="Nina_Resume_2026.pdf">
                            <FileDown className="mr-2 h-3.5 w-3.5" />
                            {t.hero.resume}
                        </a>
                    </Button>

                    <div className="h-6 w-px bg-border mx-1 hidden sm:block" />

                    <Button
                        size="lg"
                        variant="ghost"
                        className="btn-premium h-11 w-11 px-0 text-muted-foreground hover:text-foreground hover:bg-secondary/50 hidden sm:inline-flex"
                        asChild
                    >
                        <Link href="https://github.com/Ninadnj" target="_blank" aria-label="GitHub">
                            <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="ghost"
                        className="btn-premium h-11 w-11 px-0 text-muted-foreground hover:text-foreground hover:bg-secondary/50 hidden sm:inline-flex"
                        asChild
                    >
                        <Link
                            href="https://www.linkedin.com/in/nina-doinjashvili-8928815a/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
