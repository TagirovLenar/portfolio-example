// SHOW MENU
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//remove menu mobile

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  // const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ============SHADOW HEADER============================= //

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

// ================================EMAIL JS=================== //
// const contactForm = document.getElementById("contact-form");
// contactMessage = document.getElementById("contact-message");

// const sendEmail = (e) => {
//   e.preventDefault();
//   emailjs.sendForm('', '', '', '')
// };

// contactForm.addEventListener("submit", sendEmail);


// ============================= SCROLL up==============================//

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >=450 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


// =====================DARK LIGHT THEME==========================//



// =================================scroll reveal============================
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})