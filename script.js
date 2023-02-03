window.addEventListener("DOMContentLoaded", getRandomChoice);
let playerChoice;
let randomNum = Math.random() * 2;
let rounded = Math.round(randomNum);

function getRandomChoice() {
  console.log(rounded);

  buttonPressed();
}

function buttonPressed() {
  let rock = document.querySelector("button");
  let paper = document.querySelector("button:nth-child(2)");
  let scissors = document.querySelector("button:nth-child(3)");

  rock.addEventListener("click", rockChosen);
  paper.addEventListener("click", paperChosen);
  scissors.addEventListener("click", scissorsChosen);
}

function rockChosen() {
  console.log("rock chosen");
  playerChoice = 0;
  document.getElementById("player1").classList.add("shake");
  document.getElementById("player2").classList.add("shake");
  document.getElementById("player1").addEventListener("animationend", comparison);
  console.log(playerChoice);
}

function paperChosen() {
  console.log("paper chosen");
  playerChoice = 1;
  document.getElementById("player1").classList.add("shake");
  document.getElementById("player2").classList.add("shake");
  document.getElementById("player1").addEventListener("animationend", comparison);

  console.log(playerChoice);
}

function scissorsChosen() {
  console.log("scissors chosen");
  playerChoice = 2;
  document.getElementById("player1").classList.add("shake");
  document.getElementById("player2").classList.add("shake");
  document.getElementById("player1").addEventListener("animationend", comparison);

  console.log(playerChoice);
}

function comparison() {
  //compares player 1 and player 2 choices and displays if you win, lose or draw. There should be 3 win, lose and draw conditions
  if (playerChoice == rounded) {
    document.getElementById("draw").classList.remove("hidden");
  } else if (playerChoice == 0 && rounded == 1) {
    document.getElementById("lose").classList.remove("hidden");
  } else if (playerChoice == 1 && rounded == 2) {
    document.getElementById("lose").classList.remove("hidden");
  } else if (playerChoice == 2 && rounded == 0) {
    document.getElementById("lose").classList.remove("hidden");
  } else if (playerChoice == 0 && rounded == 2) {
    document.getElementById("win").classList.remove("hidden");
  } else if (playerChoice == 1 && rounded == 0) {
    document.getElementById("win").classList.remove("hidden");
  } else if (playerChoice == 2 && rounded == 1) {
    document.getElementById("win").classList.remove("hidden");
  }

  //changes hand gesture to the correct one for player 1
  if (playerChoice == 1) {
    document.querySelector("#player1").classList.remove("player", "shake");
    document.querySelector("#player1").classList.add("player", "paper");
  } else if (playerChoice == 2) {
    document.querySelector("#player1").classList.remove("player", "shake");
    document.querySelector("#player1").classList.add("player", "scissors");
  }

  //changes hand gesture to the correct one for player 2
  if (rounded == 1) {
    document.getElementById("player2").classList.remove("player", "shake");
    document.querySelector("#player2").classList.add("player", "paper");
  } else if (rounded == 2) {
    document.getElementById("player2").classList.remove("player", "shake");
    document.querySelector("#player2").classList.add("player", "scissors");
  }

  //makes reload button appear
  document.querySelector("button:nth-child(4)").classList.remove("hidden");
  document.querySelector("button:nth-child(4)").addEventListener("click", reloadGame);

  //removes eventlisteners from other buttons
  document.querySelector("button").removeEventListener("click", rockChosen);
  document.querySelector("button:nth-child(2)").removeEventListener("click", paperChosen);
  document.querySelector("button:nth-child(3)").removeEventListener("click", scissorsChosen);
}

function reloadGame() {
  location.reload();
}
