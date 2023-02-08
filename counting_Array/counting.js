let countingArray = [];
let counter;
let maxCount;

function initLoop() {
  counter = 0;
  maxCount = 8;
  loop();
}

function loop() {
  setTimeout(loop, 1000);
  if (counter <= maxCount) {
    counter++;
    countingArray.unshift(counter);
    console.log(countingArray);
  }
}

initLoop();
