let playerScore = 0
let computerScore = 0
let winner = ""
// COMPUTER MOVE
function playRound(playerMove, computerMove){
    if(playerMove === computerMove){
        winner = "its a tie"
    } else if (
        (playerMove == "rock" && computerMove == "scissors") ||
        (playerMove == "paper" && computerMove == "rock") ||
        (playerMove == "scissors" && computerMove == "paper") 
    ) {
        playerScore++
        winner = "player"
    } else {
        computerScore++
        winner = "computer"
    }
    updateScoreMessages(winner, playerMove, computerMove)
}



function computerMove(){
    let choices = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber]
}


const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")
const pScore = document.querySelector(".pScore")
const cScore = document.querySelector(".cScore")
const resultMessage = document.querySelector(".resultMessage")
const scoreMessage = document.querySelector(".scoreMessage")
const pSign = document.querySelector(".pSign")
const cSign = document.querySelector(".cSign")

rockBtn.addEventListener("click", ()=>{
    handleClick("rock")
})
paperBtn.addEventListener("click", ()=>{
    handleClick("paper")
})
scissorsBtn.addEventListener("click", ()=>{
    handleClick("scissors")
})

function isGameOver(){
    return (playerScore === 5 || computerScore == 5)
}

function handleClick(playerMove){
    if(isGameOver()){
        openEndGameModal()
        if(playerScore == 5){
            document.querySelector(".modalMessage").textContent = "YOU WON CONGRATS!"
        } else {
            document.querySelector(".modalMessage").textContent = "COMPUTER WON BLNT!"

        }
        return
    } 
    let computerSelection = computerMove()
    playRound(playerMove, computerSelection)

}

function openEndGameModal(){
    document.getElementById("modal").classList.add("active")
}


function updateScoreMessages (winner, playerMove, computerMove){
    if (winner == "player"){
        resultMessage.textContent = "YOU WON"
        scoreMessage.textContent = `Players: ${playerMove} beats Computers: ${computerMove}`

        
    } else if (winner == "computer"){
        resultMessage.textContent = "COMPUTER WON"
        scoreMessage.textContent = `Computers: ${computerMove} beats Players: ${playerMove}`
    } else {
        resultMessage.textContent = "IT's A TIE"
        scoreMessage.textContent = `${playerMove} and ${computerMove} are same`
    }
    pScore.textContent = playerScore
    cScore.textContent = computerScore
    switch(playerMove){
        case "rock":
            pSign.textContent = "✊"
            break
        case "paper":
            pSign.textContent = "✋"
            break
        case "scissors":
            pSign.textContent = "✌"
            break
    }
    switch(computerMove){
        case "rock":
            cSign.textContent = "✊"
            break
        case "paper":
            cSign.textContent = "✋"
            break
        case "scissors":
            cSign.textContent = "✌"
            break
    }
}
const modal = document.getElementById("modalBtn")

modal.addEventListener("click", restart)
function restart(){
    playerScore = 0
    computerScore = 0
    winner = ""
    document.getElementById("modal").classList.remove("active")
    pSign.textContent = "?"
    cSign.textContent = "?"
    scoreMessage.textContent = "Choose Your Wepon"
    resultMessage.textContent = "First To Score 5 Wins"

}