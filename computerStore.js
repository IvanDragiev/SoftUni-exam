function computerStore(input) {
    let totalPrice = 0;
    let discount = input.pop();
    let discountedPrice = 0;
    let totalPriceWithTaxes = 0;
    let taxes = 0;

    if (input.length === 0){
        console.log("Invalid order!");
        return;
    }

    for (let i = 0; i < input.length; i++) {
        let currentPrice = Number(input[i]);
        if (currentPrice > 0) {
            totalPrice += currentPrice;
        } else {
            console.log("Invalid price!");
        }
    }
    totalPriceWithTaxes = totalPrice * 1.2;
    if (discount === "special") {
        discountedPrice = totalPriceWithTaxes * 0.9;
    }
    taxes = totalPriceWithTaxes - totalPrice;

    if (totalPrice > 0) {
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPrice.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------`);
        if (discount === "special") {
            console.log(`Total price: ${discountedPrice.toFixed(2)}$`);
        } else if (discount === "regular") {
            console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
        }
    } else if (totalPrice === 0){
        console.log("Invalid order!");
    }
}
computerStore([
    "0", 'regular'
    ]);
    
