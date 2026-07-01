import type { LucideIcon } from "lucide-react"
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BellRing,
  Bot,
  Boxes,
  BrainCircuit,
  CalendarCheck2,
  CheckCheck,
  ClipboardPenLine,
  Database,
  FolderTree,
  Gift,
  Image as ImageIcon,
  MessageCircle,
  PencilLine,
  Plug,
  QrCode,
  ReceiptText,
  RefreshCw,
  Route,
  ScanSearch,
  Send,
  Share2,
  Sparkles,
  Store,
  UserCheck,
  UserPlus,
  Users,
  Wrench,
} from "lucide-react"

type FlowNodeProps = {
  icon: LucideIcon
  title: string
  detail: string
  tone?: "blue" | "green" | "amber" | "violet"
}

// Excalidraw-style hand-drawn look: an SVG turbulence + displacement filter
// (defined once in <Projects/>) wobbles the strokes only; text stays crisp.
const INK = "#1b1b1f"
const rough = { filter: "url(#sketchy)" } as const

const toneChip = {
  blue: "bg-blue-100 text-blue-700 ring-blue-400",
  green: "bg-emerald-100 text-emerald-700 ring-emerald-400",
  amber: "bg-amber-100 text-amber-700 ring-amber-400",
  violet: "bg-violet-100 text-violet-700 ring-violet-400",
}

const toneFill = {
  blue: "bg-blue-50",
  green: "bg-emerald-50",
  amber: "bg-amber-50",
  violet: "bg-violet-50",
}

const tiltClasses = {
  blue: "rotate-[0.4deg]",
  green: "-rotate-[0.5deg]",
  amber: "rotate-[0.55deg]",
  violet: "-rotate-[0.3deg]",
}

