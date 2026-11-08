"use stric";
function dicerooling(numberofsid) {
  let r = Math.floor(Math.random() * numberofsid) + 1;
  return r;
}
let numberofsid = +prompt("Enter the number of side: ");
do {
  var result = dicerooling(numberofsid);
  document.querySelector("#target4").innerHTML += `<li>${result}</li>`;
} while (result !== numberofsid);
