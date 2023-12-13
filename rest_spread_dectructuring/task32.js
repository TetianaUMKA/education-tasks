/**
 * Output to the console contact information
 * @param {Object} names, phones
 */

function printContactInfo({ names, phones }) {
  names = names.split(",");
  phones = phones.split(",");
  for (let i = 0, j = 0; i < names.length, j < phones.length; i += 1, j += 1) {
    console.log(`${i + 1}. ${names[i]} 👉 ${phones[j]}`);
  }
}

printContactInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001121232,89005556345,89007865439",
});
