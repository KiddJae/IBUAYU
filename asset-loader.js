document.addEventListener("DOMContentLoaded", function () {

    // Fix <img> tags
    document.querySelectorAll("img").forEach(img => {
      let src = img.getAttribute("src");
  
      // Ignore external links or already-correct paths
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
  
    // Fix <video> sources
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
  
  });