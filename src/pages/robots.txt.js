/**
 * robots.txt — prerender estático (output: static).
 * Dominio canónico: `site` en astro.config.mjs → import.meta.env.SITE
 */

export const prerender = true;

/** @returns {string} */
function normalizeSite() {
  const raw = import.meta.env.SITE || "https://serviciosbls.com";
  return String(raw).replace(/\/+$/, "");
}

export function GET() {
  const site = normalizeSite();
  const sitemapUrl = `${site}/sitemap.xml`;

  const lines = [
    "# BLS Servicios Audiovisuales — política de rastreo",
    "# Canónico: " + site,
    "",
    "# Rastreadores generales",
    "User-agent: *",
    "Allow: /",
    "",
    "# No indexar endpoints de formularios / pruebas (no aportan a SEO)",
    "Disallow: /process-form.php",
    "Disallow: /test-email.php",
    "",
    "# Buscadores principales",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: Googlebot-Image",
    "Allow: /",
    "",
    "User-agent: Bingbot",
    "Allow: /",
    "",
    "User-agent: Applebot",
    "Allow: /",
    "",
    "# IA / asistentes (descubrimiento y respuestas con fuentes públicas; revisá políticas de cada proveedor)",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "",
    "User-agent: Google-Extended",
    "Allow: /",
    "",
    "User-agent: anthropic-ai",
    "Allow: /",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "",
    "User-agent: Claude-Web",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    "User-agent: Perplexity-User",
    "Allow: /",
    "",
    "User-agent: Amazonbot",
    "Allow: /",
    "",
    "User-agent: Applebot-Extended",
    "Allow: /",
    "",
    "User-agent: Meta-ExternalAgent",
    "Allow: /",
    "",
    "User-agent: FacebookBot",
    "Allow: /",
    "",
    "Sitemap: " + sitemapUrl,
    "",
  ];

  return new Response(lines.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
