export const cvUrl = "/Portfolio_2026/Nina_Doinjashvili_CV.pdf";

export const clientProjects = [
  {
    id: "booking",
    number: "01",
    title: "Booking & support, connected.",
    category: "Conversational AI",
    name: "Multi-channel booking & support agent",
    description:
      "One agent connects customer conversations to live calendars, current business information, and the people who handle exceptions.",
    problem:
      "A service business was losing enquiries across Facebook, Instagram, and WhatsApp while managing bookings and follow-ups manually.",
    solution:
      "Built an n8n workflow with retrieval and tool calling to check staff availability, create or cancel appointments, and save customer records. An owner-editable knowledge source keeps prices and hours current without a deployment.",
    outcome:
      "Customers can request appointments across three channels. Staff receive uncertain cases on Telegram, and Twilio sends day-before SMS reminders.",
    boundary:
      "Uncertain requests go to a person; business information remains editable by the owner.",
    stack: [
      "n8n",
      "LangChain",
      "OpenAI / Gemini",
      "Google Calendar",
      "Meta Graph API",
      "Twilio",
    ],
    flow: [
      "Customer message",
      "Retrieve + check availability",
      "Book or hand off",
    ],
    icon: "booking",
  },
  {
    id: "loyalty",
    number: "02",
    title: "From anonymous sale to customer relationship.",
    category: "Vision & automation",
    name: "Loyalty & customer-capture automation",
    description:
      "A QR-to-chat loyalty workflow connects customer records, receipt validation, points, and single-use rewards.",
    problem:
      "An unattended sales channel had no customer database and no connected way to distribute loyalty rewards.",
    solution:
      "Built a registration flow with duplicate detection, receipt reading with GPT-4o Vision, and automated points and discount-code handling through WhatsApp and Telegram.",
    outcome:
      "The business gains a first-party customer database and a repeatable reward workflow without manually tracking each receipt and points balance.",
    boundary:
      "Duplicate detection and receipt validation are part of the workflow before a reward is issued.",
    stack: [
      "n8n",
      "GPT-4o Vision",
      "WhatsApp / Telegram",
      "Docker",
      "DigitalOcean",
    ],
    flow: ["QR registration", "Validate receipt", "Update points + reward"],
    icon: "loyalty",
  },
  {
    id: "retail",
    number: "03",
    title: "One view of the entire operation.",
    category: "Full-stack systems",
    name: "Remote retail operations platform",
    description:
      "A consolidated dashboard for connected machines: pricing, inventory, reservations, and sales analytics.",
    problem:
      "A fleet operator depended on scattered vendor portals, with no remote price control and no consolidated view of daily operations.",
    solution:
      "Built a Node.js platform with SQLite, background jobs, and sale alerts. Reverse-engineered the vendor Android app with smali-level patches to enable remote price synchronization.",
    outcome:
      "The operator can manage price changes, reservations, stock, and product age from one dashboard, with revenue breakdowns by location, day, and hour.",
    boundary:
      "Background synchronization connects the dashboard to the machines; operational data is kept in a consolidated store.",
    stack: [
      "Node.js",
      "Express",
      "SQLite",
      "REST APIs",
      "Web Push / PWA",
      "Docker",
    ],
    flow: ["Fleet data", "Dashboard + analytics", "Remote operations"],
    icon: "retail",
  },
  {
    id: "social",
    number: "04",
    title: "A publishing workflow that keeps moving.",
    category: "Generative AI",
    name: "Autonomous social media agent",
    description:
      "Scheduled content for a restaurant in Greece, from a menu-grounded caption to a branded image and multi-platform publishing.",
    problem:
      "A restaurant client had little time to create and publish consistent content across its social channels.",
    solution:
      "Built a Python agent that plans posts, writes Greek captions using the real menu and recent-post history, renders images with Playwright, and publishes through Meta APIs.",
    outcome:
      "Facebook, Instagram, and Threads publishing runs from one scheduled workflow. A deterministic template path supports demonstrations without an LLM key.",
    boundary:
      "Generated content uses the real menu; the publishing layer handles each platform's upload requirements.",
    stack: ["Python", "OpenAI", "Meta Graph API", "Playwright"],
    flow: ["Menu + recent posts", "Caption + image", "Publish across Meta"],
    icon: "social",
    github: "https://github.com/Ninadnj/meta-social-agent",
  },
] as const;

