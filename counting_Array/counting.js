"use strict";

let countingArray = [];
let counter;
let maxCount;

function initLoop() {
  counter = 0;
  maxCount = 9;
  loop();
}

function loop() {
  counter++;

  setTimeout(loop, 1000);
  countingArray.unshift(counter);
  console.log(countingArray);

  if (countingArray.length >= maxCount) {
    countingArray.pop();
  }
}

initLoop();
