import {
  ANNOUNCEMENT,
  NAV,
  HERO,
  TRUST,
  FEATURES,
  DEPLOY_RAIL,
  WHY,
  CTA_BAND,
  SITE_DESCRIPTION,
} from './data';
import { WIKI_GUIDES, WIKI_URL, REPO_URL, type RepoMeta } from './github';

const SITE = 'https://zettacrm.com';

/** Homepage content as llms.txt — version/tags pulled live from the repo. */
export function generateLlmsTxt(meta: RepoMeta): string {
  const { latest, tags } = meta;
  const heroTitle = `${HERO.titleA} ${HERO.titleGradient} ${HERO.titleB}`;
  const ctaTitle = `${CTA_BAND.titleA} ${CTA_BAND.titleGradient}`;

  const DEPLOY = {
    heading: 'Deploy in one port',
    badge: 'Stable release',
    title: `${latest.tag} — pull the GHCR image and point agents at /mcp.`,
    body:
      'Set MCP_API_KEY, DB_DSN, and BASE_URL. Authenticate with Bearer or X-API-Key.',
    dockerExample: `docker pull ghcr.io/incredible-zetta/crm:${latest.tag}

MCP_URL=https://crm.example.com/mcp
Authorization: Bearer $MCP_API_KEY`,
    primary: { label: 'Install wiki', href: WIKI_URL },
    secondary: { label: 'Release notes', href: latest.url },
  };

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
    `- [${ANNOUNCEMENT.cta}](${latest.url})`,
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
    '### At a glance',
    '',
    ...TRUST.map((t) => `- **${t.title}**: ${t.desc}`),
    '',
    '## Capabilities',
    '',
    ...FEATURES.flatMap((f) => [
      `### ${f.title}`,
      '',
      f.desc,
      '',
      ...f.points.map((p) => `- ${p}`),
      '',
    ]),
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
    '## Releases',
    '',
    `Latest: [${latest.tag}](${latest.url})`,
    '',
    ...tags.map((t) => `- [${t.name}](${t.url})`),
    '',
    '## Install guides',
    '',
    ...WIKI_GUIDES.map((g) => `- [${g.label}](${g.href})`),
    `- [Full wiki](${WIKI_URL})`,
    '',
    '## Why self-hosted',
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
