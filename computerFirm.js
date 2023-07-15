function computerFirm(input) {
    let index = 0;
    let pcCount = Number(input[index]);
    index++;
    let num = input[index];
    index++;
    let sales = 0;
    let averageRating = 0;
    let possibleSales = 0;
    let sum = 0;

    for(let i = 0; i < pcCount; i++) {
             
        let thirdLetter = Number(num[2]);
        averageRating += thirdLetter;
        if (thirdLetter === 2) {
            sales = 0;
        } else if (thirdLetter === 3) {
            sales = 0.5;
        } else if (thirdLetter === 4) {
            sales = 0.7;
        } else if (thirdLetter === 5) {
            sales = 0.85;
        } else if (thirdLetter === 6) {
            sales = 1;
        }

        possibleSales = Math.floor(num / 10);
        
        sum += possibleSales * sales;
    num = input[index];
    index++;
    }
    
    let averageRatingTotal = averageRating / pcCount;

    console.log(sum.toFixed(2));
    console.log(averageRatingTotal.toFixed(2));
    
    
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])

