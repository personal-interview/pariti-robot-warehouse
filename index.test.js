const app = require('./index')

describe('robotWarehouse', () => {
    describe('validateCommands', () => {
        it('should return true if all the commands are valid', () => {
            const validCommands = ['N', 'S', 'E', 'W'];
            const response = app.validateCommands(validCommands);
            expect(response).toBe(true);
        }),
            it('should return false in case we have an invalid commands', () => {
                const validCommands = ['N', 'S', 'EW', 'W'];
                const response = app.validateCommands(validCommands);
                expect(response).toBe(false);
            })
    });
});