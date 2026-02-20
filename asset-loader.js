document.addEventListener("DOMContentLoaded", function () {

  function fixAssets() {

    document.querySelectorAll("img").forEach(img => {
      let src = img.getAttribute("src");

      if (
        src &&
        !src.startsWith("http") &&
        !src.startsWith("assets/") &&
        !src.startsWith("./") &&
        !src.startsWith("/")
      ) {
        img.setAttribute("src", "assets/" + src);
      }
    });

    document.querySelectorAll("video source").forEach(source => {
      let src = source.getAttribute("src");

      if (
        src &&
        !src.startsWith("http") &&
        !src.startsWith("assets/") &&
        !src.startsWith("./") &&
        !src.startsWith("/")
      ) {
        source.setAttribute("src", "assets/" + src);
      }
    });

  }

  // Run once
  fixAssets();

  // Run again whenever DOM changes (important!)
  const observer = new MutationObserver(fixAssets);
  observer.observe(document.body, { childList: true, subtree: true });

});
