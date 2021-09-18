const burger = document.querySelector('.header_burger')
const menu = document.querySelector('.nav_menu')

burger.addEventListener('click', openMenu)

function openMenu() {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
}