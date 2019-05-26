'use strict';

let buttonStart = document.getElementById('start');

let allBlocksInResultTable = document
  .querySelector('.result')
  .querySelectorAll('div[class*="value"]');

let allInputInData = document
  .querySelector('.data')
  .querySelectorAll('input[class*="item"]');

let btnExpenses = document.getElementsByTagName('button')[0];

let btnOptionalExp = document.getElementsByTagName('button')[1];

let btnCountBudget = document.getElementsByTagName('button')[2];

let inputOptionalExpItem = document.querySelectorAll('.optionalexpenses-item');

let inputChooseIncome = document.querySelector('.choose-income');

let checkbSavings = document.querySelector('#savings');

let inputChooseSum = document.querySelector('.choose-sum');

let inputChoosePercent = document.querySelector('.choose-percent');

let inputYearVal = document.querySelector('.year-value');
inputMonthVal = document.querySelector('.month-value');
inputDayVal = document.querySelector('.day-value');
