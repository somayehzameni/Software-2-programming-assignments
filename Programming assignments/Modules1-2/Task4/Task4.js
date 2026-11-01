"use stric"

//Tehtävä4:

let name1 = prompt("Enter your name: ");
let room = Math.floor(Math.random() * 5) + 1;
switch (room) {
  case 1:
    document.querySelector("#target3").innerHTML =
      ` ${name1} , you are Gryffindor`;
    break;
  case 2:
    document.querySelector("#target3").innerHTML =
      ` ${name1} , you are Slytherin`;
    break;
  case 3:
    document.querySelector("#target3").innerHTML =
      ` ${name1} , you are Hufflepuff`;
    break;
  case 4:
    document.querySelector("#target3").innerHTML =
      ` ${name1} , you are Ravenclaw`;
    break;
  default:
    document.querySelector("#target3").innerHTML = "Invalid";
}