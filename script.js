//burger button click
const navLinks = document.querySelector('.nav-links');
function clickHamburger(burger) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    (navLinks.classList.contains('active')) ? burger.children[0].src = 'img/icon-close.svg' : burger.children[0].src = 'img/icon-hamburger.svg';
  });
}
clickHamburger(document.querySelector('.hamburger'));

//page scrolling and show background navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if(pageYOffset >= 300) {
    navbar.classList.add('scroll');
  } else if(pageYOffset < 280) {
    navbar.classList.remove('scroll');
  }
});

//prev and next button hero click
const prevBtn = document.querySelectorAll('.prev-btn');
const nextBtn = document.querySelectorAll('.next-btn');
const heroContainer = document.querySelectorAll('.hero-container');
let heroWidth = heroContainer[0].clientWidth;
console.log(heroWidth);
let counter = 0;

//previous button
for(let prev of prevBtn) {
  prev.addEventListener('click', () => {
    counter--;
    if(counter < 0) counter = heroContainer.length - 1;
    for(let hero of heroContainer) {
      hero.style.transform = `translateX(-${heroWidth * counter}px)`;
    }
  });
}
//next button
for(let next of nextBtn) {
  next.addEventListener('click', () => {
    counter++;
    if(counter >= heroContainer.length) counter = 0;
    for(let hero of heroContainer) {
      hero.style.transform = `translateX(-${heroWidth * counter}px)`;
    }
  });
}