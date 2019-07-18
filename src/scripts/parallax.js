const parallax = function() {

    if(window.innerWidth > 1024) {
      const parallaxImage = document.querySelectorAll('.parallax__image');

      for(var i = 0; i < parallaxImage.length; i++) {
        const src = parallaxImage[i].getAttribute('data-src');
        parallaxImage[i].setAttribute('src', `${src}`)
      }
    }

    const parallaxLayers = document.querySelectorAll('.parallax__layer');

    window.addEventListener('scroll', function() {
      const wScroll = window.pageYOffset;
      moveLayers(wScroll);
    });

    function moveLayers(wScroll) {
      Array.from(parallaxLayers).forEach(layer => {
        
        const coef = layer.dataset.speed;
        const strafe = wScroll * coef;

        layer.style.transform = `translateY(-${strafe}%)`;
      });

    };


    const sky = document.querySelector('.parallax__sky');
    const main = document.querySelector('.main');
    const maxMove = main.offsetWidth / 30;
    const titleCenterX = sky.offsetLeft + (sky.offsetWidth / 2);
    const titleCenterY = sky.offsetTop + (sky.offsetHeight / 2);
    const mediaQuery = window.matchMedia("(min-width: 1200px)");

    function getMousePos(xRef, yRef) {
      let blockRect = main.getBoundingClientRect();
          return {
              x: Math.floor(xRef - blockRect.left) / 
                (blockRect.right - blockRect.left) * main.offsetWidth,
              y: Math.floor(yRef - blockRect.top) / 
                (blockRect.bottom - blockRect.top) * main.offsetHeight
          };
      };

    main.addEventListener("mousemove", function(e) {
        let mousePos = getMousePos(e.clientX, e.clientY),
        distX = mousePos.x - titleCenterX,
        distY = mousePos.y - titleCenterY;
        if (Math.abs(distX) < main.offsetWidth && distY < main.offsetHeight && mediaQuery.matches) {
        sky.style.transform = "translate3d("+(-1 * distX) / 100 + "px," + (-1 * distY) / 100 + "px, 0)";
        }
      })
}

parallax();