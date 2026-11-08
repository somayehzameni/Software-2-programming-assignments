"use stric";

//Tehtävä1:
const num1 = +prompt("Enter the first number:");
const num2 = +prompt("Enter the second number:");
const num3 = +prompt("Enter the third number:");
const num4 = +prompt("Enter the forth number:");
const num5 = +prompt("Enter the fifth number:");

let numbers = [num1, num2, num3, num4, num5];
for (let i = 0; i < numbers.length; i--) {
  console.log(numbers[i]);
}
