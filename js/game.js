const SCISSORS = "scissors";
const ROCK = "rock";
const PAPER = "paper";

let humanScore = 0;
let computerScore = 0;



function isHumanChoiceCorrect(choice){
    return choice === "rock" || choice === "paper" || choice ==="scissors";
}


function choiceSignal(choice){
    switch(choice){
        case 0:return ROCK;
        case 1:return PAPER;
        case 2:return SCISSORS;
    }
}

function getComputerChoice(){
    return choiceSignal(getRandomInt(3));
}

function getHumanChoice(choice){
    return choiceSignal(convertStringChoiceInNumber(choice.toLowerCase()));
}
function convertStringChoiceInNumber(choice){
    switch(choice){
        case "rock":return 0;
        case "paper":return 1;
        case "scissors":return 2;
    }
}
function getRandomInt(max){
    return Math.floor(Math.random() * max) ;
}