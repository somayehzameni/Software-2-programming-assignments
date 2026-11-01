//Tehtävä3:
 "use stric"
const first = +prompt("Enter the first number: ");
const second = +prompt("Enter second number: ");
const third = +prompt("Enter third number: ");
let sum = first + second + third;
let average = sum / 3;
document.querySelector("#target2").innerHTML =
  `The sum of the number is ${sum} and the average is ${average}`;
