
function a(){    
        switch (board[0]) {
            case 0: 
                alert("please select again, nothing here");
            case 1: 
                pit2Capture();
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
            case 2: 
                board[1]++;
                pit3Capture();
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
            case 3: 
                board[1]++;
                board[2]++;
                pit4Capture();
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
            case 4: 
                board[1]++;
                board[2]++;
                board[3]++;
                pit5Capture();
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
            case 5: 
                board[1]++;
                board[2]++;
                board[3]++;
                board[4]++;
                pit6Capture()++;
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
            case 6: 
                board[1]++;
                board[2]++;
                board[3]++;
                board[4]++;
                board[5]++;
                store1++;
                player1Options();
            case 7: 
                board[1]++;
                board[2]++;
                board[3]++;
                board[4]++;
                board[5]++;
                store1++;
                board[6]++;
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
            case 8:
                board[1]++;
                board[2]++;
                board[3]++;
                board[4]++;
                board[5]++;
                store1++;
                board[6]++;
                board[7]++;
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
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
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
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
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
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
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
            case 12:
                board[1]++;
                board[2]++;
                board[3]++;
                board[4]++;
                board[5]++;
                store1++;
                function aroundTheBoard1() {
                    board[6]++;
                    board[7]++;
                    board[8]++;
                    board[9]++;
                    board[10]++;
                    board[11]++;
                }
                function endTurn() {
                    if (((board[0] + board[1] + board[2] + board[3] + board[4] + board[5]) !== 0) && ((board[6] + board[7] + board[8] + board[9] + board[10] + board[11]) !== 0)) {
                    turn++;
                    } 
                    else winnerIsWho();  
                } 
        }
}

function b() {
    switch (board[1]) {
        case 0: 
            alert("please select again, nothing here");
        case 1: 
            pit3Capture;
        case 2:
            board[2]++;
            pit4Capture();
        case 3:
            board[2]++;
            board[3]++;
            pit5Capture();
        case 4:
            board[2]++;
            board[3]++;
            board[4]++;
            pit6Capture();
        case 5:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store++;
            player1Options();
        case 6:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
        case 7:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
        case 8:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
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
        case 11:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
        case 12:
            board[2]++;
            board[3]++;
            board[4]++;
            board[5]++;
            store1++
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
            pit1Capture();                
    }
}

function c() {
    switch (board[2]) {
        case 0: 
            alert("please select again, nothing here");
        case 1: 
            pit4Capture;
        case 2:
            board[3]++;
            pit5Capture();
        case 3:
            board[3]++;
            board[4]++;
            pit6Capture();
        case 4:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
        case 5:
            board[3]++;
            board[4]++;
            board[5]++;
            store++;
            board[6]++;
        case 6:       
            board[3]++;      
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;                                                      
        case 7:
            board[3]++;            
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
        case 8:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
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
        case 10:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
        case 11:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++;
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
            pit1Capture();
        case 12:
            board[3]++;
            board[4]++;
            board[5]++;
            store1++
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
            board[0]++;
            pit2Capture();                
    }
}

function d() {
    switch (board[3]) {
        case 0: 
            alert("please select again, nothing here");
        case 1: 
            pit5Capture;
        case 2:
            board[4]++;
            pit6Capture();
        case 3:
            board[4]++;
            board[5]++;
            store1++;
        case 4:
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
        case 5:
            board[4]++;
            board[5]++;
            store++;
            board[6]++;
            board[7]++;
        case 6:             
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
        case 7:            
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
        case 8:
            board[4]++;
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
        case 9:
            board[4]++;
            board[5]++;
            store1++;
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
        case 10:
            board[4]++;
            board[5]++;
            store1++;
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
            pit1Capture();
        case 11:
            board[4]++;
            board[5]++;
            store1++;
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
            board[0]++;
            pit2Capture();
        case 12:
            board[4]++;
            board[5]++;
            store1++
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
            board[0]++;
            board[1]++;
            pit3Capture();                

    }
}

function e() {
    switch (board[4]) {
        case 0: 
            alert("please select again, nothing here");
        case 1: 
            pit6Capture;
        case 2:
            board[5]++;
            store1++;
        case 3:
            board[5]++;
            store1++;
            board[6]++;
        case 4:
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
        case 5:
            board[5]++;
            store++;
            board[6]++;
            board[7]++;
            board[8]++;
        case 6:             
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
        case 7:                        
            board[5]++;
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
            board[10]++;
        case 8:
            board[5]++;
            store1++;
            aroundTheBoard1();
        case 9:
            board[5]++;
            store1++;
            aroundTheBoard1();
            pit1Capture();
        case 10:
            board[5]++;
            store1++;
            aroundTheBoard1();
            board[0]++;
            pit2Capture();
        case 11:
            board[5]++;
            store1++;
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            pit3Capture();
        case 12:
            board[5]++;
            store1++
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            board[2]++;
            pit4Capture();                
    }
}
function f() {
    switch (board[5]) {
        case 0: 
            alert("please select again, nothing here");
        case 1: 
            store1++;
        case 2:
            store1++;
            board[6]++;
        case 3:
            store1++;
            board[6]++;
            board[7]++;
        case 4:
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
        case 5:
            store++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;
        case 6:
            store1++;
            board[6]++;
            board[7]++;
            board[8]++;
            board[9]++;             
            board[10]++;
        case 7:
            store1++;
            aroundTheBoard1();
        case 8:
            store1++;
            aroundTheBoard1();
            board[0]++;
        case 9:
            store1++;
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
            board[0]++;
            pit2Capture();
        case 10:
            store1++;
            function aroundTheBoard1() {
                board[6]++;
                board[7]++;
                board[8]++;
                board[9]++;
                board[10]++;
                board[11]++;
            }
            board[0]++;
            board[1]++;
            pit3Capture();
        case 11:
            store1++;
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            board[2]++;
            pit4Capture();
        case 12:
            store1++
            aroundTheBoard1();
            board[0]++;
            board[1]++;
            board[2]++;
            board[3]++;
            pit4Capture();                
    }
}



