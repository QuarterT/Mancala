/* visualization of the board
            store2
pit1 = board[0]; pit12 = board[11]
pit2 = board[1]; pit11 = board[10]
pit3 = board[2]; pit10 = board[9];
pit4 = board[3]; pit9 = board[8];
pit5 = board[4]; pit8 = board[7];
pit6 = board[5]; pit7 = board[6];
            store1
*/
let turn = 1;
let winner = false
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
let side1 = board[0] + board[1] + board[2] + board[3] + board[4] + board[5];
let side2 = board[6] + board[7] + board[8] + board[9] + board[10] + board[11];
function play() {
    turn = 1;
    store1 = 0;
    store2 = 0;
    board = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
    document.querySelector("#pits").style.display = "block";
}
function winnerIsWho() {
    if (store1 > store2) {
     document.querySelector("#results").innerHTML = "Player 1 wins";
    } 
   else if (store2 > store1) {
     document.querySelector("#results").innerHTML = "Player 2 wins";

    } else if (store1 === store2){ document.querySelector("#results").innerHTML = "No one wins";
   }
   winner = true;
   document.querySelector("#pits").style.display = "none";
}
function endTurn() {	
 if ((side1 !== 0) && (side2 !== 0)) {
  turn++;
 } else winnerIsWho();
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
    board[0]++;
    board[1]++;
    board[2]++;
    board[3]++;
    board[4]++;
    board[5]++;
}
function pit1Capture(){
        if ((board[0] === 0) && (board[11] !== 0)) {
            store1 = 1 + store1 + board[11];
            board[11] = 0;
        } else board[0]++;
}
function pit2Capture(){
        if ((board[1] === 0) && (board[10] !== 0)) {
            store1 = 1 + store1 + board[10];
            board[10] = 0;
        } else board[1]++;
}
function pit3Capture(){
        if ((board[2] === 0) && (board[9] !== 0)) {
            store1 = 1 + store1 + board[9];
            board[9] = 0;
        } else board[2]++;
}
function pit4Capture(){
        if ((board[3] === 0) && (board[8] !== 0)) {
            store1 = 1 + store1 + board[8];
            board[8] = 0;
        } else board[3]++;
}
function pit5Capture(){
        if ((board[4] === 0) && (board[7] !== 0)) {
            store1 = 1 + store1 + board[7];
            board[7] = 0;
        } else board[4]++;
}
function pit6Capture(){
        if ((board[5] === 0) && (board[6] !== 0)) {
            store1 = 1 + store1 + board[6];
            board[6] = 0;
        } else board[5]++;
}
function pit7Capture(){
        if ((board[6] === 0) && (board[5] !== 0)) {
            store1 = 1 + store1 + board[5];
            board[5] = 0;
        } else board[6]++;
}
function pit8Capture(){
        if ((board[7] === 0) && (board[4] !== 0)) {
            store1 = 1 + store1 + board[4];
            board[4] = 0;
        } else board[4]++;
}
function pit9Capture(){
        if ((board[8] === 0) && (board[3] !== 0)) {
            store1 = 1 + store1 + board[3];
            board[3] = 0;
        } else board[3]++;
}
function pit10Capture(){
        if ((board[9] === 0) && (board[2] !== 0)) {
            store1 = 1 + store1 + board[2];
            board[2] = 0;
        } else board[9]++;
}
function pit11Capture(){
        if ((board[10] === 0) && (board[1] !== 0)) {
            store1 = 1 + store1 + board[1];
            board[1] = 0;
        } else board[10]++;
}
function pit12Capture(){
        if ((board[11] === 0) && (board[0] !== 0)) {
            store1 = 1 + store1 + board[0];
            board[0] = 0;
        } else board[11]++;
}
function visualBeanNumber() {
    document.querySelector("#pit1").innerHTML = board[0];
    document.querySelector("#pit2").innerHTML = board[1];
    document.querySelector("#pit3").innerHTML = board[2];
    document.querySelector("#pit4").innerHTML = board[3];
    document.querySelector("#pit5").innerHTML = board[4];
    document.querySelector("#pit6").innerHTML = board[5];
    document.querySelector("#pit7").innerHTML = board[6];
    document.querySelector("#pit8").innerHTML = board[7];
    document.querySelector("#pit9").innerHTML = board[8];
    document.querySelector("#pit10").innerHTML = board[9];
    document.querySelector("#pit11").innerHTML = board[10];
    document.querySelector("#pit12").innerHTML = board[11];
    document.querySelector("#store1").innerHTML = store1;
    document.querySelector("#store2").innerHTML = store2;	
} 
function pit1Potentials(){    
    switch (board[0]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit2Capture();
            break;
        case 2: 
            board[1]++;
            pit3Capture();
            break;
        case 3: 
            board[1]++;
            board[2]++;
            pit4Capture();
            break;
        case 4: 
            board[1]++;
            board[2]++;
            board[3]++;
            pit5Capture();
            break;
        case 5: 
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            pit6Capture();
            break;
        case 6: 
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            break;
        case 7: 
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            break;
        case 8:
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            break;
        case 9: 
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            break;
        case 10: 
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            break;
        case 11:
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            break;
        case 12:
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
    }
    board[0] = 0;
    visualBeanNumber();
}
function pit2Potentials() {
    switch (board[1]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit3Capture();
            break;
        case 2:
            board[2]++;
            pit4Capture();
            break;
        case 3:
            board[2]++;
            board[3]++;
            pit5Capture();
            break;
        case 4:
            board[2]++;
            board[3]++;
            board[4]++;
            pit6Capture();
            break;
        case 5:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            break;
        case 6:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            break;
        case 7:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            break;
        case 8:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            break;
        case 9:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            break;
        case 10:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            break;
        case 11:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
            break;
        case 12:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
            pit1Capture();                
    }
    board[1] = 0;
    visualBeanNumber();
}
function pit3Potentials() {
    switch (board[2]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit4Capture();
            break;
        case 2:
            board[3]++;
            pit5Capture();
            break;
        case 3:
            board[3]++;
            board[4]++;
            pit6Capture();
            break;
        case 4:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            break;
        case 5:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            break;
        case 6:       
            board[3]++;      
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            break;                                                      
        case 7:
            board[3]++;            
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            break;
        case 8:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            break;
        case 9:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            break;
        case 10:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
            break;
        case 11:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
            pit1Capture();
            break;
        case 12:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
            board[0]++;
            pit2Capture();                
    }
    board[2] = 0;
    visualBeanNumber();
}
function pit4Potentials() {
    switch (board[3]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit5Capture();
            break;
        case 2:
            board[4]++;
            pit6Capture();
            break;
        case 3:
            board[4]++;
            board[5]++;
            store1++;
            break;
        case 4:
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            break;
        case 5:
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            break;
        case 6:             
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            break;
        case 7:            
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            break;
        case 8:
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            break;
        case 9:
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
            break;
        case 10:
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
            pit1Capture();
            break;
        case 11:
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
            board[0]++;
            pit2Capture();
            break;
        case 12:
            board[4]++;
            board[5]++;
            store1++;
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            pit3Capture();                
    }
    board[3] = 0;
    visualBeanNumber();
}
function pit5Potentials() {
    switch (board[4]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit6Capture();
            break;
        case 2:
            board[5]++;
            store1++;
            break;
        case 3:
            board[5]++;
            store1++;
            board[6]++;
            break;
        case 4:
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            break;
        case 5:
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            break;
        case 6:             
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            break;
        case 7:                        
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            break;
        case 8:
            board[5]++;
            store1++;
            aroundTheBoard1();
            break;
        case 9:
            board[5]++;
            store1++;
            aroundTheBoard1();
            pit1Capture();
            break;
        case 10:
            board[5]++;
            store1++;
            aroundTheBoard1();
            board[0]++;
            pit2Capture();
            break;
        case 11:
            board[5]++;
            store1++;
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            pit3Capture();
            break;
        case 12:
            board[5]++;
            store1++;
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            board[2]++;
            pit4Capture();                
    }
    board[4] = 0;
    visualBeanNumber();
}
function pit6Potentials() {
    switch (board[5]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            store1++;
            break;
        case 2:
            store1++;
            board[6]++;
            break;
        case 3:
            store1++;
            board[6]++;
            board[7]++;
            break;
        case 4:
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            break;
        case 5:
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            break;
        case 6:
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;             
            board[10]++;
            break;
        case 7:
            store1++;
            aroundTheBoard1();
            break;
        case 8:
            store1++;
            aroundTheBoard1();
            board[0]++;
            break;
        case 9:
            store1++;
            aroundTheBoard1();
            board[0]++;
            pit2Capture();
            break;
        case 10:
            store1++;
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            pit3Capture();
            break;
        case 11:
            store1++;
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            board[2]++;
            pit4Capture();
            break;
        case 12:
            store1++;
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            pit5Capture();                
    }
    board[5] = 0;
    visualBeanNumber();
}
function pit7Potentials(){    
    switch (board[6]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit8Capture();
            break;        
        case 2: 
            board[7]++;
            pit9Capture();
            break;
        case 3: 
            board[7]++;
            board[8]++;
            pit10Capture();
            break;
        case 4: 
            board[7]++;
            board[8]++;
            board[9]++;
            pit11Capture();
            break;
        case 5: 
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            pit12Capture();
            break;
        case 6: 
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            break;
        case 7: 
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            break;
        case 8:
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            break;
        case 9: 
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            break;
        case 10: 
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            break;
        case 11:
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            break;
        case 12:
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
    }
    board[6] = 0;
    visualBeanNumber();
}
function pit8Potentials() {
    switch (board[7]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit9Capture();
            break;
        case 2:
            board[8]++;
            pit10Capture();
            break;
        case 3:
            board[8]++;
            board[9]++;
            pit11Capture();
            break;
        case 4:
            board[8]++;
            board[9]++;
            board[10]++;
            pit12Capture();
            break;
        case 5:
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            break;
        case 6:
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            break;
        case 7:
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            break;
        case 8:
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[3]++;
            break;
        case 9:
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            break;
        case 10:
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            break;
        case 11:
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
            break;
        case 12:
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
            pit7Capture();                
    }
    board[7] = 0;
    visualBeanNumber();
}
function pit9Potentials() {
    switch (board[8]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit10Capture();
            break;
        case 2:
            board[9]++;
            pit11Capture();
            break;
        case 3:
            board[9]++;
            board[10]++;
            pit12Capture();
            break;
        case 4:
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            break;
        case 5:
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            break;
        case 6:       
            board[9]++;      
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            break;
        case 7:
            board[9]++;            
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            break;
        case 8:
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            break;
        case 9:
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            break;
        case 10:
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
            break;
        case 11:
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
            pit7Capture();
            break;
        case 12:
            board[9]++;
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
            board[6]++;
            pit8Capture();                
    }
    board[8] = 0;
    visualBeanNumber();
}
function pit10Potentials() {
    switch (board[9]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit11Capture();
            break;
        case 2:
            board[10]++;
            pit12Capture();
            break;
        case 3:
            board[10]++;
            board[11]++;
            store2++;
            break;
        case 4:
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            break;
        case 5:
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            break;
        case 6:             
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            break;
        case 7:            
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            break;
        case 8:
            board[10]++;
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            break;
        case 9:
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
            break;
        case 10:
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
            pit7Capture();
            break;
        case 11:
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
            board[6]++;
            pit8Capture();
            break;
        case 12:
            board[10]++;
            board[11]++;
            store2++;
            aroundTheBoard2();
            board[6]++;
            board[7]++;
            pit9Capture();                
    }
    board[9] = 0;
    visualBeanNumber();
}
function pit11Potentials() {
    switch (board[10]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            pit12Capture();
            break;
        case 2:
            board[11]++;
            store2++;
            break;
        case 3:
            board[11]++;
            store2++;
            board[0]++;
            break;
        case 4:
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            break;
        case 5:
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            break;
        case 6:             
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            break;
        case 7:                        
            board[11]++;
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            board[4]++;
            break;
        case 8:
            board[11]++;
            store2++;
            aroundTheBoard2();
            break;
        case 9:
            board[11]++;
            store2++;
            aroundTheBoard2();
            pit7Capture();
            break;
        case 10:
            board[11]++;
            store2++;
            aroundTheBoard2();
            board[6]++;
            pit8Capture();
            break;
        case 11:
            board[11]++;
            store2++;
            aroundTheBoard2();
            board[6]++;
            board[7]++;
            pit9Capture();
            break;
        case 12:
            board[11]++;
            store2++;
            aroundTheBoard2();
            board[6]++;
            board[7]++;
            board[8]++;
            pit10Capture();                
    }
    board[10] = 0;
    visualBeanNumber();
}
function pit12Potentials() {
    switch (board[11]) {
        case 0: 
            alert("please select again, nothing here");
            break;
        case 1: 
            store2++;
            break;
        case 2:
            store2++;
            board[0]++;
            break;
        case 3:
            store2++;
            board[0]++;
            board[1]++;
            break;
        case 4:
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            break;
        case 5:
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            break;
        case 6:
            store2++;
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;             
            board[4]++;
            break;
        case 7:
            store2++;
            aroundTheBoard2();
            break;
        case 8:
            store2++;
            aroundTheBoard2();
            pit7Capture();
            break;
        case 9:
            store2++;
            aroundTheBoard2();
            board[6]++;
            pit8Capture();
            break;
        case 10:
            store2++;
            aroundTheBoard2();
            board[6]++;
            board[7]++;
            pit9Capture();
            break;
        case 11:
            store2++;
            aroundTheBoard2();
            board[6]++;
            board[7]++;
            board[8]++;
            pit10Capture();
            break;
        case 12:
            store2++;
            aroundTheBoard2();
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            pit11Capture();                
    }
    board[11] = 0;
    visualBeanNumber();
}
function listen4Player1 () {
    pit1.addEventListener("click", pit1Potentials);
    pit2.addEventListener("click", pit2Potentials);    
    pit3.addEventListener("click", pit3Potentials);  
    pit4.addEventListener("click", pit4Potentials);  
    pit5.addEventListener("click", pit5Potentials);  
    pit6.addEventListener("click", pit6Potentials);   
}
function listen4Player2 () {
    pit7.addEventListener("click", pit7Potentials);  
    pit8.addEventListener("click", pit8Potentials);  
    pit9.addEventListener("click", pit9Potentials);  
    pit10.addEventListener("click", pit10Potentials);  
    pit11.addEventListener("click", pit11Potentials);
    pit12.addEventListener("click", pit12Potentials);   
}
function turnControl() {
    if ((winner === false) && ((turn % 2) !== 0)) {
        listen4Player1;
        endTurn;
    }
    else ((winner === false) && ((turn % 2) === 0)) {
        listen4Player2;
        endTurn;
    }
}
function playNow() {
    visualBeanNumber();
    turnControl();
}

document.querySelector("#playNow").addEventListener("click", playNow);          
document.querySelector("#replay").addEventListener("click", play);        