let isSkyViewActive = false;

document.addEventListener("DOMContentLoaded", () => {
  const stored = sessionStorage.getItem('resultCard');
  if (!stored) {
    window.location.href = "index.html";
    return;
  }

  const data = JSON.parse(stored);
  document.getElementById('card-user').innerText = data.name;
  document.getElementById('card-wish-text').innerText = `"${data.wish}"`;
  document.getElementById('card-icon').innerText = data.icon;
  document.getElementById('card-song').innerText = `🎵 ${data.song}`;
  document.getElementById('card-lyric').innerText = `"${data.lyric}"`;
});

function toggleSkyView() {
  const card = document.querySelector('.souvenir-card');
  const btn = document.getElementById('peek-btn');

  if (!isSkyViewActive) {
    card.style.opacity = "0.15";
    card.style.pointerEvents = "none";
    btn.innerText = "🃏 Show Card";
    isSkyViewActive = true;
  } else {
    card.style.opacity = "1";
    card.style.pointerEvents = "auto";
    btn.innerText = "👀 Peek Sky Lanterns";
    isSkyViewActive = false;
  }
}

function restartApp() {
  window.location.href = "index.html";
}