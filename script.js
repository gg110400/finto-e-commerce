//Vado a creare un container per metterci dentro le cards dei libri

// Creo prima una row con un titolo che dice "Tutti i prodotti"
let row = document.createElement("div");
row.classList.add("row");
document.body.appendChild(row); // Aggiungo la riga al corpo del documento

let titleSection = document.createElement("h3"); // Creo un nuovo elemento h2 per il titolo
titleSection.innerHTML = `<h3 style="margin-left:270px">Tutti i prodotti<i class="fa-solid fa-star ms-3"></i></h3>`;
titleSection.classList.add("my-font");
titleSection.classList.add("mt-3");

// Aggiungo il titolo alla riga appena creata
row.appendChild(titleSection);
row.classList.add("text-center");
row.classList.add("mt-4");

// Create bigContainer
let bigContainer = document.createElement("div");
bigContainer.classList.add("container-fluid");
bigContainer.classList.add("bigContainer");
bigContainer.style.display = "flex"; // Setting display to flex

// Append bigContainer to body
document.body.appendChild(bigContainer);

// Create aside
let aside = document.createElement("div");
aside.classList.add("flex-shrink-0");
aside.classList.add("p-3");
aside.style.width = "280px"; // Setting width
aside.innerHTML = `
<div class="flex-shrink-0 p-3" style="width: 280px;">
    <ul class="list-unstyled ps-0 ">
    <li class="fs-3 mb-4 fw-semibold  ms-4">Filtri  <i class="bi bi-sliders ms-2"></i></li>
      <li class="mb-1">
     <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-4 fw-semibold w-100 " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          <span class="w-50">Brand</span> <i class="fa-solid fa-chevron-right ms-5 w-50"></i>
        </button>
        <div class="collapse" id="home-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded fs-5 ms-4">
            <input type="checkbox" id="barbie" class="me-2" value="barbie">
            <label for="barbie">Barbie</label>

            </a></li>
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded fs-5 ms-4">
            <input type="checkbox" id="frozen" class="me-2" value="disney-frozen">
            <label for="frozen">Disney Frozen</label>
            </a></li>
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded fs-5 ms-4">
            <input type="checkbox" id="princess" class="me-2" value="disney-princess">
            <label for="princess">Disney Princess</label>
            </a></li>
          </ul>
        </div>
      </li>
      <li class="list-divider"></li>
      <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-4 fw-semibold w-100" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          <span class="w-50 ms-2">Categoria </span><i class="fa-solid fa-chevron-right ms-4 w-50"></i>
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded ms-4 fs-5">
            <input type="checkbox" id="bambole" class="me-2" value="bambole">
            <label for="bambole" >Bambole</label>
            </a></li>
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded ms-4 fs-5">
            <input type="checkbox" id="bambole-collezione" class="me-2" value="bambole-collezione">
            <label for="bambole collezione">Bambole da collezione</label>
            </a></li>
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded ms-4 fs-5">
            <input type="checkbox" id="casa-bambole" class="me-2" value="casa-bambole">
            <label for="casa-bambole">Casa delle bambole</label>
            </a></li>
          </ul>
        </div>
      </li>
      <li class="list-divider"></li>
      <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-4 fw-semibold w-100" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          <span class="w-50 ms-1">Prezzo</span><i class="fa-solid fa-chevron-right ms-5 w-50"></i>
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded fs-5 ms-4">
            <input type="checkbox" id="fascia-prezzo-1" class="me-2" value="0-25">
            <label for="fascia-prezzo-1">0-25 €</label>
            </a></li>
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded ms-4 fs-5">
            <input type="checkbox" id="fascia-prezzo-2" class="me-2" value="25-50">
            <label for="fascia-prezzo-2">25-50 €</label>
            </a></li>
            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded ms-4 fs-5">
            <input type="checkbox" id="fascia-prezzo-3" class="me-2" value="50-100">
            <label for="fascia-prezzo-3">50-100 €</label>
            </a></li>
          </ul>
        </div>
      </li>
      <li class="list-divider"></li>
      <li class="mb-1">
      <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-4 fw-semibold w-100" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
        <span class="w-25 ms-2 me-5">Età</span><i class="fa-solid fa-chevron-right ms-5 w-75"></i>
      </button>
      <div class="collapse" id="orders-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded fs-5 ms-4">
          <input type="checkbox" id="fascia-età-1" class="me-2">
          <label for="fascia-età-1">2-4</label>
          </a></li>
          <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded ms-4 fs-5">
          <input type="checkbox" id="fascia-età-2" class="me-2">
            <label for="fascia-età-2">5+ </label>
          </a></li>
    
    
        </ul>
      </div>
    </li>
    <li class="list-divider"></li>
    </ul>
  </div>`;

// Append aside to bigContainer
bigContainer.appendChild(aside);

// Create container for cards
let container = document.createElement("div");
container.classList.add("container");
container.classList.add("cards-container");

// Append container to bigContainer
bigContainer.appendChild(container);

