import { auth } from './auth/getAuth';
import { getDatabase, ref, get, update, child } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';

// object is on the server
// {
//   watched: [594767, 594767];
//   queue: [594767, 594767];
// }

// получаем бд
const db = getDatabase();

function writeUserData(id, nameButton) {
  // проверяем вошел ли пользователь
  onAuthStateChanged(auth, user => {
    if (user === null) {
      alert('Please sign IN updateUserData :-)');
      return;
    }

    const dbRef = ref(db);
    // получаем объект пользователя
    get(child(dbRef, `users/${user.uid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          // do something
          const data = snapshot.val();

          // если объекта совсем нет
          if (data === null) {
            const movies = {
              [nameButton]: [id],
            };
            updateData(movies);
            return;
          }

          // если в объекте нет нужного свойства
          if (!nameButton in data) {
            const arr = [id];
            data[nameButton] = arr;
            updateData(data);
            return;
          }

          // проверяем, если ли id в массиве
          const isNumber = data[nameButton].some(el => el === id);
          if (isNumber) {
            return;
          }

          // если в объекте есть нужное свойство
          data[nameButton].push(id);
          updateData(data);

          // перезаписываем объект на сервере
          function updateData(newData) {
            update(ref(db, `users/${user.uid}`), newData)
              .then(() => {
                console.log('Data updated');
              })
              .catch(error => {
                console.error(error);
              });
          }
          // do something
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
}

// writeUserData(594768, 'watched');

function readUserData() {
  // проверяем вошел ли пользователь
  onAuthStateChanged(auth, user => {
    if (user === null) {
      alert('Please sign IN readUserData :-)');
      return;
    }

    const dbRef = ref(db);
    // получаем объект пользователя
    get(child(dbRef, `users/${user.uid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          //   console.log(snapshot.val());
          // нужно прописать куда передать объект с id фильмов
          // do something
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
}
// readUserData();

function removeUserData(id, nameButton) {
  // проверяем вошел ли пользователь
  onAuthStateChanged(auth, user => {
    if (user === null) {
      alert('Please sign IN :-)');
      return;
    }

    const dbRef = ref(db);
    // получаем объект пользователя
    get(child(dbRef, `users/${user.uid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          // получаем объект
          const data = snapshot.val();
          // находим индекс елемента в массиве
          const idMovie = data[nameButton].findIndex(el => el === id);
          if (idMovie === -1) {
            return;
          }
          // удаляем элемент с массива
          data[nameButton].splice(idMovie, 1);

          // перезаписываем объект на сервере
          update(ref(db, `users/${user.uid}`), data)
            .then(() => {
              console.log('Data updated');
            })
            .catch(error => {
              console.error(error);
            });
        } else {
          console.log('No object available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
}
// removeUserData(594767, 'watched');
