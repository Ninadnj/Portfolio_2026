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
            section_label: "03 // flagship project",
            headline: "applied genai automation",
            description: "one production workflow showing how i connect llm vision, business rules, customer data, and messaging channels into a usable system.",
            launch_site: "launch site",
            case_notes: "case notes",
            items: [
                {
                    title: "AI Loyalty & Voucher Automation",
                    problem: "The client could generate discount codes, but did not have a clear customer database or a direct way to distribute vouchers to customers across WhatsApp and Telegram.",
                    approach: "Designed a 64-node n8n workflow that registers customers, validates purchase receipts with GPT-4o vision, calculates loyalty points, and routes users through WhatsApp, Telegram, and web form entry points.",
                    solution: "Connected OpenAI vision, Google Sheets, WhatsApp Business, Telegram, webhook forms, custom JavaScript, duplicate checks, point updates, voucher lookup, and code-used marking into one operational customer-retention system.",
                    outcome: "Turned manual customer identification and voucher delivery into an automated loyalty flow: customers submit receipts, receive points or voucher codes, and the business keeps a usable customer and campaign history.",
                    architecture: {
                        directive: "loyalty rules & receipt validation",
                        orchestration: "n8n multi-channel workflow",
                        execution: "gpt-4o vision + sheets/api sync"
                    }
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
            section_label: "05 // technical writing",
            headline: "architectural insights",
            description: "detailed dissections of agentic systems, deterministic workflows, and the future of ai orchestration."
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
            section_label: "03 // projet principal",
            headline: "automatisation genai appliquée",
            description: "un workflow de production montrant comment je connecte vision llm, règles métier, données client et canaux de messagerie dans un système utilisable.",
            launch_site: "voir le site",
            case_notes: "notes de cas",
            items: [
                {
                    title: "Automatisation IA Fidélité & Vouchers",
                    problem: "Le client pouvait générer des codes de réduction, mais n'avait pas de base client claire ni de moyen direct pour distribuer les vouchers via WhatsApp et Telegram.",
                    approach: "Conception d'un workflow n8n de 64 nœuds qui enregistre les clients, valide les reçus avec GPT-4o vision, calcule les points de fidélité et route les utilisateurs via WhatsApp, Telegram et formulaire web.",
                    solution: "Connexion d'OpenAI vision, Google Sheets, WhatsApp Business, Telegram, webhooks, JavaScript personnalisé, contrôles de doublons, mises à jour de points, attribution de vouchers et marquage des codes utilisés dans un seul système opérationnel.",
                    outcome: "Transformation de l'identification client et de la distribution de vouchers en flux automatisé : les clients envoient leurs reçus, reçoivent points ou codes, et l'entreprise conserve un historique client et campagne exploitable.",
                    architecture: {
                        directive: "règles fidélité & validation reçu",
                        orchestration: "workflow n8n multi-canal",
                        execution: "gpt-4o vision + sync sheets/api"
                    }
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
            section_label: "05 // rédaction technique",
            headline: "analyses architecturales",
            description: "dissections détaillées des systèmes agentiques, des workflows déterministes et du futur de l'orchestration ia."
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
