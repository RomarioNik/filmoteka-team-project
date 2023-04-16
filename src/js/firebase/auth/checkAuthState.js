import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './getAuth';

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

function createNameUser(nameUser) {
  let newNmame = nameUser.split('@')[0];
  const bigName = newNmame[0].toUpperCase() + newNmame.slice(1);
  return bigName;
}

function userIsAuth(user) {
  document.querySelector('.watch_queue_list').style.display = 'flex';
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
  document.querySelector('.watch_queue_list').style.display = 'none';
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

// function renderWelcomeMessage(userName) {
//   let textWrap = document.createElement('div');
//   textWrap.classList.add('login__textWrap');

//   let textHello = document.createElement('p');
//   textHello.textContent = 'Hello,';
//   textHello.classList.add('login__textHello');

//   let textName = document.createElement('p');
//   textName.textContent = userName[0].toUpperCase() + userName.slice(1);
//   textName.classList.add('login__textName');

//   textWrap.insertAdjacentElement('beforeend', textHello);
//   textWrap.insertAdjacentElement('beforeend', textName);

//   document
//     .querySelector('.login')
//     .insertAdjacentElement('afterbegin', textWrap);
// }

// .btn_watch
// .btn_queue
// .watch_queue_list
// .login__email
// .login__password
