const sectorButtons = document.querySelectorAll(".js-sectors-button");
const marketAboutSection = document.querySelector(".js-market-about");

sectorButtons.forEach((elem) => {
  elem.addEventListener("click", () => {
    sectorButtons.forEach((el) => {
      el.classList.remove("js-active");
    });

    elem.classList.add("js-active");

    if (document.body.clientWidth > 767) {
      marketAboutSection.style.cssText = `
        visibility: visible;
        opacity: 1;
        height: auto;
        margin: 0 auto 91px auto;
        padding: 54px 57px 43px 69px;
    `;
    } else {
      marketAboutSection.style.cssText = `
        visibility: visible;
        opacity: 1;
        height: auto;
        padding: 43px 0 42px 29px;
    `;
    }

    const activeElement = document.querySelector(".js-active");
    const marketText = document.querySelectorAll(".js-market-text");

    if (activeElement.getAttribute("data-title") == "Affiliate Marketing") {
      marketText[0].textContent =
        "We generate clients for private companies in US and European markets. ";
      marketText[1].textContent =
        "Since the beginning of Covid-19, the department is growing and expanding the team.";
    } else if (activeElement.getAttribute("data-title") == "CPA") {
      marketText[0].textContent =
        "B2B Marketplace that connects mediabuyers and customers in a single system";
      marketText[1].textContent =
        "More than 7,000 payed partnerships made by using our platform";
    } else if (activeElement.getAttribute("data-title") == "Education") {
      marketText[0].textContent =
        "System solution for the development of the coolest analysts in digital sphere - Media buyers.";
      marketText[1].textContent =
        "The purpose of this project is to attract new specialists and employ them in our investment projects.";
    } else if (activeElement.getAttribute("data-title") == "E-commerce") {
      marketText[0].textContent =
        "Our stores offer more than 1,000 different products for everyday life, which makes them attractive to a wide range of consumers.";
      marketText[1].textContent = "";
    }
  });
});

// filter
const sectorButtonsArray = document.querySelectorAll(".js-sectors-button");
const marketList = document.querySelector(".js-market-list");
sectorButtonsArray.forEach((button) => {
  button.addEventListener("click", () => {
    const sectorType = button.getAttribute("data-title");
    const marketItems = marketList.querySelectorAll(".js-market-item");
    marketItems.forEach((item) => {
      if (item.getAttribute("data-title") === sectorType) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
});
