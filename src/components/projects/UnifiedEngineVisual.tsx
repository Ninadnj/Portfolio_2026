"use client"

import { motion } from "framer-motion"
import { Layers, Zap, Cpu, Code2, Shield, Network } from "lucide-react"

export function UnifiedEngineVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-card/10 p-8 sm:p-12 overflow-hidden">
            <div className="relative w-full max-w-sm flex flex-col gap-4">
                {/* Layer 1: Directive (Strategy) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative z-30 p-4 bg-background border border-border rounded-xl shadow-lg flex items-center gap-4 group hover:border-accent/40 transition-colors"
                >
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        <Shield className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono lowercase tracking-[0.2em] text-accent font-bold">Layer 01 // Directive</span>
                        <span className="text-xs opacity-60">Strategic SOPs & Brand Persona</span>
                    </div>
                </motion.div>

                {/* Connector 1-2 */}
                <div className="flex justify-center h-4">
                    <div className="w-px h-full bg-gradient-to-b from-accent to-primary opacity-30" />
                </div>

                {/* Layer 2: Orchestration (Intelligence) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-20 p-4 bg-background border border-border rounded-xl shadow-md flex items-center gap-4 group hover:border-primary/40 transition-colors"
                >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Cpu className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono lowercase tracking-[0.2em] text-primary font-bold">Layer 02 // Orchestration</span>
                        <span className="text-xs opacity-60">LLM Reasoning & Intent Mapping</span>
                    </div>
                    <div className="ml-auto">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Zap className="h-3 w-3 text-accent" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Connector 2-3 */}
                <div className="flex justify-center h-4">
                    <div className="w-px h-full bg-gradient-to-b from-primary to-blue-500 opacity-30" />
                </div>

                {/* Layer 3: Execution (Mechanism) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10 p-4 bg-background border border-border rounded-xl shadow-sm flex items-center gap-4 group hover:border-blue-500/40 transition-colors"
                >
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        <Code2 className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono lowercase tracking-[0.2em] text-blue-500 font-bold">Layer 03 // Execution</span>
                        <span className="text-xs opacity-60">Deterministic Tools & MCP Scripts</span>
                    </div>
                </motion.div>

                {/* Background MCP Grid/Network Effect */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 opacity-10 pointer-events-none">
                    <Network className="w-full h-40 text-foreground" strokeWidth={0.5} />
                </div>
            </div>
        </div>
    )
}
