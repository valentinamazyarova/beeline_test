let burger = document.querySelector('.burger');
let aside = document.querySelector('.aside');

burger.addEventListener('click', () => {
    aside.classList.toggle('burger_active')
})

