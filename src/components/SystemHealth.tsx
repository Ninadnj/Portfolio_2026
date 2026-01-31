"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Activity, ShieldCheck, Cpu } from "lucide-react"

const LOG_MESSAGES = [
    "intent_detected: site_navigation",
    "mcp_server_called: local_filesystem_v2",
    "execution_successful: token_usage_optimized",
    "directive_layer: protocol_verified",
    "orchestrator: autonomous_agent_active",
    "system_sync: gpt-4o_vision_latched",
    "security_handshake: established",
    "3_layer_model: deterministic_lock",
    "asset_scan: complete",
    "latency: 14ms (optimized)"
]

export function SystemHealth() {
    const [logs, setLogs] = useState<string[]>([LOG_MESSAGES[0]])
    const [currentIndex, setCurrentIndex] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setLogs(prev => {
                const newLogs = [...prev, LOG_MESSAGES[currentIndex]]
                if (newLogs.length > 3) newLogs.shift()
                return newLogs
            })
            setCurrentIndex(prev => (prev + 1) % LOG_MESSAGES.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [currentIndex])

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed bottom-6 left-6 z-40 hidden md:block"
        >
            <div className="glass-card p-3 pr-6 rounded-xl flex items-center gap-4 border border-accent/20 bg-background/40 backdrop-blur-md shadow-2xl">
                {/* Status Indicator */}
                <div className="relative flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-2 w-2 rounded-full bg-accent"
                    />
                    <div className="absolute inset-0 h-2 w-2 rounded-full bg-accent blur-[4px]" />
                </div>

                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono lowercase tracking-[0.15em] text-foreground font-bold">
                            unified engine: <span className="text-accent">optimized</span>
                        </span>
                        <div className="h-3 w-[1px] bg-border mx-1" />
                        <div className="flex items-center gap-1 opacity-40">
                            <Activity className="h-2.5 w-2.5" />
                            <span className="text-[8px] font-mono">active</span>
                        </div>
                    </div>

                    {/* Ticker */}
                    <div className="h-3 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={logs[logs.length - 1]}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="text-[8px] font-mono text-muted-foreground lowercase tracking-wide"
                            >
                                {`> ${logs[logs.length - 1]}`}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Technical Icons */}
                <div className="flex items-center gap-2 border-l border-border pl-4 ml-2">
                    <div className="group relative">
                        <ShieldCheck className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-accent transition-colors" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background border border-border rounded text-[8px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            security: verified
                        </div>
                    </div>
                    <div className="group relative">
                        <Cpu className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-accent transition-colors" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background border border-border rounded text-[8px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            cpu: load low
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
