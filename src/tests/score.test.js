const {getScore} = require('../score');

describe('Testing score',() => {
    test('get score for [1,1,1,1,1]',() => {
        expect(getScore([1,1,1,1,1])).toMatchObject({
            ones: 5,
            twos: null,
            threes: null,
            fours: null,
            fives: null,
            sixes: null,
            threeOfKind: 5,
            fourOfKind: 5,
            fullHouse: null,
            smallStraight: null,
            largeStraight: null,
            chance: 5,
            yahtzee: 50
        })
    })

    test('get score for [1,1,1,5,5]',() => {
        expect(getScore([1,1,1,5,5])).toMatchObject({
            ones: 3,
            twos: null,
            threes: null,
            fours: null,
            fives: 10,
            sixes: null,
            threeOfKind: 13,
            fourOfKind: null,
            fullHouse: 25,
            smallStraight: null,
            largeStraight: null,
            chance: 13,
            yahtzee: null
        })
    })

    test('get score for [1,2,3,4,2]',() => {
        expect(getScore([1,2,3,4,2])).toMatchObject({
            ones: 1,
            twos: 4,
            threes: 3,
            fours: 4,
            sixes: null,
            fives: null,
            threeOfKind: null,
            fourOfKind: null,
            fullHouse: null,
            smallStraight: 30,
            largeStraight: null,
            chance: 12,
            yahtzee: null
        })
    })
})
