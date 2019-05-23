'use strict';

let menu = document.body.querySelector('.menu');

let menuItem = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItem[2], menuItem[1]);

let li = document.createElement('li');
li.className = 'menu-item';
li.textContent = 'Пятый пункт';
menu.appendChild(li);
