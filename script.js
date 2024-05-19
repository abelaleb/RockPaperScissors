//create a getcomputerchoice funciton to play as a computer.
const resultDiv = document.getElementById("answer");
let playerChoice, computerChoice;
let getComputerChoice = function () {
  computerChoice = ["rock", "paper", "scissors"];
  let no = Math.floor(Math.random() * 3);
  return computerChoice[no];
};
let playerPoints = 0,
  computerPoints = 0;
let result;
let results = [];
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    result = `This round is a Tie. Computer's point: ${computerPoints} Player's point: ${playerPoints}`;
    results.push(result);
  } else if (playerChoice === "paper" && computerChoice == "rock") {
    playerPoints++;
    result = `You Win! paper beats rock. Computer's point: ${computerPoints} Player's point: ${playerPoints}`;
    results.push(result);
  } else if (playerChoice === "paper" && computerChoice == "scissors") {
    computerPoints++;
    result = `You Lose! Scissors beats Paper. 
    
    Computer's point: ${computerPoints} Player's point: ${playerPoints}`;
    results.push(result);
  } else if (playerChoice === "rock" && computerChoice == "paper") {
    computerPoints++;
    result = `You Lose! Paper beats Rock. 
    
    Computer's point: ${computerPoints} Player's point: ${playerPoints}`;
    results.push(result);
  } else if (playerChoice === "rock" && computerChoice == "scissors") {
    playerPoints++;
    result = `You Win! Rock beats Scissors. 
    Computer's point ${computerPoints} Player's point: ${playerPoints}`;
    results.push(result);
  } else if (playerChoice === "scissors" && computerChoice == "paper") {
    playerPoints++;
    result = `You Win! Scissors beats Paper. Computer's point: ${computerPoints} Player's point: ${playerPoints}`;
    results.push(result);
  } else if (playerChoice === "scissors" && computerChoice == "rock") {
    computerPoints++;
    result = `You Lose! Rock beats Scissors.Computer's point: ${computerPoints} Player's point: ${playerPoints}`;
    results.push(result);
  } else {
    result = `Not any of the above. Computer's point: ${computerPoints} Player's point: ${playerPoints}`;
    results.push(result);
  }
  declareWinner();
  resultDiv.innerHTML = results.join(`<br>`);
  return;
}
function declareWinner() {
  if (playerPoints === 3) {
    results.push("CONGRATS! YOU WON!!!");
    button1.setAttribute("disabled", "");
    button2.setAttribute("disabled", "");
    button3.setAttribute("disabled", "");
    //Disable the rock,paper and scissors buttons forcing the player to reload the game
  } else if (computerPoints === 3) {
    results.push("OOPS! YOU LOST!!!");
    button1.setAttribute("disabled", "");
    button2.setAttribute("disabled", "");
    button3.setAttribute("disabled", "");
  }
}
const body = document.querySelector("body");
const button1 = document.getElementById("rock");
button1.addEventListener("click", () => playRound("rock"));
const button2 = document.getElementById("paper");
button2.addEventListener("click", () => playRound("paper"));
const button3 = document.getElementById("scissors");
button3.addEventListener("click", () => playRound("scissors"));
const reloadButton = document.getElementById("reload");
reloadButton.addEventListener("click", function () {
  window.location.reload();
});
body.append(button1, button2, button3, reloadButton);
