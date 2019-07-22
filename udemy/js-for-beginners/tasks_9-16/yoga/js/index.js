window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let calc = required('./parts/calc.js');
  let form = required('./parts/form.js');
  let modal = required('./parts/modal.js');
  let slider = required('./parts/slider.js');
  let tabs = required('./parts/tabs.js');
  let timer = required('./parts/timer.js');

  calc();
  form();
  modal();
  slider();
  tabs();
  timer();
});
