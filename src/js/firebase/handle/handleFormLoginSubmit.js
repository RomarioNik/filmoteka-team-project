import { userSignIn } from '../auth/userSignIn';
import { userRegistration } from '../auth/userRegistration';
import { renderWarningToLoginForm } from '../renderHTML/renderWarningToLoginForm';
import { createNameUser } from '../auth/createNameUser.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// событие происходит при нажатии на одну из кнопок внутри формы
// export const handleFormLoginSubmit = async e => {
//   e.preventDefault();

//   // получаем значения с инпутов
//   const email = e.target.elements.email.value;
//   const password = e.target.elements.password.value;
//   // получаем коллекцию всех элементов формы
//   const arr = e.target.children;

//   // проверяем на какую кнопку нажал пользователь. Обрабатываем кнопку "Войти"
//   if (e.submitter.matches('[data-log="login"]')) {
//     // запускаем вход пользователя
//     await userSignIn(email, password)
//       .then(userCredential => {
//         const userName = createNameUser(userCredential.user.email);
//         alert(`Hello, ${userName}, you have signed in`);
//         e.target.elements.email.value = '';
//         e.target.elements.password.value = '';
//       })
//       .catch(error => {
//         // рендер ошибки
//         renderWarningToLoginForm(arr, error.code);
//       });
//   }

//   // проверяем на какую кнопку нажал пользователь. Обрабатываем кнопку "Регистрация"
//   if (e.submitter.matches('[data-reg="registration"]')) {
//     // запускаем регистрацию пользователя
//     await userRegistration(email, password)
//       .then(userCredential => {
//         const userName = createNameUser(userCredential.user.email);
//         alert(`${userName}, you have registered`);
//       })
//       .catch(error => {
//         // рендер ошибки
//         renderWarningToLoginForm(arr, error.code);
//       });
//   }
// };

Notify.init({
  width: '300px',
  position: 'right-top',
  timeout: 4000,
  fontSize: '16px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  success: {
    background: '#16965a',
  },
});

export const handleFormLoginSubmit = modal => {
  return async function (e) {
    e.preventDefault();

    // получаем значения с инпутов
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    // получаем коллекцию всех элементов формы
    const arr = e.target.children;

    // проверяем на какую кнопку нажал пользователь. Обрабатываем кнопку "Войти"
    if (e.submitter.matches('[data-log="login"]')) {
      // запускаем вход пользователя
      await userSignIn(email, password)
        .then(userCredential => {
          modal.close();
          const userName = createNameUser(userCredential.user.email);
          // alert(`Hello, ${userName}, you have signed in`);
          Notify.success(`Hello, ${userName}, you have signed in`);
          e.target.elements.email.value = '';
          e.target.elements.password.value = '';
        })
        .catch(error => {
          // рендер ошибки
          renderWarningToLoginForm(arr, error.code);
        });
    }

    // проверяем на какую кнопку нажал пользователь. Обрабатываем кнопку "Регистрация"
    if (e.submitter.matches('[data-reg="registration"]')) {
      // запускаем регистрацию пользователя
      await userRegistration(email, password)
        .then(userCredential => {
          modal.close();
          const userName = createNameUser(userCredential.user.email);
          // alert(`${userName}, you have registered`);
          Notify.success(`Hello, ${userName}, you have signed in`);
        })
        .catch(error => {
          // рендер ошибки
          renderWarningToLoginForm(arr, error.code);
        });
    }
  };
};
