import { userSignOut } from '../auth/userSignOut.js';

// событие происходит когда пользователь нажал кнопку выхода
export const handleClickSignOutBtn = modal => {
  return function (e) {
    modal.close();
    // содержимое модалки меняет интерфейс быстрее
    // чем происходит закрытие, поэтому поставил задержку
    // в идеале на sing out нужна отдельная модалка
    setTimeout(() => {
      userSignOut();
    }, 400);
  };
};
