"use strict";

let text = document.querySelector(".typewritten").innerHTML;
let textElement = document.querySelector(".typewritten");
let maxNumberofIterations;
let delay;
let iterations;

window.addEventListener("DOMContentLoaded", loaded);

function loaded() {
  textElement.innerHTML = "";
}

function initLoop() {
  maxNumberofIterations = text.length;
  textElement.innerHTML = "";
  iterations = 0;
  //change speed here by changing the numbers inside the argument of getRandomArbitrary function
  delay = getRandomArbitrary(100, 500);
  loop();
}

function loop() {
  iterations++;
  if (iterations <= maxNumberofIterations) {
    setTimeout(loop, delay);
    textElement.textContent += text[iterations - 1];
  }

  if (text[iterations - 1] === " ") {
    document.querySelector("#typespace").play();
  } else if (text[iterations - 1].toLowerCase() === "t" || text[iterations - 1].toLowerCase() === "w") {
    document.querySelector("#typekey1").play();
    console.log("sound played");
  }
}

document.querySelector("button").addEventListener("click", initLoop);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
