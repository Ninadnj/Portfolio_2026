"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import {
    Bot,
    Workflow,
    Sparkles,
    Brain,
    Database,
    Network,
    GitBranch,
} from "lucide-react"

const icons = [Bot, Workflow, Sparkles, Brain, Database, Network, GitBranch]

export function Expertise() {
    const { t } = useLanguage()

    return (
        <section id="expertise" className="relative py-24 sm:py-32 border-t border-border bg-secondary/20">
            {/* faint dot matrix */}
            <div className="absolute inset-0 bg-dots opacity-40 mask-fade-edges pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 max-w-6xl">
                <span className="section-label">{t.expertise.section_label}</span>

                <div className="mb-14 max-w-xl">
                    <h2 className="accent-headline text-2xl sm:text-3xl text-foreground mb-4 lowercase">
                        {t.expertise.headline}
                    </h2>
                    <p className="body-text">{t.expertise.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t.expertise.items.map((item, index) => {
                        const Icon = icons[index % icons.length]
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="panel p-6 group"
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div className="h-10 w-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors">
                                        <Icon className="h-[18px] w-[18px]" />
                                    </div>
                                    <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/40">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <span className="tech-tag mb-3">{item.tag}</span>

                                <h3 className="text-base font-medium text-foreground tracking-tight mt-3 mb-2 lowercase">
                                    {item.title.toLowerCase()}
                                </h3>
                                <p className="text-[13px] leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
