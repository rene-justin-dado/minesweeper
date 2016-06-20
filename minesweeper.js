document.addEventListener('DOMContentLoaded', startGame)

// An object of an array of objects: To track the cells of our game board
var board = {

  cells: [
  ]
}

function startGame () {
  // Get each cell from the board
  addListeners(document.getElementsByClassName('board')[0].children)
}

function addListeners (element) {
  for (var i = 0; i < element.length; i++) {
    // Binding Event Listeners
    element[i].addEventListener('click', showCell)
    element[i].addEventListener('contextmenu', markCell)
  }
}

// Functions of each event (mouse-click, etc)
function showCell (evt) {
  evt.target.classList.remove('hidden')
}

function markCell (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('marked')
}
getRow(document.getElementsByClassName('board')[0].children)
// Checks Position on board
function getRow (element) {
  // Loop through the 'board' elements
  for (var i = 0; i < element.length; i++) {
    if (element[i].classList.contains('row-')) {
      return (element[i].split('-'))[1]
    }
  }
}
getCol(document.getElementsByClassName('board')[0].children)
function getCol (element) {
  // Loop through the 'board' elements
  for (var i = 0; i < element.length; i++) {
    if (element[i].classList.contains('col-')) {
      return (element[i].split('-'))[1]
    }
  }
}

// Now do the same thing, but to find the column instead of the row. You should call the function getCol. The code should look almost exactly the same. (If you think this isn't very DRY, you're right... but you can refactor the code later!)

//  Commit your code.
