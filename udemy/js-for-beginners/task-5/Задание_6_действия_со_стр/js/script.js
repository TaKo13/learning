'use strict';

let menu = document.body.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
menu.insertBefore(menuItem[2], menuItem[1]);

let li = document.createElement('li');
li.className = 'menu-item';
li.textContent = 'Пятый пункт';
menu.appendChild(li);

let body = document.getElementsByTagName('body');
body[0].style.backgroundImage = 'url("img/apple_true.jpg")';

let title = document.getElementById('title');
title.innerText = 'Мы продаем только подлинную технику Apple';

let columnSecond = document.body.getElementsByClassName('column')[1];
let blockAdv = document.getElementsByClassName('adv')[0];
columnSecond.removeChild(blockAdv);

let questionToUser = prompt('Как вы относитесь к технике Apple?');
let saveAnswer = document.getElementsByClassName('prompt')[0];
saveAnswer.textContent = questionToUser;
