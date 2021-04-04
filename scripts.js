//A namespace object
const app = {};

// display navigation bar once a user scrolls down over 70% of their screen's height
app.displayNav = () => {
    const navigationMenu = document.querySelector('.mainNav');

        if (window.pageYOffset > window.innerHeight * 0.7) {
            navigationMenu.classList.add('visible');
            navigationMenu.classList.remove('hidden');
            
        } else {
            navigationMenu.classList.add('hidden');
            navigationMenu.classList.remove('visible');
        }
}

// change the animation for elements of Projects section based on width of the user screen
app.changeAnimation = () => {
    const elementsAnimatedLeft = document.querySelectorAll('[data-aos="fade-left"]');
    const elementsAnimatedRight = document.querySelectorAll('[data-aos="fade-right"]');
    
    for (let element of elementsAnimatedLeft) {
        if (window.innerWidth < 1000) {
            if (element.classList[0] !== 'imageContainer') {
                element.removeAttribute('data-aos');
                element.setAttribute('data-aos', 'fade-up');
            } else {
                element.removeAttribute('data-aos');
                element.setAttribute('data-aos', 'fade-down');
            }
        } else {
            element.removeAttribute('data-aos');
            element.setAttribute('data-aos', 'fade-left');
        }
    } 

    for (let element of elementsAnimatedRight) {
        if (window.innerWidth < 1000) {
            if (element.classList[0] !== 'textContent') {
                element.removeAttribute('data-aos');
                element.setAttribute('data-aos', 'fade-down'); 
            } else {
                element.removeAttribute('data-aos');
                element.setAttribute('data-aos', 'fade-up');
            }
            
        } else {
            element.removeAttribute('data-aos');
            element.setAttribute('data-aos', 'fade-right');
        }
    } 
}

// register event listeners
app.appInit = () => {
    window.addEventListener("scroll", app.displayNav);
    window.addEventListener("DOMContentLoaded", app.changeAnimation);
}

// initialize AOS Library
AOS.init();
// initialize application
app.appInit();