function init() {
    import( `./stickerz.header-nav.js`);
    import(`./stickerz.products.js`);
    import("./stickers.products.carousel.js")
  }
  
  const totalPartials = document.querySelectorAll(
    '[hx-trigger="load"], [data-hx-trigger="load"]'
  ).length;
  let loadedPartialsCount = 0;
  
  document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
  });