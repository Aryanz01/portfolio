/** All portfolio content, sourced from Aryan's resume (July 2026). */

/** Base path baked in at build time (e.g. /portfolio on GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Canonical site URL — feeds metadata, sitemap, robots. Change when moving to a custom domain. */
export const SITE_URL = `https://aryanz01.github.io${BASE_PATH}`;

export const LINKS = {
  email: "aryanvashishth04@gmail.com",
  phone: "+91 92160 69000",
  github: "https://github.com/Aryanz01",
  linkedin: "https://linkedin.com/in/aryan-vashishth-25ba47284",
  leetcode: "https://leetcode.com/u/aryan_vashishth/",
  dexRepo: "https://github.com/Aryanz01/Dex",
  shopxarDemo: "https://dancing-entremet-a11d9c.netlify.app/",
  synthProduct: "https://kayess.chat.getsynth.io",
  flowforgeRepo: "https://github.com/Aryanz01/flowforge",
  votingRepo: "https://github.com/Aryanz01/blockchain-based-voting-system",
  topsisPkg: "https://pypi.org/project/102203551-topsis/",
  dine3dDemo: "https://frontend-nine-sigma-24.vercel.app/3",
  resume: `${BASE_PATH}/Aryan_Vashishth_Resume.pdf`,
} as const;

/* ---------------------------------- skills --------------------------------- */

export type SkillColumn = { title: string; items: string[] };

export const SKILL_COLUMNS: SkillColumn[] = [
  {
    title: "DEVELOPMENT",
    items: [
      "TypeScript / JavaScript",
      "Node.js / Bun + Hono",
      "C++ / Java / SQL",
      "Python",
      "WebSockets / REST",
      "Redis / caching",
      "Microservices",
    ],
  },
  {
    title: "AI & REALTIME",
    items: [
      "Gemini Live · voice",
      "Multi-LLM runtimes",
      "vLLM + Modal",
      "PyTorch · CUDA",
      "24kHz PCM streaming",
      "Agent memory layers",
      "Output gating / evals",
    ],
  },
  {
    title: "FRONTEND",
    items: [
      "React.js",
      "Next.js",
      "Flutter / Dart",
      "Three.js / AR · WebGL",
      "Tailwind CSS",
      "HTML / CSS",
      "Responsive design",
    ],
  },
  {
    title: "CLOUD & DATA",
    items: [
      "AWS · EC2 ECS Lambda S3",
      "Firebase / Firestore",
      "Docker / Nginx",
      "PostgreSQL / MySQL",
      "MongoDB / DynamoDB",
      "CI/CD · GitHub Actions",
      "SQS · async pipelines",
    ],
  },
];

export const EDUCATION = {
  degree: "BE, Computer Engineering",
  school: "Thapar Institute of Engineering & Technology",
  period: "May 2022 — May 2026",
  detail: "CGPA 8.16 / 10 · Patiala, Punjab",
};

export const CERTIFICATIONS = [
  "AWS Certified AI Practitioner (AIF-C01)",
  "Professional Certificate in Blockchain — IIT Kanpur · Jun — Oct 2024",
];

export const ACHIEVEMENTS = [
  "Co-authored research paper on TGNN-based Ethereum fraud detection (under review)",
  "Top 10% — Axis Moves Challenge 2025, among 20,000+ candidates nationwide",
  "Runner-up — AIESEC Hackathon",
  "Best Speaker & Narrator — TEDxTIET + Echoes Club",
  "Mentored 10 juniors as TEDxTIET core developer",
  "Built the Echoes Club website; coordinated events with 300+ attendees",
];

/* -------------------------------- experience -------------------------------- */

export type MetaItem = { label: string; value: string; href?: string };

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  focus: string;
  intro: string;
  scope: string[];
  meta: MetaItem[];
  /** optional preview window shown in the expansion's side column */
  mock?: MockKind;
  mockTitle?: string;
  caption?: string;
};

