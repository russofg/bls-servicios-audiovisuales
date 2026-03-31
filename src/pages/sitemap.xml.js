/**
 * sitemap.xml — prerender estático. Solo URLs que existen en el build actual.
 * Al reactivar /recursos, añadir entradas (p. ej. desde educationalResources.js).
 */

export const prerender = true;

/** @returns {string} */
function normalizeSite() {
  const raw = import.meta.env.SITE || "https://serviciosbls.com";
  return String(raw).replace(/\/+$/, "");
}

/** @returns {string} */
function todayISODate() {
  return new Date().toISOString().slice(0, 10);
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const site = normalizeSite();
  const lastmod = todayISODate();
  const home = `${site}/`;

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    "  <url>",
    `    <loc>${escapeXml(home)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    "    <changefreq>weekly</changefreq>",
    "    <priority>1.0</priority>",
    "    <image:image>",
    `      <image:loc>${escapeXml(`${site}/logo-icon.png`)}</image:loc>`,
    "      <image:title>BLS Servicios Audiovisuales</image:title>",
    "      <image:caption>Soluciones técnicas para eventos en Argentina</image:caption>",
    "    </image:image>",
    '    <xhtml:link rel="alternate" hreflang="es-AR" href="' +
      escapeXml(home) +
      '" />',
    '    <xhtml:link rel="alternate" hreflang="x-default" href="' +
      escapeXml(home) +
      '" />',
    "  </url>",
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
