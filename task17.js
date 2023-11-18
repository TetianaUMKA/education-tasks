// case 1 // if there is no number, no data will be displayed on the console

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89005432235,89006433345,89004327788,89006542288";

// const namesArr = names.split(",");
// console.log("namesArr: ", namesArr);
// const phonesArr = phones.split(",");
// console.log("phonesArr: ", phonesArr);

// for (
//   let i = 0, j = 0, n = 1;
//   i < namesArr.length, j < phonesArr.length;
//   i += 1, j += 1, n += 1
// ) {
//   console.log(`${n}) Name: ${namesArr[i]} tel: ${phonesArr[j]}`);
// }

// case 2 // variables are let // if there is no number, the data will be displayed on the console with 'undefined' instead of number

// let names = "Jacob,William,Solomon,Artemis";
// let phones = "89005432235,89006433345,89004327788";

// names = names.split(",");
// // console.log("names: ", names);
// phones = phones.split(",");
// // console.log("phones: ", phones);

// for (let i = 0, j = 0, n = 1; i < names.length; i += 1, n += 1) {
//   console.log(`${n}) Name: ${names[i]} tel: ${phones[i]}`);
// }

// case 3 // variables are let // if there is no number, no data will be displayed on the console

// let names = "Jacob,William,Solomon,Artemis";
// let phones = "89005432235,89006433345";

// names = names.split(",");
// phones = phones.split(",");

// for (let i = 0, n = 1; i < names.length, i < phones.names; i += 1, n += 1) {
//   console.log(`${n}) Name: ${names[i]} tel: ${phones[i]}`);
// }

// case 4 // if there is no number, the word 'unavailable' will be displayed on the console instead of 'undefined'

let names = "Jacob,William,Solomon,Artemis";
let phones = "89005432235,89006433345";

names = names.split(",");
phones = phones.split(",");
for (let i = 0, n = 1; i < names.length; i += 1, n += 1) {
  // if (i >= phones.length) {
  //   console.log(`${n}) Name: ${names[i]} tel: unavailable`);
  //   continue;
  // }
  // console.log(`${n}) Name: ${names[i]} tel: ${phones[i]}`);

  if (i >= phones.length) {
    console.log(`${n}) Name: ${names[i]} tel: unavailable`);
  } else {
    console.log(`${n}) Name: ${names[i]} tel: ${phones[i]}`);
  }
}
