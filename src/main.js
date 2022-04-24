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

function isFullHouse(dices) {
  let foundDouble = false,
      foundTriple = false,
      counts = {};

  for(let i=0; i < dices.length; i++){
    if (counts[dices[i]]){
      counts[dices[i]] += 1
    } else {
      counts[dices[i]] = 1
    }
  }
  for (let prop in counts){
    if(counts[prop] === 2){
      foundDouble = true;
    }
    if(counts[prop] === 3){
      foundTriple = true;
    }
  }
  return foundDouble && foundTriple;
}

function isSmallStraigh(dices){

  var tmp;

  //Sort dices array
  for(var i=0; i <= dices.length; i -= -1){
    for(var j=dices.length - 1; j >= i+1; j--){
      if(dices[j] < dices[i]){
        tmp = dices[i];
        dices[i] = dices[j];
        dices[j] = tmp;
      }
    }
  }

  var result = true;
  var starting = 0;
  
  //Maybe got a straight starting at index 0
  if(dices[i+1] == dices[i] + 1){
    starting = 0;
  } 
  //Maybe got a straight starting at index 1
  else {
    starting = 1;
  }

  //Evaluating straigh
  for(var k=starting; k < starting + 3; k -= -1){
    if(!(dices[k] === dices[k+1] - 1)){
      result = false;
      break;
    }
  }

  return result;
}

module.exports = { roll, isThreeOfAKind, isFourOfAKind, isFullHouse, isSmallStraigh };
