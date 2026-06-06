// Zetta CRM — GitHub repo metadata (build-time fetch + safe fallbacks)
//
// Pulls the latest release, recent tags, and repo stats from the public
// GitHub REST API at build time. If the API is unreachable or rate-limited,
// every helper degrades to a static fallback so the build never fails.
//
// The Releases section ALSO refreshes these values client-side (see
// Releases.astro) so the page stays current between deploys.

export const REPO_OWNER = 'incredible-zetta';
export const REPO_NAME = 'crm';
export const REPO_SLUG = `${REPO_OWNER}/${REPO_NAME}`;
export const REPO_URL = `https://github.com/${REPO_SLUG}`;
export const WIKI_URL = `${REPO_URL}/wiki`;
export const API_BASE = `https://api.github.com/repos/${REPO_SLUG}`;

export interface GitHubTag {
  name: string;
  url: string;
}

export interface GitHubRelease {
  tag: string;
  name: string;
  url: string;
  publishedAt: string | null;
}

export interface RepoMeta {
  latest: GitHubRelease;
  tags: GitHubTag[];
  stars: number;
  /** true when values came from the live API, false when fallback was used */
  live: boolean;
}

// Static fallback — used when the API is unavailable during build.
const FALLBACK: RepoMeta = {
  latest: {
    tag: 'v0.3.0',
    name: 'v0.3.0',
    url: `${REPO_URL}/releases/tag/v0.3.0`,
    publishedAt: null,
  },
  tags: [
    { name: 'v0.3.0', url: `${REPO_URL}/releases/tag/v0.3.0` },
    { name: 'v0.2.0', url: `${REPO_URL}/releases/tag/v0.2.0` },
    { name: 'v0.1.4', url: `${REPO_URL}/releases/tag/v0.1.4` },
  ],
  stars: 0,
  live: false,
};

const headers: Record<string, string> = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'zetta-landing-build',
};
// Optional token lifts the 60 req/hr anonymous limit during CI builds.
if (typeof process !== 'undefined' && process.env?.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function getJSON<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, { headers });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/** Fetch live repo metadata at build time, falling back to static values. */
export async function getRepoMeta(): Promise<RepoMeta> {
  const [release, tags, repo] = await Promise.all([
    getJSON<any>('/releases/latest'),
    getJSON<any[]>('/tags'),
    getJSON<any>(''),
  ]);

  const latest: GitHubRelease = release?.tag_name
    ? {
        tag: release.tag_name,
        name: release.name || release.tag_name,
        url: release.html_url,
        publishedAt: release.published_at ?? null,
      }
    : FALLBACK.latest;

  const tagList: GitHubTag[] = Array.isArray(tags) && tags.length
    ? tags.slice(0, 6).map((t) => ({
        name: t.name,
        url: `${REPO_URL}/releases/tag/${t.name}`,
      }))
    : FALLBACK.tags;

  const stars =
    typeof repo?.stargazers_count === 'number'
      ? repo.stargazers_count
      : FALLBACK.stars;

  const live = Boolean(release?.tag_name || (Array.isArray(tags) && tags.length) || repo);

  return { latest, tags: tagList, stars, live };
}

// Curated wiki install guides (mirrors the repo wiki sidebar).
export interface WikiGuide {
  label: string;
  href: string;
  icon: string;
}

export const WIKI_GUIDES: WikiGuide[] = [
  { label: 'Installation', href: `${WIKI_URL}/Installation`, icon: 'book-open' },
  { label: 'Docker Compose', href: `${WIKI_URL}/Installation`, icon: 'container' },
  { label: 'EasyPanel', href: `${WIKI_URL}/EasyPanel`, icon: 'layout-grid' },
  { label: 'Coolify', href: `${WIKI_URL}/Coolify`, icon: 'wind' },
  { label: 'Railway', href: `${WIKI_URL}/Railway`, icon: 'train-front' },
  { label: 'Render', href: `${WIKI_URL}/Render`, icon: 'cloud' },
  { label: 'Fly.io', href: `${WIKI_URL}/Fly.io`, icon: 'plane' },
  { label: 'AWS ECS', href: `${WIKI_URL}/AWS-ECS`, icon: 'server' },
  { label: 'Google Cloud Run', href: `${WIKI_URL}/Google-Cloud-Run`, icon: 'cloud' },
  { label: 'Kubernetes', href: `${WIKI_URL}/Kubernetes`, icon: 'ship' },
];
