function calcBMI(weight, height) {
  // weight = Number.weight.replace(",", ".");
  // height = Number.height.replace(",", ".");
  // return Number((weight / height ** 2).toFixed(1));

  return Number(
    (weight.replace(",", ".") / height.replace(",", ".") ** 2).toFixed(1)
  );
}

const bmiTetiana = calcBMI("53.5", "1,65");
console.log(bmiTetiana);
const bmiAlex = calcBMI("80,6", "1.88");
console.log(bmiAlex);
