        // Funcionalidad del menú móvil
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        });

        document.getElementById('mobileMenuBtn2').addEventListener('click', function() {
            const menu = document.getElementById('mobileMenu2');
            menu.classList.toggle('hidden');
        });

        // Funcionalidad de búsqueda
        document.getElementById('searchBtn').addEventListener('click', function() {
            const searchBox = document.getElementById('searchBox');
            searchBox.classList.toggle('hidden');
        });

        document.getElementById('searchBtn2').addEventListener('click', function() {
            const searchBox = document.getElementById('searchBox2');
            searchBox.classList.toggle('hidden');
        });

        // Navegación entre páginas
        document.getElementById('exploreBtn').addEventListener('click', function() {
            document.getElementById('main-page').classList.add('hidden');
            document.getElementById('capitulo1-page').classList.remove('hidden');
            window.scrollTo(0, 0);
        });

        document.getElementById('backBtn').addEventListener('click', function() {
            document.getElementById('capitulo1-page').classList.add('hidden');
            document.getElementById('main-page').classList.remove('hidden');
            window.scrollTo(0, 0);
        });

        // Simular funcionalidad de glosario
        document.querySelectorAll('.glossary-term').forEach(term => {
            term.addEventListener('click', function() {
                const termName = this.getAttribute('data-term');
                alert(`Glosario: ${termName}\n\nDefinición de ejemplo para este término. En una implementación real, esto podría abrir un modal con la definición completa.`);
            });
        });

        // Manejar hash en la URL para navegación
        window.addEventListener('hashchange', function() {
            if (window.location.hash === '#capitulo1') {
                document.getElementById('main-page').classList.add('hidden');
                document.getElementById('capitulo1-page').classList.remove('hidden');
                window.scrollTo(0, 0);
            }
        });
        

  // Tabs
document.querySelectorAll(".tab-menu li").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".tab-menu li.active")?.classList.remove("active");
        btn.classList.add("active");

        const tab = btn.getAttribute("data-tab");
        document.querySelector(".tab-panel.active")?.classList.remove("active");
        document.getElementById(tab).classList.add("active");
    });
});

// Toggle información
document.querySelectorAll(".toggle").forEach(boton => {
    boton.addEventListener("click", () => {
        const card = boton.parentElement;
        const info = card.querySelector(".info");
        info.classList.toggle("show");
    });
});
      