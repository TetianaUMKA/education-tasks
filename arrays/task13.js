const carsArray = [
  "white",
  "blue",
  "red",
  "yellow",
  "brown",
  "red",
  "white",
  "black",
  "white",
  "red",
];
console.log(carsArray);
const deletedCarsArray = [];
for (let i = 0; i < carsArray.length; i += 1) {
  if (carsArray[i] === "white") {
    const deletedCars = carsArray.splice(i, 1);
    console.log(deletedCars);
    deletedCarsArray.push(deletedCars.join(" "));
  }
}
console.log(carsArray);
console.log(deletedCarsArray);

for (let i = 0; i < carsArray.length; i += 1) {
  if (carsArray[i] === "red") {
    carsArray[i] = "grey";
  }
}
console.log(carsArray);
