export type Language = 'en' | 'fr';

export const translations = {
    en: {
        navbar: {
            about: "about",
            ai_agents: "ai agents",
            workflows: "workflows",
            start_project: "start a project"
        },
        hero: {
            portfolio_year: "portfolio 2026",
            description: "building autonomous agents and intelligent workflows that eliminate manual overhead. systems designed for clarity.",
            start_project: "start a project",
            view_case_studies: "view case studies"
        },
        about: {
            section_label: "01 // Background",
            headline: "i design systems that turn complexity into something quiet.",
            p1: "ai agents.",
            p2: "autonomous workflows.",
            p3: "clear architecture.",
            description: "from data and models to automation, everything is built to reduce friction — not create it.",
            less_is_more: "less is more.",
            clarity: "clarity over complexity.",
            location_label: "location",
            location_value: "Paris — Worldwide"
        },
        workflows: {
            section_label: "02 // interactive interface",
            headline: "autonomous workflow logic",
            description: "demonstrating specialized intent detection and autonomous response loops. systems designed to orchestrate complex tasks across multiple apis.",
            live_demo: "live system demo",
            chat_initial: "hi! i'm nina's ai assistant. i can help you with project inquiries, technical skills, and contact information. how can i assist you today?",
            input_placeholder: "inquire about technical architecture...",
            system_logic: "system logic",
            capabilities: "capabilities",
            cap_items: [
                "natural language understanding",
                "context-aware rag pipelines",
                "autonomous api orchestration",
                "multi-channel message routing"
            ],
            nodes: {
                intent: "intent",
                sync: "sync",
                vector: "vector",
                api: "api"
            }
        },
        projects: {
            section_label: "03 // selected case studies",
            headline: "ai & agentic workflows",
            description: "from autonomous agents to intelligent automation pipelines. each project represents clarity and precision.",
            launch_site: "launch site",
            case_notes: "case notes",
            items: [
                {
                    title: "Autonomous AI Booking Agent",
                    description: "A production-grade agentic workflow that manages the entire appointment lifecycle. It understands intent, checks real-time availability, and books into Google Calendar autonomously.",
                    caseNotes: "Built as an end-to-end autonomous agent using n8n orchestration..."
                },
                {
                    title: "Content Repurposing Engine",
                    description: "A high-performance automation workflow that transforms a single content input into multiple platform-optimized formats. Eliminates manual rewriting across channels.",
                    caseNotes: "Designed a multi-channel distribution engine that scales content creation without increasing manual overhead."
                },
                {
                    title: "Deep Learning Image Colorizer",
                    description: "Implements a conditional GAN based on the Pix2Pix architecture, using a U-Net generator and a PatchGAN discriminator to perform grayscale-to-color image translation.",
                    caseNotes: "Developed a deep generative model specialized in transforming grayscale archives into vibrant imagery..."
                },
                {
                    title: "THE MR Studio",
                    description: "Premium salon booking system — Streamlined appointments, reduced no-shows by 75%. Created a seamless appointment flow with calendar integration and automated reminders.",
                    caseNotes: "Designed and developed a premium booking system for a high-end salon..."
                },
                {
                    title: "AlpineStay Luxury",
                    description: "Premium cabin booking platform — Quiet luxury aesthetic, cinematic scrolls. Focused on atmosphere and a seamless booking flow for high-end alpine retreats.",
                    caseNotes: "Designed a quiet luxury booking experience with cinematic scroll reveals..."
                },
                {
                    title: "Booking Application Demo",
                    description: "Full-featured booking system for service businesses. Handles appointment scheduling, calendar integration, and customer management. Reduced admin time by 60%.",
                    caseNotes: "Created a full-stack booking system with real-time availability and automated notifications."
                }
            ]
        },
        contact: {
            section_label: "04 // contact",
            email_value: "contact via mail",
            linkedin_value: "connect professionally",
            whatsapp_value: "direct message"
        },
        footer: {
            top: "top",
            rights: "© 2026 all rights reserved.",
            location: "Paris, France"
        }
    },
    fr: {
        navbar: {
            about: "à propos",
            ai_agents: "agents ia",
            workflows: "workflows",
            start_project: "lancer un projet"
        },
        hero: {
            portfolio_year: "portfolio 2026",
            description: "construction d'agents autonomes et de workflows intelligents qui éliminent les tâches manuelles. des systèmes conçus pour la clarté.",
            start_project: "lancer un projet",
            view_case_studies: "voir les études de cas"
        },
        about: {
            section_label: "01 // Contexte",
            headline: "je conçois des systèmes qui transforment la complexité en quelque chose de calme.",
            p1: "agents ia.",
            p2: "workflows autonomes.",
            p3: "architecture claire.",
            description: "des données et modèles à l'automatisation, tout est construit pour réduire les frictions — pas en créer.",
            less_is_more: "moins c'est mieux.",
            clarity: "la clarté avant la complexité.",
            location_label: "lieu",
            location_value: "Paris — Monde"
        },
        workflows: {
            section_label: "02 // interface interactive",
            headline: "logique de workflow autonome",
            description: "démonstration de détection d'intention spécialisée et boucles de réponse autonomes. systèmes conçus pour orchestrer des tâches complexes via plusieurs api.",
            live_demo: "démo système live",
            chat_initial: "bonjour! je suis l'assistant ia de nina. je peux vous aider avec vos demandes de projets, compétences techniques, et contacts. comment puis-je vous aider?",
            input_placeholder: "renseignez-vous sur l'architecture technique...",
            system_logic: "logique système",
            capabilities: "capacités",
            cap_items: [
                "compréhension du langage naturel",
                "pipelines rag conscients du contexte",
                "orchestration api autonome",
                "routage de messages multi-canaux"
            ],
            nodes: {
                intent: "intention",
                sync: "sync",
                vector: "vecteur",
                api: "api"
            }
        },
        projects: {
            section_label: "03 // études de cas sélectionnées",
            headline: "ia & workflows agentiques",
            description: "des agents autonomes aux pipelines d'automatisation intelligente. chaque projet représente clarté et précision.",
            launch_site: "voir le site",
            case_notes: "notes de cas",
            items: [
                {
                    title: "Agent de Réservation IA Autonome",
                    description: "Un workflow agentique de niveau production qui gère tout le cycle de rendez-vous. Il comprend l'intention, vérifie la disponibilité en temps réel et réserve dans Google Calendar de manière autonome.",
                    caseNotes: "Construit comme un agent autonome de bout en bout utilisant l'orchestration n8n..."
                },
                {
                    title: "Moteur de Réutilisation de Contenu",
                    description: "Un workflow d'automatisation haute performance qui transforme une entrée de contenu unique en plusieurs formats optimisés pour les plateformes. Élimine la réécriture manuelle sur les canaux.",
                    caseNotes: "Conception d'un moteur de distribution multi-canaux qui gère la création de contenu sans augmenter la charge manuelle."
                },
                {
                    title: "Coloriseur d'Image Deep Learning",
                    description: "Implémente un GAN conditionnel basé sur l'architecture Pix2Pix, utilisant un générateur U-Net et un discriminateur PatchGAN pour effectuer la traduction d'image noir et blanc vers couleur.",
                    caseNotes: "Développement d'un modèle génératif profond spécialisé dans la transformation d'archives en niveaux de gris en imagerie vibrante..."
                },
                {
                    title: "THE MR Studio",
                    description: "Système de réservation de salon premium — Rendez-vous rationalisés, réduction des absences de 75%. Création d'un flux de rendez-vous fluide avec intégration de calendrier et rappels automatisés.",
                    caseNotes: "Conception et développement d'un système de réservation premium pour un salon haut de gamme..."
                },
                {
                    title: "AlpineStay Luxury",
                    description: "Plateforme de réservation de chalets premium — Esthétique luxe calme, défilements cinématiques. Axé sur l'atmosphère et un flux de réservation fluide pour des retraites alpines haut de gamme.",
                    caseNotes: "Conception d'une expérience de réservation luxe calme avec des révélations cinématiques au défilement..."
                },
                {
                    title: "Démonstration d'Application de Réservation",
                    description: "Système de réservation complet pour les entreprises de services. Gère la prise de rendez-vous, l'intégration du calendrier et la gestion des clients. Réduction du temps administratif de 60%.",
                    caseNotes: "Création d'un système de réservation full-stack avec disponibilité en temps réel et notifications automatisées."
                }
            ]
        },
        contact: {
            section_label: "04 // contact",
            email_value: "contact par e-mail",
            linkedin_value: "connexion professionnelle",
            whatsapp_value: "message direct"
        },
        footer: {
            top: "haut",
            rights: "© 2026 tous droits réservés.",
            location: "Paris, France"
        }
    }
};
