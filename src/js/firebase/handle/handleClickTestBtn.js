import * as basicLightbox from 'basiclightbox';
import { handleFormLoginSubmit } from './handleFormLoginSubmit';
import { handleClickSignOutBtn } from './handleClickSignOutBtn';
import { checkAuthState } from '../auth/checkAuthState';

// событие происходит когда пользователь нажал кнопку открытия модального окна с полями для ввода данных
export const handleClickTestBtn = () => {
  // создание модального окна
  const instance = basicLightbox.create(
    `
  <div class="modal-login">
    <form class="login">
      <input
        class="login__email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        class="login__password"
        type="password"
        name="password"
        placeholder="password"
      />
      <span class="login__warning" data-error="warning"></span>
      <div class="login__btn-wrap">
        <button class="login__btn-in btn" type="submit" data-log="login">Sign In</button>
        <button class="login__btn-reg btn" type="submit" data-reg="registration">Registration</button>
      </div>
      <button class="login__btn-signout btn" type="button" data-sign="signout">Sign Out</button>
    </form>
</div>`,
    {
      onShow: () => {},
      // удаляем обработчиков событий
      onClose: () => {
        document
          .querySelector('.login')
          .removeEventListener('submit', handleFormLoginSubmit);
        document
          .querySelector('.login__btn-signout')
          .removeEventListener('click', handleClickSignOutBtn);
      },
    }
  );

  // открываем модальное окно
  instance.show();

  // вешаем обработчиков событий
  document
    .querySelector('.login')
    .addEventListener('submit', handleFormLoginSubmit);
  document
    .querySelector('.login__btn-signout')
    .addEventListener('click', handleClickSignOutBtn);

  // проверка статуса пользователя: залогинен или нет+
  checkAuthState();
};
