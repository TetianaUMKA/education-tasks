const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);

// the first way
// const properties = Object.keys(user);
// console.log(properties);
// for (const key of properties) {
//   console.log(`${key}: ${user[key]}`);
// }

// the second way
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
