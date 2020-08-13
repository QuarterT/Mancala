/* P = player, p# = pit number
p1P1 = board[0]; p2P12 = board[11]
p1p2 = board[1]; p2P11 = board[10]
p1P3 = board[2]; p2P10 = board[9];
p1P4 = board[3]; p2P9 = board[8];
p1P5 = board[4]; p2P8 = board[7];
p1P6 = board[5]; p2P7 = board[6];
*/
let turn = 1;
let store1 = 0;
let store2 = 0;
let board = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
let pit1 = document.querySelector("#pit1");
let pit2 = document.querySelector("#pit2");
let pit3 = document.querySelector("#pit3");
let pit4 = document.querySelector("#pit4");
let pit5 = document.querySelector("#pit5");
let pit6 = document.querySelector("#pit6");
let pit7 = document.querySelector("#pit7");
let pit8 = document.querySelector("#pit8");
let pit9 = document.querySelector("#pit9");
let pit10 = document.querySelector("#pit10");
let pit11 = document.querySelector("#pit11");
let pit12 = document.querySelector("#pit12");

function play() {
    turn = 1;
    store1 = 0;
    store2 = 0;
    board = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
}
function winnerIsWho () {
    if (store1 > store2) {
        h3.insertAdjacentHTML(afterEnd,"Player 1 Wins");
        } 
    else if (store2 > store1) {
        h3.insertAdjacentHTML(afterEnd,"Player 2 Wins");
            }
    else h3.insertAdjacentHTML(afterEnd,"No one Wins");
}
function endTurn() {
    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
    turn++;
    } 
    else winnerIsWho();  
} 
function aroundTheBoard1() {
    board[6]++;
    board[7]++;
    board[8]++;
    board[9]++;
    board[10]++;
    board[11]++;
}
function aroundTheBoard2(){
    board[1]++;
    board[1]++;
    board[2]++;
    board[3]++;
    board[4]++;
    board[5]++;
}
function player1Options () {
        pit1.addEventListener("click, a");
        pit2.addEventListener("click, b");    
        pit3.addEventListener("click, c");  
        pit4.addEventListener("click, d");  
        pit5.addEventListener("click, e");  
        pit6.addEventListener("click, f");  
}    
function player2Options () {
        pit6.addEventListener("click, g");  
        pit7.addEventListener("click, h");  
        pit8.addEventListener("click, i");  
        pit9.addEventListener("click, j");  
        pit10.addEventListener("click, k");  
        pit11.addEventListener("click, l");  
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
function visualBeanNumber() {
    document.querySelector("#pit1").innerHTML = ${board[0]};
    document.querySelector("#pit2").innerHTML = ${board[1]};
    document.querySelector("#pit3").innerHTML = ${board[2]};
    document.querySelector("#pit4").innerHTML = ${board[3]};
    document.querySelector("#pit5").innerHTML = ${board[4]};
    document.querySelector("#pit6").innerHTML = ${board[5]};
    document.querySelector("#pit7").innerHTML = ${board[6]};
    document.querySelector("#pit8").innerHTML = ${board[7]};
    document.querySelector("#pit9").innerHTML = ${board[8]};
    document.querySelector("#pit10").innerHTML = ${board[9]};
    document.querySelector("#pit11").innerHTML = ${board[10]};
    document.querySelector("#pit12").innerHTML = ${board[11]};
} 
function game () {
    if ((turn % 2) !== 0){
        player1Options();
    } 
    else player2Options(); 
    visualBeanNumber();
    endTurn();    
}  
        
document.querySelector("#pit1").addEventListener("click", play);        