import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './getAuth';

// вход (аутентификация) пользователя после регистрации или выхода
export const userSignIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
