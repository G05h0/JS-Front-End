function solve (numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        numbers.push(numbers.shift());
    }

    console.log(numbers.join(' '));
}

function solve (numbers, rotations) {
    while (rotations === 0) {
        numbers.push(numbers.shift());
        rotations--;
    }
    console.log(numbers.join(' '));
}

solve ([51, 47, 32, 61, 21], 2)