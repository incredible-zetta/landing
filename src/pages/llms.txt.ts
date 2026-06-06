import type { APIRoute } from 'astro';
import { getRepoMeta, WIKI_GUIDES, REPO_URL, WIKI_URL, REPO_SLUG } from '../lib/github';

// SSR (per-request) so the version/tags stay live for bots that don't run JS.
export const prerender = false;

export const GET: APIRoute = async () => {
  const { latest, tags } = await getRepoMeta();

  const tagLine = tags.map((t) => t.name).join(', ');
  const guides = WIKI_GUIDES.map((g) => `- [${g.label}](${g.href})`).join('\n');

  const body = `# Zetta CRM

> Open-source, self-hosted MCP (Model Context Protocol) CRM backend for AI agents. A Go MCP server exposing CRM tools — contacts, email, campaigns, tracking, scheduling, analytics, exports, unsubscribe, soft-delete, purge, and IMAP inbox replies — over a private, API-key-gated \`/mcp\` endpoint.

Zetta CRM lets AI agents own and operate CRM data inside your own infrastructure. Ships as a multi-platform GHCR container image backed by MySQL. Auth is Bearer / X-API-Key on every agent tool call; public routes exist only for email click/open tracking and exports.

Latest release: ${latest.tag}
Recent tags: ${tagLine}

## Project

- [GitHub repository](${REPO_URL}): Source code, issues, and releases (${REPO_SLUG})
- [Latest release (${latest.tag})](${latest.url}): Current stable GHCR image and release notes
- [All tags](${REPO_URL}/tags): Version history
- [Wiki](${WIKI_URL}): Install guides and operations docs
- [Product Hunt](https://www.producthunt.com/products/zetta-crm): Launch page

## Install guides

${guides}

## Deploy

- Container image: \`ghcr.io/incredible-zetta/crm:${latest.tag}\`
- MCP endpoint: \`https://your-domain.example/mcp\`
- Auth header: \`Authorization: Bearer <MCP_API_KEY>\`
- Database: MySQL (single database)
- Email: SMTP or Mailgun; IMAP for inbox reply sync

## Capabilities (MCP tools)

- Contacts: create, update, import, export, unsubscribe, soft-delete, purge
- Email: send via SMTP/Mailgun, render templates, sync IMAP replies
- Campaigns: create, schedule dispatches, track delivery/opens/clicks
- Scheduler: queue email and campaign tasks without an extra worker
- Analytics: compact CRM metrics designed for low agent token usage
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Edge-cache 1h, allow stale while revalidating to spare the GitHub API.
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
