import { userSignOut } from '../auth/userSignOut.js';

// событие происходит когда пользователь нажал кнопку выхода
export const handleClickSignOutBtn = async () => {
  await userSignOut();
};
