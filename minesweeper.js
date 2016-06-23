document.addEventListener('DOMContentLoaded', startGame)

// An object of an array of objects: To track the cells of our game board
var board = {
  cells: []
}

function startGame () {
  // Get each cell from the board
  addListeners(document.getElementsByClassName('board')[0].children)
  function addListeners (element) {
    for (var i = 0; i < element.length; i++) {
      // Binding Event Listeners
      element[i].addEventListener('click', showCell)
      element[i].addEventListener('contextmenu', markCell)
      addCellToBoard(element[i])
    }

  }
}


// Adds each cell to the board object
function addCellToBoard (element) {
  var newCell = {
    row: getRow(element),
    col: getCol(element),
    isMine: element.classList.contains('mine')
  }
  board.cells.push(newCell)
}

// Checks Position on board
function getRow (element) {
  // Loop through the 'board' elements
  for (var i = 0; i < element.classList.length; i++) {
    if (/row-/.test(element.classList.item(i))) {
      return parseInt(element.classList.item(i).split('-')[1])
    }
  }
}

function getCol (element) {
  // Loop through the 'board' elements
  for (var i = 0; i < element.classList.length; i++) {
    if (/col-/.test(element.classList.item(i))) {
      return parseInt(element.classList.item(i).split('-')[1])
    }
  }
}
// Checks Position on board

// Functions of each event (mouse-click, etc)
function showCell (evt) {
  evt.target.classList.remove('hidden')
}

function markCell (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('marked')
}
