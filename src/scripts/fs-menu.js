function menu() {
  const burger = document.querySelector('.burger');
  const fsMenu = document.querySelector('.fs-menu');
  const burgerActive = document.querySelector('.burger--active');

  burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    fsMenu.classList.toggle('fs-menu--active');
  })
  
};

menu();