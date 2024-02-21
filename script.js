//create a getcomputerchoice funciton to play as a computer 
let getComputerChoice = function(){
    let computerChoice = ["rock", "paper", "scissors"];
    no = Math.floor(Math.random()*3);
    return computerChoice[no];
}
//create a fucntion that takes two parameters computerSelection and playerSelection.
//And it returns a string that declares the winner or tie of the round like : "You Lose! Paper beats Rock"
//Make you fucntion case insensitive
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "This round is a Tie."
    }
    else if( playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock."}
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors."}
  }
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  let round = playRound(playerSelection, computerSelection)
  console.log(round);
  