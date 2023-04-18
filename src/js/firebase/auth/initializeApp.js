import { initializeApp } from 'firebase/app';

// обект настроек для инициализации firebase. Получает создатель аккаунта. Требует секретности
export const app = initializeApp({
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // databaseURL: process.env.DATABASE_URL,
  // projectId: process.env.PROJECTID,
  // storageBucket: process.env.STORAGEBUCKET,
  // messagingSenderId: process.env.MESSAGINGSENDERID,
  // appId: process.env.APPID,
  apiKey: 'AIzaSyAO3tD1pqXZIsdhnKJFSI_jMKPR5KKiMQQ',
  authDomain: 'filmoteka-914a9.firebaseapp.com',
  databaseURL:
    'https://filmoteka-914a9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-914a9',
  storageBucket: 'filmoteka-914a9.appspot.com',
  messagingSenderId: '223511107478',
  appId: '1:223511107478:web:79a6ae1d076b4fe548efb7',
});
