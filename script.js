// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {

  // ===== MENÚ MÓVIL =====
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      const menu = document.getElementById('mobileMenu');
      if (menu) menu.classList.toggle('hidden');
    });
  }

  const mobileMenuBtn2 = document.getElementById('mobileMenuBtn2');
  if (mobileMenuBtn2) {
    mobileMenuBtn2.addEventListener('click', function() {
      const menu = document.getElementById('mobileMenu2');
      if (menu) menu.classList.toggle('hidden');
    });
  }

  // ===== BÚSQUEDA =====
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const searchBox = document.getElementById('searchBox');
      if (searchBox) searchBox.classList.toggle('hidden');
    });
  }

  const searchBtn2 = document.getElementById('searchBtn2');
  if (searchBtn2) {
    searchBtn2.addEventListener('click', function() {
      const searchBox = document.getElementById('searchBox2');
      if (searchBox) searchBox.classList.toggle('hidden');
    });
  }

  // ===== NAVEGACIÓN =====
  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
      const main = document.getElementById('main-page');
      const cap1 = document.getElementById('capitulo1-page');
      if (main && cap1) {
        main.classList.add('hidden');
        cap1.classList.remove('hidden');
        window.scrollTo(0, 0);
      }
    });
  }

  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      const main = document.getElementById('main-page');
      const cap1 = document.getElementById('capitulo1-page');
      if (main && cap1) {
        cap1.classList.add('hidden');
        main.classList.remove('hidden');
        window.scrollTo(0, 0);
      }
    });
  }

  // ===== GLOSARIO =====
  document.querySelectorAll('.glossary-term').forEach(term => {
    term.addEventListener('click', function() {
      const termName = this.getAttribute('data-term');
      alert(`Glosario: ${termName}\n\nDefinición de ejemplo.`);
    });
  });

  // ===== HASH URL =====
  window.addEventListener('hashchange', function() {
    if (window.location.hash === '#capitulo1') {
      const main = document.getElementById('main-page');
      const cap1 = document.getElementById('capitulo1-page');
      if (main && cap1) {
        main.classList.add('hidden');
        cap1.classList.remove('hidden');
        window.scrollTo(0, 0);
      }
    }
  });

  // ===== TABS =====
  document.querySelectorAll(".tab-menu li").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".tab-menu li.active")?.classList.remove("active");
      btn.classList.add("active");

      const tab = btn.getAttribute("data-tab");
      document.querySelector(".tab-panel.active")?.classList.remove("active");
      const panel = document.getElementById(tab);
      if (panel) panel.classList.add("active");
    });
  });

  // ===== TOGGLE INFORMACIÓN =====
  document.querySelectorAll(".toggle").forEach(boton => {
    boton.addEventListener("click", () => {
      const card = boton.parentElement;
      const info = card?.querySelector(".info");
      if (info) info.classList.toggle("show");
    });
  });

});