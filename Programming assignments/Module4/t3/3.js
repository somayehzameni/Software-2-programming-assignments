"use strict";
const names = ["John", "Paul", "Jones"];
const mylist = document.querySelector("#target");
for (let name of names) {
  mylist.innerHTML += `<li>${name}</li>`;
}
