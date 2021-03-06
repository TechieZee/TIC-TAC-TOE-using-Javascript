/*************************************************************** TIC TAC TOE **********************************************************************/
/*************VAriables Declaration and Div Selection ****************/

const Player1 = "X";
const Player2 = 'O';
let turn = 'X';
let clicks = 0;
let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

/********************* Function to check for winner******************/

function checkForWinner() {
    let win = false;
    /********************** Horizontal Checks  ***********************/
    if (cells[0].textContent === turn && cells[1].textContent === turn && cells[2].textContent === turn) {
        win = true;
    } else if (cells[3].textContent === turn && cells[4].textContent === turn && cells[5].textContent === turn) {
        win = true;
    } else if (cells[6].textContent === turn && cells[7].textContent === turn && cells[8].textContent === turn) {
        win = true;
    }
    /********************** Vertical Checks *************************/
    else if (cells[0].textContent === turn && cells[3].textContent === turn && cells[6].textContent === turn) {
        win = true;
    } else if (cells[1].textContent === turn && cells[4].textContent === turn && cells[7].textContent === turn) {
        win = true;
    } else if (cells[2].textContent === turn && cells[5].textContent === turn && cells[6].textContent === turn) {
        win = true;
    }
    /* Diagonal checks */
    else if (cells[0].textContent === turn && cells[4].textContent === turn && cells[8].textContent === turn) {
        win = true;
    } else if (cells[2].textContent === turn && cells[4].textContent === turn && cells[6].textContent === turn) {
        win = true;
    }
    if (win === true) {
        alert(turn + ' wins');
        setTimeout("location.reload(true);", 10000);  // This will reload the page in given time if any of the player wins the game.
    }
}

/********************* Function to check for Draw ******************/
function checkDraw() {
    if (clicks >= 9) {
        alert(' Draw! ');
        setTimeout("location.reload(true);", 10000); // This will reload the page in given time if the game draws.
    }
}

/********************** Function for checking the clicked cell, swapping chances and calling other functions **********************/
function cellClicked() {
    
    if (event.target.textContent != 'X' && event.target.textContent != 'O') {
        event.target.textContent = turn;
        clicks++;
        checkForWinner();
        if (turn === 'X') {
            turn = 'O';
        } else {
            
            turn = 'X';
        }
        else{
            checkDraw();
        }
    } else {
        alert('Invalid Move!');
    }

}

