function theHuntingGame(input) {
    let adventureDays = Number(input.shift())
    let playersCount = Number(input.shift())
    let groupEnergy = Number(input.shift())
    let waterPerDay = Number(input.shift())
    let foodPerDay = Number(input.shift())
    let totalWater = adventureDays * playersCount * waterPerDay;
    let totalFood = adventureDays * playersCount * foodPerDay;
    let energyLeft = groupEnergy;
    let foodLeft = totalFood;
    let waterLeft = totalWater;

    for (let i = 1; i <= input.length; i++) {
        let energyLoss = Number(input[i - 1])
        energyLeft -= energyLoss;
        if (energyLeft <= 0) {
            break;
        }

        if (i % 2 === 0) {
            waterLeft = waterLeft * 0.7;
            energyLeft = energyLeft * 1.05;
        }

        if (i % 3 === 0) {
            foodLeft = foodLeft - foodLeft / playersCount;
            energyLeft = energyLeft * 1.10;
        }
    }
    if (energyLeft > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energyLeft.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${foodLeft.toFixed(2)} food and ${waterLeft.toFixed(2)} water.`);
    }
}
// theHuntingGame(["10",
//     "7",
//     "5035.5",
//     "11.3",
//     "7.2",
//     "942.3",
//     "500.57",
//     "520.68",
//     "540.87",
//     "505.99",
//     "630.3",
//     "784.20",
//     "321.21",
//     "456.8",
//     "330"]);

theHuntingGame(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"]);
