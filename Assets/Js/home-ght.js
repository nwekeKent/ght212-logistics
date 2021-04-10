
let burger = document.querySelector('.hamburger') 
burger.addEventListener('click', (e) => {
  burger.classList.toggle('hamburger--active');
  document.querySelector('.mobile-nav').classList.toggle('mobile-nav--active')
 
})
