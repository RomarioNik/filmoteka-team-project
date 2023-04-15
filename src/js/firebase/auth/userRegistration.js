import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './getAuth';

// регистрирует пользователя при помощи email и password
export const userRegistration = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
