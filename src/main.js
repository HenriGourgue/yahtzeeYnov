'use strict';

function roll(){

  const firstDice = Math.floor(Math.random() * 6) + 1;
  const secondDice = Math.floor(Math.random() * 6) + 1;
  const thirdDice = Math.floor(Math.random() * 6) + 1;
  const fourthDice = Math.floor(Math.random() * 6) + 1;
  const fifthDice = Math.floor(Math.random() * 6) + 1;

  const dices = [firstDice, secondDice, thirdDice, fourthDice, fifthDice];

  return dices;
}

module.exports = { roll };