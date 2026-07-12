// Zetta CRM — landing content (single source of truth)
// Feature story aligned to https://github.com/incredible-zetta/crm

export const SITE_DESCRIPTION =
  'Self-hosted Go MCP server for AI agents: 75 tools for contacts, email, campaigns, inbox, WhatsApp, Threads, LinkedIn, X, tracking, scheduling, and analytics. One binary, one MySQL database, one Docker image.';

export const ANNOUNCEMENT = {
  text: 'Latest release is live.',
  suffix: 'GHCR image, release notes, and install guides are ready for production pilots.',
  cta: 'Read release',
  href: 'https://github.com/incredible-zetta/crm/releases',
};

export const NAV = {
  brand: 'Zetta CRM',
  links: [
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Ownership', href: '/#ownership' },
    { label: 'Install', href: '/install' },
    { label: 'Releases', href: '/#releases' },
    { label: 'GitHub', href: 'https://github.com/incredible-zetta/crm' },
  ],
  github: { label: 'GitHub', count: 'Stars', href: 'https://github.com/incredible-zetta/crm' },
  cta: { label: 'Install', href: '/install' },
};

export const HERO = {
  brand: 'Zetta',
  brandAccent: 'CRM',
  eyebrow: 'Open-source · MCP · Self-hosted',
  title: 'Own the CRM your agents run on.',
  sub: 'A Go Model Context Protocol server with 75 tools. Contacts, email, campaigns, inbox, WhatsApp, Threads, LinkedIn, and X — on your infrastructure.',
  primary: { label: 'Install now', href: '/install' },
  secondary: { label: 'View on GitHub', href: 'https://github.com/incredible-zetta/crm' },
};

export const TRUST = [
  { icon: 'terminal', title: '75 MCP tools', desc: 'Contacts through channels, all over POST /mcp.' },
  { icon: 'database', title: 'One database', desc: 'Single MySQL. Single binary. Single Docker image.' },
  { icon: 'key-round', title: 'API-key gated', desc: 'Bearer or X-API-Key. Tracking routes stay public.' },
];

export const MARQUEE = [
  'Contacts',
  'Email',
  'Campaigns',
  'IMAP inbox',
  'WhatsApp',
  'Threads',
  'LinkedIn',
  'X / Twitter',
  'Scheduling',
  'Analytics',
  'Tracking',
  'GDPR purge',
];

/** Capability story — mirrors the CRM README feature areas. */
export const FEATURES = [
  {
    icon: 'users-round',
    title: 'Contacts & pipeline',
    desc: 'Agents create, import, export, and segment contacts. Fixed stages from new to won/lost, with soft delete and GDPR purge.',
    points: ['CSV import/export', 'Bulk update + filters', 'Email verify & audit', 'Unsubscribe compliance'],
  },
  {
    icon: 'mail',
    title: 'Email & templates',
    desc: 'Send through SMTP or Mailgun. Reusable templates with merge vars, render-before-send, and RFC unsubscribe headers.',
    points: ['SMTP / Mailgun', 'Template CRUD + render', 'Open & click tracking', 'List-Unsubscribe headers'],
  },
  {
    icon: 'megaphone',
    title: 'Campaigns & scheduling',
    desc: 'Segment a list, enqueue a campaign, schedule for later. Background dispatch returns a task id; stats cover delivery, opens, clicks, and top links.',
    points: ['Segmented sends', 'Queued or sync dispatch', 'schedule_task / cancel', 'Campaign stats'],
  },
  {
    icon: 'inbox',
    title: 'IMAP inbox',
    desc: 'Sync inbound replies into local storage. Agents list snippets, read full bodies, mark read, reply, or soft-delete the local copy.',
    points: ['IMAP sync', 'Read / unread', 'Reply from sender', 'Local soft-delete'],
  },
  {
    icon: 'message-circle',
    title: 'WhatsApp channel',
    desc: 'Two-way gateway integration: registration checks, smart-send throttling, inbound webhooks, replies, read receipts, and media lookup.',
    points: ['Registration audit', 'Smart-send throttle', 'Inbound webhooks', 'Media fetch'],
  },
  {
    icon: 'at-sign',
    title: 'Threads channel',
    desc: 'Publish, search, reply, and moderate via Meta Threads. Live Graph calls stay source of truth; posts and replies cache in MySQL.',
    points: ['Publish + insights', 'Reply tree / quota', 'Mentions + search', 'Token refresh'],
  },
  {
    icon: 'briefcase',
    title: 'LinkedIn channel',
    desc: 'Multi-account LinkedIn via the bundled lingin binary. Save cookie sessions, fetch profiles, search people, publish, and comment.',
    points: ['Multi-account sessions', 'Profile / company fetch', 'People search', 'Post + comment'],
  },
  {
    icon: 'hash',
    title: 'X / Twitter channel',
    desc: 'In-process x.com MCP tools: multi-account cookies, post/search/DM, follower graphs, and signed webhook watches.',
    points: ['13 x_* tools', 'Account liveness', 'Webhook watches', 'Contact social handles'],
  },
];

