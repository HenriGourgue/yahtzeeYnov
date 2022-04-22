'use strict';

function roll(nbDices = 5){

  let dices = [];
  for (let i = 1; i <= nbDices; i++) {
    dices.push(Math.floor(Math.random() * 6) + 1);
  }

  return dices;
}

function isThreeOfAKing(dices){

  let found = false;

  let counts = {}

  for(let i=0; i < dices.length; i++){
    if (counts[dices[i]]){
      counts[dices[i]] += 1
    } else {
      counts[dices[i]] = 1
    }
  }
  for (let prop in counts){
      console.log(prop + " counted: " + counts[prop] + " times.")
      if(counts[prop] > 2){
        found = true;
      }
  }
  return found;
}

function isFourOfAKing(dices){

  return true;
}

module.exports = { roll, isThreeOfAKing, isFourOfAKing };
