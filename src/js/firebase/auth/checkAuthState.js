import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './getAuth';
import refsEl from '../../refs';
import { createNameUser } from './createNameUser.js';

const refs = refsEl();

// проверка пользователя аутентифицирован или нет
export const checkAuthState = () => {
  onAuthStateChanged(auth, user => {
    if (user !== null) {
      userIsAuth(user.email);
      //   alert('You have logged in');
    } else {
      userIsNotAuth();
      //   alert('We have no user');
    }
  });
};

function userIsAuth(user) {
  document.querySelector('.watch_queue_list').style.display = 'flex';
  refs.btnTestEl.innerText = 'Sign Out';
  // console.log('userIsAuth', isModalShow());
  if (isModalShow()) {
    document.querySelector('.login__welcome').style.display = 'flex';
    document.querySelector('.login__name').innerHTML = createNameUser(user);
    document.querySelector('.login__btn-wrap').style.display = 'none';
    document.querySelector('.login__btn-signout').style.display = 'block';
    document.querySelector('.login__email').style.display = 'none';
    document.querySelector('.login__password').style.display = 'none';
  }
}

function userIsNotAuth() {
  // document.querySelector('.watch_queue_list').style.display = 'none';
  refs.btnTestEl.innerText = 'My Secret Lib';
  // console.log('userIsNotAuth', isModalShow());
  if (isModalShow()) {
    document.querySelector('.login__btn-wrap').style.display = 'flex';
    document.querySelector('.login__name').innerHTML = '';
    document.querySelector('.login__btn-signout').style.display = 'none';
    document.querySelector('.login__welcome').style.display = 'none';
    document.querySelector('.login__email').style.display = 'block';
    document.querySelector('.login__password').style.display = 'block';
  }
}

function isModalShow() {
  const isModalShow = document.querySelector('.modal-login');

  if (!isModalShow) {
    return false;
  }
  return true;
}
