const {
    isThreeOfAKind,
    isFourOfAKind,
    isFullHouse,
    isSmallStraigh,
    isLargeStraight,
    isYahtzee,
    isOnes,
    isTwos,
    isThrees,
    isFours,
    isFives
} = require('../combination');

describe('Testing Combinations', () => {
    test('Test Three of a kind', () => {
        expect(isThreeOfAKind([1,2,2,2,5])).toBe(true);
    });
    test('Test not Three of a kind', () => {
        expect(isThreeOfAKind([1,2,4,2,5])).toBe(false);
    });

    test('Test Four of a kind', () => {
        expect(isFourOfAKind([1,2,2,2,2])).toBe(true);
    });
    test('Test not Four of a kind', () => {
        expect(isFourOfAKind([1,2,2,2,5])).toBe(false);
    });

    test('Test Full house', () => {
        expect(isFullHouse([1,1,2,2,2])).toBe(true);
    });
    test('Test not Full house', () => {
        expect(isFullHouse([1,2,3,4,2])).toBe(false);
    });

    test('Test Small straigh', () => {
        expect(isSmallStraigh([3,1,6,4,5])).toBe(true);
    });
    test('Test not Small straigh', () => {
        expect(isSmallStraigh([1,2,3,3,2])).toBe(false);
    });

    test('Test Large straigh', () => {
        expect(isLargeStraight([3,1,2,4,5])).toBe(true);
    });
    test('Test not Large straigh', () => {
        expect(isLargeStraight([1,2,3,3,2])).toBe(false);
    });

    test('Test yahtzee', () => {
        expect(isYahtzee([1,1,1,1,1])).toBe(true);
    });
    test('Test not yahtzee', () => {
        expect(isYahtzee([1,2,3,3,2])).toBe(false);
    });

    test('Has Ones',()=>{
        expect(isOnes([1,2,3,4,5])).toBe(true);
    })
    test('Has not Ones',()=>{
        expect(isOnes([2,2,3,4,5])).toBe(false);
    })

    test('Has Twos',()=>{
        expect(isTwos([1,2,3,4,5])).toBe(true);
    })
    test('Has not Twos',()=>{
        expect(isTwos([1,1,3,4,5])).toBe(false);
    })

});
