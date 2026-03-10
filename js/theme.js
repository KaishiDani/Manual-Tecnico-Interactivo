// ==============================
// CARGA DE HEADER + MODO OSCURO
// ==============================

document.addEventListener("DOMContentLoaded", () => {

  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      iniciarModoOscuro(); // 🔥 se ejecuta DESPUÉS de que el botón existe
    });

});

function iniciarModoOscuro() {
  const toggleButton = document.getElementById("themeToggle");

  if (!toggleButton) return;

  const modoGuardado = localStorage.getItem("modoOscuro");

  if (modoGuardado === "true") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const modoActivo = document.body.classList.contains("dark-mode");
    localStorage.setItem("modoOscuro", modoActivo);

    toggleButton.textContent = modoActivo ? "☀️" : "🌙";
  });
}
