function form() {
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
}

module.exports = form;
