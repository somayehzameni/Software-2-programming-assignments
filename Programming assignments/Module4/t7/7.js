const target = document.querySelector("#trigger");
target.addEventListener("mouseover", Changimg);
function Changimg(e) {
  const image = document.querySelector("#target");
  image.src = "img/picB.jpg";
}

target.addEventListener("mouseout", Changimg2);
function Changimg2(e) {
  const image = document.querySelector("#target");
  image.src = "img/picA.jpg";
}
