const fortunes = [
  { 
    song: "BTS Group Edition • KCON Paris & Live Arirang", 
    icon: "💜", 
    lyric: "Seven voices, one heart—crossing every boundary to light up the world together." 
  },
  { 
    song: "RM Edition • Indigo Horizon Arirang", 
    icon: "🌿", 
    lyric: "Deep roots carry us through every mountain pass into a wider world." 
  },
  { 
    song: "Jin Edition • Silver Moonlit Arirang", 
    icon: "🌙", 
    lyric: "Warm and gentle light guiding every traveler walking under the midnight sky." 
  },
  { 
    song: "SUGA / Agust D • D-Day Beat Arirang", 
    icon: "🥁", 
    lyric: "Turn past trials into loud, triumphant rhythms that echo through history." 
  },
  { 
    song: "j-hope Edition • Hope World Arirang", 
    icon: "☀️", 
    lyric: "Walk over every hill with dancing feet and unyielding hope in your heart." 
  },
  { 
    song: "Jimin Edition • Silk Blossom Arirang", 
    icon: "🌸", 
    lyric: "Flowing with grace and resilience, blooming through winter frost into spring." 
  },
  { 
    song: "V Edition • Winter Bear Soul Arirang", 
    icon: "🐻", 
    lyric: "A deep, soulful melody floating gently through the starry night breeze." 
  },
  { 
    song: "Jungkook Edition • Golden Voice Arirang", 
    icon: "✨", 
    lyric: "Singing high into the sky, turning every heartfelt wish into gold." 
  }
];

let lanternData = { name: "ARMY", wish: "Arirang Forever ❤️" };

document.addEventListener("DOMContentLoaded", () => {
  const stored = sessionStorage.getItem('currentLantern');
  if (stored) {
    lanternData = JSON.parse(stored);
  }

  document.getElementById('display-name').innerText = `- ${lanternData.name}`;
  document.getElementById('display-wish').innerText = `"${lanternData.wish}"`;
});

function releaseLantern() {
  const lanternObj = document.getElementById('lantern-obj');
  lanternObj.classList.add('releasing');

  saveLanternToCloud(lanternData.name, lanternData.wish);

  const pull = fortunes[Math.floor(Math.random() * fortunes.length)];
  sessionStorage.setItem('resultCard', JSON.stringify({ ...lanternData, ...pull }));

  setTimeout(() => {
    window.location.href = "result.html";
  }, 1900);
}