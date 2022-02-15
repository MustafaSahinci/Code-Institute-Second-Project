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
let end = document.getElementById("myModal2")
let difficulty;

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
  difficulty = "easy"
  easyMode.style.display = "";
  controlS.style.display= "";
  back.style.display = "none";
}

function gameModeMedium() {
  difficulty = "medium"
  mediumMode.style.display = "";
  controlS.style.display= "";
  back.style.display = "none";
}

function gameModeHard() {
  difficulty = "hard"
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
initializeModal('myModal2', "");
});

// get all cards
const cards = document.querySelectorAll('.flip-card');
const cards1 = document.querySelectorAll('.flip-card-medium');
const cards2 = document.querySelectorAll('.flip-card-hard');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

//shuffle the cards
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

let timeOn = false

// flip te cards
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  if(!timeOn){ 
    timeOn = true    
    startTimer();
}
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  
    return;
  }
  secondCard = this;
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
let matchCount;

function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  matchCount = checkDivAndReturnMatchCount();


  isMatch ? disableCards(matchCount) : unflipCards();
}
function checkDivAndReturnMatchCount() {
  if(difficulty === "easy"){
    return 4;  
  }else if( difficulty === "medium"){ 
    return 6;}
  else if(difficulty === "hard"){
     return 8; }
}


function disableCards(matchCount) {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  cardCorrect++
  console.log(cardCorrect)
  if (cardCorrect === matchCount) {
    setTimeout(function(){
      // end.style.display = "block";
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

function startTimer() {
  // if (!timer) {
    let countdown = 30;
    timer = setInterval(function() {
      countdown--;
      label.innerText = countdown;
      if(cardCorrect === matchCount){
        clearInterval(timer);
        timeOn = false
        alert("All done")
      }
      if (countdown <= 0) {
        clearInterval(timer);
        timeOn = false
        alert("All done");
      }
    }, 1000);
  // }
}

// reset game
function resetGame() {
  setTimeout(function() {
    clearInterval(timer)
    timeOn = false
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


