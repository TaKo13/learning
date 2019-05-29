'use strict';
/* Получение элементов. переписала */
let buttonStart = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName(
    'optionalexpenses-value'
  )[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
  //
  allExpensesItem = document.getElementsByClassName('expenses-item'),
  btnExpenses = document.getElementsByTagName('button')[0],
  btnOptionalExp = document.getElementsByTagName('button')[1],
  btnCountBudget = document.getElementsByTagName('button')[2],
  inputOptionalExpItem = document.querySelectorAll('.optionalexpenses-item'),
  inputChooseIncome = document.querySelector('.choose-income'),
  checkbSavings = document.querySelector('#savings'),
  inputChooseSum = document.querySelector('.choose-sum'),
  inputChoosePercent = document.querySelector('.choose-percent'),
  inputYearVal = document.querySelector('.year-value'),
  inputMonthVal = document.querySelector('.month-value'),
  inputDayVal = document.querySelector('.day-value');

let money, time;

buttonStart.addEventListener('click', function() {
  time = prompt('Введите дату в формате YYYY-MM-DD');
  money = +prompt('Ваш бюджет на месяц?');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  inputYearVal.value = new Date(Date.parse(time)).getFullYear();
  inputMonthVal.value = new Date(Date.parse(time)).getMonth() + 1;
  inputDayVal.value = new Date(Date.parse(time)).getDate();
});

btnExpenses.addEventListener('click', function() {
  let sum = 0;

  for (let i = 0; i < allExpensesItem.length; i++) {
    let a = allExpensesItem[i].value,
      b = allExpensesItem[++i].value;

    if (
      typeof a === 'string' &&
      typeof a != null &&
      typeof b != null &&
      a != '' &&
      b != '' &&
      a.length < 50
    ) {
      console.log('done');
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i = i - 1;
    }
  }
  expensesValue.textContent = sum;
});

btnOptionalExp.addEventListener('click', function() {
  for (let i = 0; i < inputOptionalExpItem.length; i++) {
    let opt = inputOptionalExpItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

btnCountBudget.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Это минимальный уровень достатка!';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Это средний уровень достатка!';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Это высокий уровень достатка!';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});

inputChooseIncome.addEventListener('input', function() {
  let items = inputChooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkbSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

inputChooseSum.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +inputChooseSum.value,
      percent = +inputChoosePercent.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

inputChoosePercent.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +inputChooseSum.value,
      percent = +inputChoosePercent.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