container.classList.add("mt-4");
container.classList.add("d-flex");
container.classList.add("gap-5");
container.classList.add("justify-content-center");
container.classList.add("flex-wrap");
container.classList.add("bg-white");

//Vado a recuperare i dati dall'API:
fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDBlYzBiM2IyNTAwMTUxYjU0MTciLCJpYXQiOjE3MTUwNzczNTYsImV4cCI6MTcxNjI4Njk1Nn0.iwXD7GdljBWiTHnH4IBnnIag816mwq4QDDic5ijmNHo",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let dati = data;
    dati.splice(0, 1);
    dati.forEach((dato) => {
      let id = dato._id;
      let card = document.createElement("div");
      card.classList.add("product-card");
      card.classList.add("d-flex", "flex-column", "align-items-center");
      card.style.height = "500px";
      card.classList.add("p-2");
      card.style.width = "350px";
      card.style.borderRadius = "5px";
      let marca = document.createElement("h5");
      marca.innerText = dato.brand;
      marca.classList.add("marca-prodotto", "text-primary");
      let img = document.createElement("img");
      img.src = dato.imageUrl;
      img.style.width = "230px";
      img.classList.add("mt-3", "cursor-pointer");
      img.onclick = () =>
        (window.location = `productPage.html?productId=${id}`);
      let nome = document.createElement("h5");
      nome.innerText = dato.name;
      nome.classList.add("titolo-prodotto");
      nome.style.overflow = "hidden";
      nome.style.textOverflow = "ellipsis";
      nome.style.whiteSpace = "nowrap";
      nome.style.width = "300px";
      nome.classList.add("text-center", "mt-3", "mb-3");
      let prezzo = document.createElement("h5");
      prezzo.classList.add("fw-normal", "text-secondary");
      prezzo.innerText = dato.price + " €";
      let bottone = document.createElement("button");
      bottone.innerText = "Aggiungi al carrello";
      bottone.style.marginTop = "20px";
      bottone.classList.add("btn", "btn-primary");

      card.appendChild(img);
      card.appendChild(nome);
      card.appendChild(marca);
      card.appendChild(prezzo);
      card.appendChild(bottone);
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });

function search() {
  let cards = document.getElementsByClassName("product-card");
  let titoliProdotto = document.getElementsByClassName("titolo-prodotto");
  let marcaProdotto = document.getElementsByClassName("marca-prodotto");
  console.log(marcaProdotto);
  let cardsContainer = document.querySelector(".cards-container");
  let searchButton = document.getElementById("search-button");
  let searchInput = document.getElementById("search-bar");
  let valoreInput = searchInput.value.toLowerCase();
  console.log(valoreInput);
  let lensIcon = document.getElementById("lens");
  lensIcon.addEventListener("click", function () {
    cardsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  searchButton.addEventListener("click", function () {
    cardsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  for (let i = 0; i < cards.length; i++) {
    let titolo = titoliProdotto[i].textContent.toLowerCase(); // Estrai il testo del titolo e convertilo in minuscolo
    let marca = marcaProdotto[i].textContent.toLowerCase();

    if (titolo.includes(valoreInput) || marca.includes(valoreInput)) {
      cards[i].classList.remove("invisible");
    } else {
      cards[i].classList.add("invisible"); // Nascondi la card se il titolo non contiene la parola chiave
    }
  }
}

function filtroPerBrand() {
  let cards = document.getElementsByClassName("product-card");
  let marcaProdotto = document.getElementsByClassName("marca-prodotto");
  let barbieSelect = document.getElementById("barbie");
  let frozenSelect = document.getElementById("frozen");
  let princessSelect = document.getElementById("princess");
  let barbieValue = barbieSelect.checked;
  let frozenValue = frozenSelect.checked;
  let princessValue = princessSelect.checked;


  // Controlla se nessuna checkbox è selezionata
  if (!barbieValue && !frozenValue && !princessValue) {
    // Nessuna checkbox è selezionata, mostrare tutte le cards
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("invisible");
    }
    // Uscire dalla funzione in quanto non c'è bisogno di ulteriori filtri
    return;
}


  for (let i = 0; i < cards.length; i++) {
    let marca = marcaProdotto[i].textContent.toLowerCase();
    let showCard = false;

    if (
      (barbieValue && marca.includes("barbie")) ||
      (frozenValue && marca.includes("frozen")) ||
      (princessValue && marca.includes("princess"))
    ) {
      showCard = true;
    }

    if (showCard) {
      cards[i].classList.remove("invisible");
    } else {
      cards[i].classList.add("invisible");
    }
  }
}

// Ottenere le referenze alle checkbox
let barbieSelect = document.getElementById("barbie");
let frozenSelect = document.getElementById("frozen");
let princessSelect = document.getElementById("princess");

// Aggiungere un gestore di eventi per l'evento "click" a ciascuna checkbox
barbieSelect.addEventListener("click", filtroPerBrand);
frozenSelect.addEventListener("click", filtroPerBrand);
princessSelect.addEventListener("click", filtroPerBrand);

