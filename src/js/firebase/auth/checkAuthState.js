import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './getAuth';

// проверка пользователя аутентифицирован или нет
export const checkAuthState = () => {
  onAuthStateChanged(auth, user => {
    if (user !== null) {
      document.querySelector('.login__btn-wrap').style.display = 'none';
      document.querySelector('.login__btn-signout').style.display = 'block';
      //   alert('You have logged in');
    } else {
      document.querySelector('.login__btn-wrap').style.display = 'block';
      document.querySelector('.login__btn-signout').style.display = 'none';
      //   alert('We have no user');
    }
  });
};
