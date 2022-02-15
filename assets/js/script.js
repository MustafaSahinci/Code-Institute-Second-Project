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

// functions for gamemode buttons and Quit button
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

// modals

function initializeModal(modalID, buttonID) {

let modal = document.getElementById(modalID);
var btn = document.getElementById(buttonID);
var span = modal.querySelector('.close');

btn.addEventListener('click', function() {
  modal.style.display = "block";
});

span.addEventListener('click', function() {
  modal.style.display = "none";
});

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

// get all cards
const cards = document.querySelectorAll('.flip-card');
const cards1 = document.querySelectorAll('.flip-card-medium');
const cards2 = document.querySelectorAll('.flip-card-hard');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let firstCard2, secondCard1;
let firstCard1, secondCard2;

//shuffle the cards
function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
  cards1.forEach(card1 => {
    let randomPos = Math.floor(Math.random() * 12);
    card1.style.order = randomPos;
  });
  cards2.forEach(card2 => {
    let randomPos = Math.floor(Math.random() * 16);
    card2.style.order = randomPos;
  });
};

cards.forEach(card => card.addEventListener('click', flipCard));
cards1.forEach(card1 => card1.addEventListener('click', flipCard));
cards2.forEach(card2 => card2.addEventListener('click', flipCard));

shuffle();

// flip te cards
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  if (this === firstCard1) return;
  if (this === firstCard2) return;
  startTimer();
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    firstCard1 = this;
    firstCard2 = this;
  
    return;
  }
  secondCard = this;
  secondCard1 = this;
  secondCard2 = this;
  checkForMatch();
  moves()
}

// counter moves
function moves() {
  let counter = parseInt(document.getElementById("counter-flips").innerText);
  document.getElementById("counter-flips").innerText = ++counter; 
}

// check match's
let cardCorrect = 0;

function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  let isMatch1 = firstCard1.dataset.image === secondCard1.dataset.image;
  let isMatch2 = firstCard2.dataset.image === secondCard2.dataset.image;

  isMatch ? disableCards() : unflipCards();
  isMatch1 ? disableCards() : unflipCards();
  isMatch2 ? disableCards() : unflipCards();
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

function disableCards() {
  firstCard1.removeEventListener('click', flipCard);
  secondCard1.removeEventListener('click', flipCard);
  cardCorrect++
  console.log(cardCorrect)
  if (cardCorrect === 6) {
    setTimeout(function(){
    alert("Congratulations! You found all the pairs!"); 
  }, 1000)
}; 
  
  resetBoard();
}

function disableCards() {
  firstCard2.removeEventListener('click', flipCard);
  secondCard2.removeEventListener('click', flipCard);
  cardCorrect++
  console.log(cardCorrect)
  if (cardCorrect === 8) {
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
    firstCard1.classList.remove('flip');
    secondCard1.classList.remove('flip');
    firstCard2.classList.remove('flip');
    secondCard2.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  [firstCard1, secondCard1] = [null, null];
  [firstCard2, secondCard2] = [null, null];
}



// countdown timer

var label = document.getElementById("timer");
var timer;

function startTimer() {
  if (!timer) {
    countdown = 30;
    timer = setInterval(function() {
      countdown--;
      label.innerText = countdown;
      if (countdown <= 0) {
        clearInterval(timer);
        alert("All done");
      if(cardCorrect === 4){
        clearInterval(timer);
        alert("All done");
      }
      }
    }, 1000);
  }
}

// reset game
function resetGame() {
  setTimeout(function() {
    clearInterval(timer)

      hasFlippedCard = false;
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


