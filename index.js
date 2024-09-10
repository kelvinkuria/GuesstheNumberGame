function guessTheNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = null;
    while(true){
let input = prompt("Guess no from 1-100( click cancel to quit)")
if (input === null){
    alert("Game exited")
    break;
}    
guess= parseInt(input);




      if (isNaN(guess)) {
        alert("Please enter a valid number.");
      } else if (guess < randomNumber) {
        alert("Too low! Try again.");
      } else if (guess > randomNumber) {
        alert("Too high! Try again.");
      } else {
        alert("Congratulations! You guessed the correct number.");
        break;
      }
    }
  }
  
  guessTheNumber();
  