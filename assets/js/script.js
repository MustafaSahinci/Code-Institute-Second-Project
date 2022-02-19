// Game modes and controls
let easyMode = document.getElementById("easy");
let mediumMode = document.getElementById("medium");
let hardMode = document.getElementById("hard");
let controls = document.getElementById("control");
let homePage = document.getElementById("menuButtons");
let flipTimeLeft = document.getElementById("flipsCounter");
// Modals
let end = document.getElementById("myModal2");
let timeUp = document.getElementById("myModal3");
let endSpan = end.querySelector('.close');
let timeUpSpan = timeUp.querySelector(".close");
// get all cards
const cards = document.querySelectorAll('.flip-card');
const cards1 = document.querySelectorAll('.flip-card-medium');
const cards2 = document.querySelectorAll('.flip-card-hard');
// flip cards, check match and count
let hasFlippedCard = false;
let lockBoard = false;
let cardCorrect = 0;
let matchCount;
let firstCard, secondCard;
let difficulty;
// countdown timer
let timeOn = false;
let gameStart = document.getElementById("timer");
let timer;
let countdown;


//shuffle the cards
function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
  cards1.forEach(card => {
    let randomPosM = Math.floor(Math.random() * 12);
    card.style.order = randomPosM;
  });
  cards2.forEach(card => {
    let randomPosH = Math.floor(Math.random() * 16);
    card.style.order = randomPosH;
  });
}

cards.forEach(card => card.addEventListener('click', flipCard));
cards1.forEach(card => card.addEventListener('click', flipCard));
cards2.forEach(card => card.addEventListener('click', flipCard));

// functions for gamemode buttons and Quit button
function quit() {
  resetGame();
  setTimeout(function () {
    myModal.style.display = "none";
  });
  homePage.style.display = "";
  easyMode.style.display = "none";
  mediumMode.style.display = "none";
  hardMode.style.display = "none";
  controls.style.display = "none";
  flipTimeLeft.style.display = "none";
}

function gameModeEasy() {
  difficulty = "easy";
  easyMode.style.display = "";
  controls.style.display = "";
  flipTimeLeft.style.display = "";
  homePage.style.display = "none";
  gameStart.innerText = 30;
}

function gameModeMedium() {
  difficulty = "medium";
  mediumMode.style.display = "";
  controls.style.display = "";
  flipTimeLeft.style.display = "";
  homePage.style.display = "none";
  gameStart.innerText = 60;
}

function gameModeHard() {
  difficulty = "hard";
  hardMode.style.display = "";
  controls.style.display = "";
  flipTimeLeft.style.display = "";
  homePage.style.display = "none";
  gameStart.innerText = 90;
}

// modals
function initializeModal(modalId, buttonId) {
  let modal = document.getElementById(modalId);
  let btn = document.getElementById(buttonId);
  let span = modal.querySelector('.close');

  btn.addEventListener('click', function () {
    modal.style.display = "block";
  });

  span.addEventListener('click', function () {
    modal.style.display = "none";
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

window.addEventListener('load', function () {
  initializeModal('myModal', 'myBtn');
  initializeModal('myModal1', 'myBtn1');
});

function endModal() {
  end.style.display = "block";

  endSpan.addEventListener('click', function () {
    end.style.display = "none";
  });

  window.addEventListener('click', function (event) {
    if (event.target == end) {
      end.style.display = "none";
    }
  });

  let showMoves = document.getElementById("showMoves");
  showMoves.innerText = document.getElementById("counter-flips").innerText;
  let timeLeft = document.getElementById("timeLeft");
  timeLeft.innerText = document.getElementById("timer").innerText;
}

function timesUp() {
  timeUp.style.display = "block";

  timeUpSpan.addEventListener('click', function () {
    timeUp.style.display = "none";
  });

  window.addEventListener('click', function (event) {
    if (event.target == timeUp) {
      timeUp.style.display = "none";
    }
  });
}

// flip the cards
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  if (!timeOn) {
    timeOn = true;
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
  moves();
}


// moves counter
function moves() {
  let counter = parseInt(document.getElementById("counter-flips").innerText);
  counter = document.getElementById("counter-flips").innerText = ++counter;
}

// check for match's and count them
function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  matchCount = checkDivAndReturnMatchCount();
  isMatch ? disableCards(matchCount) : unflipCards();
}

function checkDivAndReturnMatchCount() {
  if (difficulty === "easy") {
    return 4;
  } else if (difficulty === "medium") {
    return 6;
  } else if (difficulty === "hard") {
    return 8;
  }
}

function disableCards(matchCount) {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  cardCorrect++;
  if (cardCorrect === matchCount) {
    setTimeout(function () {
      endModal();
      clearInterval(timer);
      resetGame();
    }, 1000);
  }
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
function startTimer() {
  if (difficulty === "easy") {
    countdown = 30;
  } else if (difficulty === "medium") {
    countdown = 60;
  } else if (difficulty === "hard") {
    countdown = 90;
  }
  timer = setInterval(function () {
    countdown--;
    gameStart.innerText = countdown;
    if (countdown <= 0) {
      clearInterval(timer);
      timesUp();
      resetGame();
    }
  }, 1000);
}

// reset game
function resetGame() {
  setTimeout(function () {
    clearInterval(timer);
    timeOn = false;
    if (difficulty === "easy") {
      gameStart.innerText = 30;
    } else if (difficulty === "medium") {
      gameStart.innerText = 60;
    } else if (difficulty === "hard") {
      gameStart.innerText = 90;
    }
    cardCorrect = 0;
    shuffle();
    resetBoard();
    document.getElementById("counter-flips").innerText = 0;
    cards.forEach((cardReset) => cardReset.classList.remove("flip"));
    cards1.forEach((cardReset) => cardReset.classList.remove("flip"));
    cards2.forEach((cardReset) => cardReset.classList.remove("flip"));
    cards.forEach((card) => card.addEventListener("click", flipCard));
    cards1.forEach((card) => card.addEventListener("click", flipCard));
    cards2.forEach((card) => card.addEventListener("click", flipCard));
  }, 1500);
}

window.onload = function () {
  document.getElementById('easy').style.display = 'none';
  document.getElementById('medium').style.display = 'none';
  document.getElementById('hard').style.display = 'none';
  document.getElementById('control').style.display = 'none';
  flipTimeLeft.style.display = "none";
  shuffle();
};
