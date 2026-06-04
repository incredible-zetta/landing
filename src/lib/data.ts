// Zetta CRM — landing content (single source of truth)

export const ANNOUNCEMENT = {
  text: 'v0.0.3-beta is live.',
  suffix: 'GHCR image, release notes, and cloud install wiki are ready.',
  cta: 'Read release',
  href: 'https://github.com/incredible-zetta/crm/releases/tag/v0.0.3-beta',
};

export const NAV = {
  brand: 'Zetta CRM',
  links: [
    { label: 'MCP Tools', href: '#features' },
    { label: 'Deploy', href: '#deploy' },
    { label: 'Security', href: '#why' },
    { label: 'Docs', href: '#docs' },
    { label: 'GitHub', href: 'https://github.com/incredible-zetta/crm' },
  ],
  github: { label: 'GitHub', count: 'Open source', href: 'https://github.com/incredible-zetta/crm' },
  cta: { label: 'Deploy Beta', href: '#deploy' },
};

export const HERO = {
  eyebrow: 'Open-Source · MCP Server · Self-Hosted',
  titleA: 'CRM backend',
  titleGradient: 'built for',
  titleB: 'AI agents',
  sub: 'A Go MCP server with 28 agent tools: contacts, email, campaigns, tracking, scheduling, analytics, exports, unsubscribe, soft-delete, and purge. v0.0.3-beta is ready to deploy.',
  primary: { label: 'Deploy v0.0.3-beta', href: '#deploy' },
  secondary: { label: 'View release', href: 'https://github.com/incredible-zetta/crm/releases/tag/v0.0.3-beta' },
};

export const TRUST = [
  { icon: 'shield-check', title: 'Self-hosted backend', desc: 'Run CRM data in your infra.' },
  { icon: 'terminal', title: '28 MCP tools', desc: 'Agent-ready CRM operations.' },
  { icon: 'key-round', title: 'API-key gated', desc: 'MCP endpoint stays private.' },
];

export const FEATURES = [
  { icon: 'users-round', title: 'Contacts for agents', desc: 'Create, update, import, export, unsubscribe, and delete contacts through MCP tools.' },
  { icon: 'mail', title: 'Email + templates', desc: 'Send SMTP or Mailgun email, render templates, and reuse merge variables.' },
  { icon: 'megaphone', title: 'Campaign engine', desc: 'Create campaigns, schedule dispatches, and track delivery, opens, and clicks.' },
  { icon: 'calendar-clock', title: 'Built-in scheduler', desc: 'Queue email and campaign tasks without another worker service.' },
  { icon: 'bar-chart-3', title: 'Analytics overview', desc: 'Give agents compact CRM metrics without wasting context tokens.' },
];

export const DEPLOY_RAIL = [
  { icon: 'container', title: 'GHCR image', sub: 'v0.0.3-beta' },
  { icon: 'binary', title: 'Single binary', sub: 'Go backend' },
  { icon: 'plug', title: 'MCP HTTP', sub: 'POST /mcp' },
  { icon: 'database', title: 'MySQL', sub: 'Single database' },
  { icon: 'mail', title: 'SMTP/Mailgun', sub: 'Email providers' },
  { icon: 'bot', title: 'AI agents', sub: 'CRM tools ready' },
];

export const WHY = [
  { icon: 'lock', title: 'Own your CRM data', desc: 'Contacts, campaigns, templates, and analytics stay in your database.' },
  { icon: 'shield-check', title: 'Private MCP endpoint', desc: 'Bearer or X-API-Key auth gates every agent tool call.', highlight: 'Bearer or X-API-Key auth' },
  { icon: 'globe', title: 'Public tracking routes', desc: 'Click, open, and export routes work for email recipients without agent credentials.' },
  { icon: 'badge-dollar-sign', title: 'Open-source core', desc: 'Clone, audit, deploy, and adapt the backend without vendor lock-in.' },
];

export const CTA_BAND = {
  titleA: 'Ship a private CRM backend for agents',
  titleGradient: 'this hour.',
  sub: 'Pull the beta image, point agents at POST /mcp, and keep contacts, campaigns, tracking, and exports inside your infrastructure.',
  primary: { label: 'Open install wiki', href: 'https://github.com/incredible-zetta/crm/wiki' },
  secondary: { label: 'View release', href: 'https://github.com/incredible-zetta/crm/releases/tag/v0.0.3-beta' },
};

export const DM_NAV = [
  ['layout-grid', 'Overview', true],
  ['users', 'Contacts', false],
  ['building-2', 'Accounts', false],
  ['bot', 'AI Agents', false],
  ['message-square', 'Conversations', false],
  ['check-square', 'Tasks', false],
  ['git-branch', 'Workflows', false],
  ['bar-chart-3', 'Analytics', false],
  ['settings', 'Settings', false],
] as const;

export const DM_STATS = [
  ['Active Agents', '24', '+12%'],
  ['Contacts', '8,842', '+18%'],
  ['Conversations', '32,104', '+24%'],
  ['Tasks Completed', '1,284', '+8%'],
] as const;

export const DM_AGENTS = [
  { name: 'Support Agent', value: 12540, hue: 0 },
  { name: 'Sales Agent', value: 8430, hue: 50 },
  { name: 'Onboarding Agent', value: 6120, hue: -40 },
  { name: 'Research Agent', value: 5014, hue: 120 },
] as const;

export const DM_CHART = [3.4, 3.0, 3.3, 2.6, 2.9, 3.7, 4.1, 4.4, 4.2, 4.9, 5.3, 5.6] as const;
export const DM_AXIS = ['May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16'] as const;
