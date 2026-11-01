"use stric"
//Tehtävä6:

let anwere = confirm("Should I calculate the square root?");
if (anwere == true) {
  let number1 = +prompt("Enter the number:");
  if (number1 >= 0) {
    let squar = Math.sqrt(number1);
    document.querySelector("#target5").innerHTML =
      `${number1} square root is ${squar}`;
  } else {
    document.querySelector("#target5").innerHTML =
      "The square root of a negative number is not defined";
  }
} else {
  document.querySelector("#target5").innerHTML =
    "The square root is not calculated";
}