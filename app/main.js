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

// code for modal
 
const displayModal = () => {
  document.querySelector('#modal-wrapper').style.display = 'block';
}
 
const hideModal = () => {
  document.querySelector('#modal-wrapper').style.display = 'none';
};
 
const projectBtn = document.querySelectorAll('.project-btn');
projectBtn.forEach((item) => {
  item.addEventListener('click', displayModal);
});
 
const cancelBtnModal = document.querySelector('#modal-cancel');
cancelBtnModal.addEventListener('click', hideModal);
 
const modlaWrapper = document.querySelector('#modal-wrapper');
modlaWrapper.addEventListener('click', hideModal);
 
// data for projects
 
let projects= {
  0: {
    image: "./assets/images.jpeg",
    title: "Project 1: I'm working on it",
    tech: ["HTML", "CSS", "Javascript", "Ruby on Rails"],
    description: "orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.",
    liveLink: "https://github.com/awaisanwar544/portfolio",
    gitLink: "https://github.com/awaisanwar544/portfolio"
  },
  1: {
    image: "./assets/images.jpeg",
    title: "Project 2: I'm working on it",
    tech: ["HTML", "CSS", "Javascript", "Ruby on Rails"],
    description: "orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.",
    liveLink: "https://github.com/awaisanwar544/portfolio",
    gitLink: "https://github.com/awaisanwar544/portfolio"
  },
  2: {
    image: "./assets/images.jpeg",
    title: "Project 3: I'm working on it",
    tech: ["HTML", "CSS", "Javascript", "Ruby on Rails"],
    description: "orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.",
    liveLink: "https://github.com/awaisanwar544/portfolio",
    gitLink: "https://github.com/awaisanwar544/portfolio"
  },
  3: {
    image: "./assets/images.jpeg",
    title: "Project 4: I'm working on it",
    tech: ["HTML", "CSS", "Javascript", "Ruby on Rails"],
    description: "orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.",
    liveLink: "https://github.com/awaisanwar544/portfolio",
    gitLink: "https://github.com/awaisanwar544/portfolio"
  },
  4: {
    image: "./assets/images.jpeg",
    title: "Project 5: I'm working on it",
    tech: ["HTML", "CSS", "Javascript", "Ruby on Rails"],
    description: "orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.",
    liveLink: "https://github.com/awaisanwar544/portfolio",
    gitLink: "https://github.com/awaisanwar544/portfolio"
  },
  5: {
    image: "./assets/images.jpeg",
    title: "Project 6: I'm working on",
    tech: ["HTML", "CSS", "Javascript", "Ruby on Rails"],
    description: "orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.",
    liveLink: "https://github.com/awaisanwar544/portfolio",
    gitLink: "https://github.com/awaisanwar544/portfolio"
  }
};
 
// populate data on existing projects
 
function addData() {
  const projectsList = document.querySelectorAll('.work-item')
  
  for (const item in projectsList) {
    projectsList[item].querySelector('img').src = projects[item]['image'];
    projectsList[item].querySelector('h2').innerHTML = projects[item]['title']
    projectsList[item].querySelectorAll('.lang-item').forEach((value, index)=> {
      value.firstChild.innerHTML = projects[item]['tech'][index]
    })
  };
}
 
addData()
