Mancala pseudocode
HTML 
# name of site - Sherrie’s Mancala
### Let’s have some fun and play today
How-to
     Give directions
Instructions copied from https://howdoyouplayit.com/play-mancala-mancala-rules/
On your turn, pick up all the beans in one of the smaller pits on your side. It does not matter which pit you choose. Moving counter clockwise, place the beans one by into the other pits on the board, one bean at a time. beans must be placed into your own larger Mancala pit, but not into your opponents. You can, however place beans in your opponents small pits.

This process will distribute the contents of that first pit evenly among the next pits and leave an empty pit on your side of the board. Once you placed all the beans, your turn ends and your opponent repeats the process.

If the last bean placed on your turn  is placed into an empty pit, capture all of the beans in the pit across from it on your opponents side of the board  (the corresponding pit on  your opponents side).  Place all captured beans into your Mancala.

Winning

According to the Mancala Rules, the game is over when a player empties all six pits on his side. The winner is determined by counting beans in the Mancalas. The player with the most beans in their Mancala at the end of the game wins.

need a visual to show the board, but between /// lines is the under the hood set up 
//////////////////////////////

Set up board 
48 beans
2 mancalas
12 pits, 6 on each half
start with 4 beans in each pit. 
lock the beans in each half to protect from removal
//////////////////////////////////////////
 Have a start button 
///////////////////////////////
that frees player 1 side of board
/////////////////////////////////

add any needed credits
instruction website
https://howdoyouplayit.com/play-mancala-mancala-rules/
—————————————————————————
CSS
prettify everything

——————————————————————————-
JS 
have an array for each side of board. 
have a runningTotal for each store

player1Function
  listen for click on player1’s six pits
	once hear click, read length of that pit’s array
		if array.length > 0 {
			add2Store()
		else create a new h3 with ( please try again, there are no beans in that space) as warning
         Icebox = sad or warning sound	


add2Store()
	if array.length > greater than distance to store
		append new bean image to store
		add one to storeRunningTotal
		subtract one from array.length
		pit2PitMove();
	else if (array.length === distance to store)
		append new bean image to store
		add one to storeRunningTotal
		pit2PitMove()
		alert(player go again);
		player1();

pit2Pitmove
	append new bean image to next pits for array.length
	push a new place to each pit.array
	Stop listening on player 1 half.


there is a game function of if the last bean falls into an empty pit on player’s side, the contents of the pit directly opposite is added the moving player’s store, I am not sure how to code that yet. 

Player 2
repeat everything except be listening to player 2 pits

