document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  // Get each cell from the board
  addListeners(document.getElementsByClassName('board')[0].children)
}

function addListeners (element) {
  for (var i = 0; i < element.length; i++) {
    // Binding Event Listeners
    element[i].addEventListener('click', showCell)
  }
}

// Functions of each event (mouse-click, etc)
function showCell (evt) {
  evt.target.classList.remove('hidden')
}

// Add another event listener in your addListeners function. This one should specify a function named markCell.

//  Write the markCell function. This only has one job: toggle the 'marked' class on the event target.

//  Note that you will need to use .preventDefault() on the event to stop the browser's context menu from popping up when you click the right mouse button.
