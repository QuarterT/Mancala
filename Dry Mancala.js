//dryer attempt
let board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
/* P = player, p# = pit number
                 store2 = board[13]
p1P6 = board[0]; p2P1 = board[12]
p1p5 = board[1]; p2P2 = board[11]
p1P4 = board[2]; p2P3 = board[10];
p1P3 = board[3]; p2P4 = board[9];
p1P2 = board[4]; p2P5 = board[8];
p1P1 = board[5]; p2P6 = board[7];
store1 = board[6]
*/

p2P4 = board(8);
*/
if (board[0] < 6){
    if (board[0] === 5) {
        pit6_4();
        if (board[5] = 0){
            store1 = store1 + board[6];
        } else board[5]++;
    }
    if (board[0] === 4) {
            board[1]++;
            board[2]++;
            board[3]++;
        if (board[4] = 0){
            store1 = store1 + board[7];
        } else board[4]++;
    }
    if (board[0] === 3) {
        board[1]++;
        board[2]++;
        if (board[3] = 0){
            store1 = store1 + board[8];
        } else board[3]++;
    }
    if (board[0] === 2) {
        board[1]++;
        if (board[2] = 0){
            store1 = store1 + board[9];
        } else board[2]++;
    }
    if (board[0] === 1) {
        if (board[1] = 0){
            store1 = store1 + board[10];
        } else board[2]++;
    }   
}
else if (board[0] > 6) {
    pit6_6();
    if (board[0] === 7) {
        board[7]++;
    }
    else if (board[0] === 8) {
        board[7]++;
        board[8]++;
    }
}
    

else if (board[0] === 6) {
    pit6_6();
}   
else if (board[]= 0{
        //play sad tune 
}

function pit6_4(){
    board[1]++;
    board[2]++;
    board[3]++;
    board[4]++;
}
function pit6_6 {
    pit6_4;
    board[5]++
    store++;
}