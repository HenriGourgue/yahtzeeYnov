const {roll} = require('../roll');

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