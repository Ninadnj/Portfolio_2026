"use client"

import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex items-center gap-2 text-sm">
            <button
                onClick={() => setLanguage("en")}
                className={`transition-colors lowercase font-medium ${language === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                en
            </button>
            <span className="text-muted-foreground/30">/</span>
            <button
                onClick={() => setLanguage("fr")}
                className={`transition-colors lowercase font-medium ${language === "fr" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                fr
            </button>
        </div>
    )
}
