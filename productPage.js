
  const parametro = new URLSearchParams(window.location.search);
  const productId = parametro.get("productId");
  console.log(productId);


fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDBlYzBiM2IyNTAwMTUxYjU0MTciLCJpYXQiOjE3MTUwNzczNTYsImV4cCI6MTcxNjI4Njk1Nn0.iwXD7GdljBWiTHnH4IBnnIag816mwq4QDDic5ijmNHo",
  },
})
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
    let brand=product.brand;
    let name=product.name;
    let description=product.description;
    let price=product.price;
    let img=product.imageUrl;


    let nome=document.getElementById("nome");
    nome.innerText=name;
    let prezzo=document.getElementById("prezzo");
    prezzo.innerText=price +  " € ";
    let descrizione=document.getElementById("descrizione");
    descrizione.innerText=description;
    descrizione.className="max-righe";
    let immagine=document.getElementById("img");
    immagine.src=img;

    document.title=name;
    })



