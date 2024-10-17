export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income_${new Date().getFullYear()}`]: income,
    [`gdp_${new Date().getFullYear()}`]: gdp,
    [`capita_${new Date().getFullYear()}`]: capita,
  };

  return budget;
}
