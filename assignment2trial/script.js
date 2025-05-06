document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const songButtons = document.querySelectorAll(".song-item button");
  const songName = document.querySelector(".song-name");
  const artistName = document.querySelector(".artist-name");
  const albumCoverImg = document.querySelector(".album-cover img");

  songButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const src = button.getAttribute("data-src");
      const title = button.getAttribute("data-title");
      const artist = button.getAttribute("data-artist");
      const cover = button.getAttribute("data-cover");

      songName.textContent = title;
      artistName.textContent = artist;
      albumCoverImg.src = cover;
      audioPlayer.src = src;
      audioPlayer.play();
    });
  });
});
