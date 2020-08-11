//trying for loop
let store1 = 0;
let store2 = 0;
let beansInHand = 0;
let firstDrop = 0
let chosen = 0;
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

click event =board[?]
beansInHand = board[?]
*/
function moveTheBeans() {
    firstDrop = chosen++;
    while (beansInHand > 0){
        board[firstDrop]++;
        firstDrop++;
        beansInHand--; 
    }
}
function getIdx()
    