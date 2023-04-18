export async function filmNaneLength(movies) {
    try {

    movies.results.forEach(element => {
    const fullFilmName = element.title;
    const maxLength = 30;
    let filmName = ''

    if (fullFilmName.length > maxLength){
      filmName = fullFilmName
      .split('')
      .slice(0, maxLength)
      .join('') + '...';
    } else {filmName = fullFilmName}
    element.title = filmName
  })
    } catch (err) {
    console.log(err);
  }
}


export async function filmNaneLengthById(movies) {
  try {
    movies.forEach(element => {
      const fullFilmName = element.title;
      const maxLength = 30;
      let filmName = '';

      if (fullFilmName.length > maxLength) {
        filmName = fullFilmName.split('').slice(0, maxLength).join('') + '...';
      } else {
        filmName = fullFilmName;
      }
      element.title = filmName;
    });
  } catch (err) {
    console.log(err);
  }
}
