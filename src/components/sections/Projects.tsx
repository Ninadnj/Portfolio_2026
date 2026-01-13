"use client"

import { ProjectCard } from "@/components/projects/ProjectCard"
import { BookingAgentVisual } from "@/components/projects/BookingAgentVisual"
import { ContentEngineVisual } from "@/components/projects/ContentEngineVisual"
import { useLanguage } from "@/context/LanguageContext"

export function Projects() {
    const { t } = useLanguage()

    const projectsConfig = [
        {
            image: "/colorizer-thumb.png",
            tags: ["TensorFlow", "Keras", "GAN", "Python"],
        },
        {
            visual: <BookingAgentVisual />,
            tags: ["n8n", "GPT-4", "LangChain", "Calendar API"],
        },
        {
            image: "/loyalty-program-thumb.jpg",
            tags: ["n8n", "GPT-4 Vision", "WhatsApp API", "Google Sheets"],
        },
        {
            visual: <ContentEngineVisual />,
            tags: ["n8n", "LLM", "APIs", "Automation"],
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
                            problem={project.problem}
                            approach={project.approach}
                            solution={project.solution}
                            outcome={project.outcome}
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
