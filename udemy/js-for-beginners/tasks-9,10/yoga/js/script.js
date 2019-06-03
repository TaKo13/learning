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

  info.addEventListener('click', function(event) {
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

  const deadline = '2019-06-04';

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

    setTimeout(function() {
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
});
