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
    input.addEventListener("change", () => {
      currentValue = Number(input.value);
      document.querySelector<HTMLButtonElement>('[type="submit"]')!.disabled =
        currentValue === null;
      const valueElement = document.querySelector<HTMLElement>(
        ".c-card__selected-value"
      )!;
      valueElement.innerText = textValues[currentValue - 1];
      valueElement.classList.remove("c-card__selected-value--hidden");
    });
  });

document
  .querySelector<HTMLFormElement>("form")!
  .addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".c-card")!.classList.remove("c-card--opened");
  });

window.addEventListener("load", () => {
  document.querySelector(".c-card")!.classList.add("c-card--opened");
});
