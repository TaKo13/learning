let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let expCurrMonth = prompt(
  'Введите обязательную статью расходов в этом месяце',
  ''
);
let howMuch = prompt('Во сколько обойдется?', '');
let expCurrMonth2 = prompt(
  'Введите обязательную статью расходов в этом месяце',
  ''
);
let howMuch2 = prompt('Во сколько обойдется?', '');

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

appData.expenses[expCurrMonth] = howMuch;
appData.expenses[expCurrMonth2] = howMuch2;

alert(appData.budget / 30);
