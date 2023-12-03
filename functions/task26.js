const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCourse(name) {
  // if (courses.includes(name)) {
  //   alert("You have already added this course");
  // } else courses.push(name);
  if (courses.includes(name)) {
    alert("You have already added this course");
  }
  courses.push(name);
}

function removeCourse(name) {
  // for (let i = 0; i < courses.length; i += 1) {
  //   if (courses[i] === name) {
  //     courses.splice(i, 1);
  //     break;
  //   }
  // }
  if (courses.includes(name)) {
    const idx = courses.indexOf(name);
    courses.splice(idx, 1);
    return;
  }
  // const idx = courses.indexOf(name);
  // if (!!~idx) {
  //   courses.splice(idx, 1);
  // }
}

/// !!~idx check whether true or false

function updateCourse(oldName, newName) {
  for (let i = 0; i < courses.length; i += 1) {
    if (courses[i] === oldName) {
      courses.splice(i, 1, newName);
      return;
    }
  }
}

addCourse("Express");
console.log(courses);

removeCourse("PostgreSQL");
console.log(courses);

updateCourse("React", "React Native");
console.log(courses);
