const openMenuButton = document.querySelector(".js-menu-open");
const closeMenuButton = document.querySelector(".js-menu-close");
const menuElement = document.querySelector(".js-menu");

openMenuButton.addEventListener("click", () => {
  menuElement.style.cssText = `
        opacity: 1;
        transform: translate(0);
    `;
  document.body.style.overflowY = "hidden";
});

closeMenuButton.addEventListener("click", () => {
  menuElement.style.cssText = `
          opacity: 0;
          transform: translate(-100%);
      `;

  document.body.style.overflowY = "auto";
});
