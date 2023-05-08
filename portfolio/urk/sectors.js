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
        "Генеруємо клієнтів для приватних компаній на ринках США та Європи.";
      marketText[1].textContent =
        "З початку Сovid -19 напрям виключно росте та розширює команду.";
    } else if (activeElement.getAttribute("data-title") == "CPA") {
      marketText[0].textContent =
        "B2B Маркетплейс що поєднує медіабайерів та замовників в єдиній системі.";
      marketText[1].textContent =
        "Через нашу платформу проведено понад 7 000 партнерств";
    } else if (activeElement.getAttribute("data-title") == "Education") {
      marketText[0].textContent =
        "Системне рішення з навчання та розвитку аналітиків digital-сфери - Медіабаєрів.";
      marketText[1].textContent =
        "Мета даного проекту – залучення нових фахівців та їх працевлаштування у компаніях, що реалізують інвестиційні проекти.";
    } else if (activeElement.getAttribute("data-title") == "E-commerce") {
      marketText[0].textContent =
        "Наші магазини пропонують понад 1000 різноманітних товарів для побуту та повсякденного життя, що робить їх привабливими для широкого кола споживачів.";
      marketText[1].textContent = "";
    }
  });
});

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
