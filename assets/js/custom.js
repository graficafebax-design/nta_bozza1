document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.tappabile');

  cards.forEach(card => {
    card.addEventListener('click', function (e) {
      e.stopPropagation();
      card.classList.toggle('logo-attiva');
    });
  });

  document.addEventListener('click', function () {
    cards.forEach(card => card.classList.remove('logo-attiva'));
  });
});



// Funzione per cercare i prodotti
function cercaProdotti(query) {
  query = query.toLowerCase();
  const risultati = prodotti.filter(p =>
    p.nome.toLowerCase().includes(query) ||
    p.codice.toLowerCase().includes(query) ||
    p.categoria.toLowerCase().includes(query)
  );
  mostraRisultati(risultati);
}

// Funzione per mostrare i risultati nella pagina (modal search)
function mostraRisultati(risultati) {
  const container = document.getElementById('risultatiRicerca');
  if (!container) return;

  container.innerHTML = ''; // svuota

  if (risultati.length === 0) {
    container.innerHTML = '<p>Nessun prodotto trovato.</p>';
    return;
  }

  risultati.forEach(prodotto => {
    const div = document.createElement('div');
    div.classList.add('mb-3', 'd-flex', 'align-items-center');

    div.innerHTML = `
      <img src="${prodotto.immagine}" alt="${prodotto.nome}" style="width: 60px; height: auto; margin-right: 10px;">
      <div>
        <a href="${prodotto.link}" class="fw-bold text-dark">${prodotto.nome}</a><br>
        <small class="text-muted">${prodotto.codice}</small>
      </div>
    `;

    container.appendChild(div);
  });
}

// Attiviamo la ricerca live sulla modale
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('inputModalSearch');

  if (input) {
    input.addEventListener('input', function () {
      const query = input.value.trim();
      if (query.length > 1) {
        cercaProdotti(query);
      } else {
        document.getElementById('risultatiRicerca').innerHTML = '';
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const mobileMenu = document.getElementById("mobileMenuCustom");
    const body = document.body;

    if (toggler && mobileMenu) {
        toggler.addEventListener("click", function (e) {
            e.preventDefault();
            mobileMenu.classList.toggle("active");
            body.classList.toggle("mobile-menu-open");
        });
    }
});


// Mobile menu slide-in
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.createElement('div');
    overlay.id = 'sidebarOverlay';
    document.body.appendChild(overlay);

    const toggleButton = document.querySelector('.navbar-toggler');
    const closeButton = document.getElementById('closeSidebar');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeButton.addEventListener('click', function () {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

