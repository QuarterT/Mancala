//dryer attempt
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
/* P = player, p# = pit number
p1P1 = board[0]; p2P12 = board[11]
p1p2 = board[1]; p2P11 = board[10]
p1P3 = board[2]; p2P10 = board[9];
p1P4 = board[3]; p2P9 = board[8];
p1P5 = board[4]; p2P8 = board[7];
p1P6 = board[5]; p2P7 = board[6];
*/
document.querySelector("#pit1").addEventListener("click", p1P1());
function p1P1 (){
    if (board[0] < 6){
        if (board[0] === 5) {
            pit6_4();
            pit6Capture();
        }
        else if (board[0] === 4) {
            board[1]++;
            board[2]++;
            board[3]++;
            pit5Capture();
        }
        else if (board[0] === 3) {
        board[1]++;
        board[2]++;
        pit4Capture();
        }
        else if (board[0] === 2) {
            board[1]++;
            pit3Capture();
        }
        else if (board[0] === 1) {
        pit2Capture();
        }   
    }
    else if (board[0] > 6) {
        pit6_6();
        if (board[0] === 7) {
            board[6]++;
        }
        else if (board[0] === 8) {
            board[6]++;
            board[7]++;
        }
        else if (board[0] === 9) {
            board[6]++;
            board[7]++;
            board[8]++;
        }
        else if (board[0] === 10) {
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
        }
        else if (board[0] === 11) {
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
        }
        else if (board[0] === 12) {
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
        }  
    }   
    else if (board[0] === 6) {
        pit6_6();
        p1P6();
    }   
    else if (board[0] === 0) {
     alert("select different pit, this one is empty");
    } 
turn++;
};
function p1P2 (){
    if (board[1] < 5){
        if (board[1] === 4) {
            pit5_3();
            pit6Capture();
        }
        else if (board[1] === 3) {
            board[2]++;
            board[3]++;
            pit5Capture();
        }
        else if (board[1] === 2) {
            board[2]++;
            pit4Capture();
        }
        else (board[1] ===1);    
            pit3Capture();
    }   
    else if (board[1] > 5) {
        pit5_5;
        if (board[1] === 6){
            board[6]++;
        }
        else if (board[1] === 7) {
            board[6]++;
            board[7]++;
        }
        else if (board[1] === 8) {
            board[6]++;
            board[7]++;
            board[8]++;
        }
        else if (board[1] === 9) {
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
        }
        else if (board[1] === 10) {
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
        }
        else if (board[1] === 11) { 
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
        }    
        else if (board[1] === 12) {
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
            board[11]++;
            pit1Capture;
        }  
    }   
    else if (board[1] === 5) {
        pit5_5();
        p1P5();
    }   
    else if (board[1] === 0) {
        alert("select different pit, this one is empty");
    }    
    board[1] = 0;     
    turn++;
};
//internal functions
function pit5_3(){
    board[2]++;
    board[3]++;
    board[4]++;
}
function pit5_5() {
    pit5_3;
    board[5]++
    store++;
}    
function pit6_4(){
    board[1]++;
    board[2]++;
    board[3]++;
    board[4]++;
}
function pit6_6() {
    pit6_4;
    board[5]++
    store++;
}
function pit4_2(){
    board[3]++;
    board[4]++;
}
function pit4_4() {
    pit4_2()
    board[5]++
    store++;
}
//i know with proper variables this can be turned into one function most likely
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

//document.querySelector(#pit6).addEventListener('click', p1P6())