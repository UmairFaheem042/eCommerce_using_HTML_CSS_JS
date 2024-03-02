// ! To switch b/w images when reviewing a product

const mainImage = document.getElementById("mainImage");
const smallImages = document.querySelectorAll(".small-image");


for (let i = 0; i < 4; i++) {
  smallImages[i].onclick = function () {
    mainImage.src = smallImages[i].src;
  };
}
