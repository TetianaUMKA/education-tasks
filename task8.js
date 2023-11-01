const hours = 20;

// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

if (hours < 17) {
  console.log("Pending");
} else if (hours <= 24) {
  console.log("Expires");
} else {
  console.log("Overdue");
}

// switch (true) {
//   case hours < 17:
//     console.log("Pending");
//     break;
//   case hours <= 24:
//     console.log("Expires");
//     break;
//   default:
//     console.log("Overdue");
// }
