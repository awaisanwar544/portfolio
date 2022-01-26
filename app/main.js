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

function addDataToModal(ref) {
  const btnId = ref.replace(/[^0-9]/g, '');
  const img = projects[btnId].image;
  const title = projects[btnId].title;
  const techList = projects[btnId].tech;
  const description = projects[btnId].description;
  const liveLink = projects[btnId].liveLink;
  const gitLink = projects[btnId].gitLink;

  //add techlist

  const modalList = document.querySelector('#modal-list');
  modalList.innerHTML = '';

  techList.forEach((value) => {
    const node = document.createElement('li');
    node.className = 'lang-item';
    const textNode = document.createTextNode(value);
    node.appendChild(textNode);
    modalList.appendChild(node);
  });

  document.querySelector('#screenshot').src = img;
  document.querySelector('#modal-title').innerHTML = title;
  document.querySelector('#description').innerHTML = description;
  document.querySelector('#live-link').href = liveLink;
  document.querySelector('#git-link').href = gitLink;
}

function displayModal() {
  addDataToModal(this.id);
  document.querySelector('#modal-wrapper').style.display = 'block';
}

const projectBtn = document.querySelectorAll('.project-btn');
projectBtn.forEach((item) => {
  item.addEventListener('click', displayModal);
});

const hideModal = () => {
  document.querySelector('#modal-wrapper').style.display = 'none';
};

const cancelBtnModal = document.querySelector('#modal-cancel');
cancelBtnModal.addEventListener('click', hideModal);

const projects = {
  0: {
    image: './assets/project-image1.png',
    title: 'Research Roof - A wordpress project',
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
    description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
    liveLink: 'https://github.com/awaisanwar544/portfolio',
    gitLink: 'https://github.com/awaisanwar544/portfolio',
  },
  1: {
    image: './assets/images.jpeg',
    title: "Project 2: I'm working on it",
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
    description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
    liveLink: 'https://github.com/awaisanwar544/portfolio',
    gitLink: 'https://github.com/awaisanwar544/portfolio',
  },
  2: {
    image: './assets/project-image1.png',
    title: "Project 3: I'm working on it",
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
    description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
    liveLink: 'https://github.com/awaisanwar544/portfolio',
    gitLink: 'https://github.com/awaisanwar544/portfolio',
  },
  3: {
    image: './assets/images.jpeg',
    title: "Project 4: I'm working on it",
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
    description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
    liveLink: 'https://github.com/awaisanwar544/portfolio',
    gitLink: 'https://github.com/awaisanwar544/portfolio',
  },
  4: {
    image: './assets/images.jpeg',
    title: "Project 5: I'm working on it",
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
    description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
    liveLink: 'https://github.com/awaisanwar544/portfolio',
    gitLink: 'https://github.com/awaisanwar544/portfolio',
  },
  5: {
    image: './assets/images.jpeg',
    title: "Project 6: I'm working on",
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
    description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
    liveLink: 'https://github.com/awaisanwar544/portfolio',
    gitLink: 'https://google.com',
  },
};

// populate data on existing projects

function addData() {
  const projectsList = document.querySelectorAll('.work-item');

  for (const item in projectsList) {
    projectsList[item].querySelector('img').src = projects[item].image;
    projectsList[item].querySelector('h2').innerHTML = projects[item].title;
    projectsList[item].querySelectorAll('.lang-item').forEach((value, index) => {
      value.firstChild.innerHTML = projects[item].tech[index];
    });
  }
}

addData();


