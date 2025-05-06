const audio = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
// const soundBtn = document.getElementById("control-btn-sound");
const soundBtn = document.querySelector(".control-btn-sound");

const songNameEl = document.querySelector(".song-name");
const artistNameEl = document.querySelector(".artist-name");
const albumCoverImg = document.querySelector(".album-cover img");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

let isPlaying = false;
let isMuted = false; // Mute state

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

  // Reset likes when loading a new song
  likes = 0;
  likesContainer.textContent = likes;
}

// Handle song item clicks
songButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentSongIndex = index; // Update the index when a song is clicked
    loadSong(currentSongIndex);
  });
});

const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

heartButton.addEventListener("click", updateLikes);

const likesContainer = document.querySelector("#likes");
let likes = 0;

function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}

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

// Mute/Unmute functionality
soundBtn.addEventListener("click", () => {
  const audio = document.getElementById("audio-player");
  const soundIcon = soundBtn.querySelector("img");

  isMuted = !isMuted;
  audio.muted = isMuted;

  if (isMuted) {
    soundIcon.src = "icons8-no-audio-30.png"; // Mute icon
    soundIcon.alt = "Muted";
  } else {
    soundIcon.src = "icons8-audio-30.png"; // Volume icon
    soundIcon.alt = "Unmuted";
  }
});
