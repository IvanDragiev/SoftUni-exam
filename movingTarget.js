function movingTarget(input) {
    const targets = input.shift().split(" ").map(Number);
    let currentLine = input.shift();

    while (currentLine != "End") {
        let lineArgs = currentLine.split(" ");
        let command = lineArgs[0];
        let index = Number(lineArgs[1]);
        let power = Number(lineArgs[2]);

        switch (command) {
            case "Shoot":
                if (targets[index]) {
                    targets[index] -= power;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case "Add":
                if (targets[index]) {
                    targets.splice(index, 0, power);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                const radius = power;
                const lowerIndex = index - radius;
                const upperIndex = index + radius;
                if (targets[lowerIndex] && targets[upperIndex]) {
                    targets.splice(lowerIndex, radius * 2 + 1)
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
        currentLine = input.shift();
    }
    console.log(targets.join("|"));

}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
