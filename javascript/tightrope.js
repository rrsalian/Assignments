let position = 0;
let direction = 1;

function moveForward (increment) {
    increment *= direction;
    position += increment;
    return position;
}

function moveBackward (increment){   
    increment *= direction; 
    position -= increment;
    return position;
}

function turnAround() {
    direction = -1;
    return direction;
}

function printLocation() {
    console.log(position);
}

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
moveBackward(4);
printLocation();
