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

function play(){
    turn = 1;
    store1 = 0;
    store2 = 0;
    board = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
}