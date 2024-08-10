const SCISSORS = "scissors";
const ROCK = "rock";
const PAPER = "paper";
const HUMAN_WINNER = 1;
const COMPUTER_WINNER = 0;
let humanScore = 0;
let computerScore = 0;

for(let i = 0,humanChoice = 0; i < 5;i++){
    do{
        humanChoice = prompt("Type your choice: ");
    }while(!isHumanChoiceCorrect(humanChoice));
    console.log(playRound(humanChoice,getComputerChoice()));
    console.log(`Score\n Player: ${humanScore} PC: ${computerScore}`)
}

function playRound(humanChoice,computerChoice){
    console.log(`Human: ${humanChoice} PC: ${computerChoice}`);
    if(humanChoice === computerChoice)        
        return "It is a draw!";    
    let result = 0;
    
    switch(humanChoice){
        case "rock":
            result = getRoundWinner(computerChoice,SCISSORS);
            break;

        case "paper":
            result = getRoundWinner(computerChoice,ROCK);
            break;

        case "scissors":
            result = getRoundWinner(computerChoice,PAPER);
            break;
    }
    return result === HUMAN_WINNER ?`You win! ${humanChoice} beats ${computerChoice}.`:
    `You lose! ${computerChoice} beats ${humanChoice}.`;        
}


function getRoundWinner(computerChoice,loseChoice){
    if(computerChoice === loseChoice){
        humanScore++;                
        return HUMAN_WINNER;
        }
    else{        
        computerScore++;
        return COMPUTER_WINNER;    
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