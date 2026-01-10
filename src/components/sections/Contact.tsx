"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, MessageSquare, ArrowRight } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24 sm:py-32 border-t border-border bg-secondary/10">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">04 // contact</span>
                <div className="max-w-lg mx-auto">
                    <div className="grid grid-cols-1 gap-3">
                        {[
                            { label: "email", value: "contact via mail", href: "mailto:ninodoinjashvili@gmail.com", icon: <Mail className="h-4 w-4" /> },
                            { label: "linkedin", value: "connect professionally", href: "https://www.linkedin.com/in/nina-doinjashvili-8928815a/", icon: <Linkedin className="h-4 w-4" /> },
                            { label: "whatsapp", value: "direct message", href: "https://w.app/nina", icon: <MessageSquare className="h-4 w-4" /> }
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="group flex items-center justify-between p-5 bg-background border border-border rounded-xl hover:border-accent/50 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-0.5 text-left">
                                        <span className="text-[10px] font-mono lowercase tracking-[0.1em] text-muted-foreground">{item.label}</span>
                                        <p className="text-sm text-foreground" style={{ fontWeight: 500 }}>{item.value}</p>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
