'use strict';

function roll(nbDices = 5){

  let dices = [];
  for (let i = 1; i <= nbDices; i++) {
    dices.push(Math.floor(Math.random() * 6) + 1);
  }

  return dices;
}

function isThreeOfAKing(dices){
  return false;
}

module.exports = { roll, isThreeOfAKing };
