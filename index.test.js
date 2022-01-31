const app = require('./index')

describe('robotWarehouse', () => {
    describe('validateCommands', () => {
        it('should return true if all the commands are valid', () => {
            const validCommands = ['N', 'S', 'E', 'W'];
            const response = app.validateCommands(validCommands);
            expect(response).toBe(true);
        })
    });
});