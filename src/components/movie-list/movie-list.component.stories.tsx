import { Story } from '@storybook/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useEffect, useRef } from 'react';

import cityOfGod from '../../mocks/assets/city-of-god.png';
import ratatouille from '../../mocks/assets/ratatouille.jpg';
import valkyrie from '../../mocks/assets/valkyrie.jpg';
import { Genres } from '../../types/genres';

import { MovieListComponent } from './movie-list.component';

export default {
  parameters: {
    docs: {
      description: {
        component:
          'Component for rendering movies. Presented in the form of cards with a film, a description and a banner.',
      },
    },
  },
  title: 'Components/MovieListComponent',
};

const useMockApi = (): void => {
  const apiMock = useRef<MockAdapter | false>(false);

  if (!apiMock.current) {
    apiMock.current = new MockAdapter(axios);

    apiMock.current.onGet('http://localhost:4444/api/movies').reply(200, [
      {
        actors: 'Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson',
        director: 'Bryan Singer',
        genres: [Genres.Drama, Genres.History, Genres.Thriller],
        id: 5,
        plot: 'A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.',
        posterUrl: valkyrie,
        runtime: '121',
        title: 'Valkyrie',
        year: '2008',
      },
      {
        actors: 'Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy',
        director: 'Brad Bird, Jan Pinkava',
        genres: [Genres.Animation, Genres.Comedy, Genres.Family],
        id: 6,
        plot: 'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.',
        posterUrl: ratatouille,
        runtime: '111',
        title: 'Ratatouille',
        year: '2007',
      },
      {
        actors: 'Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva',
        director: 'Fernando Meirelles, Kátia Lund',
        genres: [Genres.Crime, Genres.Drama],
        id: 7,
        plot: 'Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.',
        posterUrl: cityOfGod,
        runtime: '130',
        title: 'City of God',
        year: '2002',
      },
    ]);
  }

  useEffect(() => {
    return (): void => {
      if (apiMock.current) {
        apiMock.current.reset();
      }
    };
  }, []);
};

const Template: Story<{}> = (): JSX.Element => {
  useMockApi();

  return <MovieListComponent />;
};

export const MovieList = Template.bind({});

MovieList.args = {};
