'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?');
  time = prompt('Введите дату в формате YYYY-MM-DD');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

start();

let expCurrMonth = prompt('Введите обязательную статью расходов в этом месяце');
let howMuch = prompt('Во сколько обойдется?');
let expCurrMonth2 = prompt(
  'Введите обязательную статью расходов в этом месяце'
);
let howMuch2 = prompt('Во сколько обойдется?');

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце');
    let b = prompt('Во сколько обойдется?');

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
    } else {
      console.log('bad result');
      i--;
    }
  }
}

chooseExpenses();

/* 
// Цикл do...while
let i = 0;
do {
  let a = prompt('Введите обязательную статью расходов в этом месяце');
  let b = prompt('Во сколько обойдется?');
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
  } else {
    console.log('bad result');
    i--;
  }
  i++;
} while (i < 2); */

/* 
// Цикл while 
let i = 0;
while (i < 2) {
  let a = prompt('Введите обязательную статью расходов в этом месяце');
  let b = prompt('Во сколько обойдется?');

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
  } else {
    console.log('bad result');
    i--;
  }
  i++;
} */

// здесь читать задание !!! оформить в функции

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert('Бюджет на 1 день составляет: ' + appData.moneyPerDay + 'руб.');
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Это минимальный уровень достатка!');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Это средний уровень достатка!');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Это высокий уровень достатка!');
  } else {
    console.log('Произошла ошибка');
  }
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?');
    let percent = +prompt('Под какой процент?');

    appData.monthIncome = (save / 100 / 12) * percent;
    alert('Доход в месяц с вашего демозита: ' + appData.monthIncome);
  }
}

// checkSavings();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let c = prompt('Статья необязательных расходов?');

    appData.optionalExpenses[i + 1] = c;
    console.log(appData.optionalExpenses);
  }
  return;
}

chooseOptExpenses();
