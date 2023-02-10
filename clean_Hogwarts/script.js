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
    const nameSplitted1 = studentObject.fullname.trim().indexOf(" ");
    const nameSplitted3 = studentObject.fullname.lastIndexOf(" ");
    const middleName = studentObject.fullname.substring(nameSplitted1, nameSplitted3);
    // if (middleName === "") {
    //   return null;
    // } else {
    //     middleName.charAt(0)
    // }
    student.middle_name = middleName;
    console.log(studentObject);
    //student object pushed onto allStudents array
    console.log(middleName);

    allStudents.push(student);
  });
  console.table(allStudents);
}
