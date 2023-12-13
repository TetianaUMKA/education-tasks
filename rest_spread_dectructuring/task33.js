/**
 *
 * @param {Object} companyName, bots: { repairBots, defenceBots }
 * @returns {String}
 */
function getBotReport({ companyName, botStock: { repairBots, defenceBots } }) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    botStock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
);
