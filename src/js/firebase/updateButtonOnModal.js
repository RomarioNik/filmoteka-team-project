import { getUserData } from './crudData';

export function updateButtonOnModal(idButton) {
  getUserData(isIdMovie);

  function isIdMovie(data) {
    const btnWatched = document.querySelector('[data-btnname="watched"]');
    const btnQueue = document.querySelector('[data-btnname="queue"]');

    if (data.watched.includes(idButton)) {
      btnWatched.innerText = 'Remove from watched';
    }

    if (!data.watched.includes(idButton)) {
      btnWatched.innerText = 'Add to watched';
    }

    if (data.queue.includes(idButton)) {
      btnQueue.innerText = 'Remove from queue';
    }

    if (!data.queue.includes(idButton)) {
      btnQueue.innerText = 'Add to queue';
    }
  }
}
