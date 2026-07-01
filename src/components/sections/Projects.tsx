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

const toneClasses = {
  blue: "bg-blue-100/80 text-blue-800",
  green: "bg-emerald-100/80 text-emerald-800",
  amber: "bg-amber-100/80 text-amber-800",
  violet: "bg-violet-100/80 text-violet-800",
}

const tiltClasses = {
  blue: "rotate-[0.35deg]",
  green: "-rotate-[0.4deg]",
  amber: "rotate-[0.5deg]",
  violet: "-rotate-[0.25deg]",
}

function FlowNode({ icon: Icon, title, detail, tone = "blue" }: FlowNodeProps) {
  return (
    <div
      className={`relative flex min-h-24 min-w-0 flex-1 flex-col justify-between rounded-[8px_13px_9px_12px] border-[1.5px] border-slate-700 bg-[#fffefb] p-3 shadow-[2px_3px_0_rgba(15,23,42,0.12)] after:pointer-events-none after:absolute after:inset-[2px] after:rounded-[11px_7px_12px_8px] after:border after:border-slate-300/70 after:content-[''] ${tiltClasses[tone]}`}
    >
      <div className={`flex h-7 w-7 items-center justify-center rounded-[48%_52%_46%_54%] ${toneClasses[tone]}`}>
        <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
      </div>
      <div className="mt-3 min-w-0">
        <p className="break-words font-[family-name:var(--font-sketch)] text-[17px] font-semibold leading-none text-slate-900">
          {title}
        </p>
        <p className="mt-1 break-words text-[11px] leading-snug text-muted-foreground">{detail}</p>
      </div>
    </div>
  )
}

function Connector() {
  return (
    <div className="relative flex w-6 shrink-0 items-center justify-center text-slate-600 sm:w-8">
      <span className="absolute left-0 right-1 top-1/2 rotate-[2deg] border-t border-dashed border-slate-500" />
      <ArrowRight className="relative ml-auto h-5 w-5 -rotate-[3deg]" strokeWidth={1.5} aria-hidden="true" />
    </div>
  )
}

function DownConnector() {
  return (
    <div className="relative flex h-11 items-end justify-center pb-1 text-slate-600">
      <span className="absolute bottom-2 top-0 rotate-[2deg] border-l border-dashed border-slate-500" />
      <ArrowDown className="relative h-5 w-5 rotate-[2deg]" strokeWidth={1.5} aria-hidden="true" />
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
    <div className="relative rounded-[10px_16px_11px_14px] border-[1.5px] border-slate-700 bg-[#fffdf7] p-3 shadow-[4px_5px_0_rgba(15,23,42,0.10)] before:pointer-events-none before:absolute before:inset-[3px] before:rotate-[0.15deg] before:rounded-[14px_9px_16px_10px] before:border before:border-slate-300 before:content-[''] sm:p-5">
      <p className="mb-5 flex items-center gap-2 font-[family-name:var(--font-sketch)] text-xl font-semibold leading-none text-slate-700">
        <PencilLine className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        System flow sketch
      </p>
      {children}
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

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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
      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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
      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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
      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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
      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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

      <p className="mb-3 font-[family-name:var(--font-sketch)] text-lg font-semibold leading-none text-slate-600">
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
    workflow: <SkillsKitWorkflow />,
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-6xl px-5 sm:px-8">
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
          </div>

          {project.workflow}
        </article>
      ))}
    </section>
  )
}
