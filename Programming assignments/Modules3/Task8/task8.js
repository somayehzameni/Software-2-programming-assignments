"use stric";
function concat(array) {
  let result = "";
  for (let i of array) {
    result = result + i;
  }
  return result;
}
myarray = ["Somayeh", "Zahra", "Ali"];
myresult = concat(myarray);
document.querySelector("#target5").innerHTML = `${myresult}`;
