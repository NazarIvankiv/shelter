const menu = document.getElementById('menu')
const menu_toggle = document.getElementById('menu__toggle')
const menuBtn = document.getElementById('menu__btn')
menu.addEventListener('click', MenuClose)
menu_toggle.addEventListener('click', MenuOpen)
menu.classList.add('close-menu')
function MenuClose(){
    menu.classList.remove('open-menu')
    menu.classList.add('close-menu')
    menu_toggle.addEventListener('click', MenuOpen)
    menuBtn.classList.remove('menu-rotate')
    enableScroll()
}
function MenuOpen(){
    menu.classList.remove('close-menu')
    menu.classList.add('open-menu')
    menu_toggle.removeEventListener('click', MenuOpen)
    menu_toggle.addEventListener('click', MenuClose)
    menuBtn.classList.add('menu-rotate')
    disableScroll()
}

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
    };
    }
    function enableScroll() {
    window.onscroll = function() {};
    }