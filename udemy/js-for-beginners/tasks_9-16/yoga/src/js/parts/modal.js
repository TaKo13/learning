function modal() {
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
}

module.exports = modal;
