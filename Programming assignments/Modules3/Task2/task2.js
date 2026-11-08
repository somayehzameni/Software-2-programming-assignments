"use stric";

//Tehtävä2:
let participantsnumber = +prompt("Enter the number of participants: ");
let myarray = [];
for (let i = 1; i <= participantsnumber; i++) {
  let participantsname = prompt("enter the name of participant: ");
  myarray.push(participantsname);
}
let sortedarray = myarray.sort();
for (let i of sortedarray) {
  document.querySelector("#target1").innerHTML += `<li>${i}</li>`;
}
