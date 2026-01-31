"use client"

import { motion } from "framer-motion"
import { FileText, Eye, Cpu, MessageSquare, Send, Table, Zap } from "lucide-react"

export function LoyaltyVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-card/10 p-8 sm:p-12 overflow-hidden">
            <div className="relative w-full max-w-sm flex flex-col items-center gap-8">

                <div className="flex items-center justify-between w-full relative">
                    {/* Left: Input (Receipt) */}
                    <div className="flex flex-col items-center gap-2 relative">
                        <motion.div
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            className="p-4 bg-background border border-border rounded-lg shadow-sm relative overflow-hidden"
                        >
                            <FileText className="h-8 w-8 text-foreground/40" />
                            {/* Scanning Line */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-0.5 bg-accent/60 shadow-[0_0_8px_var(--accent)] z-10"
                            />
                        </motion.div>
                        <span className="text-[8px] font-mono lowercase tracking-[0.2em] opacity-40">receipt ocr</span>
                        <div className="absolute -top-1 -right-1">
                            <Eye className="h-4 w-4 text-accent" />
                        </div>
                    </div>

                    {/* Center: Logic node (GPT-4 Vision) */}
                    <div className="flex flex-col items-center gap-2">
                        <motion.div
                            animate={{
                                boxShadow: ["0 0 0px var(--accent)", "0 0 15px color-mix(in srgb, var(--accent) 20%, transparent)", "0 0 0px var(--accent)"],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg relative z-20"
                        >
                            <Cpu className="h-8 w-8 text-primary-foreground" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary-foreground/20"
                            />
                        </motion.div>
                        <span className="text-[8px] font-mono lowercase tracking-[0.2em] opacity-40">gpt-4 vision</span>
                    </div>

                    {/* Connection Lines from Receipt to Logic */}
                    <svg className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 -z-10 pointer-events-none opacity-20" fill="none">
                        <motion.path
                            d="M 50 0 L 140 0"
                            stroke="var(--accent)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            animate={{ strokeDashoffset: [0, -20] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                </div>

                {/* Bottom: Outputs */}
                <div className="grid grid-cols-3 gap-4 w-full">
                    {[
                        { icon: <MessageSquare className="h-4 w-4" />, label: "whatsapp", color: "text-green-500" },
                        { icon: <Send className="h-4 w-4" />, label: "telegram", color: "text-blue-400" },
                        { icon: <Table className="h-4 w-4" />, label: "sheets", color: "text-emerald-600" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="p-3 bg-background border border-border rounded-xl shadow-sm flex flex-col items-center gap-2 group hover:border-accent/30 transition-colors"
                        >
                            <div className={`${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                {item.icon}
                            </div>
                            <span className="text-[7px] font-mono lowercase tracking-wider opacity-40">{item.label}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Multi-channel lines from Logic to Outputs */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" fill="none">
                    <path d="M 190 140 L 80 230" stroke="var(--foreground)" strokeWidth="0.5" />
                    <path d="M 190 140 L 190 230" stroke="var(--foreground)" strokeWidth="0.5" />
                    <path d="M 190 140 L 300 230" stroke="var(--foreground)" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Background elements */}
            <div className="absolute top-4 right-4 opacity-5">
                <Zap className="w-24 h-24 text-accent" />
            </div>
        </div>
    )
}
