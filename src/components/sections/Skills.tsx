"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import {
    Brain,
    Cpu,
    Workflow,
    Database,
    Cloud,
    Terminal,
    Layers,
    Sparkles,
    Bot,
    Network
} from "lucide-react"

interface Skill {
    name: string
    icon: React.ReactNode
}

interface SkillCategory {
    title: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        title: "AI / ML",
        skills: [
            { name: "TensorFlow", icon: <Brain className="h-3.5 w-3.5" /> },
            { name: "PyTorch", icon: <Cpu className="h-3.5 w-3.5" /> },
            { name: "Keras", icon: <Layers className="h-3.5 w-3.5" /> },
            { name: "Scikit-learn", icon: <Sparkles className="h-3.5 w-3.5" /> },
            { name: "Hugging Face", icon: <Bot className="h-3.5 w-3.5" /> },
        ]
    },
    {
        title: "LLM & Agents",
        skills: [
            { name: "LangChain", icon: <Network className="h-3.5 w-3.5" /> },
            { name: "OpenAI API", icon: <Sparkles className="h-3.5 w-3.5" /> },
            { name: "GPT-4 / Vision", icon: <Brain className="h-3.5 w-3.5" /> },
            { name: "RAG Pipelines", icon: <Database className="h-3.5 w-3.5" /> },
            { name: "MCP Protocol", icon: <Workflow className="h-3.5 w-3.5" /> },
        ]
    },
    {
        title: "Automation",
        skills: [
            { name: "n8n", icon: <Workflow className="h-3.5 w-3.5" /> },
            { name: "Python", icon: <Terminal className="h-3.5 w-3.5" /> },
            { name: "API Integration", icon: <Network className="h-3.5 w-3.5" /> },
            { name: "Zapier", icon: <Workflow className="h-3.5 w-3.5" /> },
        ]
    },
    {
        title: "Infrastructure",
        skills: [
            { name: "Docker", icon: <Cloud className="h-3.5 w-3.5" /> },
            { name: "Google Cloud", icon: <Cloud className="h-3.5 w-3.5" /> },
            { name: "HuggingFace Spaces", icon: <Sparkles className="h-3.5 w-3.5" /> },
            { name: "Vercel", icon: <Cloud className="h-3.5 w-3.5" /> },
        ]
    }
]

function SkillTag({ skill, index }: { skill: Skill; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/30 border border-border/50 hover:border-accent/30 hover:bg-muted/50 transition-all duration-200 group"
        >
            <span className="text-muted-foreground/60 group-hover:text-accent/70 transition-colors">
                {skill.icon}
            </span>
            <span className="text-[11px] font-mono lowercase tracking-wide text-foreground/70 group-hover:text-foreground transition-colors">
                {skill.name}
            </span>
        </motion.div>
    )
}

function SkillCategoryRow({ category, index }: { category: SkillCategory; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="space-y-3"
        >
            <span className="text-[10px] font-mono lowercase tracking-[0.15em] text-muted-foreground/50">
                {category.title.toLowerCase()}
            </span>
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                    <SkillTag key={skill.name} skill={skill} index={skillIndex} />
                ))}
            </div>
        </motion.div>
    )
}

export function Skills() {
    const { language } = useLanguage()

    return (
        <section id="skills" className="py-20 sm:py-24 border-t border-border">
            <div className="container mx-auto px-4 max-w-5xl">
                <span className="section-label">
                    {language === 'fr' ? '07 // compétences' : '07 // skills'}
                </span>

                <h2 className="accent-headline text-xl sm:text-2xl text-foreground mb-10">
                    {language === 'fr' ? 'stack technique' : 'technical stack'}
                </h2>

                <div className="space-y-8">
                    {skillCategories.map((category, index) => (
                        <SkillCategoryRow
                            key={category.title}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
