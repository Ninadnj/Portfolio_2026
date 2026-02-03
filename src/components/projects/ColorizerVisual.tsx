"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, Sparkles, ArrowRight, Zap, Layers } from "lucide-react"

export function ColorizerVisual() {
    const [isProcessing, setIsProcessing] = useState(false)
    const [colorLevel, setColorLevel] = useState(0)

    // Continuous animation cycle
    useEffect(() => {
        const cycle = () => {
            setIsProcessing(true)
            setColorLevel(0)

            // Animate color level from 0 to 100
            const interval = setInterval(() => {
                setColorLevel((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval)
                        setTimeout(() => {
                            setIsProcessing(false)
                            // Reset and restart after a pause
                            setTimeout(cycle, 1500)
                        }, 2000)
                        return 100
                    }
                    return prev + 2
                })
            }, 40)

            return () => clearInterval(interval)
        }

        const timer = setTimeout(cycle, 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-card/10 p-6 sm:p-12 overflow-hidden">
            {/* Background Neural Network Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="neural-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-foreground" />
                            <line x1="20" y1="20" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-foreground" opacity="0.3" />
                            <line x1="20" y1="20" x2="0" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-foreground" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#neural-grid)" />
                </svg>
            </div>

            <div className="relative flex flex-col items-center gap-6 w-full max-w-sm">
                {/* Architecture Label */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-[9px] font-mono lowercase tracking-[0.2em] text-muted-foreground/50"
                >
                    <Layers className="h-3 w-3" />
                    <span>u-net encoder-decoder</span>
                </motion.div>

                {/* Main Visual Container */}
                <div className="relative w-full flex items-center justify-center gap-4">
                    {/* Grayscale Input */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-gray-300 to-gray-600">
                            {/* Grayscale Grid Pattern */}
                            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 p-1">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="rounded-sm"
                                        style={{
                                            backgroundColor: `hsl(0, 0%, ${30 + Math.random() * 40}%)`
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[8px] font-mono lowercase tracking-wider text-white/70 bg-black/30 px-2 py-0.5 rounded">L</span>
                            </div>
                        </div>
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] text-muted-foreground/60">luminance</span>
                    </motion.div>

                    {/* Processing Arrow with Animation */}
                    <div className="flex flex-col items-center gap-1">
                        <motion.div
                            animate={{
                                x: isProcessing ? [0, 5, 0] : 0,
                                scale: isProcessing ? [1, 1.1, 1] : 1
                            }}
                            transition={{ duration: 0.5, repeat: isProcessing ? Infinity : 0 }}
                            className="relative p-3 rounded-xl bg-background border border-border shadow-md"
                        >
                            <Sparkles className={`h-5 w-5 transition-colors duration-300 ${isProcessing ? 'text-accent' : 'text-muted-foreground'}`} />

                            {/* Processing Glow */}
                            <AnimatePresence>
                                {isProcessing && (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1.5, opacity: 0.4 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                        className="absolute inset-0 rounded-xl bg-accent/30 blur-md -z-10"
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>
                        <span className="text-[7px] font-mono lowercase tracking-[0.08em] text-accent/80">GAN</span>
                    </div>

                    {/* Colorized Output */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-border shadow-lg">
                            {/* Dynamic Color Grid */}
                            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 p-1 transition-all duration-300">
                                {[
                                    { h: 220, s: 60, l: 45 }, // Blue
                                    { h: 160, s: 50, l: 40 }, // Teal
                                    { h: 280, s: 45, l: 50 }, // Purple
                                    { h: 30, s: 70, l: 55 },  // Orange
                                    { h: 45, s: 80, l: 50 },  // Gold
                                    { h: 340, s: 65, l: 45 }, // Rose
                                    { h: 180, s: 55, l: 45 }, // Cyan
                                    { h: 90, s: 50, l: 45 },  // Green
                                    { h: 0, s: 60, l: 50 }    // Red
                                ].map((color, i) => (
                                    <div
                                        key={i}
                                        className="rounded-sm transition-all duration-500"
                                        style={{
                                            backgroundColor: `hsl(${color.h}, ${color.s * (colorLevel / 100)}%, ${35 + colorLevel * 0.2}%)`
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[8px] font-mono lowercase tracking-wider text-white/70 bg-black/30 px-2 py-0.5 rounded">a*b*</span>
                            </div>
                        </div>
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] text-muted-foreground/60">chrominance</span>
                    </motion.div>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-xs">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[8px] font-mono lowercase tracking-[0.15em] text-muted-foreground/40">colorization</span>
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] text-accent">{Math.round(colorLevel)}%</span>
                    </div>
                    <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-accent via-primary to-purple-500 rounded-full"
                            style={{ width: `${colorLevel}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>
                </div>

                {/* Lab Color Space Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-gradient-to-b from-white to-black" />
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] text-muted-foreground/60">L*</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-gradient-to-r from-green-500 to-red-500" />
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] text-muted-foreground/60">a*</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-500 to-yellow-500" />
                        <span className="text-[8px] font-mono lowercase tracking-[0.08em] text-muted-foreground/60">b*</span>
                    </div>
                    <div className="ml-2 pl-2 border-l border-border/50">
                        <span className="text-[7px] font-mono lowercase tracking-[0.15em] text-accent/60">CIE Lab</span>
                    </div>
                </motion.div>
            </div>

            {/* Floating Particles */}
            {isProcessing && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ 
                                x: "40%", 
                                y: "50%", 
                                opacity: 0,
                                scale: 0 
                            }}
                            animate={{
                                x: ["40%", "55%", "60%"],
                                y: ["50%", `${45 + (i - 2.5) * 8}%`, `${45 + (i - 2.5) * 8}%`],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                            className="absolute w-1.5 h-1.5 rounded-full"
                            style={{
                                backgroundColor: [
                                    '#60a5fa', '#a78bfa', '#f472b6', 
                                    '#fb923c', '#4ade80', '#22d3ee'
                                ][i]
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
