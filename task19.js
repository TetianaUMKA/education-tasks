// task A
const string = "Welcome to the future";
const result = string.split("").reverse().join("");
console.log(result);

// task B
// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
const langs = ["cpython", "bjavascript", "ac++", "haskel", "php", "ruby"];
// const [arr] = [];
for (let i = 0; i < langs.length; i += 1) {
  console.log(langs[i][0]); // the first letter of each array element
  if (langs[0] > langs[i]) {
    const langsResult = langs.splice(i, 1)[0];
    langs.unshift(langsResult);
  }
}
console.log(langs);
