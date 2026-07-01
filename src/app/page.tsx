import Link from "next/link"
import { BrainCircuit, Bot, Database, Github, Linkedin, Mail, Phone, Plug, Server, Workflow } from "lucide-react"
import { Projects } from "@/components/sections/Projects"

const links = [
  {
    label: "Email",
    href: "mailto:ninodoinjashvili@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:0648781835",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nina-doinjashvili-8928815a/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Ninadnj",
    icon: Github,
  },
]

const skillGroups = [
  {
    title: "AI systems & agents",
    icon: Bot,
    skills: "LLM agents · multi-agent orchestration · LangGraph · Claude Agent SDK · tool calling / function calling · structured outputs · prompt engineering",
  },
  {
    title: "RAG & retrieval",
    icon: Database,
    skills: "RAG pipelines · embeddings · vector search · chunking · pgvector · Chroma · Pinecone",
  },
  {
    title: "LLM integration & tooling",
    icon: Plug,
    skills: "OpenAI · Claude · Gemini · GPT-4o Vision · LangChain · MCP · evaluation & guardrails · A/B testing · human-in-the-loop",
  },
  {
    title: "Automation & APIs",
    icon: Workflow,
    skills: "n8n · workflow automation · REST APIs · webhooks · Meta Graph · Google Calendar · Twilio SMS",
  },
  {
    title: "Backend & data",
    icon: Server,
    skills: "Python (async) · FastAPI · Pydantic · Node.js · Express · SQL / SQLite · pandas · data pipelines · background jobs",
  },
  {
    title: "ML & delivery",
    icon: BrainCircuit,
    skills: "scikit-learn · TensorFlow · Keras · PyTorch · NLP · GANs (pix2pix) · Docker · GCP (Cloud Run, Vertex AI) · CI/CD · monitoring",
  },
]

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <Link href="/" className="text-base font-semibold text-foreground">
              Nina Doinjashvili
            </Link>
          </div>

          <nav aria-label="Contact links" className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {links.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <p className="text-sm text-muted-foreground">Applied AI Engineer · Paris, France · Open to relocate</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          AI systems built around real business workflows.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I design and build LLM agents, RAG pipelines and workflow automation that connect private data, APIs
          and everyday business processes into reliable production tools.
        </p>
        <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
          I start from the problem, not the technology.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core skills">
          {["Python", "RAG", "LLM agents", "tool calling", "n8n", "FastAPI", "Docker", "evaluation"].map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          RNCP Level 6 — AI &amp; Big Data Developer · Le Wagon, Paris · 2026
        </p>
      </section>

      <section aria-labelledby="skills-heading" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1.55fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium text-muted-foreground">Capabilities</p>
            <h2 id="skills-heading" className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              Skills at a glance
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <article key={title} className="border-t border-border pt-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.7} aria-hidden="true" />
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{skills}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
          <p className="text-xs font-medium text-muted-foreground">Case studies</p>
          <h2 id="projects-heading" className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Selected projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Five production systems spanning LLM agents, RAG, generative AI, MCP tooling, workflow automation,
            API integration, backend engineering, business analytics and reverse engineering.
          </p>
        </div>
      </section>

      <Projects />

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted-foreground sm:px-8">
          <span>Nina Doinjashvili</span>
        </div>
      </footer>
    </main>
  )
}
