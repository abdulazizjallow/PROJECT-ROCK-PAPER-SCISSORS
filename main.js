'use strict'
const choice = ['rock', 'paper', 'scissors'];

const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('scissors');
let playerScoreEl = document.getElementById('player-score');
let computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementsByClassName('winner-output');
const playAgianBtn = document.querySelector('.play-again');
let outputEl = document.getElementById('output');
let scorePlayer = 0;
let scoreComputer = 0;
    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;


const computerPlay = () => {
    return choice[Math.floor(Math.random() * choice.length)];
}

const checkWinner = function () {
    if (scorePlayer === 5) {
        outputEl.style.color = 'green'
        outputEl.textContent = `you are the winner`
    } else if (scoreComputer === 5) {
        outputEl.style.color = 'red'
        outputEl.textContent = `computer is the winner`
    }
}

rockEl.addEventListener('click', function(computerSelection){
    computerSelection = computerPlay();
    if (scorePlayer < 5 && scoreComputer < 5) {
    if (computerSelection === choice[0]) {
        scorePlayer = scorePlayer;
        scoreComputer = scoreComputer;
       outputEl.textContent = `its a tie`
    } else if (computerSelection === choice[1]) {
        scoreComputer++;
        computerScoreEl.textContent = scoreComputer;
        outputEl.textContent = `you lost paper beats rock!`
    } else if (computerSelection === choice[2]){
        scorePlayer++;
        playerScoreEl.textContent = scorePlayer;
        outputEl.textContent = `you won rock beats scissors`
    }
    return checkWinner();
    }
 });

 paperEl.addEventListener('click', function(computerSelection){
    computerSelection = computerPlay();
    if (scorePlayer < 5 && scoreComputer < 5) {
    if (computerSelection === choice[1]) {
        scorePlayer = scorePlayer;
        scoreComputer = scoreComputer;
       outputEl.textContent = `its a tie`
    } else if (computerSelection === choice[0]) {
        scorePlayer++;
        playerScoreEl.textContent = scorePlayer;
        outputEl.textContent = `you won paper beats rock!`
    } else if (computerSelection === choice[2]){
        scoreComputer++;
        computerScoreEl.textContent = scoreComputer;
        outputEl.textContent = `you lost scissors beats paper!`
    }
    return checkWinner();
    }
 });

 scissorsEl.addEventListener('click', function(computerSelection){
    computerSelection = computerPlay();
    if (scorePlayer < 5 && scoreComputer < 5) {
    if (computerSelection === choice[2]) {
        scorePlayer = scorePlayer;
        scoreComputer = scoreComputer;
       outputEl.textContent = `its a tie`
    } else if (computerSelection === choice[1]) {
        scorePlayer++;
        playerScoreEl.textContent = scorePlayer;
        outputEl.textContent = `you won scissors beats paper!`
    } else if (computerSelection === choice[0]){
        scoreComputer++;
        computerScoreEl.textContent = scoreComputer;
        outputEl.textContent = `you lost rock beats scissors!`
    }
    return checkWinner();
    }
 });

 playAgianBtn.addEventListener('click', function() {
    scorePlayer = 0;
    scoreComputer = 0;
    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    outputEl.style.color = '';
    outputEl.textContent = '';
 })