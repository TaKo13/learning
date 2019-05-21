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

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
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
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Бюджет на 1 день составляет: ' + appData.moneyPerDay + 'руб.');
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log('Это минимальный уровень достатка!');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Это средний уровень достатка!');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Это высокий уровень достатка!');
    } else {
      console.log('Произошла ошибка');
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?');
      let percent = +prompt('Под какой процент?');

      appData.monthIncome = (save / 100 / 12) * percent;
      alert('Доход в месяц с вашего демозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let c = prompt('Статья необязательных расходов?');

      appData.optionalExpenses[i + 1] = c;
      console.log(appData.optionalExpenses);
    }
    return;
  },
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
