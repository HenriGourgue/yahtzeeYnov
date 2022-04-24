'use strict';
const {roll} = require('./roll');
const {getScore} = require('./score');

const score = getScore(roll());

var finalScore = 0;

for (let combination in score){
    if(score[combination] != null){
        console.log('You got a ', combination + ' - ' + score[combination]);
        finalScore += score[combination];
    }
}

console.log('Your final score is ', finalScore);
