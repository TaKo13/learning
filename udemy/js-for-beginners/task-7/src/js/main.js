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
