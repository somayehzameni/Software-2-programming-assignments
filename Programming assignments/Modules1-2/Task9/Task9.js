"use stric"

//Tehtävä9:
let number2 = +prompt("Enter the number: ");
for (let i = 2; i < number2; i++) {
  if (number2 % i == 0) {
    document.querySelector("#target9").innerHTML =
      `${number2} is not a prime number.`;
    break;
  } else {
    document.querySelector("#target9").innerHTML =
      `${number2} is a prime number.`;
  }
}