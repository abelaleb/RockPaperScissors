//create a getcomputerchoice funciton to play as a computer.
let playerChoice, computerChoice;
let getComputerChoice = function () {
  computerChoice = ["rock", "paper", "scissors"];
  let no = Math.floor(Math.random() * 3);
  return computerChoice[no];
}; 
let playerPoints = 0,
    computerPoints = 0;
function playGame() {
    while (playerPoints < 3 && computerPoints < 3) {
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
  let computerChoice = getComputerChoice();
  playerChoice = prompt("Enter your choice");
  playerChoice = playerChoice.toLowerCase();
  computerChoice.toLowerCase();
  console.log("Computer Choice : ", computerChoice);
  console.log("Player Choice : ", playerChoice);

  if (playerChoice === computerChoice) {
    return "This round is a Tie.";
  } else if (playerChoice === "paper" && computerChoice == "rock") {
    playerPoints++;
    return "You Win! paper beats rock.";
  } else if (playerChoice === "paper" && computerChoice == "scissors") {
    computerPoints++;
    return "You Lose! Scissors beats Paper.";
  } else if (playerChoice === "rock" && computerChoice == "paper") {
    computerPoints++;
    return "You Lose! Paper beats Rock.";
  } else if (playerChoice === "rock" && computerChoice == "scissors") {
    playerPoints++;
    return "You Win! Rock beats Scissors.";
  } else if (playerChoice === "scissors" && computerChoice == "paper") {
    playerPoints++;
    return "You Win! Scissors beats Paper.";
  } else if (playerChoice === "scissors" && computerChoice == "rock") {
    computerPoints++;
    return "You Lose! Rock beats Scissors.";
  } else {
    return "not any of the above";
  }
}
playGame();
