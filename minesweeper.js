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

    for (var i = 0; i < board.cells.length; i++) {
      countMines(board.cells[i])
    }
  }
}
function countMines (cell) {
  var surroundingMines = getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (var i = 0; i < surroundingMines.length; i++) {
    if (surroundingMines[i].isMine) {
      count++
    }
  }
  cell.surroundingMines = count
}
// To help out, we've provided a function in our minesweeper_lib.js file called getSurroundingCells. This accepts a row and column as arguments, and retrieves all the cells that are next to the current cell as an array of objects.
// You'll need to use a syntax that looks something like: var surroundingCells = getSurroundingCells(row, col);
//  Assign the result of countMines to a property on each cell object, surroundingMines using =.
//  Pass the cell into the function as an argument.

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

// For each cell, check to see if both .isMine and .isMarked are true. If any mine still exists that isn't marked, the player hasn't won yet and you can return out of the function.
//  If every mine is marked, find a way to check all the elements in the DOM to be sure that there are no elements with class 'hidden' still set.
//  If both these criteria pass, the player has won! Find a way to tell them: an alert is probably the simplest.
function checkForWin (evt) {
  for (var i = 0; i < board.cells.length; i++) {
    if (evt.target.parentNode.children[i].classList.contains('mine') && !(evt.target.parentNode.children[i].classList.contains('marked'))) {
      return
    }

    for (var i = 0; i < board.cells.length; i++) {
      if (!(evt.target.parentNode.children[i].classList.contains('hidden'))) {
        return
      } else {
        alert('YOU WON!')
      }
    }
  }
}

// Functions of each event (mouse-click, etc)
function showCell (evt) {
  showSurrounding(evt.target)
  evt.target.classList.remove('hidden')
  checkForWin(evt)
}

function markCell (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('marked')
  evt.target.classList.toggle('hidden')
  for (var i = 0; i < board.cells.length; i++) {
    if (getRow(evt.target) == board.cells[i].row && getCol(evt.target) == board.cells[i].col) {
      board.cells[i].isMarked = true
    }
  }
  checkForWin(evt)
}
