"use strict";

window.addEventListener("DOMContentLoaded", receiveInput);

function receiveInput() {
  let inputValue = document.querySelector("input").value;

  displayColor(inputValue);
  console.log(inputValue);
}

function displayColor(input) {
  document.querySelector(".selected-color").style.backgroundColor = input;
  document.querySelector("p").innerHTML += " " + input;
}

function calcRGB() {}

function calcHSL() {}
