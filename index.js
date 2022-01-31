//define grid positions
let grid = new Array(10);
function formualteGrid() {

    for (i = 0; i < 10; i++) {
        grid[i] = new Array(10);
    }

    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            // console.log(i + " " + j);
            grid[i][j] = 'X';
        }
    }
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
const initialRobotPosition = [5, 5];
function moveRobot(moveSequence = "N W S E") {
    let commandArray = commandStringToArray(moveSequence);
    //validate command sequence
    if (validateCommands(commandArray)) {
        for (i = 0; i < commandArray.length; i++) {
            let nextMove = commandMovement(commandArray[i]);
        }
    } else {
        console.log('Invalid command');
    }
}

function commandMovement(command) {
    switch (command) {
        case N:
            return [-1, 0];
            break;
        case S:
            return [1, 0];
            break;
        case E:
            return [0, 1];
            break;
        case W:
            return [0, -1];
            break;
        default:
        // code block
    }
}


validateCommands();