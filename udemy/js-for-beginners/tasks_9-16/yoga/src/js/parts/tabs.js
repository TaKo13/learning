function tabs() {
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
}

module.exports = tabs;
