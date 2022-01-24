const display_menu = () => {
    document.querySelector('#mobile-menu').className = 'mobile-menu';
}

const hide_menu = () => {
    document.querySelector('#mobile-menu').className = 'd-none';
}

const menu_btn = document.querySelector('#menu');
menu_btn.addEventListener('click', display_menu);

const cancel_btn = document.querySelector('#cancel_menu');
cancel_btn.addEventListener('click', hide_menu);

const nav_items = document.querySelectorAll('.nav-link-mobile');
nav_items.forEach(item => {
    item.addEventListener('click', hide_menu);
})
