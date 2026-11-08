"use stric";
let number = +prompt("Enter the number: ");
let myarray = [];
while (number !== 0) {
  myarray.push(number);
  number = +prompt("Enter the number: ");
}
let reversearray = myarray.sort((a, b) => b - a);
for (let i of reversearray) {
  console.log(i);
}
