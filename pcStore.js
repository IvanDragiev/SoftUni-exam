function pcStore(input) {
    let index = 0;
    let processorPrice = Number(input[index]) * 1.57;
    index++;
    let videoCardPrice = Number(input[index]) * 1.57;
    index++;
    let ramPrice = Number(input[index]) * 1.57;
    index++;
    let ramCount = Number(input[index]);
    index++;
    let percentDiscount = Number(input[index]);

    let totalCost = (ramCount * ramPrice) + (processorPrice + videoCardPrice - ((processorPrice + videoCardPrice) * percentDiscount));
    console.log(`Money needed - ${totalCost.toFixed(2)} leva.`);

}
pcStore(["500",
    "200",
    "80",
    "2",
    "0.05"])
