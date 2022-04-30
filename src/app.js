document.addEventListener('DOMContentLoaded', () => handleMenu())

const handleMenu = () => {
  const btnOpen = document.querySelector('.btn-menu');
  const btnClose = document.querySelector('.btn-close');

  btnOpen.addEventListener('click', (e) => {
    document.querySelector('.menu__wrapper').classList.add('active');
  });

  btnClose.addEventListener('click', (e) => {
    document.querySelector('.menu__wrapper').classList.remove('active');
  });
};
