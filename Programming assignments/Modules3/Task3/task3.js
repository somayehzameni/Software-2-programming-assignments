"use stric";
let myarray = [];
for (i = 1; i <= 6; i++) {
  let dogname = prompt("Enter the name of dog: ");
  myarray.push(dogname);
}
myarray.sort();
let reversearray = myarray.reverse();
for (let i of reversearray) {
  document.querySelector("#target2").innerHTML += `<li>${i}</li>`;
}
