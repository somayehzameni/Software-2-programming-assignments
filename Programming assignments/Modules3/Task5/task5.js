"use stric";
let number = +prompt("Enter the number: ");
let myarray = [];
while (!myarray.includes(number)) {
  myarray.push(number);
  number = +prompt("Enter the number: ");
}
console.log("The number has given!");
let sortedarray = myarray.sort((a, b) => a - b);
for (let i of sortedarray) {
  console.log(i);
}
