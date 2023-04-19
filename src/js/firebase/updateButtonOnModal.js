import { getUserData } from './crudData';

export function updateButtonOnModal(idButton) {
  getUserData(isIdMovie);

  function isIdMovie(data) {
    const btnWatched = document.querySelector('[data-btnname="watched"]');
    const btnQueue = document.querySelector('[data-btnname="queue"]');

    const watchedBool = 'watched' in data;

    if (!watchedBool) {
      btnWatched.innerText = 'Add to watched';
    }

    const queueBool = 'queue' in data;
    if (!queueBool) {
      btnQueue.innerText = 'Add to watched';
    }

    if (data.watched && data.watched.includes(idButton)) {
      btnWatched.innerText = 'Remove from watched';
    }

    if (data.watched && !data.watched.includes(idButton)) {
      btnWatched.innerText = 'Add to watched';
    }

    if (data.queue && data.queue.includes(idButton)) {
      btnQueue.innerText = 'Remove from queue';
    }

    if (data.queue && !data.queue.includes(idButton)) {
      btnQueue.innerText = 'Add to queue';
    }
  }
}
