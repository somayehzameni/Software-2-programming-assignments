"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];
const myfild = document.querySelector("#target");
for (let student of students) {
  var myoption = document.createElement("option");
  myoption.value = student.id;
  var optiontext = document.createTextNode(student.name);
  myoption.appendChild(optiontext);
  myfild.appendChild(myoption);
}
