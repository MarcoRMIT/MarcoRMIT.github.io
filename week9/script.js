const audio = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const songNameEl = document.querySelector(".song-name");
const artistNameEl = document.querySelector(".artist-name");
const albumCoverImg = document.querySelector(".album-cover img");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

let isPlaying = false;

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

// Handle song item clicks
const songButtons = document.querySelectorAll(".song-item button");
songButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-src");
    const title = btn.getAttribute("data-title");
    const artist = btn.getAttribute("data-artist");
    const cover = btn.getAttribute("data-cover");

    audio.src = src;
    songNameEl.textContent = title;
    artistNameEl.textContent = artist;
    albumCoverImg.src = cover;
    audio.play();
    playPauseBtn.querySelector("img").src = "icons8-pause-30.png";
    isPlaying = true;
  });
});
