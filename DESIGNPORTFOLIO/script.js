// script.js

const socialButtons = document.querySelectorAll(".icon-button");

socialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.getAttribute("aria-label") || "Social link";
    console.log(`${label} clicked`);
  });
});