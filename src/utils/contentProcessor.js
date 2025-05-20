// Función para procesar el contenido del artículo y mejorar el formato
export function processArticleContent(content) {
  // Mapa de emojis para tipos de encabezados comunes
  const headingEmojis = {
    qué: "❓",
    que: "❓",
    cómo: "📝",
    como: "📝",
    ventajas: "✅",
    beneficios: "🌟",
    componentes: "🔧",
    consideraciones: "🤔",
    principios: "📚",
    consejos: "💡",
    recomendaciones: "👍",
    conclusión: "🏁",
    conclusion: "🏁",
    referencias: "📚",
    guía: "📖",
    guia: "📖",
    tutorial: "👨‍🏫",
    implementación: "🛠️",
    implementacion: "🛠️",
    instalación: "⚙️",
    instalacion: "⚙️",
    configuración: "🔧",
    configuracion: "🔧",
    herramientas: "🧰",
    recursos: "📚",
    ejemplos: "🔍",
    problemas: "⚠️",
    soluciones: "✅",
    resumen: "📋",
  };

  // Patrón para detectar encabezados h2
  const h2Pattern = /<h2>(.*?)<\/h2>/g;

  // Reemplazar encabezados h2 con versiones con emojis
  let processedContent = content.replace(h2Pattern, (match, heading) => {
    let emoji = null;

    // Buscar si el encabezado contiene alguna palabra clave para asignar un emoji
    for (const [keyword, icon] of Object.entries(headingEmojis)) {
      if (heading.toLowerCase().includes(keyword)) {
        emoji = icon;
        break;
      }
    }

    // Si no se encontró una coincidencia específica, asignar un emoji general
    if (!emoji) {
      emoji = "📌";
    }

    return `<h2>${emoji} ${heading}</h2>`;
  });

  // Destacar elementos strong con un fondo sutilmente coloreado
  processedContent = processedContent.replace(
    /<strong>(.*?)<\/strong>/g,
    '<strong class="highlighted">$1</strong>'
  );

  // Agregar clase especial a listas para mejorar su estilo
  processedContent = processedContent.replace(
    /<ul>/g,
    '<ul class="enhanced-list">'
  );

  processedContent = processedContent.replace(
    /<ol>/g,
    '<ol class="enhanced-list">'
  );

  return processedContent;
}
