function timer() {
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
}

module.export = timer;
