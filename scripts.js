const app = {};

app.displayNav = () => {
    const navigationMenu = document.querySelector('nav');
    console.log(navigationMenu)

        if (window.pageYOffset > window.innerHeight) {
        navigationMenu.classList.add('visible');
        navigationMenu.classList.remove('hidden');
        } else {
            navigationMenu.classList.add('hidden');
            navigationMenu.classList.remove('visible');
        }
}

app.appInit = () => {
    console.log(window.pageYOffset, window.innerHeight)
    window.addEventListener("scroll", app.displayNav);
}

app.appInit();