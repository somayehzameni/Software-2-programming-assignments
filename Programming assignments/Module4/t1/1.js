"use strict";
const mylist = document.querySelector("#target");
mylist.innerHTML += `<li>First item</li>`;
mylist.innerHTML += `<li>Second item</li>`;
mylist.innerHTML += `<li>Third item</li>`;
mylist.className = "my-list";
