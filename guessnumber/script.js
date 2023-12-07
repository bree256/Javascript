//Random Number Guessing Game:
//Develop a program that generates a random number between 1 and 100.
//Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.
//without using prompt
// Generate a Random Number
function guessNumber(y) {
  let x = Math.floor(Math.random() * 100 + 1);
  console.log(x);
  if (y == x) {
    return `CONGRATULATIONS!YOU'RE CORRECT`;
  } else if (y > x) {
    return `${y} is too high`;
  } else {
    return `${y} is too low`;
  }
}
console.log(guessNumber(50));
