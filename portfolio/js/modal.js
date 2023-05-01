const openModalButtons = document.querySelectorAll(".js-open-modal");
const closeButton = document.querySelectorAll(".js-close-modal");
const backdropNervous = document.querySelector(".js-backdrop-nervous-academy");
const backdropLeads = document.querySelector(".js-backdrop-7-leads");
const backdropOgo = document.querySelector(".js-backdrop-ogo");
const backdropBeauti = document.querySelector(".js-backdrop-beauti");
const backdropArray = document.querySelectorAll(".js-backdrop");

openModalButtons.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    switch (event.target.textContent) {
      case "Nervous Academy":
        backdropNervous.style.cssText = `
          opacity: 1;
          visibility: visible;
        `;
        document.body.style.overflowY = "hidden";
        break;
      case "7 Leads":
        backdropLeads.style.cssText = `
          opacity: 1;
          visibility: visible;
        `;
        document.body.style.overflowY = "hidden";
        break;
      case "Ogo Mart":
        backdropOgo.style.cssText = `
          opacity: 1;
          visibility: visible;
        `;
        document.body.style.overflowY = "hidden";
        break;
      case "Beauti Queue":
        backdropBeauti.style.cssText = `
          opacity: 1;
          visibility: visible;
        `;
        document.body.style.overflowY = "hidden";
        break;
    }
  });
});

closeButton.forEach((elem) => {
  elem.addEventListener("click", () => {
    backdropArray.forEach((el) => {
      el.style.cssText = `
        opacity: 0;
        visibility: hidden;
      `;
      document.body.style.overflowY = "auto";
    });
  });
});

backdropArray.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    if (event.target.classList.contains("backdrop")) {
      elem.style.cssText = `
            opacity: 0;
            visibility: hidden;
        `;
      document.body.style.overflowY = "auto";
    } else {
      return;
    }
  });
});
