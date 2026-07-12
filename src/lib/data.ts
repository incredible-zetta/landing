// Zetta CRM — landing content (single source of truth)
// Feature story aligned to https://github.com/incredible-zetta/crm

export const SITE_DESCRIPTION =
  'Self-hosted Go MCP server for AI agents: 75 tools for contacts, email, campaigns, inbox, WhatsApp, Threads, LinkedIn, tracking, scheduling, and analytics. One binary, one MySQL database, one Docker image.';

export const ANNOUNCEMENT = {
  text: 'Stable release is live.',
  suffix: 'GHCR image, release notes, and cloud install wiki are ready for production pilots.',
  cta: 'Read release',
  href: 'https://github.com/incredible-zetta/crm/releases',
};

export const NAV = {
  brand: 'Zetta CRM',
  links: [
    { label: 'Capabilities', href: '#features' },
    { label: 'Deploy', href: '#deploy' },
    { label: 'Why', href: '#why' },
    { label: 'Docs', href: '#docs' },
    { label: 'GitHub', href: 'https://github.com/incredible-zetta/crm' },
  ],
  github: { label: 'GitHub', count: 'Open source', href: 'https://github.com/incredible-zetta/crm' },
  cta: { label: 'Deploy', href: '#deploy' },
};

export const HERO = {
  eyebrow: 'Open-source · MCP · Self-hosted',
  titleA: 'Self-hosted CRM',
  titleGradient: 'for',
  titleB: 'AI agents',
  sub: 'A Go Model Context Protocol server with 75 tools. Give any agent contacts, email, campaigns, inbox, WhatsApp, Threads, LinkedIn, scheduling, and analytics — on your infrastructure.',
  primary: { label: 'Deploy', href: '#deploy' },
  secondary: { label: 'View on GitHub', href: 'https://github.com/incredible-zetta/crm' },
};

export const TRUST = [
  { icon: 'terminal', title: '75 MCP tools', desc: 'Contacts through channels, all over POST /mcp.' },
  { icon: 'database', title: 'One database', desc: 'Single MySQL. Single binary. Single Docker image.' },
  { icon: 'key-round', title: 'API-key gated', desc: 'Bearer or X-API-Key. Tracking routes stay public.' },
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
    icon: 'bar-chart-3',
    title: 'Ops & analytics',
    desc: 'Health checks, embedded migrations, CSV export downloads, and a compact analytics overview sized for agent context budgets.',
    points: ['health_check', 'analytics_overview', 'Token-efficient responses', 'EasyPanel one-port deploy'],
  },
];

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
  titleA: 'Run a private CRM backend',
  titleGradient: 'for your agents.',
  sub: 'Pull the image, connect MySQL, set BASE_URL and MCP_API_KEY, point agents at POST /mcp.',
  primary: { label: 'Open install wiki', href: 'https://github.com/incredible-zetta/crm/wiki' },
  secondary: { label: 'View release', href: 'https://github.com/incredible-zetta/crm/releases' },
};
