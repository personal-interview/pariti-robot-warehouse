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
    console.log(grid);
}

const validCommands = ['N', 'S', 'E', 'W', ' '];
function validateCommands(commandString = "N S Y E") {
    let commandArray = commandString.split(" ");
    let validity = false;
    for (i = 0; i < commandArray.length; i++) {
        validity = validCommands.includes(commandArray[i]);
        if (!validity) {
            break;
        }
    }
    return validity;
}

const initialRobotPosition = [5, 5];

validateCommands();