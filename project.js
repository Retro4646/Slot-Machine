
const prompt = require("prompt-sync")();

const deposite = () => {
    while (true) {
    const depositeAmount = prompt("Enter the deposite Amount: ");
    const numberDepositeAmount = parseFloat(depositeAmount);

    if (isNaN(numberDepositeAmount) || numberDepositeAmount <= 0 ){
        console.log("Invaild deposite amount.Try Again !")
        } else {
            return numberDepositeAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const Lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberLines= parseFloat(Lines);
    
        if (isNaN(numberLines) || numberLines <= 0 || numberLines > 3){
            console.log("Invaild number of lines.Try Again !")
            } else {
                return numberLines;
            }
        }
}

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines ){
            console.log("Invaild Bet. try Again. ");
        } else {
            return numberBet;
        }
    }
};



let balance = deposite();
const numberLines = getNumberOfLines();
const bet = getBet(balance, numberLines);