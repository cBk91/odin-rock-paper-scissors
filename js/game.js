const SCISSORS = "scissors";
const ROCK = "rock";
const PAPER = "paper";
const HUMAN_WINNER = 1;
const COMPUTER_WINNER = 0;
let humanScore = 0;
let computerScore = 0;
const classList = ["flex", "flex_row", "flex_space", "gap_medium"];

const newGame = document.querySelector("#new_game");
const gameMenu = document.querySelector(".game_menu")
const container = document.querySelector("#container");

newGame.addEventListener("click",() => {
    restartScore();
    gameMenu.style.display = "none";
    addScoreSectionToDOM(classList);
});

function restartScore(){
    humanScore = 0;
    computerScore = 0;
}

function addScoreSectionToDOM(divClassList){
    let scoreHeader = document.createElement("h1");
    scoreHeader.textContent = "Score";
    let playerScoreP = document.createElement("p");
    playerScoreP.textContent = `Player: ${humanScore}`;
    let computerScoreP = document.createElement("p");
    computerScoreP.textContent = `Computer: ${computerScore}`;
    let div = document.createElement("div");
    div.appendChild(playerScoreP);
    div.appendChild(computerScoreP);
    for(let element of divClassList)
        div.classList.add(element);
    container.appendChild(scoreHeader);
    container.appendChild(div);

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