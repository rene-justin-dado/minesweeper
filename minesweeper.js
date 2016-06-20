document.addEventListener('DOMContentLoaded', startGame)

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
