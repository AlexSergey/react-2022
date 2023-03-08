// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from '@jest/globals';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// eslint-disable-next-line import/no-extraneous-dependencies
import { act, create } from 'react-test-renderer';

import { sleep } from '../../helpers/sleep';
import { Genres } from '../../types/genres';

import { MovieListComponent } from './movie-list.component';

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

  it('MovieListComponent renders with one film', async () => {
    const movieList = create(<MovieListComponent />);

    await act(sleep(100));

    const tree = movieList.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
