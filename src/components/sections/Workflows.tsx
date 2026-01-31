"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, Zap, Share2, Calendar, Send, Bot, User } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function Workflows() {
    const { t } = useLanguage()
    const [messages, setMessages] = useState([
        { role: 'assistant', content: t.workflows.chat_initial }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [currentTool, setCurrentTool] = useState<string | null>(null)
    const chatContainerRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom when messages change (with slight delay for rendering)
    useEffect(() => {
        const scrollToBottom = () => {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTo({
                    top: chatContainerRef.current.scrollHeight,
                    behavior: 'smooth'
                })
            }
        }

        // Small delay to ensure content is rendered
        const timer = setTimeout(scrollToBottom, 100)
        return () => clearTimeout(timer)
    }, [messages, isLoading, currentTool])

    // Update chat message when language changes
    useEffect(() => {
        setMessages([
            { role: 'assistant', content: t.workflows.chat_initial }
        ])
    }, [t.workflows.chat_initial])

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return

        const userMessage = input.trim()
        setInput('')

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }])
        setIsLoading(true)

        try {
            // Simulate MCP Tool Discovery
            await new Promise(r => setTimeout(r, 600))
            setCurrentTool('SEARCHING LOCAL_FILES_MCP...')
            await new Promise(r => setTimeout(r, 800))
            setCurrentTool('EXECUTING WEB_SEARCH_MCP...')
            await new Promise(r => setTimeout(r, 600))
            setCurrentTool('OPTIMIZING RESPONSE...')
            await new Promise(r => setTimeout(r, 400))
            setCurrentTool(null)

            // Send to n8n webhook
            const response = await fetch('https://n8n.ninadnj.me/webhook/portfolio-chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ chatInput: userMessage })
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            // Extract response from various possible formats
            const botResponse = data.output || data.response || data.text ||
                (data[0]?.output) ||
                "I received your message but couldn't generate a response. Please try again."

            setMessages(prev => [...prev, { role: 'assistant', content: botResponse }])
        } catch (error) {
            console.error('Webhook error:', error)
            // Fallback response
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm currently experiencing connection issues. Please try reaching out via email at ninodoinjashvili@gmail.com or check back later."
            }])
        } finally {
            setIsLoading(false)
            setCurrentTool(null)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <section id="workflows" className="py-24 sm:py-32 bg-secondary/30 border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">{t.workflows.section_label}</span>
                <div className="mb-16 max-w-xl">
                    <h3 className="accent-headline text-2xl sm:text-3xl text-foreground mb-6">{t.workflows.headline}</h3>
                    <p className="body-text">
                        {t.workflows.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Chat Interface */}
                    <div className="lg:col-span-3 glass-card rounded-2xl overflow-hidden flex flex-col h-[550px] shadow-lg">
                        <div className="p-4 border-b border-border bg-card/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                <span className="text-[10px] font-mono lowercase tracking-[0.1em] text-foreground">{t.workflows.live_demo}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-accent/10 border border-accent/20">
                                    <span className="text-[8px] font-mono uppercase tracking-widest text-accent font-bold">mcp integrated</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 border border-border/50">
                                    <Zap className="h-3 w-3 text-accent" />
                                    <span className="text-[9px] font-mono lowercase tracking-wider text-muted-foreground">n8n</span>
                                </div>
                                <Bot className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </div>

                        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth">
                            <AnimatePresence>
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
                                {currentTool && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-accent/5 border border-accent/20 px-4 py-2 rounded-lg flex items-center gap-3">
                                            <div className="flex gap-1">
                                                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                                            </div>
                                            <span className="text-[10px] font-mono text-accent uppercase tracking-[0.1em]">
                                                {currentTool}
                                            </span>
                                        </div>
                                    </motion.div>
                                )}
                                {isLoading && !currentTool && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-muted/50 border border-border p-5 rounded-2xl flex items-center gap-2">
                                            <div className="flex gap-1">
                                                <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                                                <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                                                <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="p-6 bg-card/50 border-t border-border">
                            <div className="space-y-2">
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder={t.workflows.input_placeholder}
                                        disabled={isLoading}
                                        className="flex-1 bg-background border border-border rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all lowercase disabled:opacity-50 placeholder:text-muted-foreground/50"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        disabled={isLoading || !input.trim()}
                                        className="h-11 w-11 flex items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-sm"
                                        title="Send message (Enter)"
                                    >
                                        <Send className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between px-1">
                                    <span className="text-[9px] font-mono text-muted-foreground/50 lowercase tracking-wide">
                                        press enter to send
                                    </span>
                                    {input.trim() && !isLoading && (
                                        <span className="text-[9px] font-mono text-accent/70 lowercase tracking-wide">
                                            ready to send
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Automation Visual */}
                    <div className="lg:col-span-2 glass-card rounded-2xl p-8 h-full border-border bg-card/20">
                        <div className="space-y-10">
                            <div>
                                <span className="text-[10px] font-mono lowercase tracking-[0.1em] text-accent mb-4 block">{t.workflows.system_logic}</span>
                                <div className="aspect-square bg-muted/30 rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-[0.05]" />
                                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-xl">
                                            <Cpu className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 w-full">
                                            {[
                                                { label: t.workflows.nodes.intent, icon: <Zap className="h-3 w-3" /> },
                                                { label: t.workflows.nodes.sync, icon: <Share2 className="h-3 w-3" /> },
                                                { label: t.workflows.nodes.vector, icon: <Cpu className="h-3 w-3" /> },
                                                { label: t.workflows.nodes.api, icon: <Share2 className="h-3 w-3" /> }
                                            ].map((node, i) => (
                                                <div key={i} className="bg-background/80 border border-border rounded-lg p-3 flex items-center gap-2">
                                                    <div className="text-accent">{node.icon}</div>
                                                    <span className="text-[10px] font-mono lowercase tracking-wide">{node.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <span className="text-[10px] font-mono lowercase tracking-[0.1em] text-muted-foreground block">{t.workflows.capabilities}</span>
                                <div className="space-y-3">
                                    {t.workflows.cap_items.map((cap, i) => (
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
