// ! Products card for Page 1

const products = {
  1: {
    id: 1,
    name: "LookMark Men's Poly Cotton Digital Printed Half Sleeve Shirt",
    brand: "LookMark",
    price: "₹299",
    category: "shirt",
    image: "./img/products/f1.jpg",
  },

  2: {
    id: 2,
    name: "Smowkly Printed Shirt for Men Tropical Print Shirt for Men",
    brand: "Smowkly",
    price: "₹199",
    category: "shirt",
    image: "./img/products/f2.jpg",
  },

  3: {
    id: 3,
    name: "Lyriq Men's Casual Cotton Digital Printed Half Sleeve Shirt",
    brand: "Lyriq",
    price: "₹399",
    category: "shirt",
    image: "./img/products/f3.jpg",
  },

  4: {
    id: 4,
    name: "Lyriq Men's Casual Cotton Digital Printed Half Sleeve Shirt",
    brand: "Lyriq",
    price: "₹599",
    category: "shirt",
    image: "./img/products/f4.jpg",
  },

  5: {
    id: 5,
    name: "Smowkly Men's Poly Cotton Digital Printed Half Sleeve Shirt",
    brand: "Smowkly",
    price: "₹299",
    category: "shirt",
    image: "./img/products/f5.jpg",
  },

  6: {
    id: 6,
    name: "Adidas Casual Shirt for Men || Tropical Print Shirt for Men",
    brand: "Adidas",
    price: "₹229",
    category: "shirt",
    image: "./img/products/f6.jpg",
  },

  7: {
    id: 7,
    name: "Greciilooks Women's Casual Cotton || Digital Printed Trouser",
    brand: "Greciilooks",
    price: "₹199",
    category: "pants",
    image: "./img/products/f7.jpg",
  },

  8: {
    id: 8,
    name: "Lymio Women's Cotton Printed Full Sleeve Top || Women's clothing",
    brand: "Lymio",
    price: "₹599",
    category: "shirt",
    image: "./img/products/f8.jpg",
  },

  9: {
    id: 9,
    name: "Adidas Men's Casual Cotton Full Sleeve Shirt",
    brand: "Adidas",
    price: "₹599",
    category: "shirt",
    image: "./img/products/n1.jpg",
  },

  10: {
    id: 10,
    name: "Greeliooks Men's Casual Cotton Full Sleeve Shirt",
    brand: "Greciilooks",
    price: "₹499",
    category: "shirt",
    image: "./img/products/n2.jpg",
  },

  11: {
    id: 11,
    name: "Casual Shirt for Men Stylish Shirt || Men Printed Shirt",
    brand: "J-Mistry",
    price: "₹309",
    category: "shirt",
    image: "./img/products/f4.jpg",
  },

  12: {
    id: 12,
    name: "J B Fashion Casual Shirt for Men || Men Stylish Shirt",
    brand: "J-Patta",
    price: "₹319",
    category: "shirt",
    image: "./img/products/f2.jpg",
  },

  13: {
    id: 13,
    name: "Dhruvi Trendz Men Simple Shirt for Men || Mens' Clothing ",
    brand: "Dhruvi Trendz",
    price: "₹399",
    category: "shirt",
    image: "./img/products/n5.jpg",
  },

  14: {
    id: 14,
    name: "LookMark Men's Poly Cotton Digital Printed Half Sleeve Shirt",
    brand: "LookMark",
    price: "₹209",
    category: "shirt",
    image: "./img/products/f1.jpg",
  },

  15: {
    id: 15,
    name: "IndoPrimo Formal Shirt for Men || Men Plain Shirt",
    brand: "IndoPrimo",
    price: "₹599",
    category: "shirt",
    image: "./img/products/n3.jpg",
  },

  16: {
    id: 16,
    name: "Dennis Lingo Men's Pattern Slim Fit Cotton Casual Shirt ",
    brand: "Dennis",
    price: "₹299",
    category: "shirt",
    image: "./img/products/n4.jpg",
  },

  17: {
    id: 17,
    name: "Lymio Men's Casual Short Plain Printed Shorts",
    brand: "Lymio",
    price: "₹329",
    category: "shorts",
    image: "./img/products/n6.jpg",
  },

  18: {
    id: 18,
    name: "LookMark Men's Plain Printed Full Sleeve Shirt For Men",
    brand: "LookMark",
    price: "₹499",
    category: "shirt",
    image: "./img/products/n7.jpg",
  },

  19: {
    id: 19,
    name: "J B Fashion Men's Light Blue Cotton Full Sleeve Shirt",
    brand: "J B Fashion",
    price: "₹299",
    category: "shirt",
    image: "./img/products/n1.jpg",
  },

  20: {
    id: 20,
    name: "Greciilooks Men's Cotton Full Sleeve Shirt For Men",
    brand: "Greciilooks",
    price: "₹459",
    category: "shirt",
    image: "./img/products/n2.jpg",
  },
};

const container1 = document.querySelector("#pro-container");
// const container2 = document.querySelector("#pro-container2");

function createCard(item, cont) {
  let pro = document.createElement("div");
  pro.classList.add("pro");

  let productImage = document.createElement("img");
  productImage.src = products[item].image;

  let descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("des");

  let title = document.createElement("h5");
  title.innerText = products[item].name;

  let price = document.createElement("h4");
  price.innerText = products[item].price;

  let brand = document.createElement("span");
  brand.innerText = products[item].brand;

  //   Appending...
  pro.appendChild(productImage);

  descriptionContainer.appendChild(brand);
  descriptionContainer.appendChild(title);
  descriptionContainer.appendChild(price);

  pro.appendChild(descriptionContainer);

  container1.appendChild(pro);
 
}


// ! for Page 1
for (let i = 1; i <= 20; i++) {
  createCard(i,1);
}

