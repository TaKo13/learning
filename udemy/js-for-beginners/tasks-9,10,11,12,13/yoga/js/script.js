window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  const tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(startIndex) {
    for (let i = startIndex; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(tabIndex) {
    if (tabContent[tabIndex].classList.contains('hide')) {
      tabContent[tabIndex].classList.remove('hide');
      tabContent[tabIndex].classList.add('show');
    }
  }

  info.addEventListener('click', event => {
    const target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  const deadline = '2019-06-11';

  //определяет остаток времени
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.now(),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    setTimeout(() => {
      timer.style.visibility = 'visible';
    }, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      hours.textContent = `${t.hours}`.padStart(2, '0');
      minutes.textContent = `${t.minutes}`.padStart(2, '0');
      seconds.textContent = `${t.seconds}`.padStart(2, '0');

      if (t.total <= 0) {
        clearInterval(timeInterval);

        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);

  // Modal window (+ add ESC?)

  let more = document.querySelector('.more'),
    overay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', () => {
    overay.style.display = 'block';
    more.classList.add('more-splash');
    document.body.style.overflow = '';
  });

  close.addEventListener('click', () => {
    overay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  // Form

  let message = {
    loaging: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form');
  let input = form.getElementsByTagName('input');
  let statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  form.addEventListener('submit', event => {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/form');
    request.setRequestHeader(
      'Content-type',
      'application/x-www-form-urlencoded'
    );

    let formData = new FormData(form);
    request.send(formData);

    request.addEventListener('readystatechange', () => {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loaging;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });
  });
});
