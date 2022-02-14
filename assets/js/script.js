window.onload = function(){
  document.getElementById('easy').style.display = 'none';
  document.getElementById('medium').style.display = 'none';
  document.getElementById('hard').style.display = 'none';
  document.getElementById('control').style.display = 'none';
}

let easyMode = document.getElementById("easy");
let mediumMode = document.getElementById("medium");
let hardMode = document.getElementById("hard");
let controlS = document.getElementById("control");
let back = document.getElementById("menuButtons");

function goBack(){
  resetGame();
  back.style.display = "";
  easyMode.style.display = "none";
  mediumMode.style.display = "none";
  hardMode.style.display = "none";
  controlS.style.display= "none";
}

function gameModeEasy() {
  easyMode.style.display = "";
  controlS.style.display= "";
  back.style.display = "none";
}

function gameModeMedium() {
  mediumMode.style.display = "";
  controlS.style.display= "";
  back.style.display = "none";
}

function gameModeHard() {
  hardMode.style.display = "";
  controlS.style.display= "";
  back.style.display = "none";
}

function initializeModal(modalID, buttonID) {
// Get the modal element
let modal = document.getElementById(modalID);

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
const cards = document.querySelectorAll('.flip-card');
const cards1 = document.querySelectorAll('.flip-card-medium');
const cards2 = document.querySelectorAll('.flip-card-hard');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let start = false;

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
  cards1.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
  cards2.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
};

cards.forEach(card => card.addEventListener('click', flipCard));
cards1.forEach(card => card.addEventListener('click', flipCard));
cards2.forEach(card => card.addEventListener('click', flipCard));

shuffle();

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  if(!start) {
    start = true
    startTimer()
  }
  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
  
  

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
  moves()
  

}


function moves() {

  let counter = parseInt(document.getElementById("counter-flips").innerText);
  document.getElementById("counter-flips").innerText = ++counter; 
}

let cardCorrect = 0;


function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  cardCorrect++
  console.log(cardCorrect)
  if (cardCorrect === 4) {
    setTimeout(function(){
    alert("Congratulations! You found all the pairs!"); 
  }, 1000)
};
  
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}



// countdown timer

var label = document.getElementById("timer");
var timer;
var countdown = localStorage.getItem("countdown") || 60;

// var button = document.getElementById("button");
// var label = document.getElementById("timer");
// var timer;
// var countdown = localStorage.getItem("countdown") || 60;

function startTimer() {
  if (!timer) {
    countdown = 10;
    timer = setInterval(function() {
      countdown--;
      label.innerText = countdown
      // localStorage.setItem("countdown", countdown);
      if (countdown <= 0) {
        clearInterval(timer);
        alert("All done");
      }
    }, 1000);
  }
};

// reset game
function resetGame() {
  setTimeout(function() {
      clearInterval(timer);
      hasFlippedCard = false;
      start = false;
      document.getElementById("counter-flips").innerText = 0; 
      [firstCard, secondCard] = [null, null];
      shuffle();
      cardCorrect = 0;
      cards.forEach((cardReset) => cardReset.classList.remove("flip"));
      cards1.forEach((cardReset) => cardReset.classList.remove("flip"));
      cards2.forEach((cardReset) => cardReset.classList.remove("flip"));
      resetBoard();
      cards.forEach((card) => card.addEventListener("click", flipCard));
  }, 500);
}


