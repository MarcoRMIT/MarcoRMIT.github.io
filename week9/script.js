const myButton = document.querySelector("my-button");

myButton.addEventListener("click", moveInput);

const myInput = document.querySelector("#my-duck");

function moveInput() {
  if (!clicked) {
    myInput.style.translate = "30px 40px";
    clicked = true;
  } else {
    myInput.style.translate = "0px 0px";
    clicked = false;
  }
}
