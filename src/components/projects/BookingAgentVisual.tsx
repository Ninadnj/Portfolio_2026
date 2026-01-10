"use client"

import { motion } from "framer-motion"
import { Bot, Calendar, Database, Zap, ArrowRight, ShieldCheck } from "lucide-react"

export function BookingAgentVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-card/10 p-12">
            <div className="relative w-full max-w-sm grid grid-cols-3 gap-8 items-center">
                {/* Left Column: Intakes */}
                <div className="space-y-6">
                    <div className="p-3 bg-background border border-border rounded-xl shadow-sm flex flex-col items-center gap-2">
                        <Zap className="h-4 w-4 text-accent" />
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] opacity-40">intent</span>
                    </div>
                    <div className="p-3 bg-background border border-border rounded-xl shadow-sm flex flex-col items-center gap-2">
                        <Database className="h-4 w-4 text-accent" />
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] opacity-40">session</span>
                    </div>
                </div>

                {/* Center: Core Logic */}
                <div className="flex flex-col items-center justify-center">
                    <motion.div
                        animate={{
                            boxShadow: ["0 0 0px var(--accent)", "0 0 20px color-mix(in srgb, var(--accent) 30%, transparent)", "0 0 0px var(--accent)"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center relative z-10"
                    >
                        <Bot className="h-10 w-10 text-primary-foreground" />
                        <div className="absolute -top-1 -right-1">
                            <ShieldCheck className="h-5 w-5 text-accent bg-background rounded-full p-0.5" />
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Actuators */}
                <div className="space-y-6">
                    <div className="p-3 bg-background border border-border rounded-xl shadow-sm flex flex-col items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] opacity-40">sync</span>
                    </div>
                    <div className="p-3 bg-background border border-border rounded-xl shadow-sm flex flex-col items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-accent" />
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] opacity-40">api</span>
                    </div>
                </div>

                {/* Connection Lines (SVGs) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-border stroke-[1]" fill="none">
                    <path d="M 80 80 L 140 120" />
                    <path d="M 80 160 L 140 120" />
                    <path d="M 220 120 L 280 80" />
                    <path d="M 220 120 L 280 160" />
                </svg>
            </div>
        </div>
    )
}
