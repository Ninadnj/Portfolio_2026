"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { useLanguage } from "@/context/LanguageContext"

export function Hero() {
    const { t } = useLanguage()

    const identities = [
        "Building Autonomous Agentic Flows.",
        "Architecting Deterministically Controlled AI.",
        "Defining the 3-Layer Systems Standard."
    ]
    const [identityIndex, setIdentityIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIdentityIndex((prev) => (prev + 1) % identities.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section id="home" className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden">
            {/* Subtle Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="section-label text-center block"
                >
                    {t.hero.portfolio_year}
                </motion.span>

                <div className="h-20 sm:h-24 mb-6 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={identityIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-center lowercase text-foreground max-w-3xl"
                        >
                            {identities[identityIndex]}
                        </motion.h1>
                    </AnimatePresence>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="body-text max-w-xl mx-auto text-center mb-10"
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <Button size="lg" className="btn-premium w-full sm:w-auto" asChild>
                        <Link href="#contact">{t.hero.start_project}</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="btn-premium w-full sm:w-auto border-border hover:bg-secondary/50" asChild>
                        <Link href="#demos">{t.hero.view_case_studies}</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
