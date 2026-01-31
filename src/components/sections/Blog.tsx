"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Calendar } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

interface BlogPost {
    title: string
    excerpt: string
    date: string
    tags: string[]
    readTime: string
    slug: string
}

const blogPosts: BlogPost[] = [
    {
        title: "The 3-Layer Agentic Architecture: Moving Beyond Probabilistic UI",
        excerpt: "A deep dive into separating Directive (strategy), Orchestration (intent), and Execution (mechanism) to build reliable, production-grade AI systems.",
        date: "2026-01-28",
        tags: ["Architecture", "System Design", "AI Strategy"],
        readTime: "12 min",
        slug: "three-layer-agentic-architecture"
    },
    {
        title: "Deterministic Control in Generative Workflows",
        excerpt: "Strategies for integrating MCP-enabled tools and local verification scripts to eliminate hallucinations in high-stakes automation pipelines.",
        date: "2026-01-15",
        tags: ["MCP", "Reliability", "Automation"],
        readTime: "8 min",
        slug: "deterministic-generative-workflows"
    },
    {
        title: "Optimizing Latency in Multi-Agent Reasoning Chains",
        excerpt: "Performance engineering for complex n8n and LangGraph pipelines—how to manage token usage and concurrent tool execution for real-time speed.",
        date: "2026-01-05",
        tags: ["Performance", "n8n", "LangGraph"],
        readTime: "10 min",
        slug: "optimizing-agent-latency"
    },
    {
        title: "Tool Discovery Protocols: Mapping MCP to Legacy APIs",
        excerpt: "A technical guide on building standardized interfaces for LLM tool selection using the Model Context Protocol across enterprise infrastructure.",
        date: "2025-12-20",
        tags: ["MCP", "API Design", "Enterprise"],
        readTime: "7 min",
        slug: "mcp-legacy-api-integration"
    }
]

function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    }).toLowerCase()
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <Link href={`#`} className="block">
                <div className="p-6 rounded-2xl border border-border bg-background hover:border-accent/30 hover:bg-muted/30 transition-all duration-300">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="px-2 py-0.5 font-mono text-[9px] lowercase tracking-[0.08em] bg-accent/10 text-accent border-none rounded"
                            >
                                {tag.toLowerCase()}
                            </Badge>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-accent transition-colors lowercase tracking-tight flex items-start gap-2">
                        {post.title.toLowerCase()}
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt.toLowerCase()}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[11px] text-muted-foreground/60 font-mono">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.date)}
                        </span>
                        <span>·</span>
                        <span>{post.readTime} read</span>
                    </div>
                </div>
            </Link>
        </motion.article>
    )
}

export function Blog() {
    const { t } = useLanguage()

    return (
        <section id="blog" className="py-24 sm:py-32 border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">{t.blog?.section_label || "05 // writing"}</span>
                <div className="mb-16 max-w-xl">
                    <h2 className="accent-headline text-2xl sm:text-3xl text-foreground mb-6">
                        {t.blog?.headline || "technical notes"}
                    </h2>
                    <p className="body-text">
                        {t.blog?.description || "thoughts on building ml systems, ai automation, and lessons from production."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>

                {/* Coming Soon Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-xs text-muted-foreground/50 font-mono lowercase tracking-wider">
                        full articles coming soon — subscribe for updates
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
