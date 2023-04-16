function theme() {

const btn = document.querySelector('.btn-theme-switcher');
const body = document.querySelector('body')

btn.addEventListener('click', (e) => {
    
    e.preventDefault();

    if (body.hasAttribute('dark')) {
        body.removeAttribute('dark', '');
        localStorage.removeItem('theme', 'dark');
    } else {
        body.setAttribute('dark', '');
        localStorage.setItem('theme', 'dark');
    }

    
})


    if (localStorage.getItem('theme') !== null) {
        body.setAttribute('dark', '');
    }
}
    
theme();   