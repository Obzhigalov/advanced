function menu() {
  const burger = document.querySelector('.burger');
  const fsMenu = document.querySelector('.fs-menu');
  const wrapper = document.querySelector('.wrapper');

  burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    fsMenu.classList.toggle('fs-menu--active');
    wrapper.classList.toggle('wrapper--fs-menu');
  });

  fsMenu.addEventListener('click', ()=> {
    const target = event.target;


    if(target.classList.contains('nav__list-link')) {
      burger.classList.toggle('burger--active');
      fsMenu.classList.toggle('fs-menu--active');
      wrapper.classList.toggle('wrapper--fs-menu');
    }

  })
};

menu();