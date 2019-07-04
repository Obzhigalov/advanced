const parallaxLayers = document.querySelectorAll('.parallax__layer');

function moveLayers(wScroll) {
  Array.from(parallaxLayers).forEach(layer => {
    
    const divider = layer.dataset.speed;
    const strafe = wScroll * divider;

    layer.style.transform = `translateY(-${strafe}%)`;
  });

};

window.addEventListener('scroll', function() {
  const wScroll = window.pageYOffset;
  moveLayers(wScroll);
});

const title = document.querySelector('.main__title-wrap');
const main = document.querySelector('.main');
const maxMove = main.offsetWidth / 30;
const titleCenterX = title.offsetLeft + (title.offsetWidth / 2);
const titleCenterY = title.offsetTop + (title.offsetHeight / 2);
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
    title.style.transform = "translate3d("+(-1 * distX) / 100 + "px," + (-1 * distY) / 100 + "px, 0)";
    }
  })