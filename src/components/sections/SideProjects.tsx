"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

interface SideProjectProps {
    title: string
    description: string
    image: string
    tags: string[]
    liveUrl: string
}

function SideProjectCard({ title, description, image, tags, liveUrl }: SideProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group"
        >
            <div className="relative rounded-2xl overflow-hidden bg-muted/30 border border-border hover:border-accent/30 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`${process.env.NODE_ENV === 'production' ? '/Portfolio_2026' : ''}${image}`}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="px-2 py-0.5 font-mono text-[9px] lowercase tracking-[0.08em] bg-secondary/50 text-muted-foreground border-none rounded"
                            >
                                {tag.toLowerCase()}
                            </Badge>
                        ))}
                    </div>

                    <h3 className="text-lg font-medium text-foreground lowercase tracking-tight">
                        {title.toLowerCase()}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {description.toLowerCase()}
                    </p>

                    {liveUrl && liveUrl !== "#" && (
                        <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 rounded-full h-8 text-xs lowercase border-border hover:border-accent hover:bg-accent/10"
                            asChild
                        >
                            <Link href={liveUrl} target="_blank">
                                view site <ExternalLink className="ml-1.5 h-3 w-3" />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export function SideProjects() {
    const { t } = useLanguage()

    const sideProjectsConfig = [
        {
            image: "/booking-agent-thumb.jpg",
            tags: ["React", "Node.js", "Calendar API", "SMS Reminders"],
            liveUrl: "https://themrstudio.net",
        },
        {
            image: "/booking-agent-workflow.jpg",
            tags: ["Next.js", "Framer Motion", "Tailwind", "Responsive"],
            liveUrl: "https://ninadnj.github.io/AlpineStay/",
        },
        {
            image: "/ai-agent-thumb.jpg",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
