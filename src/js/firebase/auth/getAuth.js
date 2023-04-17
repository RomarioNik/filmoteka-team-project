import { getAuth } from 'firebase/auth';
import { app } from './initializeApp';

// инициализация firebase
export const auth = getAuth(app);
