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
        title: "Building a Loyalty Program with GPT-4 Vision",
        excerpt: "How I used AI vision to automate receipt scanning and points calculation for a flower shop. From OCR challenges to multi-channel messaging integration.",
        date: "2026-01-10",
        tags: ["GPT-4 Vision", "n8n", "Automation"],
        readTime: "5 min",
        slug: "loyalty-program-gpt4-vision"
    },
    {
        title: "From GAN Theory to Production: Image Colorization",
        excerpt: "A deep dive into implementing Pix2Pix architecture for grayscale-to-color translation. Lessons learned from training conditional GANs.",
        date: "2025-12-15",
        tags: ["Deep Learning", "GAN", "TensorFlow"],
        readTime: "8 min",
        slug: "gan-image-colorization"
    },
    {
        title: "Designing Autonomous AI Agents with LangChain",
        excerpt: "Practical patterns for building production-ready AI agents. Intent classification, context management, and graceful fallbacks.",
        date: "2025-11-20",
        tags: ["LangChain", "AI Agents", "n8n"],
        readTime: "6 min",
        slug: "autonomous-ai-agents-langchain"
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
