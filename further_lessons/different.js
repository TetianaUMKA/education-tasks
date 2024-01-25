"use strict";

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

const userObj = Object.keys(user);

for (const key of userObj) {
  console.log(`${key}: ${userObj[key]}`);
}
