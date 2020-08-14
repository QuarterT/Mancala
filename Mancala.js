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
function winnerIsWho() {
    if (store1 > store2) {
     document.querySelector("#results").innerHTML = "Player 1 wins";
    } 
   else if (store2 > store1) {
     document.querySelector("#results").innerHTML = "Player 2 wins";
    } else if (store1 === store2){ document.querySelector("#results").innerHTML = "No one wins";
   }
}
function endTurn() {
	let side1 = board[0] + board[1] + board[2] + board[3] + board[4] + board[5];
	let side2 = board[6] + board[7] + board[8] + board[9] + board[10] + board[11];
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
function player1Options () {
        pit1.addEventListener("click", a);
        pit2.addEventListener("click", b);    
        pit3.addEventListener("click", c);  
        pit4.addEventListener("click", d);  
        pit5.addEventListener("click", e);  
        pit6.addEventListener("click", f);  
}    
function player2Options () {
        pit6.addEventListener("click", h);  
        pit7.addEventListener("click", i);  
        pit8.addEventListener("click", j);  
        pit9.addEventListener("click", k);  
        pit10.addEventListener("click", l);  
        pit11.addEventListener("click", m);  
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
function a(){    
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
            player1Options();
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
function b() {
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
            player1Options();
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
function c() {
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
function d() {
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
function e() {
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
function f() {
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
function h(){    
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
function i() {
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
            player2Options();
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
function j() {
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
            player2Options();
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
function k() {
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
            player2Options();
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
function l() {
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
            player2Options();
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
function m() {
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
visualBeanNumber();
pit1.addEventListener("click", a);
pit2.addEventListener("click", b);    
pit3.addEventListener("click", c);  
pit4.addEventListener("click", d);  
pit5.addEventListener("click", e);  
pit6.addEventListener("click", f);  
pit6.addEventListener("click", h);  
pit7.addEventListener("click", i);  
pit8.addEventListener("click", j);  
pit9.addEventListener("click", k);  
pit10.addEventListener("click", l);  
pit11.addEventListener("click", m);
endTurn();
visualBeanNumber();
          
document.querySelector("#replay").addEventListener("click", play);        