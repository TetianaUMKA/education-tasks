const genres = ["Juzz", "Blues"];
genres.push("Rock and roll");
console.log(genres[0]);
console.log(genres[genres.length - 1]);
console.log(genres.shift());
genres.unshift("Country", "Raggae");
console.log(genres);

// genres.splice(genres.length, 0, "Rock and roll");
// console.log(genres.splice(0, 1));
// genres.splice(0, 0, "Country", "Raggae");
// console.log(genres);
