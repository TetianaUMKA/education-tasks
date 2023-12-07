const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const properties = Object.keys(user);
console.log(properties);
console.log(user);
for (const key of properties) {
  console.log(`${key}: ${user[key]}`);
}
