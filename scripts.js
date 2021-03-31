const app = {};

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

app.changeAnimation = () => {
    const elementsAnimatedLeft = document.querySelectorAll('[data-aos="fade-left"]');
    const elementsAnimatedRight = document.querySelectorAll('[data-aos="fade-right"]');
    // const soccerImage = document.querySelector('#soccerImage');
    // const 
    
    for (let element of elementsAnimatedLeft) {
        if (window.innerWidth < 1000) {
            console.log(element.classList[0] !== 'imageContainer')
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
            console.log(element.classList[0] !== 'textContent')
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

app.appInit = () => {
    window.addEventListener("scroll", app.displayNav);
    window.addEventListener("DOMContentLoaded", app.changeAnimation);
}

app.appInit();