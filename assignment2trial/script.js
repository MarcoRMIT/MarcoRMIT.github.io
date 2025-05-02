// Get references to DOM elements
const playPauseBtn = document.getElementById("play-pause");

let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    playPauseBtn.textContent = "⏸";
  } else {
    playPauseBtn.textContent = "▶";
  }
});
