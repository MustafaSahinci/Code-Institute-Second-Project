window.onload = function(){
    document.getElementById('easy').style.display = 'none';
    document.getElementById('medium').style.display = 'none';
    document.getElementById('hard').style.display = 'none';
    document.getElementById('control').style.display = 'none';
}

function goBack(){
    let back = document.getElementById(menuButtons)
    back.style.display = "";
}

function gameModeEasy() {
    let easyMode = document.getElementById("easy");
    let controlS = document.getElementById("control")
    let menuButtons = document.getElementById("menuButtons")
   
    easyMode.style.display = "";
    controlS.style.display= "";
    menuButtons.style.display = "none";
}

function gameModeMedium() {
    let mediumMode = document.getElementById("medium");
    let controlS = document.getElementById("control")
    let menuButtons = document.getElementById("menuButtons")
   
    mediumMode.style.display = "";
    controlS.style.display= "";
    menuButtons.style.display = "none";
}

function gameModeHard() {
    let hardMode = document.getElementById("hard");
    let controlS = document.getElementById("control")
    let menuButtons = document.getElementById("menuButtons")
   
    hardMode.style.display = "";
    controlS.style.display= "";
    menuButtons.style.display = "none";
}

function initializeModal(modalID, buttonID) {
  // Get the modal element
  var modal = document.getElementById(modalID);

  // Get the button that opens the modal
  var btn = document.getElementById(buttonID);

  // Get the <span> element that closes the modal
  var span = modal.querySelector('.close');

  // When the user clicks on the button, open the modal
  btn.addEventListener('click', function() {
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', function() {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

window.addEventListener('load', function() {
  initializeModal('myModal', 'myBtn');
  initializeModal('myModal1', 'myBtn1');
});

// flip cards
let cards = document.querySelectorAll(".flip-cards");
let cards1 = document.querySelectorAll(".flip-cards-medium");
let cards2 = document.querySelectorAll(".flip-cards-hard");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipcard() {
  if(lockBoard) return;
  if(this === firstCard) return;
  this.classList.add("flip");

  if(!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return
  }
    secondCard = this;
    checkMatch();
}

function checkMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch? disableCard : unflipCard();
}

function disableCard() {
  firstCard.removeEventlistener("click", flipcard)
  secondCard.removeEventlistener("click", flipcard)

  resetBoard()
}

function unflipCard() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards,forEach(card => {
  let pos = Math.floor(Math.random() * 8);
  card.style.order = pos;
  })
  cards1,forEach(card => {
    let pos = Math.floor(Math.random() * 12);
    card.style.order = pos;
    })
  cards2,forEach(card => {
    let pos = Math.floor(Math.random() * 16);
    card.style.order = pos;
    })
})()

cards.forEach(card => card.addEventListener("click", flipcard));
cards1.forEach(card => card.addEventListener("click", flipcard));
cards2.forEach(card => card.addEventListener("click", flipcard));