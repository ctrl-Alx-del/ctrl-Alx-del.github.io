const button = document.querySelector("button");
button.addEventListener("click", generateOutput);

function generateOutput() {
  const myInput = document.querySelector("#myInput");
  const changer = document.querySelector("#changer");
  const myOutput = document.querySelector("#myOutput");
  //gets the change that is selected, as an option
  const option = changer.options[changer.selectedIndex].value;

  if (option === "uppercase") {
    myOutput.textContent = myInput.value[0].toUpperCase() + myInput.value.substring(1, myInput.value.length);
  } else if (option === "firstName") {
    myOutput.textContent = myInput.value.substring(0, myInput.value.indexOf(" "));
  } else if (option === "firstNameLength") {
    myOutput.textContent = myInput.value.substring(0, myInput.value.indexOf(" ")).length;
  } else if (option === "middleName") {
    const nameSplitted1 = myInput.value.indexOf(" ");
    const nameSplitted3 = myInput.value.lastIndexOf(" ");
    const middleName = myInput.value.substring(nameSplitted1, nameSplitted3);
    myOutput.textContent = middleName;
  } else if (option === "fileName") {
    myOutput.textContent = myInput.value.endsWith(".jpg") || myInput.value.endsWith(".png");
  } else if (option === "password") {
    const hideAsterisk = "*";
    const password = hideAsterisk.repeat(myInput.value.length);
    myOutput.textContent = password;
  } else if (option === "thirdCapitalized") {
    myOutput.textContent = myInput.value.substring(0, 2) + myInput.value[2].toUpperCase() + myInput.value.substring(3, myInput.value.length);
  } else if (option === "anyCharUpper") {
    // const anySpace = myInput.value.indexOf(" ") + 1;
    // const anySpace2 = myInput.value.indexOf(" ", anySpace) + 1;
    // const anySpace3 = myInput.value.indexOf(" ", anySpace2) + 1;
    // myOutput.textContent = myInput.value[0].toUpperCase() + myInput.value[anySpace].toUpperCase() + myInput.value[anySpace2].toUpperCase() + myInput.value[anySpace3].toUpperCase();

    Array.from(myInput.value).forEach((letter, i) => {
      if (myInput.value[i - 1] === " " || myInput.value[i - 1] === "-") {
        myOutput.textContent += myInput.value[i].toUpperCase();
      } else {
        myOutput.textContent += myInput.value[i];
      }
    });

    // let subsequentWords = "";
    // let subsequentNumber = myInput.value.split(" ");
    // let newSpace;
    // console.log(subsequentNumber);
    // subsequentNumber.forEach((space) => {});

    // const anySpace = myInput.value.indexOf(" ") + 1;
    // myOutput.textContent = myInput.value[0].toUpperCase();

    // for (i = 0; i <= myInput.value.length; i++) {
    //   if (myInput.value[i - 1] === " " || myInput.value[i - 1] === "-") {
    //     const firstLetter = myInput.value[0].toUpperCase();
    //     subsequentWords += myInput.value[i].toUpperCase();
    //     myOutput.textContent = firstLetter + subsequentWords;
    //   }
    // }
  }
}
