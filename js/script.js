const searchLink = document.querySelector('.search-link');
const searchBlock = document.querySelector('.header-search');
const searchClose = document.querySelector('.header-search__close');

searchLink.addEventListener('click', () => {
    searchBlock.style.display = 'block';
});
searchClose.addEventListener('click', () => {
    searchBlock.style.display = 'none';
});


const burger = document.querySelector('.burger_menu');
const navMenu = document.querySelector('.nav__menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})