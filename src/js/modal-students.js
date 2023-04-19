import * as BasicLightBox from 'basiclightbox';

const openStudentsModalBtn = document.querySelector('.footer-btn');
const template = document.querySelector('#lightbox-template').innerHTML;

openStudentsModalBtn.addEventListener('click', handleOpenModalClick);

export function handleOpenModalClick() {
  const lightbox = BasicLightBox.create(template, {
    onShow: instance => {},
    onClose: instance => {
      window.removeEventListener('keydown', modalClose);
    },
  });

  lightbox.show();

  if (lightbox.visible()) {
    const closeStudentsModalBtn = document.querySelector('.close-btn');
    closeStudentsModalBtn.addEventListener('click', () => {
      lightbox.close();
    });

    window.addEventListener('keydown', modalClose);

    function modalClose(evt) {
      if (evt.code === 'Escape') {
        lightbox.close();
      }
    }
  }
}
