"use client"

import { motion } from "framer-motion"

import { useLanguage } from "@/context/LanguageContext"

export function About() {
    const { t } = useLanguage()

    return (
        <section id="about" className="py-24 sm:py-32 border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">{t.about.section_label}</span>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left: positioning */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <h3 className="accent-headline text-3xl sm:text-4xl text-foreground max-w-xl">
                            {t.about.headline}
                        </h3>
                        <div className="space-y-1 text-lg text-foreground/70 max-w-xl" style={{ lineHeight: 1.6 }}>
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                            <p>{t.about.p3}</p>
                        </div>
                    </motion.div>

                    {/* Right: proof / fast-facts spec sheet */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:col-span-5"
                    >
                        <div className="panel p-6 sm:p-8 divide-y divide-border">
                            {t.about.facts.map((fact) => (
                                <div
                                    key={fact.label}
                                    className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                                >
                                    <span className="text-[10px] font-mono lowercase tracking-[0.15em] text-muted-foreground/50 shrink-0">
                                        {fact.label}
                                    </span>
                                    <span className="text-sm text-foreground/80 sm:text-right">
                                        {fact.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
