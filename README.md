# Pipes Puzzle

This project was created by React, Redux and Typescript. You can play it on [Pipes Puzzle Game](https://nilou.daneshvar.me).

## How to lunch

To install it right away, in the project directory type:

    npm install
    npm start

Then open your browser on your `http://localhost:3000`

## Level passwords

Level 1 password is: JustWarmingUp

## Design decisions

* Using Redux store to save moves
* Empty Redux store after every validating
* Define Tile component as a state less one becase there are many tiles in higher levels and uses lots of memory.
* Made the Board as a component to render after data is loaded and expand based on levels.

## Limitations

* If user doesn't complete the game and presses Verify Button, the verify result will always be ruined.
* When user refreshes the browser tab, game will be started from the beginig.
* In mobile small screens only level 1st accessible.
* No movement restrictions are considered. Therefore, If user moves exceed more than 1MB data, the verify result will be ruined and user should start again.
* For upper levels, tiles become tiny and user is not able to rotate them.

