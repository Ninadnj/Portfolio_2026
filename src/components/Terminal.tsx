"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface TerminalProps {
    isOpen: boolean
    onClose: () => void
}

const commands: Record<string, string | string[]> = {
    help: [
        "Available commands:",
        "",
        "  whoami      - About me",
        "  skills      - Technical skills",
        "  projects    - List projects",
        "  contact     - Contact info",
        "  github      - GitHub profile",
        "  resume      - Download resume",
        "  clear       - Clear terminal",
        "  exit        - Close terminal",
        "",
        "Tip: Press ↑/↓ for command history"
    ],
    whoami: [
        "Nina Doinjashvili",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "",
        "Applied AI Engineer",
        "Machine Learning Systems & AI Automation",
        "",
        "Location: Paris — Worldwide",
        "Focus: Deep Learning, AI Agents, ML Automation"
    ],
    skills: [
        "Technical Skills",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "",
        "ML/DL       → TensorFlow, Keras, PyTorch, scikit-learn",
        "AI/LLM      → GPT-4, LangChain, Hugging Face, RAG",
        "Vision      → OpenAI Vision API, Computer Vision",
        "Automation  → n8n, Make, Zapier, Workflow orchestration",
        "Python      → FastAPI, Pandas, NumPy, Data processing",
        "Data        → SQL, Google Sheets API, Data pipelines",
        "Cloud/Ops   → GCP, Docker, GitHub Actions, CI/CD",
        "APIs        → WhatsApp, Telegram, Calendar, OpenAI"
    ],
    projects: [
        "Selected Projects",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "",
        "[ML]  Deep Learning Image Colorizer",
        "      GAN-based grayscale to color translation",
        "",
        "[AI]  Autonomous Booking Agent",
        "      n8n + GPT-4 + LangChain workflow",
        "",
        "[AI]  Loyalty Program Automation",
        "      GPT-4 Vision + WhatsApp + Google Sheets",
        "",
        "[LLM] Content Repurposing Engine",
        "      Multi-channel content transformation",
        "",
        "[AI]  Unified Agentic Engine",
        "      3-layer architecture + MCP framework",
        "",
        "[VID] AI Video-as-Code Architect",
        "      Procedural video generation engine",
        "",
        "Type 'open projects' to view in portfolio"
    ],
    contact: [
        "Contact",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "",
        "Email    → ninodoinjashvili@gmail.com",
        "LinkedIn → linkedin.com/in/nina-doinjashvili-8928815a",
        "GitHub   → github.com/Ninadnj",
        "WhatsApp → Available on request",
        "",
        "Type 'open contact' to go to contact section"
    ],
    github: [
        "Opening GitHub profile...",
        "",
        "→ github.com/Ninadnj"
    ],
    resume: [
        "Downloading resume...",
        "",
        "→ Nina_Resume_2026.pdf"
    ],
    "open projects": "Navigating to projects section...",
    "open contact": "Navigating to contact section...",
    neofetch: [
        "        ██████████████            nina@portfolio",
        "      ██            ██            ━━━━━━━━━━━━━━━━",
        "    ██    ▀▀    ▀▀    ██          OS: Next.js 16.1",
        "    ██                ██          Host: Vercel",
        "    ██      ██        ██          Uptime: Always on",
        "    ██      ██████    ██          Packages: 42 (npm)",
        "      ██            ██            Shell: TypeScript",
        "        ██████████████            Resolution: Responsive",
        "    ████    ████    ████          Theme: Minimalist Dark",
        "    ██        ██        ██        Terminal: Easter Egg",
        "",
        "        Built with ♥ and caffeine"
    ],
    sudo: "Nice try. 🙃",
    ls: "about/  projects/  blog/  contact/  resume.pdf",
    pwd: "/home/nina/portfolio",
    cd: "There's nowhere else to go. You're already home. 🏠",
    vim: "I use VS Code btw.",
    nano: "I respect the classics.",
    "rm -rf": "Absolutely not.",
    coffee: "☕ Brewing... Here you go!",
    hello: "Hello! Type 'help' to see available commands.",
    hi: "Hey there! 👋 Type 'help' to get started.",
}

