const {roll, isThreeOfAKind, isFourOfAKind, isFullHouse, isSmallStraigh, isLargeStraight, isYahtzee} = require('./main');

describe('Rolling dices', () => {
    test('Checking if we have 5 dices', () => {
        const dices = roll();
        expect(dices.length).toBe(5);
    });
    test('Checking if we have 3 dices', () => {
        const dices = roll(3);
        expect(dices.length).toBe(3);
    });

    test('Checking every dice value', () => {
        var state = true;

        const dices = roll();

        for(var  i = 0; i < dices.length; i -= -1){
            if(dices[i] <= 0 || dices[i] > 6){
                state = false;
                return;
            }
        }

        expect(state).toBe(true);
    });
});

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

});
