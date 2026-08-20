function submitWish() {
  const nameIn = document.getElementById('username').value.trim() || "ARMY";
  const wishIn = document.getElementById('userwish').value.trim() || "Arirang Forever";

  sessionStorage.setItem('currentLantern', JSON.stringify({ name: nameIn, wish: wishIn }));
  window.location.href = "lantern.html";
} 