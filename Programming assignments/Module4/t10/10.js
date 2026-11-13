const form = document.querySelector("#source");
form.addEventListener("submit", printresult);
function printresult(e) {
  e.preventDefault();
  let firstname = document.querySelector('input[name="firstname"]').value;
  let surename = document.querySelector('input[name="lastname"]').value;
  let target1 = document.querySelector("#target");
  target1.innerHTML = `Your name is ${firstname} ${surename}`;
}
