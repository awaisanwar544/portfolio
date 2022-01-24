const displayMenu = () => {
  document.querySelector('#mobile-menu').className = 'mobile-menu';
};

const hideMenu = () => {
  document.querySelector('#mobile-menu').className = 'd-none';
};

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', displayMenu);

const cancelBtn = document.querySelector('#cancel_menu');
cancelBtn.addEventListener('click', hideMenu);

const navItems = document.querySelectorAll('.nav-link-mobile');
navItems.forEach((item) => {
  item.addEventListener('click', hideMenu);
});
