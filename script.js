const logoLink = document.querySelector('.logo');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

menuIcon.addEventListener('click' , ()=>{
  menuIcon.classList.toggle('fa-x')
  navbar.classList.toggle('active')
});

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-x');

    sections.forEach(section => section.classList.remove('active'));
    sections[index].classList.add('active');
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});


const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn,idx) =>{
  btn.addEventListener('click', ()=>{
    const resumeDetails=document.querySelectorAll('.resume-details')
    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');

    resumeDetails.forEach(details => {
      details.classList.remove('active');
    });
    resumeDetails[idx].classList.add('active');
  });
});
function toggleImage() {
    const img1 = document.querySelector(".img-1");
    const img2 = document.querySelector(".img-2");

    img1.classList.toggle("active");
    img2.classList.toggle("active");
  }
document.addEventListener('DOMContentLoaded', function () {
  const arrowRight = document.querySelector('.arrow-right');
  const arrowLeft = document.querySelector('.arrow-left');
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
  const imgItems = document.querySelectorAll('.portfolio-carousel .img-item');
  const portfolioDetails = document.querySelectorAll('.portfolio-detail');
  let index = 0;

  const activePortfolio = () => {
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    // Sync detail box
    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    if (portfolioDetails[index]) {
      portfolioDetails[index].classList.add('active');
    }

    // Manage arrow disabled states
    if (index === 0) {
      arrowLeft.classList.add('disabled');
    } else {
      arrowLeft.classList.remove('disabled');
    }

    if (index === imgItems.length - 1) {
      arrowRight.classList.add('disabled');
    } else {
      arrowRight.classList.remove('disabled');
    }
  };

  arrowRight.addEventListener('click', () => {
    if (index < imgItems.length - 1) {
      index++;
      activePortfolio();
    }
  });

  arrowLeft.addEventListener('click', () => {
    if (index > 0) {
      index--;
      activePortfolio();
    }
  });

  // Initialize on load
  activePortfolio();
});







