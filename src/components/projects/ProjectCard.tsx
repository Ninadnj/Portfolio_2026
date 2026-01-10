"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Info, Monitor, Smartphone } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
    title: string
    description: string
    image?: string
    visual?: React.ReactNode // New prop for interactive visuals
    tags: string[]
    liveUrl?: string
    iframeUrl?: string
    caseNotes?: string
    isReversed?: boolean
}

export function ProjectCard({
    title,
    description,
    image,
    visual,
    tags,
    liveUrl,
    iframeUrl,
    caseNotes,
    isReversed = false
}: ProjectCardProps) {
    const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop")

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group"
        >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center`}>
                {/* Content */}
                <div className={`lg:col-span-5 space-y-8 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="px-2 py-0.5 font-mono text-[9px] lowercase tracking-[0.08em] bg-secondary text-muted-foreground border-none rounded">
                                    {tag.toLowerCase()}
                                </Badge>
                            ))}
                        </div>
                        <h3 className="text-2xl sm:text-3xl tracking-tight text-foreground leading-tight lowercase" style={{ fontWeight: 500 }}>
                            {title.toLowerCase()}
                        </h3>
                    </div>

                    <p className="body-text text-base">
                        {description.toLowerCase()}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {liveUrl && liveUrl !== "#" && (
                            <Button size="sm" className="btn-premium rounded-full h-9 lowercase" asChild>
                                <Link href={liveUrl} target="_blank">
                                    launch site <ExternalLink className="ml-2 h-3 w-3" />
                                </Link>
                            </Button>
                        )}
                        <Button variant="outline" size="sm" className="btn-premium rounded-full h-9 border-border hover:bg-secondary lowercase" onClick={() => { }}>
                            case notes <Info className="ml-2 h-3 w-3" />
                        </Button>
                    </div>
                </div>

                {/* Visual Area */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-muted/50 border border-border shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/5">
                        <AnimatePresence mode="wait">
                            {visual ? (
                                <motion.div
                                    key="visual"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    {visual}
                                </motion.div>
                            ) : iframeUrl ? (
                                <motion.div
                                    key="preview"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col bg-background"
                                >
                                    <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-muted/30">
                                        <div className="flex gap-1.5">
                                            <button
                                                onClick={() => setPreviewMode("desktop")}
                                                className={`p-1.5 rounded-md transition-all ${previewMode === "desktop" ? "bg-background shadow-sm text-accent" : "text-muted-foreground hover:text-foreground"}`}
                                            >
                                                <Monitor className="h-3.5 w-3.5" />
                                            </button>
                                            <button
                                                onClick={() => setPreviewMode("mobile")}
                                                className={`p-1.5 rounded-md transition-all ${previewMode === "mobile" ? "bg-background shadow-sm text-accent" : "text-muted-foreground hover:text-foreground"}`}
                                            >
                                                <Smartphone className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                        <div className="text-[10px] font-mono lowercase tracking-[0.05em] text-muted-foreground/60 truncate max-w-[200px]">
                                            {new URL(iframeUrl).hostname}
                                        </div>
                                    </div>

                                    <div className="flex-1 bg-white relative overflow-hidden">
                                        <iframe
                                            src={iframeUrl}
                                            className={`w-full h-full border-none transition-all duration-700 mx-auto ${previewMode === "mobile" ? "max-w-[375px] shadow-2xl scale-[0.85] origin-top mt-4 rounded-3xl border-8 border-slate-900" : "max-w-none"}`}
                                            title={`${title} Live Preview`}
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="image"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={image || ""}
                                        alt={title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
