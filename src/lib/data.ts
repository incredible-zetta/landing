// Zetta CRM — landing content (single source of truth)

export const ANNOUNCEMENT = {
  text: 'Open-source MCP CRM for AI agents.',
  suffix: 'Backend is ready. Operator UI is coming soon.',
  cta: 'View repository',
  href: 'https://github.com/incredible-zetta/crm',
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
  cta: { label: 'Deploy Backend', href: '#deploy' },
};

export const HERO = {
  eyebrow: 'Open-Source · MCP Server · Self-Hosted',
  titleA: 'CRM backend',
  titleGradient: 'built for',
  titleB: 'AI agents',
  sub: 'A Go MCP server with contacts, email, campaigns, tracking, scheduling, and analytics. Operator UI is coming soon.',
  primary: { label: 'Deploy Backend', href: '#deploy' },
  secondary: { label: 'View on GitHub', href: 'https://github.com/incredible-zetta/crm' },
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
  { icon: 'container', title: 'Docker image', sub: 'One-port deploy' },
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
  titleA: 'Connect AI agents to a real CRM backend',
  titleGradient: 'today.',
  sub: 'Deploy the open-source Go MCP server, point your agents at POST /mcp, and keep customer data under your control.',
  primary: { label: 'Deploy Backend', href: '#deploy' },
  secondary: { label: 'View GitHub', href: 'https://github.com/incredible-zetta/crm' },
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
