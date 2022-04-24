const {getScore} = require('../score');

describe('Testing score',() => {
    test('get score for [1,1,1,1,1]',() => {
        expect(getScore([1,1,1,1,1])).toMatchObject({
            ones: 5,
            twos: null,
            threes: null,
            fours: null,
            fives: null,
            threeOfKind: 5,
            fourOfKind: 5,
            fullHouse: null,
            smallStraight: null,
            largeStraight: null,
            chance: 5,
            yahtzee: 50
        })
    })
})
