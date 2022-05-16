'use strict'
const choice = ['rock', 'paper', 'scissors'];

const computerPlay = function (chioce) {
    return choice[Math.floor(Math.random()*choice.length)];
}

const computerSelection = computerPlay();
const playerSelection = prompt("Please enter your choice: ");