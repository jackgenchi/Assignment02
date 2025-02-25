function coinFlip() {
    //alert("This application is a coin flip game.");
    let choice = prompt("Choose \"Heads\" or \"Tails\" (omit parenthesis in your answer)");
    let randomNum = Math.round(Math.random()); //results rounds to either 0 or 1.
    //tails = 1 || heads = 0
    if (choice === "Heads") {
        if(randomNum === 1) {
            alert("The flip was tails but you chose heads...you lose!");
        }
        else {
            alert("The flip was heads and you chose heads...you win!");
        }
    }
    else if (choice === "Tails") {
        if(randomNum === 1) {
            alert("The flip was tails and you chose tails...you win!");
        }
        else {
            alert("The flip was heads but you chose tails...you lose!");
        }
    }
    else {
        alert("I'm sorry I didn't understand that. Supported inputs are:\nHeads\nTails")
    }//Could use a do-while loop here for inputs and maybe an escape input.
    //alert("Math.random number: "+ randomNum);
    document.write("Thank you for using the application");
}

coinFlip();

