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
    console.log("Warehouse Grid");
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
function moveRobot(moveSequence = "N W S E W W W", gridPosition = [5, 5]) {
    //set up grid
    formualteGrid();

    //get grid position label for indentification
    let gridPositionLabel = gridPosition[0] + " " + gridPosition[1];

    //convert comman from string to array
    let commandArray = commandStringToArray(moveSequence);

    //validate command sequence
    if (validateCommands(commandArray)) {
        console.log("Robot Movement on Grid\n");
        console.log("From :: " + gridPosition);
        for (i = 0; i < commandArray.length; i++) {
            //get next move index
            let nextMove = commandMovement(commandArray[i]);

            //get current grid position
            let currentPosition = getGridIndex(gridPositionLabel)

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