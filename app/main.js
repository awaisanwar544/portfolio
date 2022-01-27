const projects = {
  data: {
    proj: [
      {
        image: './assets/project-image1.png',
        title: 'Research Roof - A wordpress project',
        tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
        description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
        liveLink: 'https://github.com/awaisanwar544/portfolio',
        gitLink: 'https://github.com/awaisanwar544/portfolio',
      },
      {
        image: './assets/images.jpeg',
        title: "Project 2: I'm working on it",
        tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
        description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
        liveLink: 'https://github.com/awaisanwar544/portfolio',
        gitLink: 'https://github.com/awaisanwar544/portfolio',
      },
      {
        image: './assets/project-image1.png',
        title: "Project 3: I'm working on it",
        tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
        description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
        liveLink: 'https://github.com/awaisanwar544/portfolio',
        gitLink: 'https://github.com/awaisanwar544/portfolio',
      },
      {
        image: './assets/images.jpeg',
        title: "Project 4: I'm working on it",
        tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
        description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
        liveLink: 'https://github.com/awaisanwar544/portfolio',
        gitLink: 'https://github.com/awaisanwar544/portfolio',
      },
      {
        image: './assets/images.jpeg',
        title: "Project 5: I'm working on it",
        tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
        description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
        liveLink: 'https://github.com/awaisanwar544/portfolio',
        gitLink: 'https://github.com/awaisanwar544/portfolio',
      },
      {
        image: './assets/images.jpeg',
        title: "Project 6: I'm working on",
        tech: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
        description: 'orem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio aut illum officia unde, quod aliquam eos delectus aspernatur temporibus accusantium, sint quisquam sed quaerat provident tempora reprehenderit explicabo amet.',
        liveLink: 'https://github.com/awaisanwar544/portfolio',
        gitLink: 'https://google.com',
      },
    ],
  },
};

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
  const btnId = parseInt(ref.replace(/[^0-9]/g, ''), 10);
  const { data: { proj } } = projects;
  const {
    image, title, tech, description, liveLink, gitLink,
  } = proj[btnId];

  // add techlist

  const modalList = document.querySelector('#modal-list');
  modalList.innerHTML = '';

  tech.forEach((value) => {
    const node = document.createElement('li');
    node.className = 'lang-item';
    const textNode = document.createTextNode(value);
    node.appendChild(textNode);
    modalList.appendChild(node);
  });

  document.querySelector('#screenshot').src = image;
  document.querySelector('#modal-title').innerHTML = title;
  document.querySelector('#description').innerHTML = description;
  document.querySelector('#live-link').href = liveLink;
  document.querySelector('#git-link').href = gitLink;
}

// populate data on existing projects

function addData() {
  const projectsList = document.querySelectorAll('.work-item');
  Object.keys(projectsList).forEach((item) => {
    projectsList[item].querySelector('img').src = projects.data.proj[item].image;
    projectsList[item].querySelector('h2').innerHTML = projects.data.proj[item].title;
    projectsList[item].querySelectorAll('.lang-item').forEach((value, index) => {
      const val = value;
      val.firstChild.innerHTML = projects.data.proj[item].tech[index];
    });
  });
}

function addElement(ele, val, cName, eleId, parent) {
  const element = document.createElement(ele);
  if (cName) {
    element.className = cName;
  }
  element.innerHTML = val;
  if (eleId) {
    element.id = eleId;
  }
  parent.appendChild(element);
}

function addWorkItem() {
  let parent = document.querySelector('#items-container');
  let ele = 'div';
  let cName = 'work-item';
  let val = '';
  let eleId = false;

  const dataLength = Object.getOwnPropertyNames(projects.data.proj).length;
  for (let i = 0; i < dataLength - 1; i += 1) {
    addElement(ele, val, cName, eleId, parent);
  }

  parent = document.querySelectorAll('.work-item');
  cName = 'rounded-img';
  parent.forEach((item) => {
    addElement(ele, val, cName, eleId, item);
  });

  parent = document.querySelectorAll('.rounded-img');
  cName = 'project-image';
  ele = 'img';
  parent.forEach((item) => {
    addElement(ele, val, cName, eleId, item);
  });

  parent = document.querySelectorAll('.work-item');
  cName = 'work-item-details';
  ele = 'div';
  parent.forEach((item) => {
    addElement(ele, val, cName, eleId, item);
  });

  parent = document.querySelectorAll('.work-item-details');
  cName = 'work-item-title primary-font primary-text-color';
  ele = 'h2';
  parent.forEach((item) => {
    addElement(ele, val, cName, eleId, item);
  });

  cName = 'work-item-lang primary-font';
  ele = 'ul';
  parent.forEach((item) => {
    addElement(ele, val, cName, eleId, item);
  });

  cName = 'work-item-button work-item-btn';
  ele = 'div';
  parent.forEach((item) => {
    addElement(ele, val, cName, eleId, item);
  });

  parent = document.querySelectorAll('.work-item-lang');
  cName = 'lang-item';
  ele = 'li';
  parent.forEach((item, index) => {
    const liCount = Object.keys(projects.data.proj[index].tech).length;
    for (let i = 0; i < liCount; i += 1) {
      addElement(ele, val, cName, eleId, item);
    }
  });

  parent = document.querySelectorAll('.lang-item');
  cName = 'lang-item-p';
  ele = 'p';
  parent.forEach((item) => {
    addElement(ele, val, cName, eleId, item);
  });

  parent = document.querySelectorAll('.work-item-btn');
  cName = 'project-btn button work-item-button primary-font';
  ele = 'button';
  val = 'See Project';
  parent.forEach((item, index) => {
    eleId = `'proj-' ${index}`;
    addElement(ele, val, cName, eleId, item);
  });
}

// create work section

function addWorkSection() {
// h2 heading

  const parent = document.querySelector('#works');
  let ele = 'h2';
  let cName = 'primary-text-color primary-font heading';
  let val = 'My Recent works';
  let eleId = 'worksh2';
  addElement(ele, val, cName, eleId, parent);

  // div indicator

  ele = 'div';
  cName = 'indicator';
  val = '';
  eleId = false;
  addElement(ele, val, cName, eleId, parent);

  // item container

  cName = false;
  eleId = 'items-container';
  addElement(ele, val, cName, eleId, parent);

  addWorkItem();
}

addWorkSection();
addData();

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

// form validation

const contactForm = document.querySelector('#mobile-form');
const EMAIL_REQUIRED = 'Please enter email address.';
const EMAIL_CASE = 'Please enter email in "lower-case" letters';
const EMAIL_INVALID = 'Please enter email in correct format e.g, abcxyz@domain.something';

function hasValue(input) {
  if (input !== '') {
    return true;
  } return false;
}

function isLowerCase(input) {
  if (input === input.toLowerCase()) {
    return true;
  } return false;
}

function isFormatted(input) {
  const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,6}$/;
  if (regExp.test(input)) {
    return true;
  } return false;
}

function success() {
  const msg = 'Thanks for contacting us! Please wait a moment while your form is submitting';
  document.querySelector('small').className = 'success';
  document.querySelector('small').innerHTML = msg;
}

function error(msg) {
  document.querySelector('small').className = 'error';
  document.querySelector('small').innerHTML = msg;
  document.querySelector('#email').className = 'error-border text-fields';
}

