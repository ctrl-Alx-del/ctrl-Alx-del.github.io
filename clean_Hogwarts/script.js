const url = "https://petlatkea.dk/2021/hogwarts/students.json";
const allStudents = [];
const Student = {
  first_name: "",
  last_name: "",
  middle_name: null,
  nick_name: "",
  image: "",
  house: "unknown",
  gender: "",
};

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  cleanData(data);
}

getData();

function cleanData(studentData) {
  studentData.forEach((studentObject) => {
    const student = Object.create(Student);
    //house data cleaned
    const house = studentObject.house.trim();
    const houseCleaned = house.charAt(0).toUpperCase() + house.slice(1).toLowerCase();
    student.house = houseCleaned;
    //gender set to student object
    const gender = studentObject.gender;
    student.gender = gender;
    //Name data cleaned and variables used to divide it into first, middle and last name
    const names = studentObject.fullname.trim();
    const splitName = names.split(" ");
    //first name data cleaned
    const firstName = splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1).toLowerCase();
    student.first_name = firstName;
    //last name data cleaned
    const lastName = splitName.pop();
    let lastNameCleaned = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    lastNameCleaned = lastNameCleaned
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("-");

    student.last_name = lastNameCleaned;
    //middle name data cleaned

    const nameSplitted1 = studentObject.fullname.trim();
    let nameSplitted2 = nameSplitted1.indexOf(" ");
    if (studentObject.fullname.indexOf(" ") === 0) {
      //Some weird bug where it took the index right before what it should be. So i just added 1 more to move and fix it.
      nameSplitted2 = nameSplitted2 + 1;
    }
    const nameSplitted3 = studentObject.fullname.lastIndexOf(" ");
    let middleName = studentObject.fullname.substring(nameSplitted2, nameSplitted3);
    middleName = middleName.trim();

    if (middleName.indexOf('"') === 0) {
      middleName = middleName.slice(1, middleName.lastIndexOf('"'));
    }

    if (middleName.length === 0) {
      middleName = undefined;
    } else {
      middleName = middleName.charAt(0).toUpperCase() + middleName.slice(1);
    }

    student.middle_name = middleName;
    // console.log(studentObject);

    //student object pushed onto allStudents array
    allStudents.push(student);
  });
  console.table(allStudents);
}
