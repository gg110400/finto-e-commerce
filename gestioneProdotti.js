const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";

let param = new URLSearchParams(window.location.search);
let id = param.get("id");
window.onload = async () => {
  if (id) {
    const res = await fetch(BASE_URL + id, {
      headers: {
        authorization: "Bearer ",
      },
    });
    const product = await res.json();
    document.querySelector("#name").value = product.name;
    document.querySelector("#description").value = product.description;
    document.querySelector("#imageUrl").value = product.imageUrl;
    document.querySelector("#brand").value = product.brand;
    document.querySelector("#price").value = product.price;
    document.querySelector(".btn-light").remove();
  } else {
  }
};

const createNew = async () => {
  const product = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  };
  let res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDBlYzBiM2IyNTAwMTUxYjU0MTciLCJpYXQiOjE3MTUwNzczNTYsImV4cCI6MTcxNjI4Njk1Nn0.iwXD7GdljBWiTHnH4IBnnIag816mwq4QDDic5ijmNHo",
    },
    body: JSON.stringify(product),
  });
  if (res.ok) {
    alert("Prodotto aggiunto alla lista");
  }
};

const editProduct = async () => {
  const product = {
    name: document.getElementById("modified-name").value,
    description: document.getElementById("modified-description").value,
    brand: document.getElementById("modified-brand").value,
    imageUrl: document.getElementById("modified-imageUrl").value,
    price: document.getElementById("modified-price").value,
    id: document.querySelector("#modified-id").value,
  };
  let res = await fetch(BASE_URL + product.id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDBlYzBiM2IyNTAwMTUxYjU0MTciLCJpYXQiOjE3MTUwNzczNTYsImV4cCI6MTcxNjI4Njk1Nn0.iwXD7GdljBWiTHnH4IBnnIag816mwq4QDDic5ijmNHo",
    },
    body: JSON.stringify(product),
  });
  if (res.ok) {
    alert("Prodotto modificato");
  }
};

// Chiamata alla funzione editProduct al click di un pulsante o altro evento

const deleteProduct = async () => {
  let id = document.querySelector("#delete-product-id").value;
  console.log(id);
  let res = await fetch(BASE_URL + id, {
    method: "DELETE",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDBlYzBiM2IyNTAwMTUxYjU0MTciLCJpYXQiOjE3MTUwNzczNTYsImV4cCI6MTcxNjI4Njk1Nn0.iwXD7GdljBWiTHnH4IBnnIag816mwq4QDDic5ijmNHo",
    },
  });
  if (res.ok) {
    alert("Prodotto eliminato con successo");
  } else {
    alert("Errore durante l'eliminazione del prodotto");
  }
};

