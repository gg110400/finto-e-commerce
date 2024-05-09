//Vado a creare un container per metterci dentro le cards dei libri

// Creo prima una row con un titolo che dice "Tutti i prodotti"
let row = document.createElement("div");
row.classList.add("row");
document.body.appendChild(row); // Aggiungo la riga al corpo del documento

let titleSection = document.createElement("h3"); // Creo un nuovo elemento h2 per il titolo
titleSection.innerHTML = `<h3>Tutti i prodotti<i class="fa-solid fa-star ms-3"></i></h3>`;
titleSection.classList.add("my-font");
titleSection.classList.add("mt-3");

// Aggiungo il titolo alla riga appena creata
row.appendChild(titleSection);
row.classList.add("text-center");
row.classList.add("mt-4");

//Creo un container per le cards
let container = document.createElement("div");
container.classList.add("container");
container.classList.add("cards-container");
document.body.appendChild(container);
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
      let id=dato._id;
      let card = document.createElement("div");
      card.classList.add("d-flex", "flex-column", "align-items-center");
      card.style.height = "500px";
      card.classList.add("p-2");
      card.style.width = "350px";
      card.style.borderRadius = "5px";
      let img = document.createElement("img");
      img.src = dato.imageUrl;
      img.style.width = "230px";
      img.classList.add("mt-3", "cursor-pointer");
      img.onclick=() => (window.location=`productPage.html?productId=${id}`);
      let nome = document.createElement("h5");
      nome.innerText = dato.name;
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
      card.appendChild(prezzo);
      card.appendChild(bottone);
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
