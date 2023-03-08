import { useFetchMovies } from '../../hooks/fetch-movies/fetch-movies.hook';

import { MovieItemComponent } from './movie-item.component';

export const MovieListComponent = (): JSX.Element => {
  const { error, loading, data } = useFetchMovies();

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data?.map((movie) => (
        <MovieItemComponent key={movie.id} {...movie} />
      ))}
    </div>
  );
};
