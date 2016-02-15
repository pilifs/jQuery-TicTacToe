function initializeGame() {
  // This is an interface for calling the functions required to get the variables a new game needs.

  var numPlayers = parseInt($('#numPlayers').val());
  var boardSize = parseInt($('#boardSize').val());
  var gameSymbols = setSymbols(numPlayers);
  var minWinningTurn = setMinWinningTurn(numPlayers, boardSize);
  var magicSquares = new setMagicSquares(boardSize);

  // Add HTML elements corresponding to the board size and give them their appropriate magic #
  drawGameBoard(boardSize, magicSquares.squareOrder);
  
}

function setSymbols(numPlayers) {
  var gameSymbols = [];
  var possibleSymbols = ['x', 'o', 'a', 'b'];

  for (i = 0; i < numPlayers; i++) {
    gameSymbols.push(possibleSymbols[i]);
  }

  return gameSymbols;
}

function setMinWinningTurn(numPlayers, boardSize) {
  // This isn't working perfectly for all combinations -- not a big deal right now.
  var minWinningTurn = numPlayers * boardSize - 1;
  return minWinningTurn;
}

function setMagicSquares(boardSize) {
  // Put in the real equation later... maybe. It's on wikipedia. Just trying to get through this faster -- can always copy formula later.
  // For now only allow board sizes of 3 or 5. Must be odd for magic # to work.
  if (boardSize === 3) {
    this.squareOrder = [4, 9, 2, 3, 5, 7, 8, 1, 6];
    this.magicNumber = 15;
  } else if (boardSize === 5) {
    this.squareOrder = [22, 31, 40, 49, 2, 11, 20, 21, 23, 32, 41, 43, 3, 12, 13, 15, 24, 33, 42, 44, 4, 5, 14, 16, 25, 34, 36, 45, 46, 6, 8, 17, 26, 35, 37, 38, 47, 7, 9, 18, 27, 29, 30, 39, 48, 1, 10, 19, 28];
    this.magicNumber = 65; }
}
