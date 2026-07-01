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
    Network,
    Server,
    GitBranch,
    Table,
    Boxes,
    MessageSquare,
} from "lucide-react"

interface Skill {
    name: string
    icon: React.ReactNode
}

interface SkillCategory {
    title: string
    skills: Skill[]
}

const sz = "h-3.5 w-3.5"

const skillCategories: SkillCategory[] = [
    {
        title: "AI & LLM Engineering",
        skills: [
            { name: "OpenAI API / GPT-4o", icon: <Sparkles className={sz} /> },
            { name: "Anthropic Claude", icon: <Bot className={sz} /> },
            { name: "Google Gemini", icon: <Brain className={sz} /> },
            { name: "LLM APIs", icon: <Cpu className={sz} /> },
            { name: "LangChain", icon: <Network className={sz} /> },
            { name: "Claude Agent SDK", icon: <Bot className={sz} /> },
            { name: "MCP Protocol", icon: <Workflow className={sz} /> },
            { name: "RAG Pipelines", icon: <Database className={sz} /> },
            { name: "Embeddings", icon: <Database className={sz} /> },
            { name: "Vector Search", icon: <Network className={sz} /> },
            { name: "Agentic Workflows", icon: <Bot className={sz} /> },
            { name: "Tool / Function Calling", icon: <Workflow className={sz} /> },
            { name: "Structured Outputs", icon: <Terminal className={sz} /> },
            { name: "Prompt Engineering", icon: <Terminal className={sz} /> },
        ],
    },
    {
        title: "Automation & Integrations",
        skills: [
            { name: "n8n", icon: <Workflow className={sz} /> },
            { name: "Workflow Automation", icon: <Network className={sz} /> },
            { name: "REST API Integration", icon: <Boxes className={sz} /> },
            { name: "Webhooks", icon: <Server className={sz} /> },
            { name: "Google Sheets API", icon: <Table className={sz} /> },
            { name: "Google Calendar API", icon: <Table className={sz} /> },
            { name: "Meta Graph API", icon: <Network className={sz} /> },
            { name: "WhatsApp API", icon: <MessageSquare className={sz} /> },
            { name: "Telegram Bot API", icon: <Bot className={sz} /> },
            { name: "Twilio / SMS", icon: <Network className={sz} /> },
            { name: "Human-in-the-loop", icon: <GitBranch className={sz} /> },
            { name: "Zapier", icon: <Workflow className={sz} /> },
        ],
    },
    {
        title: "Machine Learning",
        skills: [
            { name: "TensorFlow", icon: <Brain className={sz} /> },
            { name: "PyTorch", icon: <Cpu className={sz} /> },
            { name: "Keras", icon: <Layers className={sz} /> },
            { name: "Scikit-learn", icon: <Sparkles className={sz} /> },
            { name: "Hugging Face", icon: <Bot className={sz} /> },
            { name: "Computer Vision", icon: <Cpu className={sz} /> },
            { name: "NLP", icon: <Network className={sz} /> },
            { name: "Model Evaluation", icon: <GitBranch className={sz} /> },
            { name: "GANs", icon: <Layers className={sz} /> },
            { name: "ML Pipelines", icon: <Workflow className={sz} /> },
        ],
    },
    {
        title: "Backend / Deployment",
        skills: [
            { name: "Python", icon: <Terminal className={sz} /> },
            { name: "FastAPI", icon: <Server className={sz} /> },
            { name: "TypeScript", icon: <Terminal className={sz} /> },
            { name: "Next.js / React", icon: <Layers className={sz} /> },
            { name: "REST APIs", icon: <Network className={sz} /> },
            { name: "Docker", icon: <Boxes className={sz} /> },
            { name: "Node.js", icon: <Server className={sz} /> },
            { name: "Google Cloud Run", icon: <Cloud className={sz} /> },
            { name: "Vercel", icon: <Cloud className={sz} /> },
            { name: "HF Spaces", icon: <Sparkles className={sz} /> },
            { name: "Logging / Retries", icon: <GitBranch className={sz} /> },
            { name: "JSON / Schema Validation", icon: <Terminal className={sz} /> },
        ],
    },
    {
        title: "Data",
        skills: [
            { name: "SQL", icon: <Database className={sz} /> },
            { name: "Pandas", icon: <Table className={sz} /> },
            { name: "Data Pipelines", icon: <Network className={sz} /> },
            { name: "Google Sheets API", icon: <Table className={sz} /> },
            { name: "NumPy", icon: <Cpu className={sz} /> },
            { name: "Data Cleaning", icon: <Sparkles className={sz} /> },
            { name: "Feature Engineering", icon: <Layers className={sz} /> },
            { name: "Knowledge Bases", icon: <Database className={sz} /> },
        ],
    },
    {
        title: "AI Dev Tools",
        skills: [
            { name: "Claude Code", icon: <Bot className={sz} /> },
            { name: "Codex", icon: <Terminal className={sz} /> },
            { name: "Cursor", icon: <Sparkles className={sz} /> },
            { name: "Git", icon: <GitBranch className={sz} /> },
            { name: "GitHub", icon: <GitBranch className={sz} /> },
            { name: "CLI Tools", icon: <Terminal className={sz} /> },
            { name: "Streamlit", icon: <Layers className={sz} /> },
        ],
    },
]

function SkillTag({ skill, index }: { skill: Skill; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
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

function SkillCategoryBlock({ category, index }: { category: SkillCategory; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="space-y-3 py-6 border-b border-border/60 last:border-b-0 sm:border-b-0 sm:py-0"
        >
            <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono lowercase tracking-[0.15em] text-accent/70">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] font-mono lowercase tracking-[0.12em] text-foreground/80">
                    {category.title.toLowerCase()}
                </span>
                <span className="flex-1 h-px bg-border/50" />
            </div>
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
        <section id="skills" className="py-24 sm:py-32 border-t border-border">
            <div className="container mx-auto px-6 max-w-5xl">
                <span className="section-label">
                    {language === "fr" ? "04 // stack technique" : "04 // technical stack"}
                </span>

                <h2 className="accent-headline text-2xl sm:text-3xl text-foreground mb-12 lowercase">
                    {language === "fr" ? "stack technique" : "technical stack"}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                    {skillCategories.map((category, index) => (
                        <SkillCategoryBlock key={category.title} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
