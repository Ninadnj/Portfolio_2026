"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { useLanguage } from "@/context/LanguageContext"

// Custom typewriter hook
function useTypewriter(phrases: string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [delta, setDelta] = useState(typingSpeed)

    useEffect(() => {
        const handleType = () => {
            const currentPhrase = phrases[loopNum % phrases.length]

            if (isDeleting) {
                setText(currentPhrase.substring(0, text.length - 1))
                setDelta(deletingSpeed)
            } else {
                setText(currentPhrase.substring(0, text.length + 1))
                setDelta(typingSpeed)
            }

            // Check if phrase is complete
            if (!isDeleting && text === currentPhrase) {
                setDelta(pauseDuration)
                setIsDeleting(true)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setDelta(500) // Brief pause before starting next phrase
            }
        }

        const timer = setTimeout(handleType, delta)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, delta, phrases, typingSpeed, deletingSpeed, pauseDuration])

    return text
}

export function Hero() {
    const { t } = useLanguage()

    const typedText = useTypewriter(["architecting deterministic systems."], 80, 40, 1500)

    return (
        <section id="home" className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden">
            {/* Modern Gradient Mesh */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-mesh)' }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-[0.02] pointer-events-none" />

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
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-center lowercase text-foreground max-w-3xl">
                        {typedText}
                        <span className="animate-pulse">|</span>
                    </h1>
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
                    <Button size="lg" className="btn-premium btn-primary-cta w-full sm:w-auto" asChild>
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

