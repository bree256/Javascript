//Random Number Guessing Game:
//Develop a program that generates a random number between 1 and 100.
//Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.
//without using prompt

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the guessing game
function guessTheNumber(userInputCallback) {
  // Generate a random number between 1 and 100
  const secretNumber = generateRandomNumber(1, 100);

  // Initialize variables
  let attempts = 0;
  let guessedCorrectly = false;

  console.log("Welcome to the Random Number Guessing Game!");
  console.log("I have chosen a number between 1 and 100. Try to guess it!");

  function getUserInput() {
    userInputCallback((userGuess) => {
      // Increment the number of attempts
      attempts++;

      // Check if the guess is correct
      if (userGuess === secretNumber) {
        guessedCorrectly = true;
        console.log(
          `Congratulations! You guessed the correct number ${secretNumber} in ${attempts} attempts.`
        );
      } else if (userGuess < secretNumber) {
        console.log("Too low! Try again.");
        getUserInput();
      } else {
        console.log("Too high! Try again.");
        getUserInput();
      }
    });
  }

  // Call the function to get user input
  getUserInput();
}
