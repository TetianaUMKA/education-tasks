let minutes = 0;
let seconds = 0;

minutes = 45;
seconds = 0;

if (seconds === 0) {
  console.log(`${minutes} minutes`);
} else {
  console.log(`${minutes} minutes ${seconds} seconds`);
}

if (seconds) {
  console.log(`${minutes} min ${seconds} sec`);
} else {
  console.log(`${minutes} min`);
}
