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

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {},
  detectDayBudget: function() {
    alert('Бюджет на 1 день составляет: ' + appData.moneyPerDay + 'руб.');
  },
  detectLevel: function() {},
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?');
      let percent = +prompt('Под какой процент?');

      appData.monthIncome = (save / 100 / 12) * percent;
      alert('Доход в месяц с вашего демозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {},
  chooseIncome: function() {
    let items = prompt(
      'Что принесет дополнитеьный доход? (Перечислите через запятую)'
    );
    while (!isNaN(items) || items == '' || items == null) {
      items = prompt(
        'Что принесет дополнитеьный доход? (Перечислите через запятую)'
      );
    }

    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то еще?'));
    appData.income.sort();

    appData.income.forEach((item, i) => {
      console.log('Способы доп. заработка: ' + (i + 1) + ' ' + item);
    });
  }
};

let key;

for (key in appData) {
  console.log(
    'Наша программа включает в себя данные:' + key + ' - ' + appData[key]
  );
}
