let sections = document.querySelectorAll('section');
let sidebarLinks = document.querySelectorAll('.sidebar-link');
let navLinks = document.querySelectorAll('.nav-link');
let indicatorLinks = document.querySelectorAll('.indicator');

let currentSection = 'home';
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (window.scrollY >= (section.offsetTop - 200)) {
      currentSection = section.id;
    }
  });

  sidebarLinks.forEach(link => {
    if (link.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active');
      link.classList.add('active');
    }
  });

  navLinks.forEach(link => {
    if (link.href.includes(currentSection)) {
      document.querySelector('.nav-active').classList.remove('nav-active');
      link.classList.add('nav-active');
    }
  });

  indicatorLinks.forEach(link => {
    if (link.href.includes(currentSection)) {
      document.querySelector('.indicator-active').classList.remove('indicator-active');
      link.classList.add('indicator-active');
    }
  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbyrzHiDQ_cxRVGV9yHJtj3dqzoT8oZt_BfBdYxrEBcGTvqUyYBhYWK4xxqRkDFaLLw/exec';
const form = document.forms['submit-to-google-sheet'];
const myAlert = document.querySelector('.dismiss-alert');
const closeBtn = document.querySelector('.dismiss-button');
const sendBtn = document.querySelector('.send-button');
const loadingBtn = document.querySelector('.loading-button');

form.addEventListener('submit', e => {
  e.preventDefault();
  sendBtn.classList.toggle('disabled');
  loadingBtn.classList.toggle('disabled');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      myAlert.classList.toggle('disabled');
      sendBtn.classList.toggle('disabled');
      loadingBtn.classList.toggle('disabled');
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

closeBtn.addEventListener('click', closeAlert);

function closeAlert() {
  myAlert.classList.toggle('disabled');
};

const menuBtn = document.querySelector('.hamburger-menu');
const mainMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');
const menuId = document.getElementById('menu');

menuBtn.addEventListener('click', showMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', showMenu);
});

document.onclick = function() {
  menuId.classList.remove('show');
}

function showMenu(e) {
  e.stopPropagation();
  mainMenu.classList.toggle('show');
}