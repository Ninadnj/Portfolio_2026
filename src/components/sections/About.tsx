"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
    return (
        <section id="about" className="py-24 sm:py-32 border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">01 // Background</span>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex justify-center lg:justify-start"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-[400px] rounded-3xl overflow-hidden grayscale border border-border bg-muted">
                            <Image
                                src="/portrait.jpg"
                                alt="Nina Professional Portrait"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-12"
                    >
                        <div className="space-y-10 max-w-xl">
                            {/* Single accent headline — Playfair Display italic */}
                            <h3 className="accent-headline text-3xl sm:text-4xl text-foreground">
                                i design systems that turn complexity into something quiet.
                            </h3>

                            {/* Supporting text — Inter Regular */}
                            <div className="space-y-1 text-lg text-foreground/70" style={{ lineHeight: 1.6 }}>
                                <p>ai agents.</p>
                                <p>autonomous workflows.</p>
                                <p>clear architecture.</p>
                            </div>

                            <p className="body-text text-base">
                                from data and models to automation, everything is built to reduce friction — not create it.
                            </p>

                            {/* Signature principles */}
                            <div className="pt-8 border-t border-border space-y-4">
                                <div className="space-y-1">
                                    <p className="text-[11px] font-mono lowercase tracking-[0.1em] text-accent">less is more.</p>
                                    <p className="text-[11px] font-mono lowercase tracking-[0.1em] text-muted-foreground">clarity over complexity.</p>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-mono lowercase tracking-[0.1em] text-muted-foreground/50">location</span>
                                    <p className="text-sm text-foreground/80 lowercase">paris — worldwide</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
