//create a getcomputerchoice funciton to play as a computer 
let getComputerChoice = function(){
    let computerChoice = ["Rock", "Paper", "Scissors"];
    no = Math.floor(Math.random()*3);
    return computerChoice[no];
}
//create a fucntion that takes two parameters computerSelection and playerSelection.
//And it returns a string that declares the winner or tie of the round like : "You Lose! Paper beats Rock"
//Make you fucntion case insensitive
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return "This round is a Tie."
    }
    else if( playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock."}
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors."}
  }
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log("Player :",playerSelection);
  console.log("Computer :",computerSelection);
  let round = playRound(playerSelection, computerSelection)
  console.log(round);
  