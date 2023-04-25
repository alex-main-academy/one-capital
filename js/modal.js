const openModalButtons = document.querySelectorAll(".js-open-modal");
const backdrop = document.querySelector(".js-backdrop");
const closeButton = document.querySelector(".js-close-modal");

openModalButtons.forEach((elem) => {
  elem.addEventListener("click", () => {
    backdrop.style.cssText = `
        opacity: 1;
        visibility: visible;
    `;
    document.body.style.overflowY = "hidden";
  });
});

closeButton.addEventListener("click", () => {
  backdrop.style.cssText = `
        opacity: 0;
        visibility: hidden;
    `;
  document.body.style.overflowY = "auto";
});

backdrop.addEventListener("click", (event) => {
  if (event.target.classList.contains("backdrop")) {
    backdrop.style.cssText = `
          opacity: 0;
          visibility: hidden;
      `;
    document.body.style.overflowY = "auto";
  } else {
    return;
  }
});