export const EXPERIENCE: Experience[] = [
  {
    id: "basethesis",
    company: "Basethesis Labs",
    role: "Software Engineer · Contract",
    period: "Jun 2026 — Present",
    focus: "Synth — an AI CFO on TallyPrime",
    intro:
      "Synth is an AI CFO that reads and writes real client books in TallyPrime — 76 users on kayess.chat.getsynth.io. Unlike Zoho, Microsoft or ERPNext, Tally has no API, so the integration began by reverse-engineering its XML protocol — then making it safe for agents to post into live ledgers.",
    scope: [
      "Own Synth's TallyPrime integration end-to-end, built on a reverse-engineered XML protocol.",
      "Built a deterministic financial-statement engine — P&L, balance sheet, trial balance, ageing, TDS, GST — matched against Tally on 15 client books.",
      "Turned Tally's flaky single-threaded XML gateway into a reliable production write path: half-open circuit breaker, single-flight mutex, month-windowed batched reads with byte + wall-clock caps.",
      "Root-caused and eliminated a reproducible OOM wedge coming from unbounded full-history exports.",
      "Built the AI write-path safety model — REMOTEID identity, fail-closed dedup, phantom-write detection, resumable UNKNOWN-state bulk writes — so agents post into live client books without double-posts.",
      "Worked directly with client CFOs and financial analysts; reverse-engineered how they run their books and validated the automation on live accounts.",
    ],
    meta: [
      { label: "ROLE", value: "Software Engineer, Contract" },
      { label: "PERIOD", value: "Jun 2026 — Present" },
      { label: "STACK", value: "TypeScript · Node.js · Tally XML" },
      { label: "USERS", value: "76 · live client books" },
      { label: "PRODUCT", value: "kayess.chat.getsynth.io", href: LINKS.synthProduct },
    ],
    mock: "ledger",
    mockTitle: "synth-tally.preview",
    caption: "Statement engine · guarded write path",
  },
  {
    id: "stimuler",
    company: "Stimuler",
    role: "Full-Stack Engineer · Intern",
    period: "Jan 2026 — Jun 2026",
    focus: "Realtime voice + LLM infrastructure",
    intro:
      "Six months owning the realtime conversation backend of Stimuler's speech-improvement product end-to-end — transport, LLM orchestration, voice infrastructure, and the ops tooling around it.",
    scope: [
      "Cut Conversation V3 p50 latency 23s → ~1.4s (~94%) by re-architecting the backend off Firebase Cloud Functions onto Bun + Hono with native WebSocket streaming; drove the system to upstream-bound via two cross-team optimisations.",
      "Rebuilt voice calling server-side on Gemini Live after client-side Hume couldn't capture audio — 24kHz PCM streaming, 500ms barge-in stitching, dynamic RMS noise gating; killed Gemini's post-2-minute latency cliff; rolled out to ~3K users via SHA-1 bucketing.",
      "Architected V3's multi-LLM runtime with 4+ providers — OpenAI, GPT-4o, in-house models on Modal + vLLM — swappable live via Firestore config; Qwen3 output gates block regressions at zero latency cost.",
      "Built the calling-ops dashboard solo (Flutter Web, Firebase Auth); shipped a cross-session memory layer that LLM-summarises voice + chat into per-user profiles threaded into every prompt.",
      "Migrated ERS pronunciation drill scoring onto Stimuler's in-house model, off Microsoft's scoring API, preserving full realtime scoring.",
      "Shipped a self-healing, lazy per-user V2→V3 migration across 150+ topics — zero downtime, 40+ Jest tests.",
    ],
    meta: [
      { label: "ROLE", value: "Full-Stack Engineer Intern" },
      { label: "PERIOD", value: "Jan 2026 — Jun 2026" },
      { label: "STACK", value: "Bun · Hono · WebSockets · Gemini Live · Firestore" },
      { label: "RESULT", value: "p50 23s → ~1.4s (~94%) · voice live for ~3K users" },
    ],
    mock: "chat",
    mockTitle: "conversation-v3.preview",
    caption: "Conversation V3 · streaming + p50 telemetry",
  },
  {
    id: "elc",
    company: "ELC · Thapar",
    role: "Research & Engineering Intern",
    period: "Jun 2025 — Jul 2025",
    focus: "TGNN fraud detection · 3M+ txn dataset",
    intro:
      "An on-site research & engineering internship — leading a team of five building a temporal-graph pipeline that flags fraudulent Ethereum wallets, from raw chain data to a prediction API. The work became a co-authored paper, currently under review.",
    scope: [
      "Led a team of 5 building a scalable TGNN-based Ethereum fraud-detection pipeline, end-to-end from data ingestion through prediction API.",
      "Built on CUDA + PyTorch Geometric; optimised GPU pipelines with parallelisation and batch tuning — training time down 2.3× on 3M+ transactions.",
      "Engineered 8 wallet-level features with a 5-fold validation framework.",
      "Benchmarked temporal GNNs against static models and pivoted to GCN + LightGBM for stability, improving accuracy and recall by 30%.",
      "Co-authored the resulting research paper comparing temporal vs static graph models (under review).",
    ],
    meta: [
      { label: "ROLE", value: "Research & Engineering Intern, on-site" },
      { label: "PERIOD", value: "Jun 2025 — Jul 2025" },
      { label: "STACK", value: "TGNN · GCN · LightGBM · CUDA · PyTorch Geometric" },
      { label: "STATUS", value: "Paper under review" },
      { label: "DEEP DIVE", value: "→ tgnn-fraud in projects.ts", href: "/projects/#tgnn-fraud" },
    ],
  },
  {
    id: "dine3d",
    company: "Dine3D",
    role: "Software Developer Engineer · On-site",
    period: "Jan 2025 — Mar 2025",
    focus: "3D web apps · Next.js + WebGL",
    intro:
      "Software developer engineer building a 3D web experience — Next.js, React and WebGL on the front, AWS underneath, and a proper CI/CD pipeline around it.",
    scope: [
      "Built a 3D web app with Next.js, React and WebGL — render latency cut by 40%.",
      "Deployed on AWS EC2, S3 and DynamoDB for scalable, low-latency data access at 99.9% uptime.",
      "Implemented CI/CD pipelines via GitHub Actions and Docker, improving release speed by 25%.",
      "Developed responsive, accessible UIs with Tailwind CSS — UX engagement up 35%.",
    ],
    meta: [
      { label: "ROLE", value: "Software Developer Engineer, on-site" },
      { label: "PERIOD", value: "Jan 2025 — Mar 2025" },
      { label: "STACK", value: "Next.js · React · WebGL · Tailwind · AWS · Docker" },
      { label: "LIVE", value: "frontend-nine-sigma-24.vercel.app ↗", href: LINKS.dine3dDemo },
    ],
  },
  {
    id: "web-spider",
    company: "Web Spider Solutions",
    role: "Web Development Intern · Remote",
    period: "Dec 2024 — Jan 2025",
    focus: "Frontend + AWS across client apps",
    intro:
      "A remote internship shipping frontend components and AWS-backed integrations across multiple client web apps, on a team of four delivering weekly.",
    scope: [
      "Implemented and troubleshot frontend components for multiple web apps — load times down 10% via efficient asset delivery on Amazon S3.",
      "Resolved 10+ UI/UX issues and integrated backend APIs on EC2 with containerised services on ECR.",
      "Used SQS for asynchronous processing and DynamoDB for fast, scalable data storage.",
      "Collaborated with a team of 4 to deliver weekly feature updates.",
    ],
    meta: [
      { label: "ROLE", value: "Web Development Intern, remote" },
      { label: "PERIOD", value: "Dec 2024 — Jan 2025" },
      { label: "STACK", value: "React · AWS (S3 · EC2 · ECR · SQS · DynamoDB)" },
    ],
  },
];

