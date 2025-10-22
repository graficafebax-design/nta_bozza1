  // SPC
const prodotti = [
  {
    nome: "Positano",
    link: "Positano.html",
    immagine: "assets/img/SPC/positano/Positano_03_03.jpg",
    codice: "FRSPC0610179",
    categoria: "SPC"
  },
  {
    nome: "Sunflower",
    link: "Sunflower.html",
    immagine: "assets/img/SPC/sunflower/Sunflower_03_03.jpg",
    codice: "FRSPC0610180",
    categoria: "SPC"
  },
    {
    nome: "Portofino",
    link: "Portofino.html",
    immagine: "assets/img/SPC/portofino/Portofino_03_03.jpg",
    codice: "FRSPC0610181",
    categoria: "SPC"
  },
    {
    nome: "Nerano",
    link: "Nerano.html",
    immagine: "assets/img/SPC/nerano/Nerano_03_03.jpg",
    codice: "FRSPC0610182",
    categoria: "SPC"
  },
    {
    nome: "Negrar",
    link: "Negrar.html",
    immagine: "assets/img/SPC/negrar/negrar_03_03.jpg",
    codice: "FRSPC0610183",
    categoria: "SPC"
  },
    {
    nome: "Lindera",
    link: "Lindera.html",
    immagine: "assets/img/SPC/lindera/Lindera_03_03.jpg",
    codice: "FRSPC0610184",
    categoria: "SPC"
  },
    {
    nome: "Concrete White",
    link: "ConcreteWhite.html",
    immagine: "assets/img/SPC/concrete white/concrete white_03_03.jpg",
    codice: "FRSPC0610185",
    categoria: "SPC"
  },
    {
    nome: "Concrete Grey",
    link: "ConcreteGrey.html",
    immagine: "assets/img/SPC/concrete grey/concrete grey_03_03.jpg",
    codice: "FRSPC0610185",
    categoria: "SPC"
  },
];




// Aspetta che tutto il DOM sia caricato prima di eseguire il codice
document.addEventListener('DOMContentLoaded', function() {

  // Funzione per cercare prodotti in base a nome, codice o categoria
  function cercaProdotti(query) {
    if (!query) return []; // Se non c'è nulla nella barra di ricerca, ritorna un array vuoto

    query = query.toLowerCase(); // Converte la query in minuscolo per rendere la ricerca non sensibile a maiuscole/minuscole

    // Filtra l'elenco dei prodotti controllando se la query è presente nel nome, codice o categoria
    return prodotti.filter(p =>
      p.nome.toLowerCase().includes(query) ||         // Controlla nel nome
      p.codice.toLowerCase().includes(query) ||       // Controlla nel codice
      p.categoria.toLowerCase().includes(query)       // Controlla nella categoria
    );
  }

  // Recupera il campo di input della ricerca dal DOM
  const inputSearch = document.getElementById('inputModalSearch');

  // Recupera il contenitore dove mostrare i risultati
  const risultatiContainer = document.getElementById('risultatiRicerca');

  // Aggiunge un evento che ascolta ogni cambiamento nella barra di ricerca (mentre l’utente scrive)
  inputSearch.addEventListener('input', function() {
    const query = this.value; // Prende il testo inserito
    const risultati = cercaProdotti(query); // Cerca i prodotti usando la funzione sopra
    risultatiContainer.innerHTML = ''; // Pulisce i risultati precedenti

    // Se non ci sono risultati trovati, mostra un messaggio
    if (risultati.length === 0) {
      risultatiContainer.innerHTML = '<p>Nessun risultato trovato</p>';
      return; // Interrompe l’esecuzione
    }

    // Crea una lista non ordinata (ul) per mostrare i risultati
    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none'; // Nessun pallino nella lista
    ul.style.paddingLeft = '0'; // Rimuove il padding a sinistra

    // Cicla su ogni prodotto trovato
    risultati.forEach(prod => {
      // Crea un elemento lista (li)
      const li = document.createElement('li');
      li.style.display = 'flex'; // Mostra l'immagine e il testo affiancati
      li.style.alignItems = 'center'; // Allinea verticalmente al centro
      li.style.marginBottom = '10px'; // Spazio sotto ogni risultato

      // Crea l'immagine del prodotto
      const img = document.createElement('img');
      img.src = prod.immagine; // URL dell'immagine
      img.alt = prod.nome; // Testo alternativo per l'immagine
      img.style.width = '50px'; // Larghezza immagine
      img.style.height = '50px'; // Altezza immagine
      img.style.objectFit = 'cover'; // Ritaglia l'immagine mantenendo il contenuto visibile
      img.style.marginRight = '10px'; // Spazio tra immagine e testo
      img.style.borderRadius = '4px'; // Angoli leggermente arrotondati

      // Crea il link al prodotto
      const a = document.createElement('a');
      a.href = prod.link; // Link alla pagina del prodotto
      a.textContent = prod.nome; // Mostra il nome del prodotto
      a.style.color = '#000000ff'; // Colore blu (stile Bootstrap)
      a.style.textDecoration = 'none'; // Nessuna sottolineatura
      a.style.fontWeight = '500'; // Leggermente più in grassetto

      // Effetto hover per il link: sottolinea al passaggio del mouse
      a.addEventListener('mouseenter', () => a.style.textDecoration = 'underline');
      a.addEventListener('mouseleave', () => a.style.textDecoration = 'none');

      // Aggiunge immagine e link dentro il risultato (li)
      li.appendChild(img);
      li.appendChild(a);

      // Aggiunge il risultato (li) alla lista (ul)
      ul.appendChild(li);
    });

    // Aggiunge la lista dei risultati al contenitore nel DOM
    risultatiContainer.appendChild(ul);
  });

});
