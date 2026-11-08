"use stric";
function rolldice() {
  let r = Math.floor(Math.random() * 6) + 1;
  return r;
}
do {
  var result = rolldice();
  document.querySelector("#target3").innerHTML += `<li>${result}</li>`;
} while (result !== 6);
