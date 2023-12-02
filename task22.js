function logItems(params) {
  // for (let i = 0, n = 1; i < params.length; i += 1, n += 1) {
  //   console.log(`${n}. ${params[i]}`);
  // }
  for (let i = 0; i < params.length; i += 1) {
    console.log(`${i + 1}. ${params[i]}`);
  }
}

logItems(["Lexus", "Toyota", "Range Rover", "Audi"]);
