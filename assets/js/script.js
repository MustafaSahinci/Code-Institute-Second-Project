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
let end = document.getElementById("myModal2");
let endSpan = end.querySelector('.close');
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
  gameStart.innerText = 60;
}

function gameModeMedium() {
  difficulty = "medium"
  mediumMode.style.display = "";
  controlS.style.display= "";
  back.style.display = "none";
  gameStart.innerText = 90;
}

function gameModeHard() {
  difficulty = "hard"
  hardMode.style.display = "";
  controlS.style.display= "";
  back.style.display = "none";
  gameStart.innerText = 120;
}

// modals

function initializeModal(modalID, buttonID) {

let modal = document.getElementById(modalID);
var btn = document.getElementById(buttonID);
let span = modal.querySelector('.close');

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


function endModal(){
  end.style.display = "block"

  endSpan.addEventListener('click', function() {
    end.style.display = "none";
  });

  window.addEventListener('click', function(event) {
    if (event.target == end) {
      end.style.display = "none";
    }
  });

  document.getElementById("finalMoves").innerText = counter; 
  document.getElementById("timeLeft").innerText = timLeft;
  }

function endGame(){
  endModal()
}

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

// let moves = 0
// let moves1 = document.getElementById("counter-flips")

// function addMoves(){
//   moves++;
//   moves1.innerText = moves;
// }

let counter = parseInt(document.getElementById("counter-flips").innerHTML);
counter.innerHTML = 0;
let move = 0;

function moves() {
//   // let counter = parseInt(document.getElementById("counter-flips").innerText);
//  counter = document.getElementById("counter-flips").innerText = ++counter; 
move++;
counter.innerHTML = move;
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
      endModal();
    // alert("Congratulations! You found all the pairs!"); 
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

let gameStart = document.getElementById("timer");
let timer;
let countdown;
let timLeft = gameStart.innerText;

function setTimer(){
  if(difficulty === "easy") {
    gameStart.innerText = 60;
}
}



function startTimer() {
    if(difficulty === "easy"){
    countdown = 60;
  } else if (difficulty === "medium"){
    countdown = 90;
  } else if (difficulty === "hard"){
    countdown = 120;
  }
    timer = setInterval(function() {
      countdown--;
      gameStart.innerText = countdown;
      if(cardCorrect === matchCount){
        clearInterval(timer);
        timeOn = false
        resetGame()
      }else if (countdown <= 0) {
        clearInterval(timer);
        timeOn = false
        alert("All done");
        resetGame()
      }
    }, 1000);
}

// reset game
function resetGame() {
  setTimeout(function() {
    clearInterval(timer)
    timeOn = false
    if(difficulty === "easy"){
      gameStart.innerText = 60;
      } else if(difficulty === "medium"){
        gameStart.innerText = 90;
      }else if(difficulty === "hard"){
        gameStart.innerText = 120;
      }
      move = 0;
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


