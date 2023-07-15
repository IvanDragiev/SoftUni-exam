function braceletStand(input) {
    let pocketMoney = Number(input[0]) * 5;
    let earnedMoney = Number(input[1]) * 5;
    let expenses = Number(input[2]);
    let presentPrice = Number(input[3]);

    let totalMoney = (pocketMoney + earnedMoney) - expenses;

    if (totalMoney > presentPrice) {
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else if (presentPrice > totalMoney) {
        let moneyNeeded = presentPrice - totalMoney;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
    }
}
braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"])

