/**
 *
 * @param {Object} companyName, bots: { repairBots, defenceBots }
 * @returns {String}
 */
function getBotReport({ companyName, bots: { repairBots, defenceBots } }) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    bots: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
);
