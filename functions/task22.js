// task 22.1
function logItems(params) {
  // for (let i = 0, n = 1; i < params.length; i += 1, n += 1) {
  //   console.log(`${n}. ${params[i]}`);
  // }
  for (let i = 0; i < params.length; i += 1) {
    console.log(`${i + 1}. ${params[i]}`);
  }
}

logItems(["Lexus", "Toyota", "Range Rover", "Audi"]);

// task 22.2
function printContactInfo(names, phones) {
  names = names.split(",");
  phones = phones.split(",");
  for (let i = 0, j = 0; i < names.length, j < phones.length; i += 1, j += 1) {
    console.log(`${i + 1}. ${names[i]} 👉 ${phones[j]}`);
  }
}
printContactInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001121232,89005556345,89007865439"
);

function printContactInfo2(names, phones) {
  names = names.split(",");
  phones = phones.split(",");
  for (let i = 0; i < names.length, i < phones.length; i += 1) {
    console.log(`${i + 1}. ${names[i]} -> ${phones[i]}`);
  }
}
printContactInfo2(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001121232,89005556345,89007865439"
);
