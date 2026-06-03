// Zetta CRM — landing content (single source of truth)

export const ANNOUNCEMENT = {
  text: 'Zetta CRM v1.0 is here.',
  suffix: 'Self-hosted CRM for AI operators.',
  cta: 'Read the v1.0 announcement',
  href: '#changelog',
};

export const NAV = {
  brand: 'Zetta CRM',
  links: [
    { label: 'Product', href: '#features' },
    { label: 'Deploy', href: '#deploy' },
    { label: 'Security', href: '#why' },
    { label: 'Docs', href: '#docs' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#changelog' },
  ],
  github: { label: 'Star', count: '3.2k', href: 'https://github.com/' },
  cta: { label: 'Get Started', href: '#get-started' },
};

export const HERO = {
  eyebrow: 'Privacy-First · Self-Hosted · Operator-Focused',
  titleA: 'The',
  titleGradient: 'self-hosted',
  titleB: 'CRM for AI operators',
  sub: 'Own your data. Run it your way. No data stored on vendor servers — ever.',
  primary: { label: 'Deploy Zetta CRM', href: '#deploy' },
  secondary: { label: 'View on GitHub', href: 'https://github.com/' },
};

export const TRUST = [
  { icon: 'shield-check', title: '100% Self-Hosted', desc: 'You control everything.' },
  { icon: 'lock', title: 'No Vendor Storage', desc: 'Zero data leaves your infra.' },
  { icon: 'key-round', title: 'Privacy by Design', desc: 'Built for operators, not advertisers.' },
];

export const FEATURES = [
  { icon: 'users-round', title: 'Built for AI Operators', desc: 'Manage agents, conversations, tasks, and relationships in one powerful workspace.' },
  { icon: 'zap', title: 'Agent-Centric CRM', desc: 'Designed for AI-native workflows and multi-agent collaboration at scale.' },
  { icon: 'boxes', title: 'Extensible & Open', desc: 'Open source core, plugin-ready, and API-first.' },
  { icon: 'shield', title: 'Enterprise Ready', desc: 'RBAC, audit logs, encryption, and compliance-friendly by default.' },
  { icon: 'terminal', title: 'Developer Friendly', desc: 'Clean APIs, webhooks, and SDKs to build without limits.' },
];

export const DEPLOY_RAIL = [
  { icon: 'container', title: 'Docker', sub: 'Run anywhere' },
  { icon: 'ship-wheel', title: 'Kubernetes', sub: 'Scale with ease' },
  { icon: 'code-xml', title: 'API', sub: 'Integrate freely' },
  { icon: 'database', title: 'Local DB', sub: 'Your data, local' },
  { icon: 'network', title: 'Vector Store', sub: 'Private by default' },
  { icon: 'bot', title: 'AI Agents', sub: 'Plug in your stack' },
];

export const WHY = [
  { icon: 'lock', title: 'Total Data Ownership', desc: 'Your data never leaves your environment.' },
  { icon: 'shield-check', title: 'Stronger Privacy', desc: 'No cross-tenant risk. No tracking. No selling.', highlight: 'No cross-tenant risk.' },
  { icon: 'globe', title: 'Compliance Ready', desc: 'Meet internal policies and industry requirements.' },
  { icon: 'badge-dollar-sign', title: 'No Vendor Lock-In', desc: 'Open standards. Export your data anytime.' },
];

export const CTA_BAND = {
  titleA: 'Spin up your own private instance',
  titleGradient: 'in minutes.',
  sub: 'Deploy Zetta CRM on your own infrastructure and keep every byte of customer data under your control.',
  primary: { label: 'Deploy Zetta CRM', href: '#deploy' },
  secondary: { label: 'Read the Docs', href: '#docs' },
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
