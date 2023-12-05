//Factorial of a non-negative integer is the multiplication of all positive integers smaller than or equal to n.
//For example factorial of 6 is 6*5*4*3*2*1 which is 720.

function calculateFactorial(number) {
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
console.log(calculateFactorial(10));
