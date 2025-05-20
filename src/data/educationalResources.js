// Datos compartidos para recursos educativos
export const resourceCategories = [
  {
    id: "audio",
    name: "Audio y Sonido",
    icon: "🔊",
  },
  {
    id: "lighting",
    name: "Iluminación",
    icon: "💡",
  },
  {
    id: "video",
    name: "Video y Proyección",
    icon: "🎬",
  },
  {
    id: "events",
    name: "Organización de Eventos",
    icon: "📋",
  },
];

export const educationalResources = [
  {
    title: "Guía básica para entender sistemas de sonido line array",
    description:
      "Aprende los principios fundamentales de los sistemas line array y por qué son la opción preferida para eventos de gran formato.",
    category: "audio",
    imageUrl: "/resources/linearray.png",
    downloadPdf: "/resources/pdf/guia-line-array.pdf",
    featured: true,
    readTime: "8 min",
    slug: "guia-basica-para-entender-sistemas-de-sonido-line-array",
  },
  {
    title: "Cómo elegir la iluminación adecuada según el tipo de evento",
    description:
      "Descubre qué factores considerar al seleccionar el tipo de iluminación para diferentes eventos corporativos, conciertos o celebraciones.",
    category: "lighting",
    imageUrl: "/resources/iluminacion.png",
    downloadPdf: "/resources/pdf/guia-iluminacion-eventos.pdf",
    featured: true,
    readTime: "6 min",
    slug: "como-elegir-la-iluminacion-adecuada-segun-el-tipo-de-evento",
  },
  {
    title: "Video mapping: transformando espacios con proyección",
    description:
      "Una introducción a las técnicas de video mapping y cómo pueden transformar cualquier superficie en una experiencia visual inmersiva.",
    category: "video",
    imageUrl: "/resources/mapping.png",
    downloadPdf: "/resources/pdf/introduccion-videomapping.pdf",
    featured: false,
    readTime: "10 min",
    slug: "video-mapping-transformando-espacios-con-proyeccion",
  },
  {
    title: "Planificación técnica de eventos: lista de verificación esencial",
    description:
      "Todo lo que necesitas considerar desde el punto de vista técnico cuando organizas un evento exitoso.",
    category: "events",
    imageUrl: "/resources/productor.png",
    downloadPdf: "/resources/pdf/checklist-tecnico-eventos.pdf",
    featured: true,
    readTime: "5 min",
    slug: "planificacion-tecnica-de-eventos-lista-de-verificacion-esencial",
  },
  {
    title: "Aspectos técnicos para streaming de eventos en vivo",
    description:
      "Guía completa sobre equipamiento, conexiones y consideraciones para transmitir eventos en vivo con calidad profesional.",
    category: "video",
    imageUrl: "/resources/streaming.png",
    downloadPdf: "/resources/pdf/guia-streaming-eventos.pdf",
    featured: false,
    readTime: "12 min",
    slug: "aspectos-tecnicos-para-streaming-de-eventos-en-vivo",
  },
  {
    title: "Acústica de recintos: optimizando el sonido en diferentes espacios",
    description:
      "Comprende los principios básicos de la acústica y cómo adaptar tu sistema de sonido a diferentes tipos de espacios.",
    category: "audio",
    imageUrl: "/resources/acustica.png",
    downloadPdf: "/resources/pdf/principios-acustica.pdf",
    featured: false,
    readTime: "9 min",
    slug: "acustica-de-recintos-optimizando-el-sonido-en-diferentes-espacios",
  },
];

