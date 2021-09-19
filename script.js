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

console.log('Score: 150/160 \n [+] вёрстка валидная +10 \n [+] верстка семантическая +20 \n [+] для оформления СV используются css-стили +10 \n [+] контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10 \n [+] вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10 \n [+] есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным +10 \n [+] на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10 \n [+] контакты для связи и перечень навыков оформлены в виде списка ul > li +10 \n [+] CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10 \n [+] CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода +10 \n [+] CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий +10 \n [+] CV выполнено на английском языке +10 \n [+] выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10 \n [-] есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs) +10 \n [+] дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10') 