import {
  ANNOUNCEMENT,
  NAV,
  HERO,
  TRUST,
  FEATURES,
  DEPLOY_RAIL,
  WHY,
  CTA_BAND,
} from './data';

const SITE = 'https://zettacrm.com';

const DEPLOY = {
  heading: 'Deploy Anywhere. You\'re in Control.',
  badge: 'Stable release',
  title: 'v0.1.0 ships as a multi-platform GHCR image.',
  body:
    'Pull one container, connect MySQL 8, set BASE_URL, and expose /mcp to your agents behind API-key auth.',
  dockerExample: `docker pull ghcr.io/incredible-zetta/crm:v0.1.0

MCP_URL=https://crm.example.com/mcp
Authorization: Bearer $MCP_API_KEY`,
  primary: { label: 'Install wiki', href: 'https://github.com/incredible-zetta/crm/wiki' },
  secondary: { label: 'Release notes', href: 'https://github.com/incredible-zetta/crm/releases/tag/v0.1.0' },
};

const SITE_DESCRIPTION =
  'A self-hosted Go MCP server with 34 agent tools: contacts, email, campaigns, tracking, scheduling, analytics, exports, unsubscribe, soft-delete, purge, and IMAP inbox replies. v0.1.0 stable is ready to deploy.';

/** Homepage content as llms.txt (single source: data.ts + deploy copy). */
export function generateLlmsTxt(): string {
  const heroTitle = `${HERO.titleA} ${HERO.titleGradient} ${HERO.titleB}`;
  const ctaTitle = `${CTA_BAND.titleA} ${CTA_BAND.titleGradient}`;

  const lines: string[] = [
    `# ${NAV.brand}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    `Open-source MCP CRM backend for AI agents.`,
    '',
    '## Announcement',
    '',
    `${ANNOUNCEMENT.text} ${ANNOUNCEMENT.suffix}`,
    `- [${ANNOUNCEMENT.cta}](${ANNOUNCEMENT.href})`,
    '',
    '## Hero',
    '',
    HERO.eyebrow,
    '',
    `### ${heroTitle}`,
    '',
    HERO.sub,
    '',
    `- [${HERO.primary.label}](${HERO.primary.href})`,
    `- [${HERO.secondary.label}](${HERO.secondary.href})`,
    '',
    '### Trust',
    '',
    ...TRUST.map((t) => `- **${t.title}**: ${t.desc}`),
    '',
    '## MCP Tools',
    '',
    ...FEATURES.map((f) => `- **${f.title}**: ${f.desc}`),
    '',
    '## Deploy',
    '',
    `### ${DEPLOY.heading}`,
    '',
    DEPLOY.badge,
    '',
    DEPLOY.title,
    '',
    DEPLOY.body,
    '',
    '```',
    DEPLOY.dockerExample,
    '```',
    '',
    `- [${DEPLOY.primary.label}](${DEPLOY.primary.href})`,
    `- [${DEPLOY.secondary.label}](${DEPLOY.secondary.href})`,
    '',
    ...DEPLOY_RAIL.map((r) => `- **${r.title}**: ${r.sub}`),
    '',
    '## Why self-hosted matters',
    '',
    ...WHY.map((w) => {
      const desc = w.highlight ? `${w.highlight} ${w.desc.replace(w.highlight, '').trim()}` : w.desc;
      return `- **${w.title}**: ${desc}`;
    }),
    '',
    '## Get started',
    '',
    `### ${ctaTitle}`,
    '',
    CTA_BAND.sub,
    '',
    `- [${CTA_BAND.primary.label}](${CTA_BAND.primary.href})`,
    `- [${CTA_BAND.secondary.label}](${CTA_BAND.secondary.href})`,
    '',
    '## Navigation',
    '',
    ...NAV.links.map((l) => {
      const href = l.href.startsWith('http') ? l.href : `${SITE}/${l.href.replace(/^\//, '')}`;
      return `- [${l.label}](${href})`;
    }),
    `- [${NAV.github.label}](${NAV.github.href}): ${NAV.github.count}`,
    `- [${NAV.cta.label}](${SITE}/${NAV.cta.href.replace(/^\//, '')})`,
    '',
    '## Home',
    '',
    `- [${NAV.brand}](${SITE}/): ${SITE_DESCRIPTION}`,
  ];

  return `${lines.join('\n')}\n`;
}
