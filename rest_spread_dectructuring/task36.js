// decructuring (when the number of properties is known)

// function transformUserName({ id, firstName, lastName, email, friendcount }) {
//   return {
//     id,
//     fullName: `${firstName} ${lastName}`,
//     email,
//     friendcount,
//   };
// }
// console.log(
//   transformUserName({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@gmail.com",
//     friendcount: 40,
//   })
// );

// console.log(
//   transformUserName({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@gmail.com",
//     friendcount: 20,
//   })
// );

// // rest to spread (when the number of properties is different)

function transformUserName({ firstName, lastName, ...props }) {
  return {
    fullName: `${firstName} ${lastName}`,
    ...props,
  };
}

console.log(
  transformUserName({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@gmail.com",
    friendcount: 40,
  })
);

console.log(
  transformUserName({
    id: 2,
    firstName: "Adrian",
    lastName: "Cross",
    email: "a.cross@gmail.com",
    friendcount: 20,
    hobbies: "sport",
  })
);
