//create a getcomputerchoice funciton to play as a computer.
let playerChoice, computerChoice;
let getComputerChoice = function () {
  computerChoice = ["rock", "paper", "scissors"];
  let no = Math.floor(Math.random() * 3);
  return computerChoice[no];
};
let playerPoints = 0,
  computerPoints = 0;
/*//Function playGame() that plays 5 rounds of game and keeps score and reports the winner or loser at the end.
function playGame() {
  while (playerPoints < 3 && computerPoints < 3) {
    console.log("player Points", playerPoints, "computer", computerPoints);
  }
  if (playerPoints === 3) {
    console.log("You Win!");
  } else {
    console.log("You Lose!");
  }
}
*/
function playRound() {
  let computerChoice = getComputerChoice(); 
  //prompt the user for choice
  playerChoice = prompt("Enter your choice");
  playerChoice = playerChoice.toLowerCase();
  computerChoice.toLowerCase();
  console.log("computerChoice : ", computerChoice);
  console.log("playerChoice : ", playerChoice);
  if(playerChoice === computerChoice) {
      console.log("This round is a Tie.")
      return "This round is a Tie.";
  } else if (playerChoice === "paper" && computerChoice == "rock") {
    playerPoints++;
    console.log("You Win! paper beats rock.");
    return "You Win! paper beats rock.";
  } else if (playerChoice === "paper" && computerChoice == "scissors") {
    computerPoints++;
    console.log("You Lose! Scissors beats Paper.");
    return "You Lose! Scissors beats Paper.";
  } else if (playerChoice === "rock" && computerChoice == "paper") {
    computerPoints++;
    console.log("You Lose! Paper beats Rock.");
    return "You Lose! Paper beats Rock.";
  } else if (playerChoice === "rock" && computerChoice == "scissors") {
    playerPoints++;
    console.log("You Win! Rock beats Scissors.");
    return "You Win! Rock beats Scissors.";
  } else if (playerChoice === "scissors" && computerChoice == "paper") {
    playerPoints++;
    console.log("You Win! Scissors beats Paper.");
    return "You Win! Scissors beats Paper.";
  } else if (playerChoice === "scissors" && computerChoice == "rock") {
    computerPoints++;
    console.log("You Lose! Rock beats Scissors.");
    return "You Lose! Rock beats Scissors.";
  } else {
    console.log("not any of the above");
    return "not any of the above";
    };
  };
const body = document.querySelector('body');
const button1 = document.createElement('button');
button1.textContent = "Button 1";
button1.addEventListener('click', playRound);
const button2 = document.createElement('button');
button2.addEventListener('click', playRound);
button2.textContent = "Button 2";
const button3 = document.createElement('button');
button3.textContent = "Button 3";
button3.addEventListener('click',playRound);
body.append(button1);
body.append(button2,button3);

//playGame();