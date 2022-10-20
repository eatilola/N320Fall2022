let p1= document.getElementById("player1");
let p2 = document.getElementById("player2");
let resetButton = document.getElementById("resetButton");

var playerRed = "R";
var playerYellow = "Y";
let p1Score = 0;
let p2Score = 0;

var currPlayer = playerRed;
var currColumns;

var columns = 7;
var rows = 6;

var gameOver = false;

var gameCount = 0;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [];

    currColumns = [5,5,5,5,5,5,5]

    for(let r =0; r< rows; r++){
        let row =[];
        for(let c= 0; c<columns; c++){
            row.push(' ');

            // <div id= "0-0" class = "tile"> </div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece(){
    if(gameOver){
        return;
    }

    let coords = this.id.split("-"); // "0-0" = ["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currColumns[c];
    if(r < 0){
        return;
    }

    board[r][c] = currPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if(currPlayer == playerRed){
        tile.classList.add("red-piece");
        gameCount++;
        currPlayer = playerYellow;
    }
    else{
        tile.classList.add("yellow-piece");
        gameCount++;
        currPlayer = playerRed;
        
    }
    r -=1; //updating the row height for the column
    currColumns[c] = r; //update the array
    
    checkTie();
    checkWinner();
    

}

function checkWinner(){
    //horizontal check
    for(let r = 0; r< rows; r++){
        for(let c = 0; c < columns - 3; c++){
            if(board[r][c] != ' '){
               if((board[r][c] == board[r][c+1]) && (board[r][c+1] == board[r][c+2]) && (board[r][c+2] == board[r][c+3])){
                    setWinner(r,c);
                    return;
                } 
            }
            
        }
    }

    //Vertical Check
    for(let c = 0; c < columns; c++){
        for(let r = 0; r < rows - 3; r++){
            if(board[r][c] != ' '){
                if((board[r][c] == board[r+1][c]) && (board[r+1][c] == board[r+2][c]) && (board[r+2][c] == board[r+3][c])){
                    setWinner(r,c);
                    return;
                } 
             }
        }
    }

    //Anti-Diagonal check
    for(let r = 0; r < rows -3; r++){
        for(let c = 0; c < columns-3; c++){
            if(board[r][c] != ' '){
                if((board[r][c] == board[r+1][c+1]) && (board[r+1][c+1] == board[r+2][c+2]) && (board[r+2][c+2] == board[r+3][c+3])){
                    setWinner(r,c);
                    return;
                } 
            }
        }
    }

    //Diagonal check
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns-3; c++){
            if(board[r][c] != ' '){
                if((board[r][c] == board[r-1][c+1]) && (board[r-1][c+1] == board[r-2][c+2]) && (board[r-2][c+2] == board[r-3][c+3])){
                    setWinner(r,c);
                    return;
                } 
            }
        }
    }
}

function setWinner(r,c){
    let winner = document.getElementById("winner");




    if(board[r][c] == playerRed){
        p1Score = p1Score + 1;
        winner.innerHTML = "Red Wins!";
        TweenMax.from(winner, {duration:3, x:-2000});
        TweenMax.from(winner, {duration:3, opacity: 0});
        //p1.innerHTML = "Player 1: " + p1Score;
        resetButton.style.display = "flex";
        TweenMax.from(resetButton, {duration:3, opacity: 0});
    }
    else{
        p2Score = p2Score +1 ;
        winner.innerHTML = "Yellow Wins!"
        TweenMax.from(winner, {duration:3, x:-2000});
        //p2.innerHTML = "Player 2: " + p2Score;
        resetButton.style.display = "flex";
        TweenMax.from(resetButton, {duration:3, opacity: 0});
    }

    gameOver = true;
}


function checkTie(){
    if(gameCount >=42){
        gameOver = true;
        winner.innerHTML = "Tie!"
        TweenMax.from(winner, {duration:3, x:-2000});
        resetButton.style.display = "flex";
        TweenMax.from(resetButton, {duration:3, opacity: 0});
    }

}
function resetGame(){
    console.log("reset game");
    location.reload();

    // let winner = document.getElementById("winner");

    // for(let r = 0; r < rows; r++){
    //     for(let c = 0; c < columns; c++){
    //         board[r][c] = ' ';
    //     }
    // }

    // winner.innerHTML = "";
    // resetButton.style.display = "none";
}