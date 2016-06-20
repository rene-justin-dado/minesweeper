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

// Checks Position on board
function getRow (element) {
  // Loop through the 'board' elements
  for (var i = 0; i < element.length; i++) {
    if (element[i].classList.contains('row-')) {
      return (element[i].split('-'))[1]
    }
  }
}

//  As you may remember, each DOM element has a classList property. We can loop through that just as if it were an ordinary array. Do that: write a for loop that loops through each class name in turn.

//  Figure out how to tell if the class name you're currently on begins with row-. If it does, get the number from the end. There are a few ways to do this: one is using the .split function.

//  Return the number once you've found it.
// For example, if the class were row-9, you'd return 9.
