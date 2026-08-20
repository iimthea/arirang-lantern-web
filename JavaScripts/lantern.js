const fortunes = [
  { 
    song: "BTS • KCON Live Arirang", 
    icon: "💜", 
    hangul: "아리랑, 아리랑, 아라리요",
    lyric: "Seven voices, one heart crossing oceans to light up the world together." 
  },
  { 
    song: "RM • Gangwon-do Arirang (Poetic Stream)", 
    icon: "🐨", 
    hangul: "아리 아리랑 쓰리 쓰리랑",
    lyric: "Deep roots carry us through every high mountain pass into a wider horizon." 
  },
  { 
    song: "Jin • Bon Arirang (Classic National Melody)", 
    icon: "🐹", 
    hangul: "나를 버리고 가시는 님은...",
    lyric: "A bright, timeless light guiding every traveler walking under the midnight sky." 
  },
  { 
    song: "SUGA • Jeongseon Arirang (Haegeum & Beats)", 
    icon: "🐱", 
    hangul: "눈이 오려나 비가 오려나...",
    lyric: "Turn past trials into loud, triumphant rhythms that echo through history." 
  },
  { 
    song: "J-hope • Jindo Arirang (Festive Rhythm)", 
    icon: "🐿️", 
    hangul: "아리 아리랑 응응응 아라리가 났네!",
    lyric: "Walk over every hill with dancing feet and an unyielding light in your heart." 
  },
  { 
    song: "Jimin • Milyang Arirang (Silk Fan Dance)", 
    icon: "🐥", 
    hangul: "날 좀 보소, 날 좀 보소",
    lyric: "Flowing with grace and resilience, blooming through winter frost into spring." 
  },
  { 
    song: "V • Miryang Soul Edition (Deep Melody)", 
    icon: "🐻", 
    hangul: "동짓달 문살에 달빛이 가득",
    lyric: "A deep, soulful tune floating gently through the quiet, starry night breeze." 
  },
  { 
    song: "Jungkook • Modern Golden Arirang", 
    icon: "🐰", 
    hangul: "아리랑 고개를 넘어간다",
    lyric: "Singing high into the sky, turning every heartfelt wish into pure gold." 
  }
];

let lanternData = { name: "ARMY", wish: "Arirang Forever" };

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