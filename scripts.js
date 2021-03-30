const app = {};

app.displayNav = () => {
    const navigationMenu = document.querySelector('.mainNav');

        if (window.pageYOffset > 500) {
            navigationMenu.classList.add('visible');
            navigationMenu.classList.remove('hidden');
            
        } else {
            navigationMenu.classList.add('hidden');
            navigationMenu.classList.remove('visible');
        }
}

app.appInit = () => {
    window.addEventListener("scroll", app.displayNav);
}

app.appInit();