// Datos completos de artículos con contenido
export const articles = [
  {
    slug: "guia-basica-para-entender-sistemas-de-sonido-line-array",
    title: "Guía básica para entender sistemas de sonido line array",
    category: "Audio y Sonido",
    categoryIcon: "🔊",
    publishDate: "12 mayo, 2025",
    author: "Carlos Martínez",
    authorRole: "Ingeniero de Sonido Senior",
    readTime: "8 min",
    heroImage: "/resources/linearray.png",
    downloadPdf: "/resources/pdf/guia-line-array.pdf",
    content: `
      <h2>¿Qué es un sistema line array?</h2>
      <p>
        Los sistemas line array son una configuración de altavoces diseñada para crear un frente de onda coherente que proporciona una cobertura de sonido uniforme en espacios grandes. Consisten en múltiples altavoces idénticos apilados verticalmente en una línea curva, cada uno emitiendo el mismo programa de audio.
      </p>
      <p>
        La disposición vertical específica permite que el sonido se propague horizontalmente en un ángulo amplio, pero con un control vertical muy preciso, lo que reduce reflexiones no deseadas y mejora la inteligibilidad del sonido.
      </p><br>
      
      <h2>Ventajas de los sistemas line array</h2>
      <ul>
        <li><strong>Mayor control de la dispersión:</strong> Permite dirigir el sonido exactamente donde se necesita.</li>
        <li><strong>Mejor cobertura:</strong> Ofrece una experiencia sonora más uniforme para toda la audiencia.</li>
        <li><strong>Mayor alcance:</strong> Propaga el sonido a distancias mayores con menos pérdida de energía.</li>
        <li><strong>Reducción de interferencias:</strong> Minimiza el impacto de reflexiones y reverberaciones indeseadas.</li>
        <li><strong>Flexibilidad de configuración:</strong> Se puede adaptar a diferentes espacios y requerimientos acústicos.</li>
      </ul><br>
      
      <h2>Componentes principales de un sistema line array</h2>
      <p>
        Un sistema line array moderno típicamente incluye:
      </p>
      <ol>
        <li>
          <strong>Cajas de altavoces:</strong> Módulos que contienen drivers de agudos y medios (usualmente de 8" a 12").
        </li>
        <li>
          <strong>Subwoofers:</strong> Altavoces dedicados a las frecuencias graves (generalmente de 18" o 21").
        </li>
        <li>
          <strong>Amplificación:</strong> Sistemas de amplificación dedicados, frecuentemente con procesamiento digital integrado.
        </li>
        <li>
          <strong>Procesadores digitales:</strong> Para ajustar delays, ecualización, y otros parámetros específicos para cada zona.
        </li>
        <li>
          <strong>Sistemas de rigging:</strong> Hardware especializado para colgar y angular correctamente los módulos del array.
        </li>
      </ol><br>
      
      <h2>Consideraciones para la implementación</h2>
      <p>
        Implementar correctamente un sistema line array requiere tener en cuenta varios factores:
      </p>
      <ul>
        <li>La acústica del recinto</li>
        <li>El tamaño y forma del espacio</li>
        <li>La disposición de la audiencia</li>
        <li>El tipo de evento y contenido sonoro</li>
        <li>Las normativas de seguridad para instalaciones suspendidas</li>
      </ul><br>
      
      <h2>Software para diseño de line array</h2>
      <p>
        La mayoría de fabricantes proporcionan software específico para calcular:
      </p>
      <ul>
        <li>La cantidad óptima de cajas necesarias</li>
        <li>Los ángulos precisos entre módulos</li>
        <li>La predicción de cobertura acústica</li>
        <li>Los límites de peso y consideraciones estructurales</li>
      </ul><br>
      <h2>Principales fabricantes</h2>
      <p>
        Entre los fabricantes más reconocidos de sistemas line array se encuentran:
      </p>
      <ul>
        <li>L-Acoustics (V-DOSC, K1, K2, KARA)</li>
        <li>d&b audiotechnik (J-Series, Y-Series)</li>
        <li>Meyer Sound (LYON, LEOPARD)</li>
        <li>JBL Professional (VerTec, VTX)</li>
        <li>Adamson (E-Series, S-Series)</li>
        <li>Martin Audio (MLA, WPL)</li>
      </ul> <br>
      
      <h2>Conclusión</h2>
      <p>
        Los sistemas line array se han convertido en el estándar para sonorización profesional de eventos de mediano y gran formato. Su capacidad para proporcionar una experiencia sonora coherente a través de grandes áreas los hace ideales para conciertos, festivales y eventos corporativos de gran escala.
      </p>
      <p>
        Sin embargo, para obtener el máximo rendimiento de estos sistemas, es fundamental contar con técnicos capacitados que puedan diseñar, configurar y operar correctamente todo el conjunto.
      </p>
    `,
    relatedArticles: [
      "Acústica de recintos: optimizando el sonido en diferentes espacios",
      "Cómo elegir la iluminación adecuada según el tipo de evento",
    ],
  },
  {
    slug: "como-elegir-la-iluminacion-adecuada-segun-el-tipo-de-evento",
    title: "Cómo elegir la iluminación adecuada según el tipo de evento",
    category: "Iluminación",
    categoryIcon: "💡",
    publishDate: "3 junio, 2025",
    author: "Laura Rodríguez",
    authorRole: "Diseñadora de Iluminación",
    readTime: "6 min",
    heroImage: "/resources/iluminacion.png",
    downloadPdf: "/resources/pdf/guia-iluminacion-eventos.pdf",
    content: `
      <h2>Factores a considerar antes de elegir la iluminación</h2>
      <p>
        La iluminación es uno de los elementos más importantes para establecer la atmósfera y el éxito de cualquier evento. Antes de seleccionar el tipo de iluminación, es crucial considerar varios factores clave.
      </p>
      
      <h2>Tipos de eventos y sus necesidades lumínicas</h2>
      <p>
        Cada tipo de evento requiere un enfoque específico en cuanto a iluminación:
      </p>
      <ul>
        <li><strong>Conferencias y eventos corporativos:</strong> Requieren iluminación funcional y profesional.</li>
        <li><strong>Bodas y celebraciones:</strong> Se benefician de iluminación ambiental y decorativa.</li>
        <li><strong>Conciertos y espectáculos:</strong> Necesitan iluminación dinámica y efectos especiales.</li>
      </ul> <br>
      
      <h2>Elementos básicos de un sistema de iluminación</h2>
      <p>
        Un sistema de iluminación profesional para eventos incluye:
      </p>
      <ol>
        <li><strong>Iluminación frontal:</strong> Para visibilidad básica de personas y espacios.</li>
        <li><strong>Iluminación ambiental:</strong> Para crear atmósfera en todo el espacio.</li>
        <li><strong>Iluminación de acento:</strong> Para destacar elementos específicos.</li>
        <li><strong>Efectos especiales:</strong> Como luces móviles, gobos o estroboscópicos.</li>
      </ol> <br>
      
      <h2>Conclusión</h2>
      <p>
        La selección adecuada de iluminación puede transformar completamente un evento, creando la atmósfera deseada y mejorando la experiencia de los asistentes.
      </p>
    `,
    relatedArticles: [
      "Guía básica para entender sistemas de sonido line array",
      "Video mapping: transformando espacios con proyección",
    ],
  },
  {
    slug: "acustica-de-recintos-optimizando-el-sonido-en-diferentes-espacios",
    title: "Acústica de recintos: optimizando el sonido en diferentes espacios",
    category: "Audio y Sonido",
    categoryIcon: "🔊",
    publishDate: "22 abril, 2025",
    author: "Miguel Sánchez",
    authorRole: "Acústico Especialista",
    readTime: "9 min",
    heroImage: "/resources/acustica.png",
    downloadPdf: "/resources/pdf/principios-acustica.pdf",
    content: `
      <h2>Principios básicos de la acústica de recintos</h2>
      <p>
        La acústica de recintos estudia cómo el sonido se comporta dentro de un espacio cerrado. Este comportamiento influye directamente en la calidad del sonido percibido.
      </p> <br>
      
      <h2>Desafíos comunes en diferentes espacios</h2>
      <ul>
        <li><strong>Salas pequeñas:</strong> Problemas de ondas estacionarias y modos resonantes.</li>
        <li><strong>Espacios grandes:</strong> Demasiada reverberación y ecos.</li>
        <li><strong>Espacios al aire libre:</strong> Dispersión del sonido y falta de reflexiones.</li>
      </ul> <br>
      
      <h2>Soluciones acústicas para eventos temporales</h2>
      <p>
        Para eventos que requieren instalaciones temporales, existen varias estrategias para optimizar la acústica:
      </p>
      <ol>
        <li><strong>Posicionamiento estratégico de altavoces</strong></li>
        <li><strong>Uso de retardos (delays) para espacios grandes</strong></li>
        <li><strong>Ajuste preciso de ecualización según el espacio</strong></li>
        <li><strong>Implementación de barreras acústicas temporales</strong></li>
      </ol> <br>
      
      <h2>Conclusión</h2>
      <p>
        Entender los principios acústicos básicos puede marcar una gran diferencia en la calidad del sonido de cualquier evento, independientemente del espacio disponible.
      </p>
    `,
    relatedArticles: [
      "Guía básica para entender sistemas de sonido line array",
      "Planificación técnica de eventos: lista de verificación esencial",
    ],
  },
  {
    slug: "video-mapping-transformando-espacios-con-proyeccion",
    title: "Video mapping: transformando espacios con proyección",
    category: "Video y Proyección",
    categoryIcon: "🎬",
    publishDate: "18 junio, 2025",
    author: "Alejandro Torres",
    authorRole: "Director de Contenido Visual",
    readTime: "10 min",
    heroImage: "/resources/mapping.png",
    downloadPdf: "/resources/pdf/introduccion-videomapping.pdf",
    content: `
      <h2>¿Qué es el video mapping?</h2>
      <p>
        El video mapping (o proyección mapping) es una técnica que consiste en proyectar imágenes sobre superficies tridimensionales, convirtiendo objetos comunes en displays dinámicos. Esta tecnología permite transformar fachadas de edificios, escenarios o cualquier objeto en impresionantes experiencias visuales.
      </p> <br>
      <h2>Aplicaciones en eventos</h2>
      <p>
        El video mapping se utiliza en diversos tipos de eventos:
      </p>
      <ul>
        <li><strong>Eventos corporativos:</strong> Presentaciones de productos, lanzamientos de marca</li>
        <li><strong>Conciertos y festivales:</strong> Escenografías dinámicas y efectos visuales</li>
        <li><strong>Eventos culturales:</strong> Exposiciones artísticas, celebraciones históricas</li>
        <li><strong>Celebraciones privadas:</strong> Bodas, cumpleaños y fiestas temáticas</li>
      </ul> <br>
      
      <h2>Tecnología necesaria</h2>
      <p>
        Para realizar un proyecto de video mapping se requiere:
      </p>
      <ol>
        <li><strong>Proyectores de alta potencia:</strong> Mínimo 10.000 lúmenes para exteriores</li>
        <li><strong>Software especializado:</strong> Como Resolume Arena, MadMapper o TouchDesigner</li>
        <li><strong>Equipos de procesamiento:</strong> Computadoras con tarjetas gráficas potentes</li>
        <li><strong>Sistemas de calibración:</strong> Para alinear con precisión las proyecciones</li>
      </ol> <br>
      
      <h2>Proceso de creación</h2>
      <p>
        El desarrollo de un proyecto de video mapping incluye varias etapas:
      </p>
      <ol>
        <li>Escaneo o modelado 3D de la superficie</li>
        <li>Diseño de contenido adaptado a la geometría</li>
        <li>Programación de interacciones y efectos</li>
        <li>Calibración y pruebas in situ</li>
        <li>Ejecución y monitoreo durante el evento</li>
      </ol> <br>
      
      <h2>Conclusión</h2>
      <p>
        El video mapping representa una de las formas más impactantes de transformación espacial para eventos, combinando tecnología y creatividad para crear experiencias memorables.
      </p>
    `,
    relatedArticles: [
      "Aspectos técnicos para streaming de eventos en vivo",
      "Cómo elegir la iluminación adecuada según el tipo de evento",
    ],
  },
  {
    slug: "planificacion-tecnica-de-eventos-lista-de-verificacion-esencial",
    title: "Planificación técnica de eventos: lista de verificación esencial",
    category: "Organización de Eventos",
    categoryIcon: "📋",
    publishDate: "5 mayo, 2025",
    author: "Patricia González",
    authorRole: "Directora de Producción",
    readTime: "5 min",
    heroImage: "/resources/productor.png",
    downloadPdf: "/resources/pdf/checklist-tecnico-eventos.pdf",
    content: `
      <h2>La importancia de la planificación técnica</h2>
      <p>
        Una correcta planificación técnica es la base de cualquier evento exitoso. Los aspectos técnicos pueden marcar la diferencia entre una experiencia fluida e inmersiva y un evento plagado de problemas e interrupciones.
      </p> <br>
      
      <h2>Lista de verificación por áreas</h2>
      
      <h3>Sonido</h3>
      <ul>
        <li>Análisis acústico del espacio</li>
        <li>Cálculo de potencia necesaria</li>
        <li>Elaboración de rider técnico</li>
        <li>Pruebas de sonido programadas</li>
        <li>Equipos de respaldo preparados</li>
      </ul>
      <br>
      
      <h3>Iluminación</h3>
      <ul>
        <li>Diseño de iluminación según tipo de evento</li>
        <li>Cálculo de consumo eléctrico</li>
        <li>Programación de escenas</li>
        <li>Verificación de soportes y seguridad</li>
      </ul> <br>
      
      <h3>Video</h3>
      <ul>
        <li>Comprobación de formatos y resoluciones</li>
        <li>Pruebas de proyectores/pantallas</li>
        <li>Preparación de contenidos de respaldo</li>
        <li>Calibración de colores y brillo</li>
      </ul>
      <br>
      <h3>Energía y conectividad</h3>
      <ul>
        <li>Cálculo de carga total requerida</li>
        <li>Distribución de líneas eléctricas</li>
        <li>Sistemas de backup (generadores)</li>
        <li>Verificación de tomas a tierra</li>
        <li>Prueba de red y conectividad</li>
      </ul> <br>
      
      <h2>Cronograma recomendado</h2>
      <p>
        Distribuir adecuadamente los tiempos es crucial para una implementación exitosa:
      </p>
      <ol>
        <li><strong>2-3 meses antes:</strong> Evaluación inicial y diseño técnico</li>
        <li><strong>1 mes antes:</strong> Confirmación de equipos y proveedores</li>
        <li><strong>1 semana antes:</strong> Revisión final de especificaciones</li>
        <li><strong>Día -1:</strong> Montaje y pruebas preliminares</li>
        <li><strong>Día del evento:</strong> Pruebas finales (mínimo 3 horas antes)</li>
      </ol> <br>
      
      <h2>Conclusión</h2>
      <p>
        Una planificación técnica detallada minimiza imprevistos, optimiza recursos y garantiza que la tecnología potencie la experiencia del evento en lugar de convertirse en un obstáculo.
      </p>
    `,
    relatedArticles: [
      "Acústica de recintos: optimizando el sonido en diferentes espacios",
      "Aspectos técnicos para streaming de eventos en vivo",
    ],
  },
  {
    slug: "aspectos-tecnicos-para-streaming-de-eventos-en-vivo",
    title: "Aspectos técnicos para streaming de eventos en vivo",
    category: "Video y Proyección",
    categoryIcon: "🎬",
    publishDate: "30 abril, 2025",
    author: "Javier López",
    authorRole: "Ingeniero de Broadcast",
    readTime: "12 min",
    heroImage: "/resources/streaming.png",
    downloadPdf: "/resources/pdf/guia-streaming-eventos.pdf",
    content: `
      <h2>Fundamentos del streaming profesional</h2>
      <p>
        El streaming de eventos ha pasado de ser una opción complementaria a convertirse en un componente esencial de muchos eventos. Realizar una transmisión profesional requiere atención a múltiples aspectos técnicos.
      </p> <br>
      
      <h2>Equipamiento necesario</h2>
      
      <h3>Captura de video</h3>
      <ul>
        <li><strong>Cámaras:</strong> Mínimo 2-3 cámaras para eventos pequeños, 4-7 para medianos</li>
        <li><strong>Switcher/Mezclador:</strong> ATEM, Tricaster o similar para cambios de cámara</li>
        <li><strong>Conversores:</strong> SDI a HDMI o fibra óptica para largas distancias</li>
      </ul> <br>
      
      <h3>Captura de audio</h3>
      <ul>
        <li><strong>Toma directa:</strong> Conexión directa desde la mesa de sonido principal</li>
        <li><strong>Procesador:</strong> Compresor y limitador para nivelar el audio</li>
        <li><strong>Interfaz de audio:</strong> Para integrar el sonido en la señal de streaming</li>
      </ul> <br>
      
      <h3>Conectividad</h3>
      <ul>
        <li><strong>Conexión principal:</strong> Fibra óptica o línea dedicada (mínimo 10 Mbps de subida)</li>
        <li><strong>Backup:</strong> 4G/5G bonding o segunda línea independiente</li>
        <li><strong>Hardware de codificación:</strong> Dedicado para eventos críticos</li>
      </ul> <br>
      
      <h2>Configuraciones recomendadas</h2>
      
      <h3>Streaming básico (eventos pequeños)</h3>
      <ul>
        <li>1-2 cámaras fijas + 1 para planos de detalle</li>
        <li>Calidad 1080p a 30fps</li>
        <li>Bitrate: 4-6 Mbps</li>
      </ul> <br>
      
      <h3>Streaming avanzado (eventos medianos)</h3>
      <ul>
        <li>3-5 cámaras (incluyendo al menos una con operador)</li>
        <li>Calidad 1080p a 60fps</li>
        <li>Bitrate: 6-10 Mbps</li>
        <li>Gráficos y transiciones personalizadas</li>
      </ul> <br>
      
      <h3>Streaming premium (eventos grandes)</h3>
      <ul>
        <li>5+ cámaras con operadores y plan de realización</li>
        <li>Calidad hasta 4K (según plataforma)</li>
        <li>Bitrate: 12+ Mbps</li>
        <li>Redundancia completa (equipos y conexión)</li>
      </ul> <br>
      <h2>Conclusión</h2>
      <p>
        Un streaming de calidad profesional amplía significativamente el alcance de cualquier evento, pero requiere una planificación técnica rigurosa y equipamiento adecuado al tipo de producción.
      </p>
    `,
    relatedArticles: [
      "Video mapping: transformando espacios con proyección",
      "Planificación técnica de eventos: lista de verificación esencial",
    ],
  },
];

// Tabla de equivalencia entre títulos y slugs para facilitar las referencias
export const titleToSlug = {};
articles.forEach((article) => {
  titleToSlug[article.title] = article.slug;
});

// Función para convertir títulos de artículos relacionados a slugs
export function getSlugFromTitle(title) {
  // Si existe en nuestra tabla, usamos ese valor
  if (titleToSlug[title]) {
    return titleToSlug[title];
  }

  // De lo contrario, generamos uno a partir del título
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");
}
