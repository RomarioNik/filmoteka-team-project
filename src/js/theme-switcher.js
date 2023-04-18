function theme() {
  const btn = document.querySelector('.btn_theme_switcher');
  const body = document.querySelector('body');
  const iconMoon = document.querySelector('#icon-moon1');
  const iconSun = document.querySelector('#icon-sun1');

  btn.addEventListener('click', e => {
    e.preventDefault();

    if (body.hasAttribute('dark')) {
      body.removeAttribute('dark', '');
      iconMoon.classList.add('visually-hidden');
      iconSun.classList.remove('visually-hidden');
      localStorage.removeItem('theme', 'dark');
    } else {
      body.setAttribute('dark', '');
      iconMoon.classList.remove('visually-hidden');
      iconSun.classList.add('visually-hidden');
      localStorage.setItem('theme', 'dark');
    }
  });

  if (localStorage.getItem('theme') !== null) {
    body.setAttribute('dark', '');
    iconMoon.classList.remove('visually-hidden');
    iconSun.classList.add('visually-hidden');
  }
}

theme();
