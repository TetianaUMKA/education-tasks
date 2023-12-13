function getBotReport({ companyName, stock }) {
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${companyName} has ${total} items in stock`;
}

console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
);

console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    stock: {
      fpvDrons: 80,
      defenceDrons: 120,
      scoutDrons: 280,
    },
  })
);
