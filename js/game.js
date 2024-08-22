const SCISSORS = "scissors";
const ROCK = "rock";
const PAPER = "paper";
const HUMAN_WINNER = 1;
const COMPUTER_WINNER = 0;

let score = {
    humanScore: 0,
    computerScore: 0,
    addPointToWinner: function(winner){
        if(winner === 1)
            this.humanScore += 1;
        else
            this.computerScore += 1;
    },
    restartScore: function(){
        this.humanScore = 0;
        this.computerScore = 0;
    },
    updateScore: function(){
        playerScoreP.textContent = `Player: ${this.humanScore}`;
        computerScoreP.textContent = `Computer: ${this.computerScore}`;
    }

};

const classList = ["flex", "flex_row", "flex_space", "gap_medium"];

const newGame = document.querySelector("#new_game");
const gameMenu = document.querySelector(".game_menu")
const container = document.querySelector("#container");
const result = document.createElement("h1");
const playerScoreP = document.createElement("p");
playerScoreP.textContent = `Player: ${score.humanScore}`;
const computerScoreP = document.createElement("p");
computerScoreP.textContent = `Computer: ${score.computerScore}`;
const chooseDiv = createFlexRowDiv(classList);
newGame.addEventListener("click",() => {
    score.restartScore();
    gameMenu.style.display = "none";
    addScoreSectionToDOM();
});


function addScoreSectionToDOM(){
    let scoreHeader = document.createElement("h1");
    scoreHeader.textContent = "Score";    
    let scoreDiv = createFlexRowDiv(classList);
    chooseDiv.appendChild(createChoiceButton("rock"));
    chooseDiv.appendChild(createChoiceButton("paper"));
    chooseDiv.appendChild(createChoiceButton("scissors"));
    scoreDiv.appendChild(playerScoreP);
    scoreDiv.appendChild(computerScoreP);   
    container.appendChild(scoreHeader);
    container.appendChild(scoreDiv);
    container.appendChild(result);
    container.appendChild(chooseDiv);

}
function createChoiceButton(choice){
    let choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("type","submit");
    choiceBtn.textContent = choice;
    choiceBtn.addEventListener("click", (event)=> {       
        result.textContent = playRound(getHumanChoice(choiceBtn.textContent),getComputerChoice());
        score.updateScore();
        getMatchWinner();
    });
    return choiceBtn;
}
function getMatchWinner(){
    if(score.humanScore == 5 || score.computerScore == 5){
       result.textContent = score.humanScore == 5 ? "You win!":"PC master race win!";
        chooseDiv.style.display = 'none';
        

    }
}

function createFlexRowDiv(divClassList){
    let div = document.createElement("div");
    for(let element of divClassList)
        div.classList.add(element);
    return div;
}

function playRound(humanChoice,computerChoice){
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
    score.addPointToWinner(result);    
    return result === HUMAN_WINNER ?`You win! ${humanChoice} beats ${computerChoice}.`:
    `You lose! ${computerChoice} beats ${humanChoice}.`;        
}


function getRoundWinner(computerChoice,loseChoice){
    if(computerChoice === loseChoice){               
        return HUMAN_WINNER;
        }
    else{        
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