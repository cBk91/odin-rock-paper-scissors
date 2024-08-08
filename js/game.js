const SCISSORS = "scissors";
const ROCK = "rock";
const PAPER = "paper";

let humanScore = 0;
let computerScore = 0;

for(let i = 0,humanChoice = 0; i < 5;i++){
    do{
        humanChoice = prompt("Type your choice: ");
    }while(!isHumanChoiceCorrect(humanChoice));
    console.log(playRound(humanChoice,getComputerChoice()));
}

function playRound(humanChoice,computerChoice){
    console.log(`Human: ${humanChoice} PC: ${computerChoice}`);
    if(humanChoice === computerChoice)        
        return "It is a draw!";    
    let result = 0;
    
    switch(humanChoice){
        case "rock":
            result = decideWhoLose(computerChoice,SCISSORS);
            break;

        case "paper":
            result = decideWhoLose(computerChoice,ROCK);
            break;

        case "scissors":
            result = decideWhoLose(computerChoice,PAPER);
            break;
    }
    return result === 1 ?`You win! ${humanChoice} beats ${computerChoice}.`:
    `You lose! ${computerChoice} beats ${humanChoice}.`;        
}

function decideWhoLose(computerChoice,loseChoice){
    if(computerChoice === loseChoice){
        humanScore++;                
        return 1;
        }
    else{        
        computerScore++;
        return 2;    
    }
}

function isHumanChoiceCorrect(choice){
    return choice.toLowerCase() === "rock" || 
    choice.toLowerCase() === "paper" || choice.toLowerCase() ==="scissors";
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
    return choiceSignal(convertStringChoiceToNumber(choice.toLowerCase()));
}
function convertStringChoiceToNumber(choice){
    switch(choice){
        case "rock":return 0;
        case "paper":return 1;
        case "scissors":return 2;
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max) ;
}