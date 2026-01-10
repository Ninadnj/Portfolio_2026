"use client"

import { ProjectCard } from "@/components/projects/ProjectCard"
import { BookingAgentVisual } from "@/components/projects/BookingAgentVisual"
import { ContentEngineVisual } from "@/components/projects/ContentEngineVisual"
import { useLanguage } from "@/context/LanguageContext"

export function Projects() {
    const { t } = useLanguage()

    const projectsConfig = [
        {
            visual: <BookingAgentVisual />,
            tags: ["n8n", "GPT-4", "LangChain", "Calendar API"],
            liveUrl: "#",
        },
        {
            visual: <ContentEngineVisual />,
            tags: ["n8n", "LLM", "APIs", "Automation"],
            liveUrl: "#",
        },
        {
            image: "/colorizer-thumb.png",
            tags: ["TensorFlow", "Keras", "GAN", "Python"],
        },
        {
            image: "/booking-agent-thumb.jpg",
            tags: ["React", "Node.js", "Calendar API", "SMS Reminders"],
            liveUrl: "https://themrstudio.net",
            iframeUrl: "https://themrstudio.net",
        },
        {
            image: "/booking-agent-workflow.jpg",
            tags: ["Next.js", "Framer Motion", "Tailwind", "Responsive"],
            liveUrl: "https://ninadnj.github.io/AlpineStay/",
            iframeUrl: "https://ninadnj.github.io/AlpineStay/",
        },
        {
            image: "/ai-agent-thumb.jpg",
            tags: ["React", "Express", "MongoDB", "Auth"],
            liveUrl: "https://ninadnj.github.io/bookingwebapp/",
            iframeUrl: "https://ninadnj.github.io/bookingwebapp/",
        }
    ]

    return (
        <section id="demos" className="py-24 sm:py-32 border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <span className="section-label">{t.projects.section_label}</span>
                <div className="mb-20 max-w-xl">
                    <h2 className="accent-headline text-2xl sm:text-3xl text-foreground mb-6">{t.projects.headline}</h2>
                    <p className="body-text">
                        {t.projects.description}
                    </p>
                </div>

                <div className="space-y-32">
                    {t.projects.items.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            caseNotes={project.caseNotes}
                            {...projectsConfig[index]}
                            isReversed={index % 2 !== 0}
                            launchSiteLabel={t.projects.launch_site}
                            caseNotesLabel={t.projects.case_notes}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
