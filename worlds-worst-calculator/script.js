const button = document.querySelector("#calculate").addEventListener("click", calculate);

document.querySelector("#clear").addEventListener("click", clearResults);

function calculate() {
  let firstNumber = document.querySelector("#firstnumber").value;
  let secondNumber = document.querySelector("#secondnumber").value;
  //converts strings into numbers
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  let result = document.querySelector("#firstnumber").value;
  const operator = document.querySelector("#operator");
  //gets the operation that is selected, as an option
  const option = operator.options[operator.selectedIndex].value;
  if (option === "add") {
    result = firstNumber + secondNumber;
  } else if (option === "sub") {
    result = firstNumber - secondNumber;
  } else if (option === "mul") {
    result = firstNumber * secondNumber;
  } else if (option === "div") {
    result = firstNumber / secondNumber;
  }
  //calculates the result with rounding and returns it back for updating result
  result = rounding(result);
  //updates the result in the input area
  document.querySelector("#firstnumber").value = result;
  //appends new li elements to my ul with the given result
  let list = document.querySelector("#results");
  list.innerHTML += `<li>${result}</li>`;
  //scrolls to bottom of the scroll bar
  list.scrollTo(0, list.scrollHeight);
}

function clearResults() {
  //clears the results area
  document.querySelector("#results").innerHTML = "";
}

function rounding(resultTransferred) {
  let isChecked = document.querySelector("#doround");
  const decimals = document.querySelector("#decimals");
  const decimalOption = decimals.options[decimals.selectedIndex].value;
  //checks if checkbox is checked or not
  if (isChecked.checked) {
    //toFixed() changes the value to the decimal point that is gathered from the decimal options
    resultTransferred = resultTransferred.toFixed(decimalOption);
  }
  return resultTransferred;
}
