////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === "rock" || move === "paper" || move === "scissors") {
      console.log("The playerMove passed in is ", move);
    } else {
      getInput();
    }
    var playerMove = move;
    console.log(playerMove);
    return playerMove; // return funtion not working //
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
      if (move === "rock" || move === "paper" || move === "scissors"){
        return move;
      }
    else {
      randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    switch (playerMove) {
       case "rock":
           if (computerMove == "scissors") {
               winner = "player";
           }
           else if (computerMove == "paper") {
               winner = "computer";
           }
           else {
               winner = "tie";
           }
           break;

       case "paper":
           if (computerMove == "rock") {
               winner = "player";
           }
           else if (computerMove == "scissors") {
               winner = "computer";
           }
           else {
               winner = "tie";
           }
           break;

       case "scissors":
           if (computerMove == "rock") {
               winner = "computer";
           }
           else if (computerMove == "paper") {
               winner = "player";
           }
           else {
               winner = "tie";
           }
           break;

       default:
           winner = "tie";
   }
   return winner;
}
function playToFive() {
console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < 5) && (computerWins < 5)) {
          var playerMove = getPlayerMove(getInput());
          console.log("The playerMove is ", playerMove);
          var computerMove = getComputerMove(randomPlay());
          console.log("The computerMove is ", computerMove);    
          var winner = getWinner(playerMove, computerMove);
          if (winner === "player") {
              playerWins += 1;
          } else if (winner === "computer") {
              computerWins += 1;
          }
        
         console.log("Your Score " + playerWins + " point, ALPHABET Scores " + computerWins + " point" + "\n");
      }
  
      if (playerWins === 5) {
          console.log("You win!");
      } else {
        console.log("You lost to ALPHABET!");
          
  }
return [playerWins, computerWins];
}
playToFive();