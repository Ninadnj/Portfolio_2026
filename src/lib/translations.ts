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
            headline: "Applied AI Engineer | Machine Learning Systems & AI Automation",
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
            section_label: "03 // selected projects",
            headline: "ml & ai automation",
            description: "production-ready systems from model development to deployment. each project demonstrates end-to-end problem solving.",
            launch_site: "launch site",
            case_notes: "case notes",
            items: [
                {
                    title: "Deep Learning Image Colorizer",
                    problem: "Grayscale images require time-consuming manual colorization, limiting restoration of historical archives.",
                    approach: "Implemented a conditional GAN using Pix2Pix architecture with U-Net generator and PatchGAN discriminator for image-to-image translation.",
                    solution: "Built an end-to-end ML pipeline with TensorFlow/Keras — from data preprocessing to model training and inference.",
                    outcome: "Demonstrated practical application of generative models, strengthening experience in deep learning architectures and image processing."
                },
                {
                    title: "Autonomous AI Booking Agent",
                    problem: "Manual appointment scheduling creates operational overhead and requires constant human intervention.",
                    approach: "Designed an agentic workflow using n8n with GPT-4 for intent classification and LangChain for context-aware responses.",
                    solution: "Production-grade agent that autonomously handles booking requests, checks real-time availability, and syncs with Google Calendar API.",
                    outcome: "Achieved end-to-end task automation, eliminating manual booking overhead with autonomous decision-making."
                },
                {
                    title: "Loyalty Program Automation",
                    problem: "Customer loyalty programs require manual receipt verification, points tracking, and reward distribution.",
                    approach: "Integrated GPT-4 Vision for receipt OCR with automated points calculation logic and multi-channel messaging APIs.",
                    solution: "Deployed n8n workflow connecting WhatsApp/Telegram, OpenAI Vision API, and Google Sheets for seamless loyalty management.",
                    outcome: "Created production-ready automation handling customer engagement without human intervention — bridging AI vision with business logic."
                },
                {
                    title: "Content Repurposing Engine",
                    problem: "Creating platform-optimized content across multiple channels is inefficient and doesn't scale.",
                    approach: "Built a multi-channel transformation engine using LLM APIs with platform-specific prompting strategies.",
                    solution: "Automated workflow that transforms single content input into multiple optimized formats for different platforms.",
                    outcome: "Scaled content production without increasing manual overhead — demonstrating practical LLM integration for business automation."
                },
                {
                    title: "Unified Agentic Engine",
                    problem: "Unstructured AI implementations lead to probabilistic failures and lack of deterministic control in production.",
                    approach: "Engineered a 3-layer architecture (Directive, Orchestration, Execution) to separate strategy from mechanism, integrated with MCP for tool discovery.",
                    solution: "A robust framework where directives define strategy, orchestration handles intent, and execution scripts perform deterministic actions.",
                    outcome: "Established a scalable standard for building reliable, self-annealing agents with clear brand isolation and operational protocols."
                },
                {
                    title: "AI Video-as-Code Architect",
                    problem: "Manual video production for technical demos and personal branding is slow and inconsistent.",
                    approach: "Developed a 'Video-as-Code' engine using MoviePy to procedurally generate brand-aligned video assets from technical specs.",
                    solution: "Automated pipeline for high-authority intros, project spotlights, and UI walkthroughs with unified brand calibration.",
                    outcome: "Reduced video creation time by 90% while ensuring 100% adherence to Minimal Slate brand guidelines."
                }
            ]
        },
        sideProjects: {
            section_label: "04 // side projects",
            headline: "web development",
            description: "full-stack applications and design-focused builds. practical systems deployed for real clients.",
            items: [
                {
                    title: "THE MR Studio",
                    description: "premium salon booking system — streamlined appointments, reduced no-shows by 75%. seamless calendar integration and automated sms reminders."
                },
                {
                    title: "AlpineStay Luxury",
                    description: "premium cabin booking platform — quiet luxury aesthetic with cinematic scroll reveals. focused on atmosphere and seamless booking flow."
                },
                {
                    title: "Booking Application Demo",
                    description: "full-featured booking system for service businesses. handles scheduling, calendar integration, and customer management. reduced admin time by 60%."
                }
            ]
        },
        blog: {
            section_label: "05 // writing",
            headline: "technical notes",
            description: "thoughts on building ml systems, ai automation, and lessons from production."
        },
        contact: {
            section_label: "06 // contact",
            email_value: "contact via mail",
            linkedin_value: "connect professionally",
            whatsapp_value: "direct message"
        },
        footer: {
            top: "top",
            rights: "Created by Nina.",
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
            headline: "Ingénieur IA Appliqué | Systèmes Machine Learning & Automatisation IA",
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
            section_label: "03 // projets sélectionnés",
            headline: "ml & automatisation ia",
            description: "systèmes prêts pour la production, du développement de modèles au déploiement. chaque projet démontre une résolution de problèmes de bout en bout.",
            launch_site: "voir le site",
            case_notes: "notes de cas",
            items: [
                {
                    title: "Coloriseur d'Image Deep Learning",
                    problem: "Les images en niveaux de gris nécessitent une colorisation manuelle chronophage, limitant la restauration d'archives historiques.",
                    approach: "Implémentation d'un GAN conditionnel avec architecture Pix2Pix utilisant un générateur U-Net et un discriminateur PatchGAN.",
                    solution: "Construction d'un pipeline ML complet avec TensorFlow/Keras — du prétraitement des données à l'entraînement et l'inférence.",
                    outcome: "Démonstration de l'application pratique des modèles génératifs, renforçant l'expérience en architectures deep learning."
                },
                {
                    title: "Agent IA Autonome de Réservation",
                    problem: "La prise de rendez-vous manuelle crée une surcharge opérationnelle et nécessite une intervention humaine constante.",
                    approach: "Conception d'un workflow agentique avec n8n, GPT-4 pour la classification d'intention et LangChain pour les réponses contextuelles.",
                    solution: "Agent de niveau production gérant les demandes de réservation, vérifiant la disponibilité et synchronisant avec l'API Google Calendar.",
                    outcome: "Automatisation de bout en bout éliminant la surcharge manuelle avec prise de décision autonome."
                },
                {
                    title: "Automatisation Programme de Fidélité",
                    problem: "Les programmes de fidélité nécessitent une vérification manuelle des reçus, suivi des points et distribution des récompenses.",
                    approach: "Intégration de GPT-4 Vision pour l'OCR des reçus avec logique de calcul de points et APIs de messagerie multi-canaux.",
                    solution: "Déploiement d'un workflow n8n connectant WhatsApp/Telegram, l'API Vision OpenAI et Google Sheets.",
                    outcome: "Automatisation production-ready gérant l'engagement client sans intervention humaine — liant vision IA et logique métier."
                },
                {
                    title: "Moteur de Réutilisation de Contenu",
                    problem: "Créer du contenu optimisé pour plusieurs plateformes est inefficace et ne passe pas à l'échelle.",
                    approach: "Construction d'un moteur de transformation multi-canaux utilisant les APIs LLM avec des stratégies de prompting spécifiques.",
                    solution: "Workflow automatisé transformant une entrée unique en formats optimisés pour différentes plateformes.",
                    outcome: "Production de contenu à l'échelle sans augmenter la charge manuelle — démontrant l'intégration pratique des LLM."
                },
                {
                    title: "Moteur Agentique Unifié",
                    problem: "Les implémentations d'IA non structurées entraînent des échecs probabilistes et un manque de contrôle déterministe en production.",
                    approach: "Conception d'une architecture à 3 couches (Directive, Orchestration, Exécution) pour séparer la stratégie du mécanisme, intégrée au protocole MCP.",
                    solution: "Un framework robuste où les directives définissent la stratégie, l'orchestration gère l'intention et les scripts d'exécution effectuent des actions déterministes.",
                    outcome: "Établissement d'un standard évolutif pour construire des agents fiables, auto-correcteurs avec une isolation de marque claire."
                },
                {
                    title: "Architecte Vidéo IA (as-Code)",
                    problem: "La production vidéo manuelle pour les démos techniques et le personal branding est lente et irrégulière.",
                    approach: "Développement d'un moteur 'Video-as-Code' utilisant MoviePy pour générer de manière procédurale des vidéos alignées sur la marque.",
                    solution: "Pipeline automatisé pour des intros, des spotlights de projets et des démos UI avec une calibration de marque unifiée.",
                    outcome: "Réduction du temps de création vidéo de 90 % tout en garantissant une conformité totale aux directives de la marque."
                }
            ]
        },
        sideProjects: {
            section_label: "04 // projets annexes",
            headline: "développement web",
            description: "applications full-stack et constructions axées sur le design. systèmes pratiques déployés pour de vrais clients.",
            items: [
                {
                    title: "THE MR Studio",
                    description: "système de réservation de salon premium — rendez-vous rationalisés, réduction des absences de 75%. intégration de calendrier et rappels sms automatisés."
                },
                {
                    title: "AlpineStay Luxury",
                    description: "plateforme de réservation de chalets premium — esthétique luxe calme avec révélations cinématiques au défilement. axé sur l'atmosphère."
                },
                {
                    title: "Démonstration Application de Réservation",
                    description: "système de réservation complet pour entreprises de services. gère la prise de rendez-vous, intégration calendrier et gestion clients."
                }
            ]
        },
        blog: {
            section_label: "05 // écriture",
            headline: "notes techniques",
            description: "réflexions sur la construction de systèmes ml, l'automatisation ia et les leçons de production."
        },
        contact: {
            section_label: "06 // contact",
            email_value: "contact par e-mail",
            linkedin_value: "connexion professionnelle",
            whatsapp_value: "message direct"
        },
        footer: {
            top: "haut",
            rights: "Créé par Nina.",
            location: "Paris, France"
        }
    }
};
