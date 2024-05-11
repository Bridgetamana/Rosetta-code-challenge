function getFinalOpenedDoors(numDoors) {
    let doors = [];

    for (let i = 1; i <= numDoors; i++) {
        for (let a = i - 1; a < numDoors; a += i) {
            doors[a] = !doors[a];
        }
    }

    let openDoors = [];
    for (let i = 0; i < doors.length; i++) {
        if (doors[i]) {
            openDoors.push(i + 1);
        }
    }

    return openDoors;
}

console.log(getFinalOpenedDoors(100));
