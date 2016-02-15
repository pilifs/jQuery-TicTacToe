function deleteContainer() {
  // Reset the board
  $('body .container').empty();
}

function waitForGame() {

  // This should be an AJAX call but it is beyond the scope of assignment.
  var initialHTML = '<h1>Start a new game of Tic Tac Toe!</h1><p>Num of players:</p><form id="form" onsubmit="return false;"><input type="text" id="numPlayers" /><p>Board size:</p><input type="text" id="boardSize" /><br><br><input type="submit" value="Start game!" onclick="initializegame();" /></form>';
  // Draw the initial game state form and wait for user input
  $('body .container').append(initialHTML);

}


// This is how I was going to do forms at first.
// I decided it wasn't worth doing because I wanted to focus on other things.

// Variables we want to get from the user
// userInputs = [["numPlayers", "Enter number of players" ] ["boardSize", "Enter a board size (always square)"] ]

// Add inputs to the game form
// addInputsToForm(userInputs)

// <form id="form" onsubmit="return false;">
//     <input type="text" id="numPlayers" />
//     <input type="text" id="boardSize" />
//     <input type="submit" onclick="initializeGame();" />
// </form>


// function addInputsToForm(userInputs) {
//   // I am probably getting a little carried away here. All of the initial HTML could just be added in one long variable... This makes adding labels hard.
//
//   for (i = 0; i < userInputs.length; i++) {
//     $('#startgame').append('<input name=" + "" + " id="btnSearch" value="Search">');
//   }
// }
