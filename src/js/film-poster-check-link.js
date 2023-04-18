export async function filmPosterLink(movies) {
  try {
    movies.results.forEach(element => {
      if (element.poster_path === null) {
        element.poster_path =
          'https://upload.wikimedia.org/wikipedia/en/d/d6/Image_coming_soon.png';
        return;
      }
      element.poster_path =
        'https://image.tmdb.org/t/p/w500' + element.poster_path;
    });
  } catch (err) {
    console.log(err);
  }
}

export async function filmPosterLinkById(movies) {
  try {
    movies.forEach(element => {
      if (element.poster_path === null) {
        element.poster_path =
          'https://upload.wikimedia.org/wikipedia/en/d/d6/Image_coming_soon.png';
        return;
      }
      element.poster_path =
        'https://image.tmdb.org/t/p/w500' + element.poster_path;
    });
  } catch (err) {
    console.log(err);
  }
}
