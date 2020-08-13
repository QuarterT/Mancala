/* event listener template
function yo() {
	document.querySelector("#pit1").innerHTML = "pit1";
}

document.querySelector("#pit1").addEventListener("click", yo());
*/

/* 
const pit1 = document.querySelector("#pit");

/*
function p1P4 () {
    if (board[2] < 4){
        if (board[2] === 3) {
            pit4_2();
            sdgagaergsedrhdhs
        }
        else if (board[2] === 2) {
            board[3]++;
            if (board[4] === 0){
            store1 = store1 + board[7];
            } else board[4]++;
        }
        else (board[2] === 1);
            if (board[3] === 0){
                store1 = store1 + board[8];
            } else board[3]++;
    }    
    else if (board[1] > 5) {
         pit5_5;
        if (board[1] === 6){
            board[7]++;
        }
        else if (board[1] === 7) {
            board[7]++;
            board[8]++;
        }
        else if (board[1] === 8) {
            board[7]++;
            board[8]++;
            board[9]++;
        }
        else if (board[1] === 9) {
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
        }
        else if (board[1] === 10) {
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
        }
        else (board[1] === 11);
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            board[0]++;
    }   
    else if (board[1] === 5) {
        pit5_5();
        p1P5();
    }   
    else (board[1] === 0);
     alert("select different pit, this one is empty");
    board[1] = 0;     
    turn++;
};

function pit4_2(){
    board[3]++;
    board[4]++;
}
function pit4_4() {
    pit4_2()
    board[5]++
    store++;















// all state variables
let store1 = 0;
let store2 = 0;
// P# stands for how far from players store
let p1P1 = [1, 1, 1, 1];
let p1P2 = [1, 1, 1, 1];
let p1P3 = [1, 1, 1, 1];
let p1P4 = [1, 1, 1, 1];
let p1P5 = [1, 1, 1, 1];
let p1P6 = [1, 1, 1, 1];
let p2P1 = [1, 1, 1, 1];
let p2P2 = [1, 1, 1, 1];
let p2P3 = [1, 1, 1, 1];
let p2P4 = [1, 1, 1, 1];
let p2P5 = [1, 1, 1, 1];
let p2P6 = [1, 1, 1, 1];
let turn = 0;
//start the game
//listen for click on start button
//reveal board which is a series of buttons, 14 total. 2 large ones, 12 smaller ones. 
//function of listening to clicks on player1 buttons
//function of what to do if pit6 clicked
    if (p1P6.length < 6) {
        if (p1P6.length === 5){
        p1P5.push(1);
        p1P4.push(1);
        p1P3.push(1);
        p1P2.push(1);
            if (p1P1.length === null) {
                store1 = store1 + p2P6.length;
                p2P6 = [];
                }
                else p1P1.push(1);
            }
        else if (p1P6.length === 4){
            p1P5.push(1);
            p1P4.push(1);
            p1P3.push(1);
            if (p1P2.length === null) {
                store1 = store1 + p2P5.length;
                p2P5 = [];
                }
                    else p1P2.push(1);
        }
        else if (p1P6.length === 3){
            p1P5.push(1);
            p1P4.push(1);
            if (p1P3.length === null) {
                store1 = store1 + p2P4.length;
                p2P4 = [];
                }
                    else p1P3.push(1);
        }              
        else if (p1P6.length === 2){
                p1P5.push(1);
                if (p1P4.length === null) {
                    store1 = store1 + p2P3.length;
                    p2P3 = [];
                    }
                    else p1P4.push(1);
        }
        else if (p1P6.length === 1){
            if (p1P5.length === null) {
                store1 = store1 + p2P2.length;
                p2P2 = [];
                }
                else p1P5.push(1);
    }   
    else if (p1P6.length === 6) {
        p1P5.push(1);
        p1P4.push(1);
        p1P3.push(1);
        p1P2.push(1);
        p1P1.push(1);
        store1 ++;
        //make html alert that player 1 gets another turn
        //call player 1 listening function
    }
    else if (p1P6.length === 7) {
        p1P5.push(1);
        p1P4.push(1);
        p1P3.push(1);
        p1P2.push(1);
        p1P1.push(1);
        store1 ++;
        p2P6.push(1);
    }    
p1P6 = []; 
//call player 2 listening function   
		}
}
function pit1Capture(){
    if ((board[0] === 0) && (board[11] !== 0)) {
        store1 = 1 + store1 + board[11];
    } else board[0]++;
}
function pit2Capture(){
    if ((board[1] === 0) && (board[10] !== 0)) {
        store1 = 1 + store1 + board[10];
    } else board[1]++;
}
function pit3Capture(){
    if ((board[2] === 0) && (board[9] !== 0)) {
        store1 = 1 + store1 + board[9];
    } else board[2]++;
}
function pit4Capture(){
    if ((board[3] === 0) && (board[8] !== 0)) {
        store1 = 1 + store1 + board[8];
    } else board[3]++;
}
function pit5Capture(){
    if ((board[4] === 0) && (board[7] !== 0)) {
        store1 = 1 + store1 + board[7];
    } else board[4]++;
}
function pit6Capture(){
    if ((board[5] === 0) && (board[6] !== 0)) {
        store1 = 1 + store1 + board[6];
    } else board[5]++;
}
function pit7Capture(){
    if ((board[6] === 0) && (board[5] !== 0)) {
        store1 = 1 + store1 + board[5];
    } else board[6]++;
}
function pit8Capture(){
    if ((board[7] === 0) && (board[4] !== 0)) {
        store1 = 1 + store1 + board[4];
    } else board[7]++;
}
function pit9Capture(){
    if ((board[8] === 0) && (board[3] !== 0)) {
        store1 = 1 + store1 + board[3];
    } else board[3]++;
}
function pit10Capture(){
    if ((board[9] === 0) && (board[2] !== 0)) {
        store1 = 1 + store1 + board[2];
    } else board[9]++;
}
function pit11Capture(){
    if ((board[10] === 0) && (board[1] !== 0)) {
        store1 = 1 + store1 + board[1];
    } else board[10]++;
}
function pit12Capture(){
    if ((board[11] === 0) && (board[0] !== 0)) {
        store1 = 1 + store1 + board[0];
    } else board[11]++;
}
*/