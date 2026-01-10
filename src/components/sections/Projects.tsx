"use client"

import { ProjectCard } from "@/components/projects/ProjectCard"
import { BookingAgentVisual } from "@/components/projects/BookingAgentVisual"
import { ContentEngineVisual } from "@/components/projects/ContentEngineVisual"

const projects = [
    {
        title: "Autonomous AI Booking Agent",
        description: "A production-grade agentic workflow that manages the entire appointment lifecycle. It understands intent, checks real-time availability, and books into Google Calendar autonomously.",
        visual: <BookingAgentVisual />,
        tags: ["n8n", "GPT-4", "LangChain", "Calendar API"],
        liveUrl: "#",
        caseNotes: "Built as an end-to-end autonomous agent using n8n orchestration..."
    },
    {
        title: "Content Repurposing Engine",
        description: "A high-performance automation workflow that transforms a single content input into multiple platform-optimized formats. Eliminates manual rewriting across channels.",
        visual: <ContentEngineVisual />,
        tags: ["n8n", "LLM", "APIs", "Automation"],
        liveUrl: "#",
        caseNotes: "Designed a multi-channel distribution engine that scales content creation without increasing manual overhead."
    },
    {
        title: "Deep Learning Image Colorizer",
        description: "Implements a conditional GAN based on the Pix2Pix architecture, using a U-Net generator and a PatchGAN discriminator to perform grayscale-to-color image translation.",
        image: "/colorizer-thumb.png",
        tags: ["TensorFlow", "Keras", "GAN", "Python"],
        caseNotes: "Developed a deep generative model specialized in transforming grayscale archives into vibrant imagery..."
    },
    {
        title: "THE MR Studio",
        description: "Premium salon booking system — Streamlined appointments, reduced no-shows by 75%. Created a seamless appointment flow with calendar integration and automated reminders.",
        image: "/booking-agent-thumb.jpg",
        tags: ["React", "Node.js", "Calendar API", "SMS Reminders"],
        liveUrl: "https://themrstudio.net",
        iframeUrl: "https://themrstudio.net",
        caseNotes: "Designed and developed a premium booking system for a high-end salon..."
    },
    {
        title: "AlpineStay Luxury",
        description: "Premium cabin booking platform — Quiet luxury aesthetic, cinematic scrolls. Focused on atmosphere and a seamless booking flow for high-end alpine retreats.",
        image: "/booking-agent-workflow.jpg",
        tags: ["Next.js", "Framer Motion", "Tailwind", "Responsive"],
        liveUrl: "https://ninadnj.github.io/AlpineStay/",
        iframeUrl: "https://ninadnj.github.io/AlpineStay/",
        caseNotes: "Designed a quiet luxury booking experience with cinematic scroll reveals..."
    },
    {
        title: "Booking Application Demo",
        description: "Full-featured booking system for service businesses. Handles appointment scheduling, calendar integration, and customer management. Reduced admin time by 60%.",
        image: "/ai-agent-thumb.jpg",
        tags: ["React", "Express", "MongoDB", "Auth"],
        liveUrl: "https://ninadnj.github.io/bookingwebapp/",
        iframeUrl: "https://ninadnj.github.io/bookingwebapp/",
        caseNotes: "Created a full-stack booking system with real-time availability and automated notifications."
    }
]

export function Projects() {
    return (
        <section id="demos" className="py-24 sm:py-32 border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">03 // selected case studies</span>
                <div className="mb-20 max-w-xl">
                    <h2 className="accent-headline text-2xl sm:text-3xl text-foreground mb-6">ai & agentic workflows</h2>
                    <p className="body-text">
                        from autonomous agents to intelligent automation pipelines. each project represents clarity and precision.
                    </p>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
