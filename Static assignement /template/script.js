const url = "https://kea-alt-del.dk/t7/api/products/2801";
//fetch the data

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page
function showProduct(product) {}
