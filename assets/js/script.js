window.onload = function(){
    document.getElementById('easy').style.display = 'none';
    document.getElementById('medium').style.display = 'none';
    document.getElementById('hard').style.display = 'none';
    document.getElementById('control').style.display = 'none';

}

function goBack(){
    let back = document.getElementById(modeButtons)

    back.style.display = "";
}

function gameModeEasy() {
    let easyMode = document.getElementById("easy");
    let controlS = document.getElementById("control")

    let modeButtons = document.getElementById("modeButtons")
    let menuButtons = document.getElementById("menuButtons")
   
    easyMode.style.display = "";
    controlS.style.display= "";
    modeButtons.style.display = "none";
    menuButtons.style.display = "none";
}

function gameModeMedium() {
    let mediumMode = document.getElementById("medium");
    let controlS = document.getElementById("control")

    let modeButtons = document.getElementById("modeButtons")
    let menuButtons = document.getElementById("menuButtons")
   
    mediumMode.style.display = "";
    controlS.style.display= "";
    modeButtons.style.display = "none";
    menuButtons.style.display = "none";
}

function gameModeHard() {
    let hardMode = document.getElementById("hard");
    let controlS = document.getElementById("control")

    let modeButtons = document.getElementById("modeButtons")
    let menuButtons = document.getElementById("menuButtons")
   
    hardMode.style.display = "";
    controlS.style.display= "";
    modeButtons.style.display = "none";
    menuButtons.style.display = "none";
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("playButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}