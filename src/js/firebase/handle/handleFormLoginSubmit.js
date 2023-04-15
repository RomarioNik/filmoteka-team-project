import { userSignIn } from '../auth/userSignIn';
import { userRegistration } from '../auth/userRegistration';
import { renderWarningToLoginForm } from '../renderHTML/renderWarningToLoginForm';

// событие происходит при нажатии на одну из кнопок внутри формы
export const handleFormLoginSubmit = async e => {
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
        alert('You have signed in succesefully');
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
        alert('You have registered');
      })
      .catch(error => {
        // рендер ошибки
        renderWarningToLoginForm(arr, error.code);
      });
  }
};
