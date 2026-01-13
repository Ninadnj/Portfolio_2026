"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Monitor, Smartphone } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

interface SideProjectProps {
    title: string
    description: string
    iframeUrl: string
    tags: string[]
    liveUrl: string
}

function SideProjectCard({ title, description, iframeUrl, tags, liveUrl }: SideProjectProps) {
    const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop")

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group"
        >
            <div className="relative rounded-2xl overflow-hidden bg-background border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
                {/* Interactive Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    {/* Browser Chrome */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 bg-muted/95 border-b border-border backdrop-blur-sm">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                        </div>
                        <div className="flex gap-1.5">
                            <button
                                onClick={() => setPreviewMode("desktop")}
                                className={`p-1 rounded transition-all ${previewMode === "desktop" ? "bg-background shadow-sm text-accent" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                <Monitor className="h-3 w-3" />
                            </button>
                            <button
                                onClick={() => setPreviewMode("mobile")}
                                className={`p-1 rounded transition-all ${previewMode === "mobile" ? "bg-background shadow-sm text-accent" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                <Smartphone className="h-3 w-3" />
                            </button>
                        </div>
                        <div className="text-[9px] font-mono lowercase tracking-[0.05em] text-muted-foreground/50 truncate max-w-[120px]">
                            {new URL(iframeUrl).hostname}
                        </div>
                    </div>

                    {/* Iframe */}
                    <div className="absolute inset-0 pt-9">
                        <iframe
                            src={iframeUrl}
                            className={`w-full h-full border-none transition-all duration-500 mx-auto ${previewMode === "mobile"
                                    ? "max-w-[280px] shadow-xl scale-[0.9] origin-top mt-2 rounded-2xl border-4 border-slate-800"
                                    : "max-w-none"
                                }`}
                            title={`${title} Live Preview`}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 bg-muted/20">
                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="px-2 py-0.5 font-mono text-[8px] lowercase tracking-[0.08em] bg-secondary/50 text-muted-foreground border-none rounded"
                            >
                                {tag.toLowerCase()}
                            </Badge>
                        ))}
                    </div>

                    <h3 className="text-base font-medium text-foreground lowercase tracking-tight">
                        {title.toLowerCase()}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {description.toLowerCase()}
                    </p>

                    <Button
                        size="sm"
                        variant="outline"
                        className="mt-2 rounded-full h-7 text-[10px] lowercase border-border hover:border-accent hover:bg-accent/10"
                        asChild
                    >
                        <Link href={liveUrl} target="_blank">
                            open in new tab <ExternalLink className="ml-1.5 h-2.5 w-2.5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

export function SideProjects() {
    const { t } = useLanguage()

    const sideProjectsConfig = [
        {
            iframeUrl: "https://themrstudio.net",
            tags: ["React", "Node.js", "Calendar API", "SMS Reminders"],
            liveUrl: "https://themrstudio.net",
        },
        {
            iframeUrl: "https://ninadnj.github.io/AlpineStay/",
            tags: ["Next.js", "Framer Motion", "Tailwind", "Responsive"],
            liveUrl: "https://ninadnj.github.io/AlpineStay/",
        },
        {
            iframeUrl: "https://ninadnj.github.io/bookingwebapp/",
            tags: ["React", "Express", "MongoDB", "Auth"],
            liveUrl: "https://ninadnj.github.io/bookingwebapp/",
        }
    ]

    return (
        <section id="side-projects" className="py-24 sm:py-32 border-t border-border bg-muted/10">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">{t.sideProjects.section_label}</span>
                <div className="mb-16 max-w-xl">
                    <h2 className="accent-headline text-2xl sm:text-3xl text-foreground mb-6">
                        {t.sideProjects.headline}
                    </h2>
                    <p className="body-text">
                        {t.sideProjects.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.sideProjects.items.map((project, index) => (
                        <SideProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            {...sideProjectsConfig[index]}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
