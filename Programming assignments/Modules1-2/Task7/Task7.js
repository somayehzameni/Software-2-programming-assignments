"use stric";

//Tehtävä 7:
let rollsNumber = +prompt("Enter the number ");
let count = 0;
let total = 0;
while (count < rollsNumber) {
  let roll = Math.floor(Math.random() * 6) + 1;
  total = total + roll;
  count = count + 1;
}
document.querySelector("#target6").innerHTML = `The sum is ${total}`;