function FlowNode({ icon: Icon, title, detail, tone = "blue" }: FlowNodeProps) {
  return (
    <div className={`relative min-h-[116px] min-w-0 flex-1 ${tiltClasses[tone]}`}>
      {/* wobbly hand-drawn border + fill (filtered) */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-[14px_10px_15px_11px] border-[2.5px] ${toneFill[tone]}`}
        style={{ ...rough, borderColor: INK }}
        aria-hidden="true"
      />
      {/* crisp content on top */}
      <div className="relative flex h-full flex-col p-3.5">
        <div className={`flex h-9 w-9 items-center justify-center rounded-[46%_54%_45%_55%] ring-2 ${toneChip[tone]}`}>
          <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
        </div>
        <p className="mt-2.5 break-words font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-[1.05]" style={{ color: INK }}>
          {title}
        </p>
        <p className="mt-1.5 break-words text-[12.5px] leading-snug text-slate-600">{detail}</p>
      </div>
    </div>
  )
}

function Connector() {
  return (
    <div className="relative flex w-8 shrink-0 items-center justify-center sm:w-11" style={{ color: INK }}>
      <span className="absolute left-0 right-1 top-1/2 border-t-[2.5px]" style={{ ...rough, borderColor: INK }} />
      <ArrowRight className="relative ml-auto h-6 w-6" strokeWidth={2.4} style={rough} aria-hidden="true" />
    </div>
  )
}

function DownConnector() {
  return (
    <div className="relative flex h-12 items-end justify-center pb-1" style={{ color: INK }}>
      <span className="absolute bottom-2 top-0 border-l-[2.5px]" style={{ ...rough, borderColor: INK }} />
      <ArrowDown className="relative h-6 w-6" strokeWidth={2.4} style={rough} aria-hidden="true" />
    </div>
  )
}

function ResponsiveConnector() {
  return (
    <>
      <div className="min-[520px]:hidden">
        <DownConnector />
      </div>
      <div className="hidden min-[520px]:flex">
        <Connector />
      </div>
    </>
  )
}

function WorkflowFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-[16px_12px_18px_13px] bg-[#fffdf7] p-4 sm:p-6"
      style={{
        backgroundImage: "radial-gradient(rgba(15,23,42,0.05) 1.1px, transparent 1.1px)",
        backgroundSize: "18px 18px",
      }}
    >
      {/* wobbly frame border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[16px_12px_18px_13px] border-[2.5px]"
        style={{ ...rough, borderColor: INK }}
        aria-hidden="true"
      />
      <p className="relative mb-5 inline-flex items-end gap-2 font-[family-name:var(--font-sketch)] text-xl font-bold leading-none" style={{ color: INK }}>
        <PencilLine className="h-[18px] w-[18px]" strokeWidth={1.8} style={rough} aria-hidden="true" />
        <span className="relative flex flex-col">
          System flow sketch
          <span className="mt-1 h-[3px] w-full bg-amber-400" style={rough} aria-hidden="true" />
        </span>
      </p>
      <div className="relative">{children}</div>
    </div>
  )
}

function BookingWorkflow() {
  return (
    <WorkflowFrame>
      <div className="flex">
        <FlowNode
          icon={MessageCircle}
          title="Customer message"
          detail="Facebook, Instagram or WhatsApp"
          tone="green"
        />
        <Connector />
        <FlowNode
          icon={Bot}
          title="AI booking agent"
          detail="Understands the request and chooses an action"
          tone="blue"
        />
      </div>

      <DownConnector />

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        The agent checks two memory layers
      </p>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <FlowNode
          icon={Database}
          title="Stable memory"
          detail="Services, policies and FAQs stay consistent"
          tone="violet"
        />
        <FlowNode
          icon={RefreshCw}
          title="Editable memory"
          detail="Prices, offers and business details can change"
          tone="amber"
        />
      </div>

      <DownConnector />

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        Then chooses the right action
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        <FlowNode
          icon={ScanSearch}
          title="Answer"
          detail="Retrieves a grounded answer from the knowledge base"
          tone="violet"
        />
        <FlowNode
          icon={CalendarCheck2}
          title="Book"
          detail="Checks the calendar, saves details and confirms"
          tone="green"
        />
        <FlowNode
          icon={Users}
          title="Hand off"
          detail="Routes uncertain requests to a staff member"
          tone="amber"
        />
        <FlowNode
          icon={BellRing}
          title="Remind"
          detail="Sends appointment reminder SMS with Twilio"
          tone="blue"
        />
      </div>
    </WorkflowFrame>
  )
}

function LoyaltyWorkflow() {
  return (
    <WorkflowFrame>
      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        1. Join the loyalty program
      </p>
      <div className="flex">
        <FlowNode icon={QrCode} title="Scan QR code" detail="Opens a short mobile form" tone="green" />
        <Connector />
        <FlowNode icon={ClipboardPenLine} title="Enter details" detail="Name and contact information" tone="blue" />
        <Connector />
        <FlowNode icon={Database} title="Check database" detail="Looks for an existing customer" tone="violet" />
      </div>

      <DownConnector />

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <FlowNode icon={UserPlus} title="New customer" detail="Create a customer profile" tone="green" />
        <FlowNode icon={UserCheck} title="Existing customer" detail="Load the current profile and points" tone="blue" />
      </div>

      <div className="my-6 rotate-[0.3deg] border-t-2 border-dashed border-slate-400/70" />

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        2. Earn and receive rewards
      </p>
      <div className="flex">
        <FlowNode icon={ReceiptText} title="Submit receipt" detail="Customer uploads purchase proof" tone="amber" />
        <Connector />
        <FlowNode icon={ScanSearch} title="Validate purchase" detail="AI reads and checks the receipt" tone="violet" />
        <Connector />
        <FlowNode icon={Gift} title="Update rewards" detail="Add points and send a voucher" tone="green" />
      </div>
    </WorkflowFrame>
  )
}

function RetailOperationsWorkflow() {
  return (
    <WorkflowFrame>
      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        1. Control every location remotely
      </p>
      <div className="flex flex-col min-[520px]:flex-row">
        <FlowNode
          icon={ClipboardPenLine}
          title="Dashboard"
          detail="Change prices, reservations and availability"
          tone="blue"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={RefreshCw}
          title="Remote sync"
          detail="Queues updates and tracks delivery"
          tone="violet"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={Store}
          title="Retail points"
          detail="Apply changes without a site visit"
          tone="green"
        />
      </div>

      <div className="my-6 rotate-[0.3deg] border-t-2 border-dashed border-slate-400/70" />

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        2. Turn operations into decisions
      </p>
      <div className="flex flex-col min-[520px]:flex-row">
        <FlowNode
          icon={Database}
          title="Live data"
          detail="Sales, stock, refills and product age"
          tone="amber"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={BarChart3}
          title="Analytics"
          detail="Revenue by location, product, day and hour"
          tone="blue"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={BellRing}
          title="Act"
          detail="Restock, rotate products and respond to alerts"
          tone="green"
        />
      </div>
    </WorkflowFrame>
  )
}

function SocialAgentWorkflow() {
  return (
    <WorkflowFrame>
      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        1. The LLM brain plans the post
      </p>
      <div className="flex flex-col min-[520px]:flex-row">
        <FlowNode
          icon={BrainCircuit}
          title="Plan post"
          detail="LLM picks the post type and writes fresh copy"
          tone="blue"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={Database}
          title="Grounded"
          detail="Real menu + recent posts, so it never repeats"
          tone="violet"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={Sparkles}
          title="Write caption"
          detail="On-brand voice, with CTA and hashtags"
          tone="green"
        />
      </div>

      <div className="my-6 rotate-[0.3deg] border-t-2 border-dashed border-slate-400/70" />

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        2. Render once, publish everywhere
      </p>
      <div className="flex flex-col min-[520px]:flex-row">
        <FlowNode
          icon={ImageIcon}
          title="Render"
          detail="HTML → PNG via headless Chromium"
          tone="amber"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={Send}
          title="Facebook"
          detail="Uploads the image, returns a public URL"
          tone="blue"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={Share2}
          title="Instagram + Threads"
          detail="Reuse the bridged image URL"
          tone="green"
        />
      </div>
    </WorkflowFrame>
  )
}

function SkillsKitWorkflow() {
  return (
    <WorkflowFrame>
      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        1. A skill = instructions + typed tools + eval
      </p>
      <div className="flex flex-col min-[520px]:flex-row">
        <FlowNode
          icon={FolderTree}
          title="Skill folder"
          detail="SKILL.md + tools + examples + eval"
          tone="green"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={Boxes}
          title="Registry"
          detail="Discovers and validates every skill"
          tone="violet"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={Wrench}
          title="Typed tools"
          detail="JSON schema generated from type hints"
          tone="blue"
        />
      </div>

      <div className="my-6 rotate-[0.3deg] border-t-2 border-dashed border-slate-400/70" />

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-[19px] font-bold leading-none text-slate-800">
        2. Route, evaluate, serve over MCP
      </p>
      <div className="flex flex-col min-[520px]:flex-row">
        <FlowNode
          icon={Route}
          title="Route"
          detail="Pick the right skill for a request"
          tone="amber"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={CheckCheck}
          title="Eval"
          detail="Per-skill pass-rate (runs offline)"
          tone="green"
        />
        <ResponsiveConnector />
        <FlowNode
          icon={Plug}
          title="MCP server"
          detail="Any MCP client can call the tools"
          tone="blue"
        />
      </div>
    </WorkflowFrame>
  )
}

const projects = [
  {
    number: "01",
    category: "LLM agent · RAG · automation",
    title: "Multi-channel booking & support agent",
    problem: "A service business handled customer questions and bookings by hand across Facebook, Instagram and WhatsApp — answering the same questions, juggling several staff calendars, and following up manually. Any answer hard-coded into the system went stale the moment prices, offers or schedules changed.",
    solution: "An LLM agent that answers from a RAG knowledge base plus an owner-editable live source, so non-technical staff update offers and schedules without touching code. It checks availability across multiple staff calendars, creates and cancels appointments, auto-creates customer records, escalates uncertain cases to a human on Telegram — learning from each correction — and sends day-before SMS reminders.",
    capabilities: "RAG · tool calling / function calling · multi-step agent orchestration · conversation memory · prompt engineering · human-in-the-loop · API integration",
    impact: "Customers get instant answers and book in plain language around the clock, staff keep control of exceptions, and automated reminders cut no-shows.",
    stack: "n8n · OpenAI · Google Gemini · Google Calendar / Docs / Sheets · Meta Graph API · Telegram · Twilio SMS",
    workflow: <BookingWorkflow />,
  },
  {
    number: "02",
    category: "LLM vision · workflow automation",
    title: "Loyalty & customer-capture automation",
    problem: "Sales happened through unattended machines, so the owner never learned who their customers were — and had no easy way to deliver the discount codes they generated in a separate tool. There was no customer list to market to and no loyalty mechanic.",
    solution: "A QR code on each machine opens a short form that captures the customer into a database with duplicate detection. Customers then submit receipts on WhatsApp or Telegram; GPT-4o Vision validates each receipt and reads the amount, points accumulate automatically, and on reaching the reward threshold the system issues a single-use discount code, resets the balance and marks the code used. A chat menu lets customers check points and see how it works.",
    capabilities: "LLM vision / OCR · structured outputs · anti-fraud validation · identity matching / dedupe · database automation · multi-channel messaging",
    impact: "Turned an anonymous sales channel into a first-party marketing database, with fully automated, fraud-resistant rewards and zero manual tracking.",
    stack: "n8n · GPT-4o Vision · WhatsApp / Telegram · QR landing page · customer database · Docker · DigitalOcean",
    workflow: <LoyaltyWorkflow />,
  },
  {
    number: "03",
    category: "Full-stack · analytics · reverse engineering",
    title: "Remote retail operations platform",
    problem: "An operator ran a fleet of connected machines through several disconnected vendor portals — no consolidated analytics, no remote price control, no stock visibility, and no way to spot products sitting unsold. Routine decisions meant physical visits and manual checks.",
    solution: "A single web app that consolidates the whole fleet: remote price changes and product reservations, stock and refill planning, product-lifetime timers that surface stale stock, revenue analytics by location, day and hour, and real-time sale notifications. A reverse-engineered Android app (smali-level patches) plus a poll-based backend deliver remote price sync the stock product never supported.",
    capabilities: "Backend engineering · REST APIs · background jobs · business analytics · Android reverse engineering (smali) · IoT integration",
    impact: "Replaced site visits and manual checks with one dashboard — price changes reach machines in minutes, and sales and stale stock are visible in real time.",
    stack: "Node.js · Express · SQLite · REST APIs · background jobs · Web Push · PWA · Docker · DigitalOcean · apktool / smali",
    workflow: <RetailOperationsWorkflow />,
  },
  {
    number: "04",
    category: "GenAI agent · multi-platform automation",
    title: "Autonomous social media agent",
    problem: "A brand needs a steady stream of on-brand posts across Facebook, Instagram and Threads. Doing it by hand is the chore that never gets done — and each Meta surface has different publishing rules (Instagram and Threads won't take a file upload, only a public image URL).",
    solution: "An autonomous agent whose LLM brain decides what to post and writes the caption in the brand's voice — grounded in the real product catalog and steered away from recent posts — then renders a branded image (HTML → PNG) and publishes to every Meta platform from one command or a cron job. It posts to Facebook first and reuses the public URL it returns to bridge the same image to Instagram and Threads. If no LLM key is set, it falls back to a deterministic engine so the pipeline never breaks.",
    capabilities: "LLM planning & copywriting · structured outputs (JSON mode) · grounding & de-duplication · prompt engineering · A/B testing (caption variants) · graceful fallback · multi-platform API orchestration",
    impact: "Runs a brand's entire Meta presence end-to-end with no human in the loop; one platform failing never blocks the others, and the whole pipeline demos with zero credentials.",
    stack: "Python · OpenAI API · Playwright (headless Chromium) · Meta Graph API · Threads API · cron",
    github: "https://github.com/Ninadnj/meta-social-agent",
    workflow: <SocialAgentWorkflow />,
  },
  {
    number: "05",
    category: "MCP · agent framework · evaluation",
    title: "MCP agent-skills framework",
    problem: "Agents get bloated and unreliable when every instruction and tool is crammed into one prompt. And most 'agent' demos skip the two things that make tools production-ready: typed schemas and evaluation.",
    solution: "A framework where each skill is a self-contained folder — instructions + typed tools + examples + its own eval. A registry discovers skills, a runtime routes each request to the right one, an eval harness scores every skill, and an MCP server exposes all their tools to any MCP client like Claude Desktop. Tool JSON-schemas are generated from Python type hints, and everything runs fully offline (BM25 retrieval + deterministic fallbacks), so it demos with zero credentials.",
    capabilities: "MCP server · tool design (JSON-schema from type hints) · agent-skills architecture · dynamic capability loading · evaluation harness · RAG (BM25) · graceful degradation",
    impact: "Add a capability by dropping in a folder — no core changes. Every skill ships with tests, and the whole kit runs and evaluates offline (9/9 eval cases passing).",
    stack: "Python · Model Context Protocol (FastMCP) · OpenAI API (optional) · BM25 retrieval · pytest",
    github: "https://github.com/Ninadnj/mcp-skills-kit",
    workflow: <SkillsKitWorkflow />,
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-6xl px-5 sm:px-8">
      {/* Hand-drawn (Excalidraw-style) stroke wobble — applied to borders/arrows only */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="sketchy" x="-6%" y="-6%" width="112%" height="112%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      {projects.map((project) => (
        <article
          key={project.number}
          className="grid gap-10 border-t border-border py-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-20"
        >
          <div>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground">
              <span>{project.number}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">{project.title}</h2>
            <dl className="mt-7 max-w-md space-y-5">
              <div>
                <dt className="text-xs font-semibold text-foreground">Problem</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.problem}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-foreground">Solution</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.solution}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-foreground">Skills demonstrated</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.capabilities}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-foreground">Impact</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.impact}</dd>
              </div>
            </dl>

            <p className="mt-7 text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Technology:</span> {project.stack}
            </p>

            {"github" in project && project.github && (
              <p className="mt-3 text-xs">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-foreground underline underline-offset-4 hover:text-muted-foreground"
                >
                  View code on GitHub →
                </a>
              </p>
            )}
          </div>

          {project.workflow}
        </article>
      ))}
    </section>
  )
}
