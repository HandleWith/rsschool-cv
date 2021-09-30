const burger = document.querySelector('.header_burger')
const menu = document.querySelector('.nav_menu')
const topbtn = document.querySelector('.top_btn')

burger.addEventListener('click', openMenu)
menu.addEventListener('click', openMenu)
document.addEventListener('scroll', hideBtn)
topbtn.addEventListener('click', toTop)

function openMenu() {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
}

function hideBtn() {
    if(document.documentElement.scrollTop > 30) {
        topbtn.style.display = "block"
    }
    else {
        topbtn.style.display = "none"
    }
}

function toTop() {
    document.documentElement.scrollTop = 0
}