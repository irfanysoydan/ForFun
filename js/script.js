/* Responsive Navigation Menu */

const navMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.nav-list');

    navbarToggler.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        navbarToggler.classList.toggle('toggle');
    })
};

navMenu();

/* İrfan Slider */
const sliderChange = () => {
    let firstChild, lastChild;
    const arrowLeft = document.querySelector('#left-arrow');
    const arrowRight = document.querySelector('#right-arrow');
    const irfanAll = document.querySelector('#irfan-slider')

    arrowLeft.addEventListener('click', () => {
        lastChild = irfanAll.lastElementChild;
        irfanAll.insertAdjacentElement('afterbegin', lastChild)
    })

    arrowRight.addEventListener('click', () => {
        firstChild = irfanAll.firstElementChild;
        irfanAll.insertAdjacentElement('beforeend', firstChild)
    })
}

sliderChange();


/* Scroll Reveal Animations */

ScrollReveal().reveal('.ani-left', {
    origin: 'left',
    distance: '10rem',
    duration: 750,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-right', {
    origin: 'right',
    distance: '10rem',
    duration: 750,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-fade-up', {
    opacity: 0,
    easing: 'ease-in'
});


ScrollReveal().reveal('.ani-bottom', {
    origin: 'bottom',
    distance: '10rem',
    duration: 750,
    easing: 'ease-out'
});

ScrollReveal().reveal('.ani-delay-0', {
    delay: 500
});

ScrollReveal().reveal('.ani-delay-1', {
    delay: 1000
});

ScrollReveal().reveal('.ani-delay-2', {
    delay: 1500
});