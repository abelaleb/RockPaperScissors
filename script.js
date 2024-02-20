//create a getcomputerchoice funciton to play as a computer 
//create 
let getComputerChoice = function(){
    let computerChoice = ["rock", "paper", "scissors"];
    no = Math.floor(Math.random()*3);
    answer = computerChoice[no];
    console.log(answer);
}
