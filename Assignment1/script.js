//Create a function that checks if the input/parameter is an even number.
function isEven(number) {
  return number % 2 === 0;
}
let number = 20;
const isTwentyEven = isEven(number);
console.log(isEven(20));

//Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter
function numbers(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    console.log(i);
  }
}
numbers(1, 20);

//Create a function that sums the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.

function calcFuncBetween(x, y) {
  let Sum = 0;
  for (let i = y; i >= x; i--) {
    Sum += i;
  }
  return Sum;
}
console.log(calcFuncBetween(0, 8));
