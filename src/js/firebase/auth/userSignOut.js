import { signOut } from 'firebase/auth';
import { auth } from './getAuth';

// выход пользователя из системы
export const userSignOut = async () => {
  await signOut(auth);
};
