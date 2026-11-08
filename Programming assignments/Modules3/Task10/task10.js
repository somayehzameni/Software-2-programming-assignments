"use stric";
let numberofcandidates = +prompt("Enter the number of candidates: ");
let array = [];
for (let i = 1; i <= numberofcandidates; i++) {
  let nameofcondidates = prompt("Enter the name of candidate: ");
  var object = { name: nameofcondidates, vote: 0 };
  array.push(object);
}
let numberofvoter = +prompt("Enter the number of voter: ");
for (let i = 1; i <= numberofvoter; i++) {
  let voterchoice = prompt("Enter the name of condidate:");
  for (let object of array) {
    if (object.name == voterchoice) {
      object.vote++;
    }
  }
}
let sortedarray = array.sort((a, b) => a.vote - b.vote);
console.log(
  "The winner is ",
  sortedarray[sortedarray.length - 1].name,
  "with",
  sortedarray[sortedarray.length - 1].vote,
  "votes",
);
console.log("Results: ");
let reversearray = array.sort((a, b) => b.vote - a.vote);
for (let i of reversearray) {
  console.log(`${i.name} : ${i.vote} votes`);
}
