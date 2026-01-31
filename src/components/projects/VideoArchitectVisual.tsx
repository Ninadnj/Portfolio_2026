"use client"

import { motion } from "framer-motion"
import { Video, Code, Play, RefreshCw, Layers, FileVideo } from "lucide-react"

export function VideoArchitectVisual() {
    const codeSnippet = `def create_intro():
    bg = ColorClip(size=(1080, 1920), color="#0F0F0F")
    title = TextClip(text="NINA", font_size=80)
    video = CompositeVideoClip([bg, title])
    video.write_videofile("intro.mp4")`

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-card/10 p-6 sm:p-10 overflow-hidden">
            <div className="relative w-full max-w-md grid grid-cols-2 gap-4">
                {/* Left: Code Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-3 bg-[#0F0F0F] border border-white/5 rounded-lg shadow-xl font-mono text-[10px] leading-relaxed relative overflow-hidden group"
                >
                    <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                        <Code className="h-3 w-3 text-accent" />
                        <span className="text-white/30 lowercase tracking-wider">generate_intro.py</span>
                    </div>
                    <pre className="text-white/60">
                        {codeSnippet.split('\n').map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                            >
                                {line}
                            </motion.div>
                        ))}
                    </pre>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-40 pointer-events-none" />
                </motion.div>

                {/* Right: Render Side */}
                <div className="relative flex flex-col gap-3">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="aspect-[9/16] bg-background border border-border rounded-lg relative overflow-hidden shadow-2xl group"
                    >
                        {/* Simulated Video Frame */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0F0F0F]">
                            <motion.div
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-[24px] font-bold tracking-[0.2em] text-white"
                            >
                                NINA
                            </motion.div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "60%" }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="h-0.5 bg-accent"
                            />
                        </div>

                        {/* Rendering Overlay */}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 bg-accent/5 backdrop-blur-[1px] flex flex-col items-center justify-center gap-2"
                        >
                            <RefreshCw className="h-6 w-6 text-accent animate-spin-slow" />
                            <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-accent">rendering</span>
                        </motion.div>
                    </motion.div>

                    {/* Output Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="p-2 bg-background/50 border border-border rounded-md flex items-center gap-2"
                    >
                        <FileVideo className="h-3 w-3 text-blue-500" />
                        <span className="text-[8px] font-mono text-white/40">intro_v1.mp4</span>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 opacity-5 rotate-12">
                <Video className="w-40 h-40" />
            </div>
        </div>
    )
}
