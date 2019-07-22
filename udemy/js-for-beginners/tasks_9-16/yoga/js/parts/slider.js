function slider() {
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
}

module.export = slider;
