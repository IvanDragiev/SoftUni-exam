function friendListMaintenance(input) {
    let friendList = input.shift().split(", ");
    let commands = input.slice();
    let currentLine = commands.shift();
    let blacklistCount = 0;
    let errorCount = 0;
    
    while (currentLine != "Report") {
        let lineArgs = currentLine.split(" ");
        let command = lineArgs[0];
        let firstArgument = lineArgs[1];
        let secondArgument = lineArgs[2];

        switch (command) {
            case "Blacklist":
                if (friendList.includes(firstArgument)) {
                    let nameIndex = friendList.indexOf(firstArgument);
                    friendList.splice(nameIndex, 1, "Blacklisted")
                    console.log(`${firstArgument} was blacklisted.`);
                    blacklistCount++;
                } else {
                    console.log(`${firstArgument} was not found.`);
                }
                break;
            case "Error":
               firstArgument = Number(lineArgs[1]);
                for (let i = 0; i < friendList.length; i++) {
                    let currentName = friendList[i];
                    if (firstArgument === i && currentName !== "Blacklisted" && currentName !== "Lost") {
                        friendList.splice(i, 1, "Lost");
                        console.log(`${currentName} was lost due to an error.`);
                        errorCount++;
                    } 
                }
                break;
            case "Change":
                firstArgument = Number(lineArgs[1]);
                for (let i = 0; i < friendList.length; i++) {
                    let currentName = friendList[i];
                    if (firstArgument === i ) {
                        friendList.splice(firstArgument, 1, secondArgument);
                        console.log(`${currentName} changed his username to ${secondArgument}.`);
                    } 
                }
                break;

            default:
                break;
        }

        currentLine = commands.shift();
    }

    console.log(`Blacklisted names: ${blacklistCount}`);
    console.log(`Lost names: ${errorCount}`);
    console.log(friendList.join(" "));
}
// friendListMaintenance(["Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"]);

    // friendListMaintenance(["Mike, John, Eddie, William",
    // "Error 3",
    // "Error 3",
    // "Change 0 Mike123",
    // "Report"])
    
    friendListMaintenance(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])
    

