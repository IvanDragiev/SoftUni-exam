function schoolLibrary(input) {
    let shelfOfBooks = input.shift().split("&");
    let commands = input.slice()
    let currentLine = commands.shift();

    while (currentLine != "Done") {
        let lineArgs = currentLine.split(" | ");
        let command = lineArgs[0];
        let firstArgument = lineArgs[1];
        let secondArgument = lineArgs[2];

        switch (command) {
            case "Add Book":
                if (!shelfOfBooks.includes(firstArgument)) {
                    shelfOfBooks.unshift(firstArgument)
                }

                break;
            case "Take Book":
                if (shelfOfBooks.includes(firstArgument)) {
                    let bookIndex = shelfOfBooks.indexOf(firstArgument);
                    shelfOfBooks.splice(bookIndex, 1)
                }
                break;
            case "Swap Books":
                if (shelfOfBooks.includes(firstArgument) && shelfOfBooks.includes(secondArgument)){
                    let firstBookIndex = shelfOfBooks.indexOf(firstArgument);
                    let secondBookIndex = shelfOfBooks.indexOf(secondArgument);
                    shelfOfBooks.splice(firstBookIndex, 1, secondArgument);
                    shelfOfBooks.splice(secondBookIndex, 1, firstArgument);
                    
                }

                break;
            case "Insert Book":
                if (!shelfOfBooks.includes(firstArgument)) {
                    shelfOfBooks.push(firstArgument)
                }
                break;
            case "Check Book":
                firstArgument = Number(lineArgs[1]);
                for (let i = 0; i < shelfOfBooks.length; i++) {
                    let currentBook = shelfOfBooks[i];
                    if (firstArgument === i) {
                        console.log(currentBook);
                    }
                }
                break;

            default:
                break;
        }

        currentLine = commands.shift();

    }
    console.log(shelfOfBooks.join(", "));

}
// schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
//     "Add Book | Ulysses",
//     "Take Book | Don Quixote",
//     "Insert Book | Alice's Adventures in Wonderland",
//     "Done"]);

// schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
// "Check Book | 2",
// "Swap Books | Don Quixote | Ulysses",
// "Done"])

schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"])
