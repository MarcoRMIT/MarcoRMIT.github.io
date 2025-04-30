/* script.js */
const video = document.getElementById("my-video");
const playBtn = document.getElementById("play-pause-button");
const muteBtn = document.getElementById("mute-unmute-button");
const ffBtn = document.getElementById("fast-forward-button");
const fsBtn = document.getElementById("fullscreen-button");
const heartBtn = document.getElementById("heart-button");
const likesDisplay = document.getElementById("likes");
const progressBar = document.getElementById("progress-bar");
const playlistBtns = document.querySelectorAll(".playlist button");
let likes = 0;

// Play/Pause
playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.textContent = "⏸";
  } else {
    video.pause();
    playBtn.textContent = "▶︎";
  }
});

// Mute/Unmute
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔇" : "🔈";
});

// Fast-forward 10s
ffBtn.addEventListener("click", () => {
  video.currentTime += 10;
});

// Fullscreen
fsBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen();
  }
});

// Like
heartBtn.addEventListener("click", () => {
  likes++;
  likesDisplay.textContent = likes;
});

// Update progress bar
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percent + "%";
});

// Playlist switching
playlistBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    video.src = btn.getAttribute("data-src");
    video.play();
    playBtn.textContent = "⏸";
  });
});
