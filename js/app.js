const cryptoItems = document.querySelectorAll('.crypto__item');

cryptoItems.forEach((item) => {
  item.addEventListener('click', () => {
    cryptoItems.forEach((item) => item.classList.remove('--active'));
    item.classList.add('--active');
  });
});
