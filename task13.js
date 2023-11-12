const carsArray = [
  "white",
  "blue",
  "red",
  "yellow",
  "brown",
  "white",
  "black",
  "white",
];
console.log(carsArray);
for (let i = 0; i < carsArray.length; i += 1) {
  if (carsArray[i] === "white") {
    const deletedCars = carsArray.splice(i, 1);
    console.log(deletedCars);
  }
}
console.log(carsArray);
