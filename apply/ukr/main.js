const inputFileElement = document.querySelector(".js-input-file");
const formBlockElement = document.querySelector(".js-form-block");
const inputFileBlock = document.createElement("div");
const inputFileName = document.createElement("p");
const inputFileCloseIcon = document.createElement("img");
inputFileName.classList.add("form__file_name");
inputFileBlock.classList.add("form__file_block");
inputFileCloseIcon.classList.add("form__file_icon");
inputFileCloseIcon.setAttribute("src", "../img/icons/close-file.svg");

inputFileBlock.append(inputFileCloseIcon, inputFileName);

const addInputFileName = () => {
  inputFileElement.addEventListener("change", (event) => {
    inputFileName.innerText = event.target.value.split("\\").pop();
    formBlockElement.append(inputFileBlock);

    inputFileCloseIcon.addEventListener("click", () => {
      inputFileElement.value = null;
      inputFileName.innerText = inputFileElement.value;
      inputFileBlock.remove(inputFileCloseIcon);
    });

    if (inputFileBlock.innerText === "") {
      inputFileBlock.remove(inputFileCloseIcon);
    }
  });
};

addInputFileName();
