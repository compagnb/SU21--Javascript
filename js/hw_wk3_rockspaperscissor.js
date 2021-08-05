// Function to hide start div and show end div
var startContainer = document.getElementById('startcontainer');
var btn = document.querySelector("#startbutton");

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    // Add timeout with length matching animation-duration
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700);
});

function hideEndContainerShowWinner() {
    var gamecontainer = document.querySelector(".gamecontainer");
    var bottomcontainer = document.getElementById('bottomcontainer');
    gamecontainer.style.opacity = 0;
    gamecontainer.style.transform = 'scale(0)';
    gamecontainer.style.display = 'none';
    bottomcontainer.style.display = 'block';
}


//Game Starts Here!
//Global Variables

var playerScore = 0;
var computerScore = 0;
var gamesPlayed = 0;

document.addEventListener("click", gameSelectionListener);

function gameSelectionListener(event){
    var element = event.target;
    console.log(event.target);

    var rock = "rock";
    var paper = "paper";
    var scissors = "scissors";

    if(element.classList.contains("gameselection") && element.id ===("rockdiv")){
        playRound(rock);
        console.log("rock submitted");
    }else if(element.classList.contains("gameselectiontext") && element.id === ("rockselection")){
        playRound(rock);
        console.log("rock submitted");
    }else if(element.classList.contains("selection") && element.id === ("rockimg")){
        playRound(rock);
        console.log("rock submitted");
    }else if (element.classList.contains("gameselection") && element.id ===("paperdiv")){
        playRound(paper);
        console.log("paper submitted");
    }
    // homework finish paper, and complete scissors




}


function computerPlay(){
    randomGameValue = Math.floor(Math.random() * 3);
    if(randomGameValue == "0"){
        return "rock";
    }else if(randomGameValue == "1"){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection){
    console.log(playerSelection);

    const computerSelection  = computerPlay();
    const rockSelected = document.querySelector("#rockdiv");
    const scissorsSelected = document.querySelector("#scissorsdiv");
    const paperSelected = document.querySelector("#paperdiv");
    const computerRockSelected = document.querySelector("#computerrockdiv");
    const computerScissorsSelected = document.querySelector("#computerscissorsdiv");
    const computerPaperSelected = document.querySelector("#computerpaperdiv");

    if(computerSelection == "rock"){
        computerRockSelected.style.backgroundColor = "#7987e9";
        computerScissorsSelected.style.backgroundColor = "white";
        computerPaperSelected.style.backgroundColor = "white";
    }else if(computerSelection == "paper"){
        computerRockSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
        computerPaperSelected.style.backgroundColor = "#7987e9";
    }else if(computerSelection == "scissors"){
        computerRockSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "#7987e9";
        computerPaperSelected.style.backgroundColor = "white";
    }

    var playerSelectionString = String(playerSelection);
    var playerSelectionLowercase = playerSelectionString.toLowerCase();

    if(playerSelectionLowercase === "rock"){
        rockSelected.style.backgroundColor = "#fc5868";
        paperSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
        if (computerSelection === "rock"){
            console.log("Tied!!");
        }else if(computerSelection === "paper"){
            console.log("Computer Wins!");
        }else if(computerSelection === "scissors"){
            console.log("Players Wins!");
        }
    }else if(playerSelectionLowercase === "paper"){

    }else if(playerSelectionLowercase === "scissors"){
        
    }


}

