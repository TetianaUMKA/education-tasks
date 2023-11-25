const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter
console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Peter

friends[2] = "Jay";
console.log(friends); // ['Michael', 'Steven', 'Jay']

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length); // 5
