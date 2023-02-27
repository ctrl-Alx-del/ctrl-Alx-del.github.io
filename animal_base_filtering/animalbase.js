"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
//Our global variables in the form of an object
const globalProps = {
  chosenFilter: "*",
  sortDir: "asc",
  sortBy: "",
};

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  document.querySelectorAll(".filter").forEach((eachButton) => {
    eachButton.addEventListener("click", dataFilter);
  });

  //addEventListener so you can click on sort name
  document.querySelectorAll("[data-action='sort']").forEach((eachButton) => {
    eachButton.addEventListener("click", selectSort);
  });
  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first

  buildList();
}

function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);
  displayList(sortedList);
}

function filterList(theFilteredList) {
  if (globalProps.chosenFilter === "cat") {
    theFilteredList = allAnimals.filter(isCat);
  } else if (globalProps.chosenFilter === "dog") {
    theFilteredList = allAnimals.filter(isDog);
  }

  return theFilteredList;
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  }
}

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  }
}

function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;

  //toggle direction
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }

  console.log(`User selected ${sortBy} - ${sortDir}`);
  setSort(sortBy, sortDir);
}

function sortList(sortedList) {
  let direction = 1;
  if (globalProps.sortDir === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }

  sortedList = sortedList.sort(sortByProperty);

  function sortByProperty(animalA, animalB) {
    if (animalA[globalProps.sortBy] < animalB[globalProps.sortBy]) {
      return -1 * direction;
    } else if (animalA[globalProps.sortBy] > animalB[globalProps.sortBy]) {
      return 1 * direction;
    } else {
      return 0;
    }
  }

  return sortedList;
}

function dataFilter(event) {
  const filter = event.target.dataset.filter;
  setFilter(filter);
}

function setFilter(filterBy) {
  globalProps.chosenFilter = filterBy;
  console.log(globalProps.chosenFilter);
  buildList();
}

function setSort(sortBy, sortDir) {
  globalProps.sortBy = sortBy;
  globalProps.sortDir = sortDir;

  buildList();
}
