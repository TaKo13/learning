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
  statusMessage.style.height = '30px';
  statusMessage.style.width = '365px';

  statusMessage.classList.add('status');

  form.addEventListener('submit', event => {
    event.preventDefault();
    form.appendChild(statusMessage);
    const formData = new FormData(form);
    // const obj = {};

    // formData.forEach((key, value) => {
    //   obj[key] = value;
    // });
    // const json = JSON.stringify(obj);
    // let request = new XMLHttpRequest();
    // request.open('POST', 'http://localhost:3000/form');
    // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // // request.setRequestHeader(
    // //   'Content-type',
    // //   'application/x-www-form-urlencoded'
    // // ); пример отправки формы

    // request.send(json);

    // request.addEventListener('readystatechange', () => {
    //   if (request.readyState < 4) {
    //     statusMessage.innerHTML = message.loaging;
    //     statusMessage.style.background = 'blue';
    //   } else if (request.readyState === 4 && request.status == 200) {
    //     statusMessage.innerHTML = message.success;
    //     statusMessage.style.background = 'green';
    //   } else {
    //     statusMessage.innerHTML = message.failure;
    //     statusMessage.style.background = 'red';
    //   }
    // });

    /************** fetch *************/
    // statusMessage.innerHTML = message.loaging;
    // statusMessage.style.background = 'blue';

    // fetch('http://localhost:3000/form', {
    //   method: 'post',
    //   headers: {
    //     'content-type': 'application/json; charset=utf-8'
    //   },
    //   body: json
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     statusMessage.innerHTML = message.success;
    //     statusMessage.style.background = 'green';
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     statusMessage.innerHTML = message.failure;
    //     statusMessage.style.background = 'red';
    //     console.error(err);
    //   });
    /************** fetch *************/

    /********** Promise *******/
    const sendFromInJson = formData => {
      const obj = {};

      formData.forEach((key, value) => {
        obj[key] = value;
      });
      const json = JSON.stringify(obj);

      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open('POST', 'http://localhost:3000/form');
        request.setRequestHeader(
          'Content-type',
          'application/json; charset=utf-8'
        );
        request.send(json);

        request.addEventListener('readystatechange', () => {
          if (request.status == 200) {
            resolve();
          } else {
            reject();
          }
        });
      });
    };

    statusMessage.innerHTML = message.loaging;
    statusMessage.style.background = 'blue';
    sendFromInJson(formData)
      .then(ar => {
        statusMessage.innerHTML = message.success;
        statusMessage.style.background = 'green';
        console.log();
      })
      .catch(err => {
        statusMessage.innerHTML = message.failure;
        statusMessage.style.background = 'red';
        console.error(err);
      });
    /********** Promise *******/

    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });

  //  Slider

  let slideIndex = 1;
  let slides = document.querySelectorAll('.slider-item');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let dotsWrap = document.querySelector('.slider-dots');
  let dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);
  function showSlides(index) {
    if (index > slides.length) {
      slideIndex = 1;
    }
    if (index < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => (item.style.display = 'none'));
    dots.forEach(item => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(index) {
    showSlides((slideIndex += index));
  }
  function currentSlide(index) {
    showSlides((slideIndex = index));
  }

  prev.addEventListener('click', function() {
    plusSlides(-1);
  });

  next.addEventListener('click', function() {
    plusSlides(1);
  });

  setInterval(() => plusSlides(1), 3000);

  dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains('dot') &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });

  //  Calc

  let persons = document.querySelectorAll('.counter-block-input')[0];
  let restDays = document.querySelectorAll('.counter-block-input')[1];
  let place = document.getElementById('select');
  let totalValue = document.getElementById('total');
  let personsSum = 0;
  let daysSum = 0;
  let total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function() {
    personsSum = +this.value;

    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('change', function() {
    daysSum = +this.value;

    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener('change', function() {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let currTotal = total;
      totalValue.innerHTML = currTotal * this.options[this.selectedIndex].value;
    }
  });
});
