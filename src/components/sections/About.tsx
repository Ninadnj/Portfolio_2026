"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { useLanguage } from "@/context/LanguageContext"

export function About() {
    const { t } = useLanguage()

    return (
        <section id="about" className="py-24 sm:py-32 border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">{t.about.section_label}</span>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40, scale: 0.98 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:col-span-4 flex justify-center lg:justify-start"
                    >
                        <div className="relative aspect-square w-full max-w-[320px] rounded-2xl overflow-hidden grayscale border border-border bg-muted">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${process.env.NODE_ENV === 'production' ? '/Portfolio_2026' : ''}/portrait.jpg`}
                                alt="Nina Professional Portrait"
                                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:col-span-8 space-y-10"
                    >
                        <div className="space-y-10 max-w-xl">
                            {/* Single accent headline — Playfair Display italic */}
                            <h3 className="accent-headline text-3xl sm:text-4xl text-foreground">
                                {t.about.headline}
                            </h3>

                            {/* Supporting text — Inter Regular */}
                            <div className="space-y-1 text-lg text-foreground/70" style={{ lineHeight: 1.6 }}>
                                <p>{t.about.p1}</p>
                                <p>{t.about.p2}</p>
                                <p>{t.about.p3}</p>
                            </div>

                            <p className="body-text text-base">
                                {t.about.description}
                            </p>

                            {/* Signature principles */}
                            <div className="pt-8 border-t border-border space-y-4">
                                <div className="space-y-1">
                                    <p className="text-[11px] font-mono lowercase tracking-[0.1em] text-accent">{t.about.less_is_more}</p>
                                    <p className="text-[11px] font-mono lowercase tracking-[0.1em] text-muted-foreground">{t.about.clarity}</p>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-mono lowercase tracking-[0.1em] text-muted-foreground/50">{t.about.location_label}</span>
                                    <p className="text-sm text-foreground/80">{t.about.location_value}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
