let startGame = document.querySelector('#start-game');
let activate = document.querySelector('#active-game');
let gameBoard = document.querySelector('#game-board');
let message = document.querySelector('#message');
let activeName = document.querySelector('#active-player-name');
let get = document.querySelector('#number2');
let gameOver = document.querySelector('#game-over');
let winner = document.querySelector('#winner-name');
let draw = document.querySelector('#draw');

let activePlayer = 1;

function start() {

    if (name1.textContent !== 'PLAYER NAME' && name2.textContent !== 'PLAYER NAME') {
        message.textContent = '';
        activate.style.display = "block";
    } else {
        message.textContent = "Please select your names before continuing!";
    }
            // activate.style.display = "block";
            // gameOver.style.display = "block";
}

gameBoard.addEventListener('click', (e) => {
    if (activePlayer == 1 && e.target.id !== 'game-board'
        && e.target.classList != 'disabled'){
    // console.log("Player 1");
    // console.log(e);
    
    name1.textContent =  players[activePlayer-1].name

    //gets the ID of the clicked element
    let get = document.querySelector("#" +  e.target.id);
    //Sets the content of the clicked element to X
    get.textContent = "X"
    activeName.textContent = name1.textContent;
    console.log(activeName.innerHTML);
    console.log(activeName.innerHTML);
    
    get.classList.add('disabled');


    let row = get.dataset.row - 1
    console.log(row);
    
    let col = get.dataset.col - 1
    console.log(col);

    gameData[row][col] = 1;
    console.log(gameData);
    
    checkforGameOver(row, col);
    // switch to player 2
    activePlayer = 2;

}
else if (activePlayer == 2 && e.target.id !== 'game-board' 
    && e.target.classList != 'disabled'){
console.log("Player 2");
name2.textContent =  players[activePlayer-1].name
console.log("This is setting it" + players[activePlayer-1].name)

let get = document.querySelector("#" +  e.target.id);
    
    get.textContent = "O"
    //can also do:
    //get.textContent = players[activePlayer - 1].symbol
    get.classList.add('disabled');
    activeName.textContent = name2.textContent;
    // can also do:
    // activeName.textContent = players[activePlayer - 1].name

    let row = get.dataset.row - 1
    console.log(row);
    
    let col = get.dataset.col - 1
    console.log(col);
    gameData[row][col] = 2;
    console.log(gameData);
    // switch to player 1
    activePlayer = 1;
    
    checkforGameOver(row, col)
    }
})


function checkforGameOver(row, col) {
 let index = 0;
 

    // Checks for a win in the horiozontal rows
    if (gameData[row][col] > 0 && 
        gameData[row][0] === gameData[row][1] && 
        gameData[row][1] === gameData[row][2]) {
            
        let num = gameData[row][col]-1; 
        // winner.textContent = players[gameData[row][col]-1].name;
        gameIsOver(num);
        return gameData[row][col];

    // Checks for a win in the vertical cols
    }else if(gameData[row][col] > 0 && 
             gameData[0][col] === gameData[1][col] && 
             gameData[1][col] === gameData[2][col])
        {
            let num = gameData[row][col]-1;  
        winner.textContent = players[gameData[row][col]-1].name;
        gameIsOver(num);
        
        return gameData[row][col];
    // Checks for a win in the diagonal rows
    } else if (gameData[1][1] > 0 &&
     (
        (gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) ||
        (gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0])
    ) 
){
        let num = gameData[row][col]-1;  
        gameIsOver(num);
        return gameData[row][col];
}
    else {
        //check for draw
        if (currentRound === 9) {
        draw.textContent = "It's a Draw!";
        winner.textContent = '';   
        gameOver.style.display = "block"; 
        }
    }
    currentRound++;
    console.log(currentRound);
    return 0;
}

function gameIsOver(num) {
            gameOver.style.display = "block";         
            // Reads the player name from the players array (using the index) and displays it in the game over message
            winner.textContent = players[num].name;   
            //removes the start button once game starts
            //it will only appear again if it is resetSS
            startGame.style.display = "none"; 

}

function reset() {
    location.reload();
}

function restart() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
        }
        currentRound = 1;
        message.textContent = '';
    }
    activePlayer = 1;
    for (let i = 1; i < 10; i++) {
    let cells = document.querySelector("#number" +  i);   
    cells.textContent = '';
    cells.classList.remove('disabled')
    gameOver.style.display = "none"; 
    }
}

// function gameIsOver(row, col) {



