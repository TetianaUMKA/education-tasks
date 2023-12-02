function calcBMI(weight, height) {
  // weight = Number.weight.replace(",", ".");
  // height = Number.height.replace(",", ".");
  // return Number((weight / height ** 2).toFixed(1));

  return Number(
    (weight.replace(",", ".") / height.replace(",", ".") ** 2).toFixed(1)
  );
}

const bmiTetiana = calcBMI("53.5", "1,65"); // 19.7
console.log(bmiTetiana);
const bmiAlex = calcBMI("80,6", "1.88"); // 22.8
console.log(bmiAlex);
