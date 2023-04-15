export async function makeReleaseYear(movies) {
          try {
      
      movies.results.forEach(element => {
        const maxLength = 2;
        const releaseDate = element.release_date;
        const releaseYear = releaseDate
        .split('')
        .slice(0, 4)
        .join('');
         element.release_date = releaseYear;
        return releaseYear;
      })
      } catch (err) {
        console.log(err);
      }
    }