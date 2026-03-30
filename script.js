function toggle(el) {
  const panel = el.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

function submitForm(e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "Thanks! We'll be in touch soon.";
}

if (document.getElementById("map")) {
  const map = L.map("map").setView([53.4, -7.9], 7);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  const gyms = [
    { name: "Gym Éire Dublin", coords: [53.3498, -6.2603] },
    { name: "Gym Éire Cork", coords: [51.8985, -8.4756] },
    { name: "Gym Éire Galway", coords: [53.2707, -9.0568] },
    { name: "Gym Éire Limerick", coords: [52.6638, -8.6267] }
  ];
  gyms.forEach(g => L.marker(g.coords).addTo(map).bindPopup(g.name));
}