let weight = "88,3";
let height = "1.75";
weight = Number(weight.replace(",", "."));
height = Number(height);
// height = +height;   this expression results in type number
// console.log(typeof height);

const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));

// const bmi = Number((weight / height ** 2).toFixed(1));

// const bmi = Number((weight / (height * height)).toFixed(1));

console.log(bmi);
