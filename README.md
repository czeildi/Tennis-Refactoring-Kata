## Tennis Refactoring Kata

The three most important files in this repository:

- `javascript/TennisGame.js`: code for main program
- `javascript/TennisTest.js`: code for testing main program
- `javascript/TennisTest.html`: visualizing test runs for main program

First step: 

```
git clone https://github.com/techtabor/Tennis-Refactoring-Kata.git
```

Then:

- open `javascript/TennisTest.js` in your browser
- modify `javascript/TennisGame.js`
- refresh your browser after every modification (`Ctrl + r` in Chrome on Windows)

You find a correctly working program in `javascript/TennisGame.js` which prints the current status of a Tennis game according to its rules.

The goal is to make the code cleaner (more readable, more elegant) while keeping the same functionality. You can check this by passing all existing tests. This process is called *refactoring*.

Mainly you should modify the internals of the `TennisGame.prototype.getScore` function. You can also add new functions or modify the `TennisGame` class, but do NOT modify the tests or other functions.

Work in pairs using one laptop.

Work in small steps so that you can reach a working state at all times under 1 minute.

---------------------------------------------

### Summary of the rules (not necessary for refactoring)

1. A game is won by the first player to have won at least 4 points in total and at least 2 points more than the opponent.
2. The running score of each game is described in a manner peculiar to tennis: scores from 0 to 3 points are described as "Love", "Fifteen", "Thirty", and "Forty" respectively.
3. If at least 3 points have been scored by each player, and the scores are equal, the score is "Deuce".
4. If at least 3 points have been scored by each side and a player has one more point than his opponent, the score of the game is "Advantage" for the player in the lead.


-----------------------------------------

Forked from `emilybache/Tennis-Refactoring-Kata`.