const card = document.querySelector(".card");
console.log(card);
let draggedCard = null;

card.addEventListener("dragstart", function () {
  draggedCard = card;
});

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  const clone = draggedCard;
  dropbox.appendChild(clone);
});
