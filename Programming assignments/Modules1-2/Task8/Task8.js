"use stric"

//Tehtävä8:
let statrYear = +prompt("Enter the statrt year: ");
let endYear = +prompt("Enter the end year: ");
for (let year = statrYear; year <= endYear; year++) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
    document.querySelector("#target8").innerHTML += `<li>${year}</li>`;
  }
}