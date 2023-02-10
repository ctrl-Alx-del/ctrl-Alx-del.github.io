"use strict";
let customers = [3, 11, 18, 10, 16, 16, 30, 20, 5, 25, 5, 11, 11, 11, 23, 1, 18, 2, 23, 23, 21, 12, 25, 31, 28, 15, 5, 28, 16, 18, 29, 12, 30, 27, 0, 3, 5, 29, 3, 24];

function getNumberofCustomers() {
  return Math.floor(Math.random() * 32);
}

function displayArray() {
  const template = document.querySelector("template").content;
  const container = document.querySelector("#bar_container");
  container.innerHTML = "";

  customers.forEach((height) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".bar").style.height = height + "px";
    container.appendChild(klon);
  });
}

function init() {
  setTimeout(init, 1000);
  shiftArray();
  displayArray();
}

function shiftArray() {
  const queueSize = getNumberofCustomers();
  let iterator = 0;
  iterator++;
  if (iterator <= customers.length) {
    customers.shift();
  }
  customers.push(queueSize);
}

init();
