function uniquePinCodes(input) {
    let firstEndNum = Number(input[0]);
    let secondEndNum = Number(input[1]);
    let thirdEndNum = Number(input[2]);
    let firstStartNum = 1;
    let secondStartNum = 2;
    let thirdStartNum = 1;
    let result = "";

    for (let i = firstStartNum; i <= firstEndNum; i++) {
        if (i % 2 === 0) {
            for (let j = secondStartNum; j <= secondEndNum; j++) {
                let flag = 0;
                for (let q = 2; q < j; q++) {
                    if (j % q == 0) {
                        flag = 1;
                        break;
                    }
                }
                if (j > 1 && flag === 0) {
                    for (let k = thirdStartNum; k <= thirdEndNum; k++) {
                        if (k % 2 === 0) {
                            result = result + i +" " + j + " "+ k + "\n";
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
uniquePinCodes(["3", "5", "5"]);
