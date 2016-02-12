function initializeGame() {
  var numPlayers = new Number($('#numPlayers').val());
  var boardSize = new Number($('#boardSize').val());
  var gameSymbols = setSymbols(numPlayers);

  console.log(gameSymbols);
}

function setSymbols(numPlayers) {
  var gameSymbols = [];
  var possibleSymbols = ['x', 'o', 'a', 'b'];

  for (i = 0; i < numPlayers; i++) {
    gameSymbols.push(possibleSymbols[i]);
  }

  return gameSymbols;
}

function minWinningTurn() {

}
