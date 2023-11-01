const userLogin = prompt("Enter your name, please.");

// if (!userLogin) {
//   console.log("Cancelled");
// } else if (userLogin === "Admin") {
//   const userPassword = prompt("Enter your password, please.");
//   if (userPassword) {
//     alert("Hello👋, Admin!");
//   } else {
//     alert("This password is wrong!🔴");
//   }
// } else {
//   alert("User wiht this name does not exist");
// }

if (!userLogin) {
  console.log("Cancelled");
} else if (userLogin === "Admin") {
  const userPassword = prompt("Enter your password, please.");
  userPassword ? alert("Hello👋, Admin!") : alert("This password is wrong!🔴");
} else {
  alert("User wiht this name does not exist");
}
