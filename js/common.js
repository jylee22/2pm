/*menu*/
const btnMenu = document.querySelector('#menuBar');
const btnMenuClose = document.querySelector('.menu .btn-close');
const nav = document.querySelector('.menu');

btnMenu.addEventListener('click', () =>{
  nav.classList.add('open');
  nav.classList.remove('close');
});

btnMenuClose.addEventListener('click', () =>{
  nav.classList.add('close');
  nav.classList.remove('open');
});