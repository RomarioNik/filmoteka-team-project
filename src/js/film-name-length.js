export async function filmNaneLength(movies) {
    try {

    movies.results.forEach(element => {
    const fullFilmName = element.original_title;
    const maxLength = 30;
    let filmName = ''

    if (fullFilmName.length > maxLength){
      filmName = fullFilmName
      .split('')
      .slice(0, maxLength)
      .join('') + '...';
    } else {filmName = fullFilmName}
    element.original_title = filmName
  })
    } catch (err) {
    console.log(err);
  }
}



