// Get references to DOM elements
const playPauseBtn = document.getElementById("play-pause");

let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    playPauseBtn.textContent = "⏸"; // Pause icon
    // Here you would trigger actual audio play logic
  } else {
    playPauseBtn.textContent = "▶"; // Play icon
    // Here you would trigger audio pause logic
  }
});