export function Terminal({ isOpen, onClose }: TerminalProps) {
    const [input, setInput] = useState("")
    const [history, setHistory] = useState<Array<{ command: string; output: string | string[] }>>([
        { command: "", output: ["Welcome to Nina's Terminal", "", "Type 'help' for available commands.", ""] }
    ])
    const [commandHistory, setCommandHistory] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const inputRef = useRef<HTMLInputElement>(null)
    const terminalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [history])

    const processCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase()

        if (trimmedCmd === "clear") {
            setHistory([])
            return
        }

        if (trimmedCmd === "exit") {
            onClose()
            return
        }

        if (trimmedCmd === "github") {
            window.open("https://github.com/Ninadnj", "_blank")
        }

        if (trimmedCmd === "resume") {
            // Trigger resume download
            const link = document.createElement("a")
            link.href = `${process.env.NODE_ENV === 'production' ? '/Portfolio_2026' : ''}/Nina_Resume_2026.pdf`
            link.download = "Nina_Resume_2026.pdf"
            link.click()
        }

        if (trimmedCmd === "open projects") {
            onClose()
            document.getElementById("demos")?.scrollIntoView({ behavior: "smooth" })
        }

        if (trimmedCmd === "open contact") {
            onClose()
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }

        const output = commands[trimmedCmd] || `Command not found: ${trimmedCmd}. Type 'help' for available commands.`

        setHistory(prev => [...prev, { command: cmd, output }])
        setCommandHistory(prev => [cmd, ...prev])
        setHistoryIndex(-1)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            processCommand(input)
            setInput("")
        } else if (e.key === "ArrowUp") {
            e.preventDefault()
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1
                setHistoryIndex(newIndex)
                setInput(commandHistory[newIndex])
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault()
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1
                setHistoryIndex(newIndex)
                setInput(commandHistory[newIndex])
            } else {
                setHistoryIndex(-1)
                setInput("")
            }
        } else if (e.key === "Escape") {
            onClose()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-3xl bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Title Bar */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="ml-3 text-xs text-white/50 font-mono">nina@portfolio ~ zsh</span>
                            </div>
                            <button onClick={onClose} className="text-white/30 hover:text-white/60 transition-colors">
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Terminal Content */}
                        <div
                            ref={terminalRef}
                            className="h-[400px] overflow-y-auto p-4 font-mono text-sm"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((entry, i) => (
                                <div key={i} className="mb-2">
                                    {entry.command && (
                                        <div className="flex items-center gap-2 text-white/90">
                                            <span className="text-green-400">nina@portfolio</span>
                                            <span className="text-white/50">:</span>
                                            <span className="text-blue-400">~</span>
                                            <span className="text-white/50">$</span>
                                            <span>{entry.command}</span>
                                        </div>
                                    )}
                                    <div className="text-white/70 whitespace-pre-wrap">
                                        {Array.isArray(entry.output)
                                            ? entry.output.map((line, j) => <div key={j}>{line}</div>)
                                            : entry.output
                                        }
                                    </div>
                                </div>
                            ))}

                            {/* Input Line */}
                            <div className="flex items-center gap-2 text-white/90">
                                <span className="text-green-400">nina@portfolio</span>
                                <span className="text-white/50">:</span>
                                <span className="text-blue-400">~</span>
                                <span className="text-white/50">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent outline-none text-white caret-green-400"
                                    spellCheck={false}
                                    autoCapitalize="off"
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2 bg-[#2d2d2d] border-t border-white/10 text-[10px] text-white/30 font-mono">
                            Press <kbd className="px-1 py-0.5 bg-white/10 rounded">Esc</kbd> to close •
                            <kbd className="px-1 py-0.5 bg-white/10 rounded mx-1">↑</kbd>
                            <kbd className="px-1 py-0.5 bg-white/10 rounded">↓</kbd> for history
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
