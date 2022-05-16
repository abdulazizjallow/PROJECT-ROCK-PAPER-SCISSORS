'use strict'
const choice = ['rock', 'paper', 'scissors'];

const computerPlay = function (chioce) {
    return choice[Math.floor(Math.random()*choice.length)];
}
console.log(computerPlay())