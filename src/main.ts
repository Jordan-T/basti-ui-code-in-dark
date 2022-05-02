import "./style.scss";

// const app = document.querySelector<HTMLDivElement>("#app")!;

let currentValue: null | number = null;

const textValues = [
  "1/5 — Hell no !",
  "2/5 — Nop !",
  "3/5 — Mouais !",
  "4/5 — Au top !",
  "5/5 — Génial !",
];

document
  .querySelectorAll<HTMLInputElement>('input[type="radio"]')
  .forEach((input) => {
    input.addEventListener("click", () => {
      const inputValue = Number(input.value);
      const valueElement = document.querySelector<HTMLElement>(
        ".c-card__selected-value"
      )!;
      if (currentValue === inputValue) {
        input.checked = false;
        currentValue = null;
        valueElement.classList.add("c-card__selected-value--hidden");
        return;
      }
      currentValue = Number(input.value);
      valueElement.innerText = textValues[currentValue - 1];
      valueElement.classList.remove("c-card__selected-value--hidden");
    });
  });

document
  .querySelector<HTMLFormElement>("form")!
  .addEventListener("submit", (e) => {
    e.preventDefault();
    closeForm();
  });

document
  .querySelector<HTMLElement>(".c-card__close")!
  .addEventListener("click", (e) => {
    e.preventDefault();
    closeForm();
  });

window.addEventListener("load", () => {
  setTimeout(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelector(".c-card")!.classList.add("c-card--opened");
      });
    });
  }, 1000);
});

const closeForm = () => {
  document.querySelector(".c-card")!.classList.remove("c-card--opened");
  setTimeout(() => {
    resetForm();

    setTimeout(() => {
      document.querySelector(".c-card")!.classList.add("c-card--opened");
    }, 2000);
  }, 1000);
};

const resetForm = () => {
  const checkedInput =
    document.querySelector<HTMLInputElement>("input:checked");
  if (checkedInput) {
    checkedInput.checked = false;
  }
  const valueElement = document.querySelector<HTMLElement>(
    ".c-card__selected-value"
  )!;
  currentValue = null;
  valueElement.classList.add("c-card__selected-value--hidden");
};
