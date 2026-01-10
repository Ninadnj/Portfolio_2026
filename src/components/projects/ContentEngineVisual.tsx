"use client"

import { motion } from "framer-motion"
import { Sparkles, MessageSquare, Share2, Calendar, Layout, ArrowRight } from "lucide-react"

export function ContentEngineVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-card/10 p-12">
            <div className="relative w-full max-w-sm flex items-center justify-between gap-4">
                {/* Input Node */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm">
                        <MessageSquare className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[8px] font-mono lowercase tracking-[0.08em] opacity-40">input</span>
                </div>

                {/* Processing Arcs */}
                <div className="flex-1 h-32 relative flex items-center justify-center">
                    <motion.div
                        animate={{
                            rotate: 360
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 rounded-full border border-dashed border-border flex items-center justify-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                            <Sparkles className="h-6 w-6 text-primary-foreground" />
                        </div>
                    </motion.div>
                </div>

                {/* Output Stack */}
                <div className="space-y-3">
                    {[
                        { icon: <Layout className="h-3 w-3" />, label: "social" },
                        { icon: <ArrowRight className="h-3 w-3" />, label: "cms" },
                        { icon: <Calendar className="h-3 w-3" />, label: "email" }
                    ].map((item, i) => (
                        <div key={i} className="bg-background border border-border rounded-lg p-3 flex items-center gap-3 w-28 shadow-sm">
                            <div className="text-accent">{item.icon}</div>
                            <span className="text-[10px] font-mono lowercase tracking-wide opacity-60">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Simplified Connector Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-border stroke-[1] opacity-50" fill="none">
                    <path d="M 50 80 L 140 80" />
                    <path d="M 240 80 L 290 40" />
                    <path d="M 240 80 L 290 80" />
                    <path d="M 240 80 L 290 120" />
                </svg>
            </div>
        </div>
    )
}
