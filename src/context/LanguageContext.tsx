"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { translations, Language } from "@/lib/translations"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") return "en"

        const savedLang = localStorage.getItem("language") as Language | null
        return savedLang === "en" || savedLang === "fr" ? savedLang : "en"
    })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, [])

    // Update local storage and html tag when language changes
    useEffect(() => {
        if (mounted) {
            localStorage.setItem("language", language)
            document.documentElement.lang = language
        }
    }, [language, mounted])

    const value = {
        language,
        setLanguage,
        t: translations[language]
    }

    return (
        <LanguageContext.Provider value={value}>
            {!mounted ? (
                <div className="invisible">{children}</div>
            ) : (
                children
            )}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
