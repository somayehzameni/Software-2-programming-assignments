"use stric";
function even(array) {
  let myarray = [];
  for (let i of array) {
    if (i % 2 == 0) {
      myarray.push(i);
    }
  }
  return myarray;
}
let myarray = [1, 2, 5, 8, 9];
console.log("The firs arry:", myarray);
let myresult = even(myarray);
console.log("The even array:", myresult);
