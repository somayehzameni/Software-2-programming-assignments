//we have to get numbers in the function beacause at first when the page is lodede ,the user dont enter the number and the javascrip selection select empty value.

const option = document.querySelector("#operation");
const mainresult = document.querySelector("#result");
const event = document.querySelector("#start");
event.addEventListener("click", main);
function main(e) {
  const firstnumber = Number(document.querySelector("#num1").value);
  const secondnumber = Number(document.querySelector("#num2").value);
  let result = 0;
  if (option.value == "add") {
    result = firstnumber + secondnumber;
  } else if (option.value == "sub") {
    result = firstnumber - secondnumber;
  } else if (option.value == "multi") {
    result = firstnumber * secondnumber;
  } else if (option.value == "div") {
    result = firstnumber / secondnumber;
  }
  mainresult.textContent = result;
}
