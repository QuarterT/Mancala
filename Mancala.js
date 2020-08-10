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




