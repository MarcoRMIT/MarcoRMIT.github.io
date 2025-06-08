const images = [
  "BARONGHEAD.png",
  "RANGDAHEAD.png",
  "CANDIBENTAR.png",
  "FULL SS.png",
  "MERUTOWER.png",
  "BALEGONG.png"
];

let currentImageIndex = 0;
const flipbookImage = document.getElementById("flipbook-image");

function showImage(index) {
  flipbookImage.src = images[index];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}
