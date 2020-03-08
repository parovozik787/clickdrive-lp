function burger() {
    const burger = document.querySelector('.burger');
    const burgerLine = document.querySelector('.burger__line');
    const navMenu = document.querySelector('.nav__menu');
    const body = document.querySelector('body');
    burger.addEventListener('click', function() {
        burgerLine.classList.toggle('burger__line--active');
        burger.classList.toggle('burger--active');
        navMenu.classList.toggle('nav__menu--active');
        body.classList.toggle('menu-open')
    })
}