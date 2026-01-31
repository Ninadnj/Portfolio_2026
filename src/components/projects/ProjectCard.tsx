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
    problem?: string
    approach?: string
    solution?: string
    outcome?: string
    architecture?: {
        directive: string
        orchestration: string
        execution: string
    }
    image?: string
    visual?: React.ReactNode
    tags: string[]
    liveUrl?: string
    iframeUrl?: string
    isReversed?: boolean
    launchSiteLabel?: string
    caseNotesLabel?: string
}

export function ProjectCard({
    title,
    problem,
    approach,
    solution,
    outcome,
    architecture,
    image,
    visual,
    tags,
    liveUrl,
    iframeUrl,
    isReversed = false,
    launchSiteLabel = "launch site",
    caseNotesLabel = "case notes"
}: ProjectCardProps) {
    const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop")
    const [showArchitecture, setShowArchitecture] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group"
        >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start`}>
                {/* Content */}
                <div className={`lg:col-span-5 space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
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

                    {/* Problem/Approach/Solution/Outcome Format */}
                    <div className="space-y-4 text-sm">
                        {problem && (
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent">problem</span>
                                <p className="body-text mt-1">{problem.toLowerCase()}</p>
                            </div>
                        )}
                        {approach && (
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent">approach</span>
                                <p className="body-text mt-1">{approach.toLowerCase()}</p>
                            </div>
                        )}
                        {solution && (
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent">solution</span>
                                <p className="body-text mt-1">{solution.toLowerCase()}</p>
                            </div>
                        )}
                        {outcome && (
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent">outcome</span>
                                <p className="body-text mt-1">{outcome.toLowerCase()}</p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {liveUrl && liveUrl !== "#" && (
                            <Button size="sm" className="btn-premium rounded-full h-9 lowercase" asChild>
                                <Link href={liveUrl} target="_blank">
                                    {launchSiteLabel} <ExternalLink className="ml-2 h-3 w-3" />
                                </Link>
                            </Button>
                        )}
                        <Button
                            variant="outline"
                            size="sm"
                            className={`btn-premium rounded-full h-9 border-border lowercase transition-all ${showArchitecture ? "bg-accent text-accent-foreground border-accent" : "hover:bg-secondary"}`}
                            onClick={() => setShowArchitecture(!showArchitecture)}
                        >
                            {caseNotesLabel} <Info className="ml-2 h-3 w-3" />
                        </Button>
                    </div>
                </div>

                {/* Visual Area */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-muted/50 border border-border shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/5">
                        <AnimatePresence mode="wait">
                            {showArchitecture && architecture ? (
                                <motion.div
                                    key="architecture"
                                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                                    className="absolute inset-0 z-30 bg-background/80 flex flex-col items-center justify-center p-8 overflow-hidden"
                                >
                                    <div className="w-full max-w-sm space-y-6 relative">
                                        <div className="absolute -top-12 -left-4 text-[60px] font-bold text-accent/5 pointer-events-none select-none uppercase">architect</div>

                                        {/* Layer 1: Directive */}
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                            className="relative flex items-center gap-4 group/layer"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-accent">
                                                <span className="text-[10px] font-mono">01</span>
                                            </div>
                                            <div className="space-y-0.5">
                                                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-accent/60">directive</span>
                                                <p className="text-xs font-medium text-foreground lowercase">{architecture.directive}</p>
                                            </div>
                                        </motion.div>

                                        {/* Connection Line */}
                                        <div className="ml-5 w-[1px] h-6 bg-gradient-to-b from-accent/20 to-transparent" />

                                        {/* Layer 2: Orchestration */}
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="relative flex items-center gap-4 group/layer"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary border border-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                                                <span className="text-[10px] font-mono">02</span>
                                            </div>
                                            <div className="space-y-0.5">
                                                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-primary/60">orchestration</span>
                                                <p className="text-xs font-medium text-foreground lowercase">{architecture.orchestration}</p>
                                            </div>
                                        </motion.div>

                                        {/* Connection Line */}
                                        <div className="ml-5 w-[1px] h-6 bg-gradient-to-b from-accent/20 to-transparent" />

                                        {/* Layer 3: Execution */}
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="relative flex items-center gap-4 group/layer"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-accent">
                                                <span className="text-[10px] font-mono">03</span>
                                            </div>
                                            <div className="space-y-0.5">
                                                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-accent/60">execution</span>
                                                <p className="text-xs font-medium text-foreground lowercase">{architecture.execution}</p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <button
                                        onClick={() => setShowArchitecture(false)}
                                        className="mt-12 text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
                                    >
                                        [ close architecture ]
                                    </button>
                                </motion.div>
                            ) : null}

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
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`${process.env.NODE_ENV === 'production' ? '/Portfolio_2026' : ''}${image || ""}`}
                                        alt={title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
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
