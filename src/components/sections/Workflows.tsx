"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, Zap, Share2, Calendar, Send, Bot, User } from "lucide-react"

export function Workflows() {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "hi! i'm nina's ai assistant. i can help you with project inquiries, technical skills, and contact information. how can i assist you today?" }
    ])

    return (
        <section id="workflows" className="py-24 sm:py-32 bg-secondary/30 border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">02 // interactive interface</span>
                <div className="mb-16 max-w-xl">
                    <h3 className="accent-headline text-2xl sm:text-3xl text-foreground mb-6">autonomous workflow logic</h3>
                    <p className="body-text">
                        demonstrating specialized intent detection and autonomous response loops. systems designed to orchestrate complex tasks across multiple apis.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Chat Interface */}
                    <div className="lg:col-span-3 glass-card rounded-2xl overflow-hidden flex flex-col h-[550px]">
                        <div className="p-4 border-b border-border bg-card/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                <span className="text-[10px] font-mono lowercase tracking-[0.1em]">live system demo</span>
                            </div>
                            <Bot className="h-4 w-4 text-muted-foreground" />
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 space-y-6">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-primary text-primary-foreground shadow-lg'
                                        : 'bg-muted/50 border border-border'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-6 bg-card/50 border-t border-border">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="inquire about technical architecture..."
                                    className="flex-1 bg-background border border-border rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all lowercase"
                                />
                                <button className="h-11 w-11 flex items-center justify-center rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Automation Visual */}
                    <div className="lg:col-span-2 glass-card rounded-2xl p-8 h-full border-border bg-card/20">
                        <div className="space-y-10">
                            <div>
                                <span className="text-[10px] font-mono lowercase tracking-[0.1em] text-accent mb-4 block">system logic</span>
                                <div className="aspect-square bg-muted/30 rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-[0.05]" />
                                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-xl">
                                            <Cpu className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 w-full">
                                            {[
                                                { label: "Intent", icon: <Zap className="h-3 w-3" /> },
                                                { label: "Sync", icon: <Share2 className="h-3 w-3" /> },
                                                { label: "Vector", icon: <Cpu className="h-3 w-3" /> },
                                                { label: "API", icon: <Share2 className="h-3 w-3" /> }
                                            ].map((node, i) => (
                                                <div key={i} className="bg-background/80 border border-border rounded-lg p-3 flex items-center gap-2">
                                                    <div className="text-accent">{node.icon}</div>
                                                    <span className="text-[10px] font-mono lowercase tracking-wide">{node.label.toLowerCase()}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <span className="text-[10px] font-mono lowercase tracking-[0.1em] text-muted-foreground block">capabilities</span>
                                <div className="space-y-3">
                                    {[
                                        "natural language understanding",
                                        "context-aware rag pipelines",
                                        "autonomous api orchestration",
                                        "multi-channel message routing"
                                    ].map((cap, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs text-foreground/70">
                                            <div className="h-1 w-1 rounded-full bg-border" />
                                            {cap}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
