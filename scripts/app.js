// const express = require('express');  //1st
// const app = express(); //2nd

// const ejs = require('ejs');

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.set('view engine', 'ejs');

// app.get("/index", (req, res) => {
//     res.render("index");
//   });

const playerConfigOverlay = document.getElementById("modal")
const backdropElement = document.getElementById("backdrop")

const editPlayerO1 = document.getElementById ("edit-player-1");
const editPlayerO2 = document.getElementById ("edit-player-2");
const resetGame = document.getElementById ("reset");
const restartGame = document.getElementById ("restart");

//NOTE: No parentheses added here! We DO NOT want to execute it straight away!
editPlayerO1.addEventListener("click", openPlayerConfig);
editPlayerO2.addEventListener("click", openPlayerConfig);

cancel.addEventListener("click", closeConfig);

startGame.addEventListener('click', start);
resetGame.addEventListener('click', reset);
restartGame.addEventListener('click', restart);

currentRound = 1;
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// let activePlayer = 0;
// let currentRound = 1;
// let gameIsOver = false;

// const gameBoardElement = document.getElementById("game-board");
// const activePlayerNameElement = document.getElementById("active-player-name");

const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    }
];

// function resetGameStatus() {
//     activePlayer = 0;
//     currentRound = 1;
//     gameIsOver = false;
//     gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
//     gameOverElement.style.display = "none";
// }
