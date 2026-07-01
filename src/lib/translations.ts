export type Language = 'en' | 'fr';

export const translations = {
    en: {
        navbar: {
            about: "profile",
            expertise: "expertise",
            ai_agents: "work",
            workflows: "skills",
            start_project: "contact"
        },
        hero: {
            portfolio_year: "portfolio 2026",
            status: "paris, france · open to relocate · applied ai / automation roles",
            role: "AI automation",
            role_line: "rag agents, llm apps & workflow automation",
            description: "i build production AI systems that connect LLMs, private data, APIs, and business workflows into reliable tools people can actually use.",
            tags: ["Python", "RAG", "LLM agents", "n8n", "FastAPI", "API integration", "tool calling", "evaluation", "ML pipelines"],
            view_projects: "view projects",
            contact: "contact",
            resume: "download cv",
            start_project: "start a project",
            view_case_studies: "view case studies"
        },
        about: {
            section_label: "01 // hiring signal",
            headline: "built for applied ai roles where shipping matters.",
            p1: "i combine operations experience with hands-on AI engineering: RAG systems, tool-using agents, workflow automation, APIs, and deployed ML services.",
            p2: "my strongest fit is for teams that need someone who can understand a business process, design the automation, build the integration, test failure cases, and ship a usable system.",
            p3: "based in Paris and open to relocation for applied AI, generative AI, AI automation, and ML engineering roles.",
            facts: [
                { label: "target roles", value: "AI Automation Engineer · LLM / RAG Engineer" },
                { label: "shipped", value: "2 production AI systems for real clients" },
                { label: "credential", value: "RNCP Level 6 AI & Big Data Developer · Le Wagon Paris · 2026" },
                { label: "proof", value: "RAG agent · 64-node n8n loyalty workflow · Hugging Face ML demo" },
                { label: "location", value: "Paris, France · open to relocate" },
                { label: "languages", value: "English · French" }
            ]
        },
        expertise: {
            section_label: "02 // role-fit expertise",
            headline: "keywords backed by shipped work",
            description: "the portfolio is focused on the skills recruiters screen for in applied AI roles: LLM applications, RAG, agents, workflow automation, API integration, evaluation, deployment, and production reliability.",
            items: [
                { title: "AI Agents & Tool Calling", tag: "agents", description: "LLM agents with tools, memory, structured outputs, handoff paths, and guardrails for real operational workflows." },
                { title: "RAG & Knowledge Systems", tag: "rag", description: "retrieval over private data with chunking, embeddings, vector search, grounded answers, and editable knowledge bases." },
                { title: "LLM App Integration", tag: "llm systems", description: "OpenAI, Claude, Gemini, and MCP-style tools wired into products with function calling, JSON outputs, and API orchestration." },
                { title: "Workflow Automation", tag: "n8n", description: "n8n and code-based automations for customer support, booking, loyalty, CRM, calendar, messaging, and document workflows." },
                { title: "Evaluation & Reliability", tag: "evals", description: "output validation, test cases, confidence thresholds, logging, retries, and human-in-the-loop fallbacks before production use." },
                { title: "Production APIs & Deployment", tag: "mlops", description: "Python services, FastAPI, Docker, Hugging Face Spaces, Google Cloud Run, and deployment decisions around latency, cost, and uptime." },
                { title: "Machine Learning & Data", tag: "ml pipelines", description: "data preparation, SQL, pandas, scikit-learn, TensorFlow/PyTorch, model evaluation, and ML pipelines from notebooks to usable demos." }
            ]
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
            section_label: "03 // case studies",
            headline: "selected work",
            description: "production client systems selected to show the exact work applied AI teams hire for: RAG, agents, API integrations, workflow automation, and reliability around real users.",
            launch_site: "launch site",
            case_notes: "architecture",
            items: [
                {
                    title: "AI Customer Operations Agent",
                    problem: "Service teams lose time answering repeated questions, checking availability, creating appointments, and following up manually across messaging channels.",
                    solution: "A RAG agent that answers from an editable knowledge base, checks calendar availability, creates appointments, logs customer data, hands uncertain requests to staff, and sends reminder SMS through Twilio.",
                    outcome: "Customers get instant answers, book in plain language, and receive appointment reminders automatically while staff retain control of exceptions.",
                    architecture: {
                        directive: "knowledge base + booking rules",
                        orchestration: "n8n rag agent + memory",
                        execution: "calendar + sheets + telegram handoff"
                    }
                },
                {
                    title: "Loyalty Automation System",
                    problem: "A flower shop ran its loyalty program by hand — purchases, points, and vouchers tracked in spreadsheets, with no simple way to reward or win back customers.",
                    solution: "A 64-node n8n system where customers send receipts on WhatsApp or Telegram; GPT-4o vision validates each one, calculates points, assigns voucher codes, and updates a customer database — plus an SMS layer for opt-in campaigns.",
                    outcome: "Customers send a receipt and get points or a voucher automatically, while the business builds a marketing database and can run SMS reminders and reactivation campaigns.",
                    architecture: {
                        directive: "loyalty rules + customer data",
                        orchestration: "n8n multi-channel workflow",
                        execution: "gpt-4o vision + messages / sms"
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
            section_label: "05 // contact",
            headline: "available for applied ai roles",
            description: "best fit: AI automation, LLM/RAG, or ML engineering roles where prototypes need to become reliable systems.",
            email_value: "contact via mail",
            linkedin_value: "connect professionally",
            whatsapp_value: "direct message",
            resume_value: "download cv"
        },
        footer: {
            top: "top",
            rights: "Created by Nina.",
            location: "Paris, France · open to relocate"
        }
    },
    fr: {
        navbar: {
            about: "profil",
            expertise: "expertise",
            ai_agents: "projets",
            workflows: "compétences",
            start_project: "contact"
        },
        hero: {
            portfolio_year: "portfolio 2026",
            status: "paris, france · ouverte à la mobilité · rôles ia appliquée / automatisation",
            role: "ingénieure ia appliquée",
            role_line: "agents rag, apps llm & automatisation de workflows",
            description: "je construis des systèmes d'IA en production qui connectent LLM, données privées, API et processus métier dans des outils fiables et réellement utilisables.",
            tags: ["Python", "RAG", "agents LLM", "n8n", "FastAPI", "intégration API", "tool calling", "évaluation", "pipelines ML"],
            view_projects: "voir les projets",
            contact: "contact",
            resume: "télécharger cv",
            start_project: "lancer un projet",
            view_case_studies: "voir les études de cas"
        },
        about: {
            section_label: "01 // signal recrutement",
            headline: "profil construit pour les rôles ia appliquée orientés livraison.",
            p1: "je combine expérience opérationnelle et ingénierie IA concrète : systèmes RAG, agents avec outils, automatisation de workflows, API et services ML déployés.",
            p2: "mon meilleur fit : des équipes qui ont besoin de comprendre un processus métier, concevoir l'automatisation, construire l'intégration, tester les cas d'échec et livrer un système utilisable.",
            p3: "basée à Paris et ouverte à la mobilité pour des rôles en IA appliquée, IA générative, automatisation IA et machine learning engineering.",
            facts: [
                { label: "rôles ciblés", value: "Ingénieure IA appliquée · AI Automation Engineer · LLM / RAG Engineer" },
                { label: "livré", value: "2 systèmes IA en production pour de vrais clients" },
                { label: "certification", value: "RNCP Niveau 6 IA & Big Data Developer · Le Wagon Paris · 2026" },
                { label: "preuve", value: "agent RAG · workflow fidélité n8n de 64 noeuds · démo ML Hugging Face" },
                { label: "localisation", value: "Paris, France · ouverte à la mobilité" },
                { label: "langues", value: "anglais · français" }
            ]
        },
        expertise: {
            section_label: "02 // expertise cible",
            headline: "mots-clés soutenus par du travail livré",
            description: "le portfolio met en avant les compétences recherchées dans les rôles IA appliquée : applications LLM, RAG, agents, automatisation de workflows, intégration API, évaluation, déploiement et fiabilité production.",
            items: [
                { title: "Agents IA & Tool Calling", tag: "agents", description: "agents LLM avec outils, mémoire, sorties structurées, relais humain et garde-fous pour des workflows opérationnels réels." },
                { title: "RAG & Systèmes de Connaissance", tag: "rag", description: "recherche sur données privées avec chunking, embeddings, recherche vectorielle, réponses ancrées et bases de connaissances éditables." },
                { title: "Intégration d'Applications LLM", tag: "systèmes llm", description: "OpenAI, Claude, Gemini et outils de type MCP intégrés aux produits avec function calling, sorties JSON et orchestration API." },
                { title: "Automatisation de Workflows", tag: "n8n", description: "automatisations n8n et code pour support client, réservation, fidélité, CRM, calendrier, messagerie et workflows documentaires." },
                { title: "Évaluation & Fiabilité", tag: "evals", description: "validation des sorties, cas de test, seuils de confiance, logs, retries et fallbacks humains avant usage en production." },
                { title: "APIs Production & Déploiement", tag: "mlops", description: "services Python, FastAPI, Docker, Hugging Face Spaces, Google Cloud Run et décisions de déploiement autour de la latence, du coût et de l'uptime." },
                { title: "Machine Learning & Data", tag: "pipelines ml", description: "préparation de données, SQL, pandas, scikit-learn, TensorFlow/PyTorch, évaluation de modèles et pipelines ML du notebook à la démo utilisable." }
            ]
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
            section_label: "03 // études de cas",
            headline: "travaux sélectionnés",
            description: "systèmes clients en production choisis pour montrer le travail recherché par les équipes IA appliquée : RAG, agents, intégrations API, automatisation de workflows et fiabilité avec de vrais utilisateurs.",
            launch_site: "voir le site",
            case_notes: "architecture",
            items: [
                {
                    title: "Agent d'Opérations Client IA",
                    problem: "Les équipes de service perdent du temps à répondre aux mêmes questions, vérifier les disponibilités, créer les rendez-vous et effectuer les relances manuellement.",
                    solution: "Un agent RAG répond depuis une base de connaissances éditable, vérifie l'agenda, crée les rendez-vous, enregistre les données client, transfère les demandes incertaines et envoie des rappels SMS via Twilio.",
                    outcome: "Les clients obtiennent des réponses instantanées, réservent en langage naturel et reçoivent automatiquement leurs rappels de rendez-vous.",
                    architecture: {
                        directive: "base de connaissances + règles de réservation",
                        orchestration: "agent rag n8n + mémoire",
                        execution: "agenda + sheets + relais telegram"
                    }
                },
                {
                    title: "Système d'Automatisation de Fidélité",
                    problem: "Une boutique de fleurs gérait son programme de fidélité à la main — achats, points et vouchers suivis dans des tableurs, sans moyen simple de récompenser ou de relancer les clients.",
                    solution: "Un système n8n de 64 nœuds où les clients envoient leurs reçus sur WhatsApp ou Telegram ; GPT-4o vision valide chaque reçu, calcule les points, attribue les codes voucher et met à jour une base client — avec une couche SMS pour les campagnes opt-in.",
                    outcome: "Le client envoie un reçu et reçoit points ou voucher automatiquement, pendant que l'entreprise construit une base marketing et peut lancer rappels et campagnes de réactivation par SMS.",
                    architecture: {
                        directive: "règles de fidélité + données client",
                        orchestration: "workflow n8n multi-canal",
                        execution: "gpt-4o vision + messages / sms"
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
            section_label: "05 // contact",
            headline: "disponible pour des rôles ia appliquée",
            description: "meilleur fit : ingénieure IA appliquée, AI automation engineer, LLM/RAG engineer ou ML engineer quand les prototypes doivent devenir des systèmes fiables.",
            email_value: "contact par e-mail",
            linkedin_value: "connexion professionnelle",
            whatsapp_value: "message direct",
            resume_value: "télécharger cv"
        },
        footer: {
            top: "haut",
            rights: "Créé par Nina.",
            location: "Paris, France · ouverte à la mobilité"
        }
    }
};