/* --------------------------------- projects --------------------------------- */

export type MockKind =
  | "chat"
  | "voice"
  | "ledger"
  | "orderbook"
  | "shop"
  | "graph"
  | "chain"
  | "term"
  | "flow";

export type Project = {
  id: string;
  name: string;
  what: string;
  stack: string;
  where: string;
  mock: MockKind;
  caption: string;
  intro: string;
  scope: string[];
  meta: MetaItem[];
};

export const PROJECTS: Project[] = [
  {
    id: "flowforge",
    name: "FlowForge",
    what: "Visual AI pipeline builder + engine",
    stack: "React Flow · FastAPI · SSE",
    where: "personal · GitHub",
    mock: "flow",
    caption: "Canvas run · per-node SSE status",
    intro:
      "A visual AI pipeline builder with a working execution engine: drag nodes onto a canvas, wire them into a DAG, hit Run — a FastAPI backend executes the graph in dependency order and streams every node's status back to the canvas live.",
    scope: [
      "9 node types — Input, LLM, Condition, Math, API Request and more — defined as small config objects over one BaseNode abstraction.",
      "Execution engine schedules with Kahn's topological sort; per-node executors pass values along edges.",
      "Live status over Server-Sent Events: running pulse, done with duration, error, skipped.",
      "Condition nodes route a value down exactly one branch — the untaken branch's downstream nodes skip automatically.",
      "{{ variable }} templating in Text nodes becomes input handles, interpolated at run time.",
      "LLM node calls the Anthropic Messages API, with a keyless mock mode so the demo runs anywhere.",
    ],
    meta: [
      { label: "TYPE", value: "Personal project" },
      { label: "STACK", value: "React Flow · Zustand · FastAPI · Python · SSE" },
      { label: "TESTS", value: "Engine covered by a 350-line test suite" },
      { label: "SOURCE", value: "github.com/Aryanz01/flowforge ↗", href: LINKS.flowforgeRepo },
    ],
  },
  {
    id: "dex",
    name: "Dex — Exchange Engine",
    what: "Order book + matching engine",
    stack: "TypeScript · Node · Redis",
    where: "personal · GitHub",
    mock: "orderbook",
    caption: "Order book · trade tape",
    intro:
      "A realtime distributed exchange engine built to understand market microstructure properly: a heap-based order book with O(log n) insertion and best-price matching, driven by an event-driven engine on Redis Pub/Sub.",
    scope: [
      "Heap-based order book — O(log n) insertion, best-price matching, partial fills, realtime trade-ID generation; sustained 10,000+ orders.",
      "Event-driven matching engine on Redis Pub/Sub.",
      "WebSocket layer streams live trade feeds to clients; trade data persists to PostgreSQL.",
      "Async order-processing pipeline with execution lifecycle tracking (open → matched → filled); a non-blocking event loop holds match latency consistent under concurrent submissions.",
    ],
    meta: [
      { label: "TYPE", value: "Personal systems project" },
      { label: "STACK", value: "TypeScript · Node.js · Redis · PostgreSQL" },
      { label: "SOURCE", value: "github.com/Aryanz01/Dex ↗", href: LINKS.dexRepo },
    ],
  },
  {
    id: "shopxar",
    name: "ShopXar",
    what: "3D + AR e-commerce platform",
    stack: "React · Three.js · MongoDB",
    where: "personal · live",
    mock: "shop",
    caption: "Product viewer · AR preview",
    intro:
      "A 3D e-commerce platform where products are inspected in 3D and previewed in your own room via AR — Three.js and model-viewer up front, Node.js and MongoDB behind.",
    scope: [
      "3D product viewing with realtime customisation + AR previews via Three.js and model-viewer — engagement up 30% in pilot tests.",
      "Cut model-load latency 40% via lazy loading and CDN caching.",
      "100% cross-device compatibility.",
    ],
    meta: [
      { label: "TYPE", value: "Personal project" },
      { label: "STACK", value: "React · TypeScript · Node.js · MongoDB · Three.js" },
      { label: "LIVE", value: "dancing-entremet-a11d9c.netlify.app ↗", href: LINKS.shopxarDemo },
    ],
  },
  {
    id: "voting",
    name: "Blockchain Voting System",
    what: "Tamper-resistant on-chain voting",
    stack: "Solidity · Ethereum · React",
    where: "personal · GitHub",
    mock: "chain",
    caption: "Ballot flow · on-chain tally",
    intro:
      "An end-to-end voting dApp: Solidity contracts handle voter registration, casting and tallying on Ethereum Sepolia, signed through MetaMask, with a React front-end on top.",
    scope: [
      "Solidity smart contracts for voter registration, vote casting and tallying — 99% reliability.",
      "MetaMask + Ethereum Sepolia integration; tamper-resistant vote recording in under 15s.",
      "React interface that cut user interaction time by 30%.",
    ],
    meta: [
      { label: "TYPE", value: "Personal project" },
      { label: "STACK", value: "Solidity · Ethereum (Sepolia) · MetaMask · React" },
      { label: "SOURCE", value: "blockchain-based-voting-system ↗", href: LINKS.votingRepo },
    ],
  },
  {
    id: "topsis",
    name: "TOPSIS on PyPI",
    what: "Published decision-analysis package",
    stack: "Python · NumPy · Pandas",
    where: "personal · PyPI",
    mock: "term",
    caption: "CLI run · ranked output",
    intro:
      "An open-source implementation of TOPSIS (multi-criteria decision analysis), published on PyPI with production-ready validation and a standalone CLI.",
    scope: [
      "Published to PyPI as an installable, documented package.",
      "Input validation, data pre-processing and result generation — computational time down 20%.",
      "Command-line execution with automated CSV output; runs fully offline.",
    ],
    meta: [
      { label: "TYPE", value: "Open-source package" },
      { label: "STACK", value: "Python · NumPy · Pandas" },
      { label: "PACKAGE", value: "pypi.org/project/102203551-topsis ↗", href: LINKS.topsisPkg },
    ],
  },
  {
    id: "tgnn-fraud",
    name: "TGNN Fraud Detection",
    what: "Ethereum fraud pipeline · 3M+ txns",
    stack: "GCN · LightGBM",
    where: "ELC · paper",
    mock: "graph",
    caption: "Wallet graph · fraud scoring",
    intro:
      "A temporal-graph pipeline that flags fraudulent Ethereum wallets — 3M+ transactions processed end-to-end, from ingestion to a prediction API, built with a team of five that I led. Now a co-authored paper under review.",
    scope: [
      "End-to-end pipeline: ingestion → 8 wallet-level features → model → prediction API.",
      "GPU pipeline on CUDA + PyTorch Geometric — training time cut 2.3× via parallelisation and batch tuning.",
      "Benchmarked temporal GNNs vs static models; pivoted to GCN + LightGBM, improving accuracy and recall by 30%.",
      "Co-authored research paper, currently under review.",
    ],
    meta: [
      { label: "BUILT AT", value: "ELC · Thapar → experience.ts", href: "/experience/#elc" },
      { label: "SCALE", value: "3M+ transactions" },
      { label: "STATUS", value: "Paper under review" },
    ],
  },
];
