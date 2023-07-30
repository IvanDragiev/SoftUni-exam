function treasureHunt(input) {
    let initialLoot = input.shift().split("|");
    let currentCommand = input.shift();
    let chest = [];

    while (currentCommand !== "Yohoho!") {
        let tokens = currentCommand.split(" ");
        let action = tokens.shift();
        switch (action) {
            case "Loot":
                for (let el of tokens) {
                    if (initialLoot.includes(el)) {
                        continue;
                    }
                    chest.unshift(el);
                }
                break;
            case "Drop":
                let index = Number(tokens[0]);
                if (index < 0 || index > initialLoot.length - 1) {
                    currentCommand = input.shift()
                    continue;
                }
                let el = initialLoot.splice(index, 1);
                chest.push(el);
                break;
            case "Loot":
                break;
        }
        
        currentCommand = input.shift();
    }
    console.log(chest.join(" "));
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);
