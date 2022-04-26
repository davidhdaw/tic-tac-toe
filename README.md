# Tic-Tac-Toe

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Deployment Link](#deployment-link)
- [Features](#features)
- [Reflection](#reflection)
- [Future Features](#future-features)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
Since the dawn of time mankind has wanted to get three in a row in a three by three grid. Today this dream, long thought impossible, is finally a reality with **Tic-Tac-Toe**!

Tic-Tac-Toe is a website that allows you and a friend (or enemy?) to take turns filling in cells in a 3 by 3 grid until one of you gets three spaces in a row horizontally, vertically or diagonally. If all spaces are filled without a winner the game resets itself giving you both another chance at fulfilling mankind's ultimate fantasy.

### Technologies
- JavaScript
- HTML
- CSS

### Set Up
1.  Clone this [repository](https://github.com/davidhdaw/tic-tac-toe).
2. `cd` into the directory.
3. Run `open index.html`.

### Features
- User can click a cell in the game to select their square.
- Once selected the square fills with their symbol and it becomes the other player's turn.
![Example of taking a square](/assets/example1.gif)
- If a player selects a square that's already occupied nothing happens.
![Example of trying to take an occupied square](/assets/example2.gif)
- If a player gets three in a row:
1. A winner is declared.
2. The winner count for that player increases by 1.
3. The game board disappears for a short period and then reappears cleared for a new game.
4. The losing player gets the first choice in the new game.
![Example of a game win.](/assets/example3.gif)
- If there's a tie:
1. The tie is declared.
2. The game board disappears for a short period and then reappears cleared for a new game.
3. The player who did not choose the last square of the previous game gets the first choice in the new game.
![Example of a tied game.](/assets/example4.gif)
- Webpage has local storage feature to keep track of wins even after reload.
![Example of local storage](/assets/example5.gif)

### Reflection
- I added a few features like changing background colors that I had not experimented with before but this project was largely implementing concepts I had already learned in a new context.
- I honestly found it difficult to not get a bit lost during this project. There were no particularly difficult technical challenges but the lack of teammates or clear goal posts meant it was hard to keep track of exactly where I was in the project. I often found myself tunneling in on a small problem for too long or forgetting to do regular/atomic commits without some external check-in. In the future when working on open ended solo projects like this I need to do much more thorough planning and documentation up front.


### Future Features
- AI control for Player 2.
- Tie-breaker game of Rock Paper Scissors.
- Ability for players to pick their own tokens for play.
- Further design work.

### Contributors
- [David Daw](https://github.com/davidhdaw)

### Project Specifications
- Project specs are located [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html).
