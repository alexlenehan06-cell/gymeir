function toggle(el) {
  const panel = el.nextElementSibling;
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function submitForm(e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "Thanks! We'll be in touch soon.";
}

async function getWeather() {
  const res = await fetch("https://wttr.in/Dublin?format=3");
  const text = await res.text();
  document.getElementById("weather").textContent = text;
}