function excursionCalculator(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];
    let pricePerPeople = 0;

    switch (season) {
        case "spring":
            if (peopleCount <= 5) {
                pricePerPeople = 50.00;
            } else {
                pricePerPeople = 48.00;
            }

            break;
        case "summer":
            if (peopleCount <= 5) {
                pricePerPeople = 48.50;
            } else {
                pricePerPeople = 45.00;
            }

            break;
        case "autumn":
            if (peopleCount <= 5) {
                pricePerPeople = 60.00;
            } else {
                pricePerPeople = 49.50;
            }

            break;
        case "winter":
            if (peopleCount <= 5) {
                pricePerPeople = 86.00;
            } else {
                pricePerPeople = 85.00;
            }

            break;

        default:
            break;
    }
    let totalPrice = peopleCount * pricePerPeople;
    if (season === "summer") {
        totalPrice = totalPrice * 0.85;
    } else if (season === "winter") {
        totalPrice = totalPrice * 1.08;
    }
    console.log(`${totalPrice.toFixed(2)} leva.`);

}
excursionCalculator(["10",
    "summer"])

