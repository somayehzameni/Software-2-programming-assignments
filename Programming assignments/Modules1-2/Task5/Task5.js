"use stric"

//Tehtävä5:
const year = +prompt("Enter the year: ");
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      document.querySelector("#target4").innerHTML =
        `A ${year} is a leap year `;
    } else {
      document.querySelector("#target4").innerHTML =
        `A ${year} is not a leap year `;
    }
  } else {
    document.querySelector("#target4").innerHTML = `A ${year} is a leap year `;
  }
} else {
  document.querySelector("#target4").innerHTML =
    `A ${year} is not a leap year `;
}