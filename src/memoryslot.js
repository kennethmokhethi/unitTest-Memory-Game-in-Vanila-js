/* memory slot description
memory slot is a game wherein you match a series of pictures to their similar others. only one player at a time and
 pictures can only show for a few seconds.
 */

// Storing all the images in an array
const slots = global.window.querySelectorAll(".memory-slot");

// Declaring variable that wil be used
let cardFlipped = false;
let MoreThan2CardsFlipped = false;
let firstCard, secondCard;

// Function that initialise the varibles
function flipCards() {
  if (MoreThan2CardsFlipped) return; //If more than two cards are clicked, the function is terminated
  if (this === firstCard) return; //If the same image is clicked twice,the function is ended
  this.classList.toggle("flip");

  if (!cardFlipped) {
    //   First time clicking
    cardFlipped = true;
    firstCard = this;
  } else {
    //   Clicking the imaghe for the second time
    cardFlipped = false;
    secondCard = this;
    checkEquality();
  }
}

// Main function that utilizes the utility functions
function checkEquality() {
  //    checking for equality
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    // when the condition is true
    disableClick();
  } else {
    // when the condition is false
    unflipCard();
  }
}

// Removing the click event listene:Utility method
function disableClick() {
  firstCard.removeEventListener("click", flipCards);
  secondCard.removeEventListener("click", flipCards);
  resetCards();
}

// Disables the flpping of cards:Utility method
function unflipCard() {
  MoreThan2CardsFlipped = true;
  setTimeout(() => {
    //Setting the time so that before the cards flipp back,the changes are seen
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetCards();
    MoreThan2CardsFlipped = false;
  }, 1000); //1000milliseconds = 1s
}

//  resetCards:ES6 function
function resetCards() {
  [MoreThan2CardsFlipped, cardFlipped] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Making the shuffleCards function be the first to be executed
(function shuffleCard() {
  slots.forEach(slots => {
    let randomIndex = Math.round(Math.random() * 12);
    slots.style.order = randomIndex;
  });
})();
// Calling the function that flips cardr afer a click
slots.forEach(slots => slots.addEventListener("click", flipCards));

module.export = {
  flipCards,
  checkEquality,
  disableClick,
  unflipCard,
  resetCards
};
