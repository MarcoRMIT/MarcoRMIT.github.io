// Social icon click logs
const socialButtons = document.querySelectorAll(".icon-button");

socialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.getAttribute("aria-label") || "Social link";
    console.log(`${label} clicked`);
  });
});

const topButton = document.querySelector(".top-button");

topButton.addEventListener("click", () => {
  document.getElementById("top").scrollIntoView({
    behavior: "smooth",
  });
});