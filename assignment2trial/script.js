const audio = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const songNameEl = document.querySelector(".song-name");
const artistNameEl = document.querySelector(".artist-name");
const albumCoverImg = document.querySelector(".album-cover img");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

let isPlaying = false;

// Store the playlist items
const songButtons = document.querySelectorAll(".song-item button");
let currentSongIndex = 0; // Start at the first song

// Play or pause audio
playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.querySelector("img").src = "icons8-play-30.png";
  } else {
    audio.play();
    playPauseBtn.querySelector("img").src = "icons8-pause-30.png";
  }
  isPlaying = !isPlaying;
});

// Function to load the current song
function loadSong(index) {
  const song = songButtons[index];
  const src = song.getAttribute("data-src");
  const title = song.getAttribute("data-title");
  const artist = song.getAttribute("data-artist");
  const cover = song.getAttribute("data-cover");

  audio.src = src;
  songNameEl.textContent = title;
  artistNameEl.textContent = artist;
  albumCoverImg.src = cover;
  audio.play();
  playPauseBtn.querySelector("img").src = "icons8-pause-30.png";
  isPlaying = true;
}

// Handle song item clicks
songButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentSongIndex = index; // Update the index when a song is clicked
    loadSong(currentSongIndex);
  });
});

// Prev button functionality
prevBtn.addEventListener("click", () => {
  if (currentSongIndex === 0) {
    currentSongIndex = songButtons.length - 1; // Loop back to the last song
  } else {
    currentSongIndex--; // Go to the previous song
  }
  loadSong(currentSongIndex);
});

// Next button functionality
nextBtn.addEventListener("click", () => {
  if (currentSongIndex === songButtons.length - 1) {
    currentSongIndex = 0; // Loop back to the first song
  } else {
    currentSongIndex++; // Go to the next song
  }
  loadSong(currentSongIndex);
});
