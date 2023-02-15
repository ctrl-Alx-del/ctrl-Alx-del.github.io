"use strict";

window.addEventListener("DOMContentLoaded", receiveInput);

function receiveInput() {
  //inputValue is already hex as it comes in, so it doesn't have to be calculated
  let inputValue = document.querySelector("input").value;

  //sends the raw hex input to the display function
  displayColor(inputValue, calcRGB(inputValue));
}

function displayColor(hex, rgb) {
  //changes the background color of the display
  document.querySelector(".selected-color").style.backgroundColor = hex;
  //changes the hex color code in the first paragraph
  document.querySelector("p").innerHTML += " " + hex;
  //changes the rgb code in the second paragraph
  document.querySelector(".color-display > p:nth-child(3)").innerHTML += ` ${rgb.r}, ${rgb.g}, ${rgb.b}`;
  //   document.querySelector(".color-display > p:nth-child(4)").innerHTML += " " + input;
}

function calcRGB(hexColor) {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  return {
    r,
    g,
    b,
  };
}

function calcHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  //removing decimal numbers and showing the percentage sign

  h = h.toFixed();
  s = s.toFixed() + "%";
  l = l.toFixed() + "%";

  //   "hsl(%f,%f%,%f%)"

  console.log(h, s, l); // just for testing
}

calcHSL(200, 50, 255);
