function formatTime(minutes) {
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60; // залишок від ділення
  return `${hours.toString().padStart(2, 0)}:${minutes
    .toString()
    .padStart(2, 0)}`;
}

console.log(formatTime(70)); // '01:10'
console.log(formatTime(450)); // '07:30'
console.log(formatTime(1441)); // '24:01'
