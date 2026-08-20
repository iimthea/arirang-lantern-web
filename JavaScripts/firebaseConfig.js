const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let db = null;

try {
  firebase.initializeApp(firebaseConfig);
  db = firebase.database();
} catch (e) {
  console.warn("Firebase config missing. Live community sharing disabled.");
}

function saveLanternToCloud(name, wish) {
  if (!db) return;
  db.ref('lanterns').push({ name, wish, timestamp: Date.now() });
}

// Stores live wishes so we can continuously loop them
const wishPool = [
  { name: "ARMY", wish: "Arirang Forever ❤️" },
  { name: "Toronto Fan", wish: "Health & Happiness ✨" }
];

function listenForCommunityLanterns() {
  const skyBg = document.getElementById('sky-bg');
  if (!skyBg) return;

  // 1. Listen for real-time Firebase entries
  if (db) {
    db.ref('lanterns').limitToLast(15).on('child_added', (snapshot) => {
      const data = snapshot.val();
      wishPool.push(data); // Add live wishes to our ambient pool
      spawnAmbientLantern(skyBg, data.name, data.wish);
    });
  }

  // 2. Keep spawning lanterns indefinitely every 2.5 seconds
  setInterval(() => {
    const randomWish = wishPool[Math.floor(Math.random() * wishPool.length)];
    spawnAmbientLantern(skyBg, randomWish.name, randomWish.wish);
  }, 2500);
}

function spawnAmbientLantern(container, name, wish) {
  const el = document.createElement('div');
  el.className = 'ambient-lantern';
  el.innerText = '🏮';
  
  const randomLeft = Math.floor(Math.random() * 88) + 5;
  const randomDuration = Math.floor(Math.random() * 6) + 12; // 12s - 18s float time
  
  el.style.left = `${randomLeft}vw`;
  el.style.animationDuration = `${randomDuration}s`;

  el.onclick = (e) => {
    e.stopPropagation();
    alert(`🏮 Lantern by ${name}:\n"${wish}"`);
  };

  container.appendChild(el);
  setTimeout(() => el.remove(), randomDuration * 1000);
}

// Global Audio Controller across pages
let isPlaying = false;
function toggleMusic() {
  const audio = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-btn');
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    if (musicBtn) musicBtn.innerText = "🔇";
    isPlaying = false;
  } else {
    audio.play();
    if (musicBtn) musicBtn.innerText = "🎵";
    isPlaying = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  listenForCommunityLanterns();
});