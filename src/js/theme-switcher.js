function theme() {

const btn = document.querySelector('.btn-theme-switcher');
const body = document.querySelector('body')
const iconMoon = document.querySelector('#icon-moon1')
const iconSun = document.querySelector('#icon-sun1')
    
    console.log(btn);

btn.addEventListener('click', (e) => {
    
    e.preventDefault();

    if (body.hasAttribute('dark')) {
        body.removeAttribute('dark', '');
        iconMoon.classList.remove('visually-hidden')
        iconSun.classList.add('visually-hidden')
        localStorage.removeItem('theme', 'dark');
    } else {
        body.setAttribute('dark', '');
        iconMoon.classList.add('visually-hidden')
        iconSun.classList.remove('visually-hidden')
        localStorage.setItem('theme', 'dark');
    }

    
})


    if (localStorage.getItem('theme') !== null) {
        body.setAttribute('dark', '');
        iconMoon.classList.add('visually-hidden')
        iconSun.classList.remove('visually-hidden')
    }
}
    
theme(); 