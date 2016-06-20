document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  addListeners(document.getElementsByClassName('board')[0].children)
}

function addListeners (element) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('click', showCell)
  }
}

function showCell (evt) {
  evt.target.classList.remove('hidden')
}

// In startGame, we need to get all the child elements of the 'board' div, much as we had to in Sprint 5. You can use getElementsByClassName to achieve this.

//  Loop through all the DOM elements you get back. Call a function named addListeners for each element, passing the element as an argument to the function.

//  Write the function addListeners. It will need to take a parameter named element.

//  Inside addListeners, add an event listener to element for the 'click' event. Name the function you call from it showCell.

//  Write the function showCell. Remember, it's an event listener so it needs to take a parameter called evt or something similar. The only thing the function should do is remove the class 'hidden' from the event's target.