const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDBlYzBiM2IyNTAwMTUxYjU0MTciLCJpYXQiOjE3MTUwNzczNTYsImV4cCI6MTcxNjI4Njk1Nn0.iwXD7GdljBWiTHnH4IBnnIag816mwq4QDDic5ijmNHo",
      },
    });
    if (!response.ok) {
      throw new Error("Errore nella richiesta GET:", response.statusText);
    }
    const data = await response.json();
    console.log("Dati dal database:", data);
    let container = document.getElementById("cards-container");
    data.splice(0, 1);
    data.forEach((dato) => {
      let id = document.createElement("h6");
      id.classList.add("fw-normal", "text-secondary");
      id.className = "id-product";
      id.innerText = dato._id;
      id.style.fontSize = "13px";
      id.style.marginBottom = "20px";
      let card = document.createElement("div");
      card.classList = "card";
      card.style.backgroundColor = "white";
      card.classList.add("mt-3", "mb-3");
      card.style.width = "300px";
      card.classList.add("p-2");
      card.style.borderRadius = "10px";
      card.style.height = "690px";
      card.classList.add("d-flex", "flex-column", "align-items-center");
      let nomeProdotto = document.createElement("h3");
      nomeProdotto.innerText = dato.name;
      nomeProdotto.style.fontSize = "20px";
      nomeProdotto.style.marginTop = "20px";
      nomeProdotto.style.marginBottom = "10px";
      nomeProdotto.classList.add("text-center");
      nomeProdotto.classList.add("titolo-prodotto");
      let marca = document.createElement("h4");
      marca.innerText = dato.brand;
      marca.classList.add("text-center");
      marca.classList.add("text-primary");
      marca.classList.add("marca-prodotto");
      let descrizione = document.createElement("p");
      descrizione.style.overflow = "hidden";
      descrizione.style.textOverflow = "ellipsis";
      descrizione.style.whiteSpace = "nowrap";
      descrizione.style.width = "280px";
      descrizione.innerText = dato.description;
      let prezzo = document.createElement("h4");
      prezzo.innerText = dato.price + " €";
      prezzo.classList.add("text-primary");
      let immagine = document.createElement("img");
      immagine.src = dato.imageUrl;
      immagine.style.width = "250px";
      immagine.style.height="250px";
      immagine.style.marginBottom = "20px";
      let pulsanti = document.createElement("div");
      pulsanti.classList.add("d-flex");
      pulsanti.classList.add("justify-content-end");
      pulsanti.classList.add("align-items-center");
      pulsanti.classList.add("gap-2");
      pulsanti.style.width = "100%";
      pulsanti.style.height = "60px";
      pulsanti.classList.add("mb-3");
      pulsanti.classList.add("mb-2");
      let elimina = document.createElement("div");
      elimina.style.width = "50px";
      elimina.style.height = "50px";
      elimina.style.border = "1px solid black";
      elimina.classList.add(
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "btn",
        "btn-primary"
      );
      let modifica = document.createElement("div");
      modifica.style.width = "50px";
      modifica.style.border = "1px solid black";
      modifica.style.height = "50px";
      modifica.style.marginRight = "10px";
      modifica.classList.add(
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "btn",
        "btn-light"
      );
      let deleteIcon = document.createElement("i");
      deleteIcon.classList.add("bi");
      deleteIcon.classList.add("bi-trash3-fill");
      deleteIcon.classList.add("fs-4");
      deleteIcon.classList.add("cursor-pointer");

      let modifyIcon = document.createElement("i");
      modifyIcon.classList.add("bi");
      modifyIcon.classList.add("bi-pencil");
      modifyIcon.classList.add("fs-4");
      modifyIcon.classList.add("cursor-pointer");
      modifica.addEventListener("click", function () {
        let formModificaProdotto = document.getElementById("modifica-prodotti");
        //Quando clicco sull'icona modifica mi porta al modulo per modificare il mio prodotto
        formModificaProdotto.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        let modifiedNameInput = document.getElementById("modified-name");
        modifiedNameInput.value = nomeProdotto.innerText;
        let modifiedDescriptionInput = document.getElementById(
          "modified-description"
        );
        modifiedDescriptionInput.value = descrizione.innerText;
        let modifiedPriceInput = document.getElementById("modified-price");
        modifiedPriceInput.value = parseFloat(prezzo.innerText);
        let modifiedBrandInput = document.getElementById("modified-brand");
        modifiedBrandInput.value = marca.innerText;
        let modifiedIdInput = document.getElementById("modified-id");
        modifiedIdInput.value = id.innerText;
        let modifiedImgInput = document.getElementById("modified-imageUrl");
        modifiedImgInput.value = immagine.src;
  

      });
      elimina.addEventListener("click", function () {
        let formEliminaProdotto = document.getElementById("elimina-prodotti");
        formEliminaProdotto.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        let idInput = document.getElementById("delete-product-id");
        idInput.value = id.innerText;
        console.log(idInput);
        console.log(id.innerText);
      });
      elimina.appendChild(deleteIcon);
      modifica.appendChild(modifyIcon);
      pulsanti.appendChild(modifica);
      pulsanti.appendChild(elimina);
      card.appendChild(pulsanti);
      card.appendChild(id);
      card.appendChild(immagine);
      card.appendChild(nomeProdotto);
      card.appendChild(marca);
      card.appendChild(descrizione);
      card.appendChild(prezzo);

      container.appendChild(card);
    });

    // Ora puoi manipolare i dati come desideri, ad esempio visualizzarli nella tua interfaccia utente
  } catch (error) {
    console.error("Si è verificato un errore durante la fetch:", error);
  }
};

// Chiamare la funzione per recuperare i dati dal database
fetchData();

function search() {
  let cards = document.getElementsByClassName("card");
  let titoliProdotto = document.getElementsByClassName("titolo-prodotto");
  let marcaProdotto = document.getElementsByClassName("marca-prodotto");
  let cardsContainer = document.getElementById("cards-container");
  let searchButton = document.getElementById("search-button");
  let searchInput = document.getElementById("search-input");
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
    console.log(titolo);
    let marca=marcaProdotto[i].textContent.toLowerCase();
    console.log(marca)

    if ((titolo.includes(valoreInput)) || (marca.includes(valoreInput))) {
     cards[i].classList.remove("invisible")
    } else {
      cards[i].classList.add("invisible"); // Nascondi la card se il titolo non contiene la parola chiave
    }
  }
}




