// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from '@jest/globals';
import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Genres } from '../../types/genres';
import { IMovie } from '../../types/movie';

import { IUseFetchMovie, useFetchMovies } from './fetch-movies.hook';

describe('Movies list interaction with api tests', () => {
  beforeAll(() => {
    const mock = new MockAdapter(axios);

    mock.onGet('http://localhost:4444/api/movies').reply(200, [
      {
        actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
        director: 'Tim Burton',
        genres: [Genres.Comedy, Genres.Fantasy],
        id: 1,
        plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
        runtime: '92',
        title: 'Beetlejuice',
        year: '1988',
      },
    ]);
  });

  it('useFetchMovies() should fetch data from movies service', async () => {
    const { result } = renderHook<IUseFetchMovie, void>(() => useFetchMovies());

    await waitFor(
      () => {
        expect(result.current.data?.length).toBe(1);
      },
      { interval: 100 },
    );
    const movies = result.current.data as IMovie[];

    const director = movies[0] && 'director' in movies[0] ? movies[0].director : false;

    expect(director).toEqual('Tim Burton');
  });
});