export const STORY = {
  eyebrow: 'From protocol to production',
  left: 'From agents',
  right: 'to outcomes',
  steps: [
    {
      title: 'Connect any MCP client',
      desc: 'Point Claude, Cursor, or your own agent at POST /mcp with a Bearer key. Streamable HTTP — no sidecar choreography.',
    },
    {
      title: 'Run the CRM loop privately',
      desc: 'Create contacts, send campaigns, sync inbox, publish to social channels. Every write lands in your MySQL.',
    },
    {
      title: 'Ship on one port',
      desc: 'One GHCR image, one database, one BASE_URL. EasyPanel, Coolify, Railway, Fly, ECS, Cloud Run, or Kubernetes.',
    },
  ],
};

export const DEPLOY_RAIL = [
  { icon: 'container', title: 'GHCR image', sub: 'Multi-platform' },
  { icon: 'binary', title: 'Single binary', sub: 'Go backend' },
  { icon: 'plug', title: 'POST /mcp', sub: 'Streamable HTTP' },
  { icon: 'database', title: 'MySQL', sub: 'One database' },
];

export const WHY = [
  {
    icon: 'lock',
    title: 'Your data stays yours',
    desc: 'Contacts, campaigns, templates, inbox, and channel history live in your MySQL — not a vendor SaaS.',
  },
  {
    icon: 'shield-check',
    title: 'Private MCP, public tracking',
    desc: 'Agent tools need Bearer or X-API-Key. Click, open, export, and unsubscribe routes stay public for recipients.',
    highlight: 'Bearer or X-API-Key',
  },
  {
    icon: 'globe',
    title: 'Compliance built in',
    desc: 'Unsubscribe tokens, soft delete, and GDPR purge. Optional multi-tenancy scopes data per key + session.',
  },
];

export const CTA_BAND = {
  titleA: 'Give your agents a CRM',
  titleB: 'you actually own.',
  sub: 'Pull the image, connect MySQL, set BASE_URL and MCP_API_KEY, point agents at POST /mcp.',
  primary: { label: 'Open install guide', href: '/install' },
  secondary: { label: 'View release', href: 'https://github.com/incredible-zetta/crm/releases' },
};

