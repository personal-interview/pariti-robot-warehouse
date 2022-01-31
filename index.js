//define grid positions
let grid = new Array(10);
function formualteGrid() {

    for (x = 0; x < 10; x++) {
        grid[x] = new Array(10);
    }

    for (x = 0; x < 10; x++) {
        for (y = 0; y < 10; y++) {
            // console.log(i + " " + j);
            grid[x][y] = x + " " + y;
        }
    }
    console.log(grid);
}

//convert string command to array 
function commandStringToArray(commandString) {
    return commandString.split(" ");
}

//validate commands
const validCommands = ['N', 'S', 'E', 'W', ' '];
function validateCommands(commandArray) {
    let validity = false;
    for (i = 0; i < commandArray.length; i++) {
        validity = validCommands.includes(commandArray[i]);
        if (!validity) {
            break;
        }
    }
    return validity;
}

//move the robot
function moveRobot(moveSequence = "N W S E", gridPosition = [5, 5]) {
    formualteGrid();
    let gridPositionLabel = gridPosition[0] + " " + gridPosition[1];
    console.log(gridPositionLabel);
    let commandArray = commandStringToArray(moveSequence);
    //validate command sequence
    console.log(commandArray)
    if (validateCommands(commandArray)) {
        for (i = 0; i < commandArray.length; i++) {
            let nextMove = commandMovement(commandArray[i]);
            // gridPosition
            let currentPosition = getGridIndex(gridPositionLabel)
            console.log(currentPosition);
            //move the robot
            currentPosition[0] = currentPosition[0] + nextMove[0];
            currentPosition[1] = currentPosition[1] + nextMove[1];
            gridPositionLabel = currentPosition[0] + " " + currentPosition[1];

        }
    } else {
        console.log('Invalid command');
    }
}

function getGridIndex(gridPositionLabel) {
    for (x = 0; x < 10; x++) {
        for (y = 0; y < 10; y++) {
            if (grid[x][y] === gridPositionLabel) {
                return [x, y];
            }
        }
    }
    return [-1, -1];
}

function commandMovement(command) {
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


moveRobot();