
# Slot Machine Game

This is a simple command-line Slot Machine game written in JavaScript. The game simulates a basic slot machine where the user can deposit money, place bets, spin the reels, and win or lose money based on the outcome.


## Features

- Deposit Money: Start the game by depositing an amount.

- Bet on Lines: Choose how many lines (1-3) to bet on.

- Place Bets: Specify the bet amount per line.

- Spin the Slot Machine: Generate random symbols on the reels.

- Check Results: Determine winnings based on matching symbols.

- Manage Balance: Update balance after each spin.

- Play Again Option: Continue playing as long as the user has money.


## How to Run

- Install Node.js: Make sure you have Node.js installed on your system.
- Install ```Prompt-Sync``` This game uses the prompt-sync library for user input. Install it by running the following command:

```bash
  npm install prompt-sync
```
- Run the Script: Save the code in a file (e.g., ```slotMachine.js```) and run it using Node.js:

```bash
  node slotMachine.js
```
    
## Game Logic

- Deposit Money: Users input an amount to start playing.

- Bet and Lines: Users choose how much to bet and how many lines to play.

- Spinning: Symbols are randomly placed on a 3x3 grid.

- Winnings: Players win based on matching symbols on the selected lines.

- Replay: Players can continue as long as they have a positive balance.

## Example Gameplay

```javascript
Enter a deposit amount: 100
You have a balance of $100
Enter the number of lines to bet on (1-3): 3
Enter the bet per line: 10
C | D | B
A | A | A
C | B | B
You won, $50
You have a balance of $120
Do you want to play again (y/n)? n
```

