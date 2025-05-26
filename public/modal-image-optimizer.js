/**
 * Optimiza la visualización de las imágenes en el modal del portfolio
 * Este script ajusta automáticamente las dimensiones de las imágenes según sus proporciones
 */

document.addEventListener("DOMContentLoaded", function () {
  // Verificar que el modal existe en la página
  const modal = document.getElementById("portfolioModal");
  if (!modal) return;

  const modalImage = document.getElementById("modalImage");
  if (!modalImage) return;

  // Precargar todas las imágenes del portfolio para mejorar la experiencia
  const preloadImages = () => {
    const portfolioEvents = document.querySelectorAll(".portfolio-item");
    portfolioEvents.forEach((item) => {
      const eventId = item.getAttribute("data-id");
      const img = item.querySelector("img");
      if (img && img.src) {
        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = img.src;
        document.head.appendChild(preloadLink);
      }
    });
  };

  // Optimizar imagen cuando se abre el modal
  const optimizeModalImage = (imgElement) => {
    if (!imgElement) return;

    // Crear imagen temporal para detectar dimensiones
    const tempImg = new Image();
    tempImg.onload = function () {
      const imgWidth = this.width;
      const imgHeight = this.height;
      const aspectRatio = imgWidth / imgHeight;

      // Determinar orientación y ajustar estilos
      if (aspectRatio > 1.2) {
        // Imagen horizontal
        imgElement.style.width = "100%";
        imgElement.style.height = "auto";
        imgElement.style.maxHeight = "60vh";
      } else if (aspectRatio < 0.8) {
        // Imagen vertical
        imgElement.style.width = "auto";
        imgElement.style.height = "auto";
        imgElement.style.maxHeight = "60vh";
        imgElement.style.maxWidth = "80%";
      } else {
        // Imagen cuadrada
        imgElement.style.width = "auto";
        imgElement.style.height = "auto";
        imgElement.style.maxHeight = "60vh";
        imgElement.style.maxWidth = "80%";
      }

      // Añadir clase para estilos específicos
      imgElement.classList.add("modal-image-optimized");
    };

    // Carga la imagen para análisis
    tempImg.src = imgElement.src;
  };

  // Observar cambios en el atributo src de la imagen del modal
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "src") {
        optimizeModalImage(modalImage);
      }
    });
  });

  // Configurar observador
  observer.observe(modalImage, { attributes: true });

  // Precargar imágenes
  preloadImages();
});
