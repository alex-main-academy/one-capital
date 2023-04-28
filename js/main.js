const heroDescription = document.querySelector(".js-hero-desc");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 1) {
    heroDescription.style.cssText = `
        opacity: 1;
    `;
  } else {
    heroDescription.style.cssText = `
        opacity: 0;
    `;
  }
});
