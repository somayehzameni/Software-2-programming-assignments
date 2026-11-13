"use strict";
const mylist = document.querySelector("#target");
const item1 = document.createElement("li");
const text1 = document.createTextNode("First item");
item1.appendChild(text1);
const item2 = document.createElement("li");
const text2 = document.createTextNode("Second item");
item2.appendChild(text2);
const item3 = document.createElement("li");
const text3 = document.createTextNode("Third item");
item3.appendChild(text3);
mylist.appendChild(item1);
mylist.appendChild(item2);
mylist.appendChild(item3);

item3.className = "my-item";
