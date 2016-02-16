function drawGameBoard(boardSize, magicArray) {
  // Clear the board first
  deleteContainer();

  var magicArray = magicArray;

  // Below was not a good idea (or I didn't execute it properly). The element must be on page for jQ selectors to work. It's also adding complexity for no reason.
  // var containerSelect = $('body .container')
  // var tableSelect = $('body .container table')
  // var rowSelect = $('body .container table tr')

  // Draw out the table calling appropriate functions
  $('body .container').append(drawTable());
  $('body .container table').append(drawRows(boardSize));
  drawCells(boardSize);

  function drawTable() {
    return "<table></table>";
  }

  function drawRows(boardSize) {
    var tableRows = "";

    for (i = 1; i < (boardSize + 1); i++) {
      tableRows += "<tr id='row-" + i + "'></tr>";
    }

    // Return right # of trs with unique id
    return tableRows;
  }

  function drawCells(boardSize) {
    var cellCount = 1;
    var magicCount = 0;

    for (i = 1; i < (boardSize + 1); i++) {
      updateRow(i, boardSize);
    }

    function updateRow(currentRow, boardSize) {
      rowSelector = "#row-" + currentRow;

      // There is repetition here that could be refactored out
      for (j = 1; j < (boardSize + 1); j++) {
        var cellContent = "<td id='cell-" + cellCount + "' data-magic-squares='" + magicArray[magicCount] + "'></td>";
        $(rowSelector).append(cellContent);
        cellCount++;
        magicCount++;
      }
    }
  }
}

// This function should store the appropriate magic square value to data-magic-squares for each cell in order
