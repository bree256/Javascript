//Random Number Guessing Game:
//Develop a program that generates a random number between 1 and 100.
//Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.
//without using prompt
// Generate a Random Number

function guessNumber(y) {
  let x = Math.floor(Math.random() * 100 + 1);
  // console.log(x);
  if (y == x) {
    return `CONGRATULATIONS!you guessed the right number, ${x}`;
  } else if (y > x) {
    return `${y} is higher than ${x}`;
  } else {
    return `${y} is too low than ${x}`;
  }
}
console.log(guessNumber(29));
