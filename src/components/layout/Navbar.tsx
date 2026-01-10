"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher"
import { useLanguage } from "@/context/LanguageContext"

export function Navbar() {
    const { theme, setTheme } = useTheme()
    const { t } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border">
            <nav className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
                <Link href="/" className="text-xl tracking-tight text-foreground" style={{ fontWeight: 500 }}>
                    Nina<span className="text-accent">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { label: t.navbar.about, href: "#about" },
                        { label: t.navbar.ai_agents, href: "#workflows" },
                        { label: t.navbar.workflows, href: "#demos" }
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[12px] lowercase tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors"
                            style={{ fontWeight: 400 }}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="h-4 w-[1px] bg-border mx-1" />

                    <LanguageSwitcher />

                    <div className="h-4 w-[1px] bg-border mx-1" />

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>

                    <Button className="btn-premium rounded-full lowercase" asChild>
                        <Link href="#contact">{t.navbar.start_project}</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <LanguageSwitcher />
                    <button className="p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-8 flex flex-col gap-6 items-center"
                    >
                        <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-sm lowercase tracking-wide">{t.navbar.about}</Link>
                        <Link href="#workflows" onClick={() => setIsMenuOpen(false)} className="text-sm lowercase tracking-wide">{t.navbar.ai_agents}</Link>
                        <Link href="#demos" onClick={() => setIsMenuOpen(false)} className="text-sm lowercase tracking-wide">{t.navbar.workflows}</Link>
                        <Button className="btn-premium w-full rounded-full lowercase" asChild>
                            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>{t.navbar.start_project}</Link>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
