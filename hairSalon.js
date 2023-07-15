// for (let currentDay = 1; currentDay < input.length; currentDay++) {

//     let todayWin = 0;
//     let todayLose = 0;
//     let todayIncome = 0;
//     while (currentDay !== "Finish") {
//         if (currentDay === "win") {
//             todayIncome += 20;
//             todayWin++;
//         } else if (currentDay === "lose") {
//             todayLose++;
//         }
//         currentDay = input[index++];

//     }
function hairSalon(input) {
    let index = 0;
    let goalMoney = Number(input[index]);
    index++;
    let service = input[index];
    let priceForService = 0;
    let priceForColor = 0;
    let sum = 0;

    for (let currentService = 0; currentService < input.length; currentService++) {
        currentService = input[index];
        
        while (currentService !== "closed") {
            let mensPrice = 15;
            let ladiesPrice = 20;
            let kidsPrice = 10;
            let touchUpPrice = 20;
            let fullColorPrice = 30;
            
            
            if (currentService === "haircut") {
                let typeService = input[index];
                if (typeService === "mens") {
                    sum += mensPrice;
                } else if (typeService === "ladies") {
                    sum += ladiesPrice;
                } else if (typeService === "kids") {
                    sum += kidsPrice;
                }    
            } else if (currentService === "color") {
                let typeOfColor = input[index];
                if (typeOfColor === "touch up") {
                    sum += touchUpPrice;
                } else if (typeOfColor === "full color") {
                    sum += fullColorPrice;
                }
            }
            if (sum >= goalMoney) {
                break;
            }
            currentService = input[index];
            index++;
        }
        if (sum >= goalMoney) {
            console.log(`You have reached your target for the day!`);
        } else if ( sum < goalMoney) {
            let moneyNeeded = goalMoney - sum;
            console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
        }
        console.log(`Earned money: ${sum}lv.`);
    }
    goalMoney = input[index];
    index++;
}

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])