export const openSourceProjects = [
  {
    name: "agent-memory-engine",
    category: "Memory & MCP",
    href: "https://github.com/Ninadnj/agent-memory-engine",
    description:
      "Shared project memory for coding agents, with token-budgeted recall, revision history, rollback, and protection against stale edits.",
    evidence:
      "Published retrieval diagnostic: 0.93 literal recall and 0.43 paraphrase recall on 14 memories and seven queries.",
    limit:
      "A small retrieval benchmark, not a measure of improved coding performance.",
    stack: "Python · MCP · embeddings",
  },
  {
    name: "honest-agent",
    category: "Tool-use evaluation",
    href: "https://github.com/Ninadnj/honest-agent",
    description:
      "A tool registry and an explicit abstention policy let an agent decline requests it cannot fulfill. Includes deterministic and live-model evaluation paths.",
    evidence:
      "Published deterministic benchmark: phantom calls fall from 6 to 0 across 12 requests; real-tool coverage stays at 100%.",
    limit:
      "The offline result isolates the mechanism. Live-model results are evaluated separately.",
    stack: "Python · Anthropic API · evaluation",
  },
  {
    name: "traceable-brief-translator",
    category: "Structured AI & provenance",
    href: "https://github.com/Ninadnj/traceable-brief-translator",
    description:
      "Translates incomplete product briefs into six-section engineering dossiers. Typed contracts and deterministic checks connect claims to source spans and preserve human review.",
    evidence:
      "Two documented cases, with page-level evidence and revalidation after edits. Saved examples are available in the demo.",
    limit:
      "Traceability checks establish provenance; engineering judgement still belongs to a person.",
    stack: "Python · Pydantic · Streamlit · pytest",
    demo: "https://traceable-brief-translator-pebssqcwrpql6v8spzsxu5.streamlit.app/",
  },
  {
    name: "mcp-skills-kit",
    category: "Reusable agent tooling",
    href: "https://github.com/Ninadnj/mcp-skills-kit",
    description:
      "Composable skills combine instructions, typed tools, and a per-skill evaluation. Tool schemas are generated from Python type hints and exposed through MCP.",
    evidence:
      "The core demo and evaluation run offline; an optional MCP adapter connects the tools to compatible clients.",
    limit:
      "Offline checks exercise the framework, not every possible model or client interaction.",
    stack: "Python · FastMCP · BM25",
  },
  {
    name: "idk-layer",
    category: "Runtime validation",
    href: "https://github.com/Ninadnj/idk-layer",
    description:
      "A Node.js guard proxy validates tool names against a registry, adds an abstention instruction, and displays token usage and estimated cost.",
    evidence:
      "Compare guard-on and guard-off scenarios through the dashboard, with mock, live-API, and saved-replay modes.",
    limit:
      "Scripted mock behaviour demonstrates the mechanism; it is not evidence of live-model performance.",
    stack: "Node.js · HTTP proxy · tool validation",
  },
] as const;

export const capabilities = [
  {
    title: "Agents & retrieval",
    description: "Connecting business knowledge to useful actions.",
    skills:
      "LLM agents, RAG, tool calling, MCP, conversation memory, human handoffs",
  },
  {
    title: "Automation & integrations",
    description: "Bringing everyday systems into one workflow.",
    skills:
      "n8n, REST APIs, webhooks, Google Workspace APIs, Meta Graph API, Twilio",
  },
  {
    title: "Validation & evaluation",
    description: "Making system behaviour inspectable and testable.",
    skills:
      "Pydantic, structured outputs, pytest, evaluation harnesses, regression benchmarks",
  },
  {
    title: "Backend & delivery",
    description: "Building and operating the supporting infrastructure.",
    skills:
      "Python, FastAPI, Node.js, SQL, Docker, DigitalOcean, GCP Cloud Run, GitHub Actions",
  },
] as const;
