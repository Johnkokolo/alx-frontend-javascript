export default function getFullBudgetObject(income, gdp, capita) {
  const fullBudget = {
    income,
    gdp,
    capita,
    getIncome() {
      return this.income;
    },
    getGdp() {
      return this.gdp;
    },
    getCapita() {
      return this.capita;
    }
  };

  return fullBudget;
}
