const {
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
    isFives
} = require('./combination');

function getScore(dices) {
    let score = {
        ones: null,
        twos: null,
        threes: null,
        fours: null,
        fives: null,
        threeOfKind: null,
        fourOfKind: null,
        fullHouse: null,
        smallStraight: null,
        largeStraight: null,
        chance: null,
        yahtzee: null
    }

    if (isOnes(dices)) {
        let ones = dices.filter(dice => dice === 1)
        score.ones = getArraySum(ones,1);
    }

    if (isTwos(dices)) {
        let twos = dices.filter(dice => dice === 2)
        score.twos = getArraySum(twos,2);
    }

    if (isThrees(dices)) {
        let threes = dices.filter(dice => dice === 3)
        score.threes = getArraySum(threes,3);
    }

    if (isFours(dices)) {
        let fours = dices.filter(dice => dice === 4)
        score.fours = getArraySum(fours,4);
    }

    if (isFives(dices)) {
        let fives = dices.filter(dice => dice === 5)
        score.fives = getArraySum(fives,5);
    }

    if (isThreeOfAKind(dices)) {
        score.threeOfKind = getArraySum(dices);
    }

    if (isFourOfAKind(dices)) {
        score.fourOfKind = getArraySum(dices);
    }

    if (isFullHouse(dices)) {
        score.fullHouse = 25;
    }

    if (isSmallStraight(dices)) {
        score.smallStraight = 30;
    }

    if (isLargeStraight(dices)) {
        score.largeStraight = 40;
    }

    if(isYahtzee(dices)) {
        score.yahtzee = 50;
    }

    score.chance = getArraySum(dices);

    return score;
}

function getArraySum(array,searchedValue = undefined) {
    if (searchedValue) return array.length * searchedValue;
    let score = 0;
    for (let i = 0; i < array.length;i++){
        score += array[i];
    }
    return score;
}

module.exports = { getScore };
