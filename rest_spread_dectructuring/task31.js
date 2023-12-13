function calcBMI({ weight, height }) {
  const numberWeight = Number(weight.replace(",", "."));
  const numberHeight = Number(height.replace(",", "."));
  return Number((numberWeight / numberHeight ** 2).toFixed(1));
}

console.log(calcBMI({ weight: "88,3", height: "1.75" }));
console.log(calcBMI({ weight: "68,3", height: "1.65" }));
console.log(calcBMI({ weight: "118,3", height: "1.95" }));
