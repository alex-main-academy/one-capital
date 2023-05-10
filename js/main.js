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

// priority
const prioritySection = document.querySelector(".js-priority");
const priorityList = document.querySelector(".js-priority-list");
const priorityDesc = document.querySelector(".js-priority-desc");
const priorityNumber = document.querySelector(".js-priority-number");
const priorityTitle = document.querySelector(".js-priority-title");

const priorityTextFirst = document.querySelector(".priority__text_first");
const priorityTextSecond = document.querySelector(".priority__text_second");
const priorityTextThird = document.querySelector(".priority__text_third");
const priorityTextFourth = document.querySelector(".priority__text_fourth");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition < 650) {
    priorityNumber.innerHTML = "01";
  } else if (scrollPosition > 651 && scrollPosition < 820) {
    priorityNumber.innerHTML = "02";
  } else if (scrollPosition > 821 && scrollPosition < 950) {
    priorityNumber.innerHTML = "03";
  } else if (scrollPosition > 951) {
    priorityNumber.innerHTML = "04";
  }

  if (scrollPosition < 100) {
    priorityTextFirst.style.cssText = `
      opacity: 0;
      transform: translate(100);
    `;
    priorityTextSecond.style.cssText = `
      opacity: 0;
      transform: translate(100);
    `;
    priorityTextThird.style.cssText = `
      opacity: 0;
      transform: translate(100);
    `;
    priorityTextFourth.style.cssText = `
      opacity: 0;
      transform: translate(100);
    `;
  }

  if (scrollPosition > 300 && scrollPosition < 399) {
    priorityTextFirst.style.cssText = `
      opacity: 1;
      transform: translate(0);
    `;
  } else if (scrollPosition > 500 && scrollPosition < 600) {
    priorityTextSecond.style.cssText = `
      opacity: 1;
      transform: translate(0);
    `;
  } else if (scrollPosition > 651 && scrollPosition < 750) {
    priorityTextThird.style.cssText = `
      opacity: 1;
      transform: translate(0);
    `;
  } else if (scrollPosition > 851) {
    priorityTextFourth.style.cssText = `
      opacity: 1;
      transform: translate(0);
    `;
  }

  console.log(scrollPosition);
});
