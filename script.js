//create a getcomputerchoice funciton to play as a computer.
let playerSelection, computerSelection;
let getComputerChoice = function () {
  computerSelection = ["rock", "paper", "scissors"];
  let no = Math.floor(Math.random() * 3);
  return computerSelection[no];
};

//New function called playGame() that plays 5 rounds of game and keeps score and reports the winner or loser at the end.
//Use loops to repeat function calls.
//use prompt to get input from users.
function playGame() {
  //create a function that takes two parameters computerSelection and playerSelection.
  //And it returns a string that declares the winner or tie of the round like : "You Lose! Paper beats Rock".
  //Make you fucntion case insensitive.
  let playerPoints = 0,
    computerPoints = 0;

  //Declare  Playerpoints and computerPoints variable.
    let results;
  //Create a while loop to run  preset the number of rounds
  while (playerPoints < 3 && computerPoints < 3) {
    results = playRound();

    let resultText = results.slice(0,8)
    
    if (resultText == "You Win!") {
        playerPoints++;
    } else if (resultText == "You Lose"){
        computerPoints++;
    }
    console.log("player Points", playerPoints, "computer", computerPoints)
  }
  if (playerPoints === 3) {
    console.log("You Win!");
  } else {
    console.log("You Lose!");
  }
}

function playRound() {
  //prompt the user for choice
  let computerSelection = getComputerChoice();

  playerSelection = prompt("Enter your choice");
  //Format playerSelection so choice is interpreted correctly
  playerSelection = playerSelection.toLowerCase();
  computerSelection.toLowerCase();
  console.log("comp selection", computerSelection);
  console.log("player selection", playerSelection);

let winner;
let text;

  if (playerSelection === computerSelection) {
    return "This round is a Tie.";
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    return "You Win! paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper.";
  } else if (playerSelection === "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors.";
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper.";
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors.";
  } else {
    return "not any of the above";
  }
}

playGame();
console.log("Player :", playerSelection);
console.log("Computer :", computerSelection);