export const INSTALL = {
  title: 'Install Zetta CRM',
  description:
    'Step-by-step installation for Zetta CRM: Docker, Docker Compose, required environment variables, reverse proxy routes, and platform guides. Live release tags from GitHub.',
  intro:
    'Zetta CRM runs as one container plus one MySQL 8 database. Use a tagged GHCR image in production. Tags below refresh from the live GitHub API.',
  prerequisites: [
    { title: 'Docker host', desc: 'Any Linux host, VPS, or PaaS that can run containers and expose a port.' },
    { title: 'MySQL 8', desc: 'Managed or self-hosted. DSN must include parseTime=true and multiStatements=true.' },
    { title: 'Public BASE_URL', desc: 'HTTPS origin used for tracking pixels, click redirects, exports, and unsubscribe links.' },
    { title: 'API key', desc: 'Long random secret for MCP auth via Authorization: Bearer or X-API-Key.' },
  ],
  envRequired: [
    { name: 'MCP_API_KEY', required: true, notes: 'Bearer / X-API-Key for POST /mcp' },
    { name: 'DB_DSN', required: true, notes: 'user:pass@tcp(host:3306)/crmagents?parseTime=true&multiStatements=true' },
    { name: 'BASE_URL', required: true, notes: 'Public URL, e.g. https://crm.example.com' },
    { name: 'PORT', required: false, notes: 'Default 8080' },
    { name: 'EXPORT_DIR', required: false, notes: 'Default /data/exports' },
    { name: 'SCHEDULER_INTERVAL_SEC', required: false, notes: 'Default 15' },
    { name: 'SMTP_* or MAILGUN_*', required: false, notes: 'Needed for real email sending' },
    { name: 'MULTI_TENANCY', required: false, notes: 'false by default; set true to scope data per key + X-Session-Id' },
  ],
  routes: [
    { path: 'POST /mcp', auth: 'API key', purpose: 'MCP JSON-RPC (Streamable HTTP)' },
    { path: 'GET /healthz', auth: 'public', purpose: 'Liveness probe' },
    { path: 'GET /t/{code}', auth: 'public', purpose: 'Click tracking redirect' },
    { path: 'GET /o/{code}.png', auth: 'public', purpose: 'Open-tracking pixel' },
    { path: 'GET /export/{id}.csv', auth: 'public', purpose: 'CSV export download (~24h)' },
    { path: 'GET|POST /u/{code}', auth: 'public', purpose: 'Unsubscribe' },
    { path: 'POST /wa/webhook', auth: 'HMAC', purpose: 'Inbound WhatsApp from gateway' },
  ],
  platforms: [
    { label: 'EasyPanel', href: 'https://github.com/incredible-zetta/crm/wiki/EasyPanel', icon: 'layout-grid' },
    { label: 'Coolify', href: 'https://github.com/incredible-zetta/crm/wiki/Coolify', icon: 'wind' },
    { label: 'Railway', href: 'https://github.com/incredible-zetta/crm/wiki/Railway', icon: 'train-front' },
    { label: 'Render', href: 'https://github.com/incredible-zetta/crm/wiki/Render', icon: 'cloud' },
    { label: 'Fly.io', href: 'https://github.com/incredible-zetta/crm/wiki/Fly.io', icon: 'plane' },
    { label: 'AWS ECS', href: 'https://github.com/incredible-zetta/crm/wiki/AWS-ECS', icon: 'server' },
    { label: 'Google Cloud Run', href: 'https://github.com/incredible-zetta/crm/wiki/Google-Cloud-Run', icon: 'cloud' },
    { label: 'Kubernetes', href: 'https://github.com/incredible-zetta/crm/wiki/Kubernetes', icon: 'ship' },
  ],
  faq: [
    {
      q: 'What is the latest Zetta CRM Docker image tag?',
      a: 'Production images are published to ghcr.io/incredible-zetta/crm with semantic version tags (for example v0.7.1). This page pulls the latest tag from GitHub on every build and refreshes client-side.',
    },
    {
      q: 'How do AI agents authenticate to Zetta CRM?',
      a: 'Send Authorization: Bearer <MCP_API_KEY> or X-API-Key: <MCP_API_KEY> on POST /mcp. Tracking and export routes stay intentionally public for email recipients.',
    },
    {
      q: 'Do I need MySQL?',
      a: 'Yes. Zetta CRM uses a single MySQL 8 database. Migrations run on start. Multi-tenancy is optional and off by default.',
    },
    {
      q: 'Where should I install for production?',
      a: 'Any Docker-capable host works. Prefer a tagged release over :master. Platform-specific wiki guides cover EasyPanel, Coolify, Railway, Render, Fly.io, ECS, Cloud Run, and Kubernetes.',
    },
  ],
};
