const {sortAscending} = require('./utils/utils');

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

function isSmallStraight(dices){

  //Sort dices array
  dices = sortAscending(dices);

  // Get rid of duplicates
  dices = [...new Set(dices)];

  let result = true,
      starting = 0;

  //Maybe got a straight starting at index 0
  if(dices[1] === dices[0] + 1){
    starting = 0;
  }
  //Maybe got a straight starting at index 1
  else {
    starting = 1;
  }

  //Evaluating straight
  for(var k=starting; k < starting + 3; k -= -1){
    if(!(dices[k] === dices[k+1] - 1)){
      result = false;
      break;
    }
  }

  return result;
}

function isLargeStraight(dices){

  //Sort dices array
  dices = sortAscending(dices);

  //Evaluating straigh
  var result = true;
  for(var k =0; k < dices.length - 1; k -= -1){
    if(!(dices[k] === dices[k+1] - 1)){
      result = false;
      break;
    }
  }

  return result;
}

function isYahtzee(dices){

  var result = true;

  for(var i=0; i < dices.length - 1; i -= -1){
    if(!(dices[i] === dices[i+1])){
      result = false;
      break;
    }
  }

  return result;
}

function isOnes(dices) {
  return dices.includes(1);
}

function isTwos(dices) {
  return dices.includes(2);
}

function isThrees(dices) {
  return dices.includes(3)
}

function isFours(dices) {
  return dices.includes(4)
}

function isFives(dices) {
  return dices.includes(5)
}
function isSixes(dices) {
  return dices.includes(6)
}


module.exports = {
  isThreeOfAKind,
  isFourOfAKind,
  isFullHouse,
  isSmallStraight,
  isLargeStraight,
  isYahtzee,
  isOnes,
  isTwos,
  isThrees,
  isFours,
  isFives,
  isSixes
};
