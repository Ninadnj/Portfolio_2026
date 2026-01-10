"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
    return (
        <section id="home" className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden">
            {/* Subtle Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-label text-center block"
                >
                    portfolio 2025
                </motion.span>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="body-text max-w-xl mx-auto text-center mb-10"
                >
                    building autonomous agents and intelligent workflows that eliminate manual overhead. systems designed for clarity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <Button size="lg" className="btn-premium w-full sm:w-auto" asChild>
                        <Link href="#contact">start a project</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="btn-premium w-full sm:w-auto border-border hover:bg-secondary/50" asChild>
                        <Link href="#demos">view case studies</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
