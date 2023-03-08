const db = require('./db.json');

module.exports = () => {
  const data = { ...db };

  const allGenres = new Set();
  const allYears = new Set();
  const allDirectors = new Set();

  db.movies.forEach(({ genres }) => {
    if (Array.isArray(genres)) {
      genres.forEach(genre => {
        allGenres.add(genre);
      });
    }
  });

  db.movies.forEach(({ year }) => {
    allYears.add(year);
  });

  db.movies.forEach(({ director }) => {
    allDirectors.add(director);
  });

  if (allGenres.size > 0) {
    data.genres = Array.from(allGenres);
  }

  if (allYears.size > 0) {
    data.years = Array.from(allYears);
  }

  if (allDirectors.size > 0) {
    data.directors = Array.from(allDirectors);
  }

  return data
}
