'use strict';

function roll(nbDices = 5){

  let dices = [];
  for (let i = 1; i <= nbDices; i++) {
    dices.push(Math.floor(Math.random() * 6) + 1);
  }

  return dices;
}

function isThreeOfAKind(dices){

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
      if(counts[prop] > 2){
        found = true;
      }
  }
  return found;
}

function isFourOfAKind(dices){

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
    if(counts[prop] > 3){
      found = true;
    }
  }
  return found;
}

function isFullHouse() {
  return false;
}

module.exports = { roll, isThreeOfAKind, isFourOfAKind, isFullHouse };
