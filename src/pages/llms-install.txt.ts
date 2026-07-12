import type { APIRoute } from 'astro';
import { generateInstallLlmsTxt } from '../lib/llms-txt';
import { getRepoMeta } from '../lib/github';

// SSR (per-request) so the version/tags stay live for bots that don't run JS.
export const prerender = false;

export const GET: APIRoute = async () => {
  const meta = await getRepoMeta();
  return new Response(generateInstallLlmsTxt(meta), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
