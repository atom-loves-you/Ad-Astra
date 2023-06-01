let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

if (theme == "dark") {
  document.documentElement.classList.add("dark");
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });

document.getElementById("song-saved").addEventListener("click", function () {
  document.getElementById("song-saved").classList.toggle("saved");
});

Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause",
  },
  callbacks: {
    timeupdate: function () {
      let percentage = Amplitude.getSongPlayedPercentage();

      if (isNaN(percentage)) {
        percentage = 0;
      }

      /**
       * Massive Help from: https://nikitahl.com/style-range-input-css
       */
      let slider = document.getElementById("song-percentage-played");
      slider.style.backgroundSize = percentage + "% 100%";
    },
  },
  songs: [
    {
      name: "Ad Astra",
      artist: "Atom Loves You",
      album: "Ad Astra per Astra",
      url: "./wav/Ad Astra.wav",
      cover_art_url:
        "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png",
    },
 {
      name: "Just don’t write bugs",
      artist: "Atom Loves You",
      album: "Ad Astra per Astra",
      url: "./wav/Just don’t write bugs.wav",
      cover_art_url:
        "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png",
    },
    {
      name: "Summer of George",
      artist: "Atom Loves You",
      album: "Ad Astra per Astra",
      url: "./wav/Summer of George(cleanup live).wav",
      cover_art_url:
        "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png",
    },
    {
      name: "Tweeters, Woofers, Heavy Metal",
      artist: "Atom Loves You",
      album: "Ad Astra per Astra",
      url: "./wav/Tweeters, Woofers, Heavy Metal.wav",
      cover_art_url:
        "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png",
    },
    {
      name: "H=h2pi",
      artist: "Atom Loves You",
      album: "Ad Astra per Astra",
      url: "./H=h2pi.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png",
    },
    {
      name: "Otherkin",
      artist: "Atom Loves You",
      album: "Ad Astra per Astra",
      url: "./wav/Otherkin.wav",
      cover_art_url:
        "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png",
    },
    {
      name: "last",
      artist: "Atom Loves You",
      album: "Ad Astra per Astra",
      url: "./wav/My Song 36.wav",
      cover_art_url:
        "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png",
    },
  ]
});

window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};
