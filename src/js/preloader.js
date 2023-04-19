document.body.onload = function () {
        const preloader = document.getElementById('preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
}

export function showPreloader () {
    const preloader = document.querySelector('preloader');
    preloader.classList.contains('done') && preloader.classList.remove('done');
    console.log('запустился')
  }
  
  
  export function hidePreloader() {
    const preloader = document.querySelector('preloader');
    const iframe = document.querySelector('iframe');
    const img = document.querySelector('.film__img');
    iframe
      ? iframe.onload = function () { !preloader.classList.contains('done') && preloader.classList.add('done') }
      : img
      ? img.onload = function () { !preloader.classList.contains('done') && preloader.classList.add('done') }
      : !preloader.classList.contains('done') && preloader.classList.add('done')
      console.log('остановился')
  }