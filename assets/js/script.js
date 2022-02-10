window.onload = function(){
    document.getElementById('easy').style.display = 'none';
    document.getElementById('medium').style.display = 'none';
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
   
    easyMode.style.display = "";
    controlS.style.display= "";
    modeButtons.style.display = "none";
}

function gameModeMedium() {
    let mediumMode = document.getElementById("medium");
    let controlS = document.getElementById("control")

    let modeButtons = document.getElementById("modeButtons")
   
    mediumMode.style.display = "";
    controlS.style.display= "";
    modeButtons.style.display = "none";
}
