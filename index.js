const robotWarehouse = {
    //define grid positions
    formualteGrid() {
        grid = new Array(10);

        for (x = 0; x < 10; x++) {
            grid[x] = new Array(10);
        }

        for (x = 0; x < 10; x++) {
            for (y = 0; y < 10; y++) {
                // console.log(i + " " + j);
                grid[x][y] = x + " " + y;
            }
        }
        console.log("Warehouse Grid");
        console.log(grid);
        return grid;
    },

    //convert string command to array 
    commandStringToArray(commandString) {
        return commandString.split(" ");
    },

    //validate commands
    validateCommands(commandArray) {
        validCommands = ['N', 'S', 'E', 'W', ' '];
        let validity = false;
        for (i = 0; i < commandArray.length; i++) {
            validity = validCommands.includes(commandArray[i]);
            if (!validity) {
                break;
            }
        }
        return validity;
    },

    //move the robot
    moveRobot(moveSequence = "N W S E W W W", gridPosition = [5, 5]) {
        //set up grid
        let grid = this.formualteGrid();

        //get grid position label for indentification
        let gridPositionLabel = gridPosition[0] + " " + gridPosition[1];

        //convert comman from string to array
        let commandArray = this.commandStringToArray(moveSequence);

        //validate command sequence
        if (this.validateCommands(commandArray)) {
            console.log("Robot Movement on Grid\n");
            console.log("From :: " + gridPosition);
            for (i = 0; i < commandArray.length; i++) {
                //get next move index
                let nextMove = this.commandMovement(commandArray[i]);

                //get current grid position
                let currentPosition = this.getGridIndex(grid, gridPositionLabel)

                //validate grid position
                if (currentPosition[0] === -1 || currentPosition[1] === -1) {
                    console.log('Invalid grid movement')
                    return;
                }

                //move the robot
                currentPosition[0] = currentPosition[0] + nextMove[0];
                currentPosition[1] = currentPosition[1] + nextMove[1];
                gridPositionLabel = currentPosition[0] + " " + currentPosition[1];

                //print the movement
                console.log(commandArray[i] + "    :: " + currentPosition);

            }
        } else {
            console.log('Invalid command');
        }
    },

    getGridIndex(grid, gridPositionLabel) {
        for (x = 0; x < 10; x++) {
            for (y = 0; y < 10; y++) {
                if (grid[x][y] === gridPositionLabel) {
                    return [x, y];
                }
            }
        }
        return [-1, -1];
    },

    commandMovement(command) {
        switch (command) {
            case 'N':
                return [-1, 0];
                break;
            case 'S':
                return [1, 0];
                break;
            case 'E':
                return [0, 1];
                break;
            case 'W':
                return [0, -1];
                break;
            default:
            // code block
        }
    }
}
module.exports = robotWarehouse;

robotWarehouse.moveRobot();