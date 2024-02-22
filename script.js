//create a getcomputerchoice funciton to play as a computer 
let playerSelection, 
    computerSelection;
let getComputerChoice = function(){
    computerSelection = ["Rock", "Paper", "Scissors"];
    no = Math.floor(Math.random()*3);
    return computerSelection[no];
}
//create a fucntion that takes two parameters computerSelection and playerSelection.
//And it returns a string that declares the winner or tie of the round like : "You Lose! Paper beats Rock"
//Make you fucntion case insensitive
function playRound() {
    //prompt the user for choice 
    getComputerChoice();
    playerSelection = prompt("Enter your choice (" + computerSelection[0] + "," + computerSelection[1] + "," + computerSelection[2]+"):");
    //Format playerSelection so choice is interpreted correctly
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection){
        return "This round is a Tie."}

    else if (playerSelection === "paper" && computerSelection == "rock"){
        return "You Win! paper beats rock."}
    else if (playerSelection === "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper."}

    else if( playerSelection === "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock."}
    else if (playerSelection === "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors."}
    
    else if (playerSelection === "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper."}
    else if (playerSelection === "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors."} 
  
  }
  
  
  //New function called playGame() that plays 5 rounds of game and keeps score and reports the winner or loser at the end
  //Use loops to repeat function calls 
  //use prompt to get input from users
  //function playGame(){
    //Declare  Playerpoints and computerPoints variable
    //playRound();
    //let playerPoints = 0,
        //computerPoints = 0;
    
  //}
//playRound();
console.log("Player :",playerSelection);
console.log("Computer :",computerSelection);
