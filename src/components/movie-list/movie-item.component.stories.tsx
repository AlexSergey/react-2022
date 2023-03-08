import { Meta, Story } from '@storybook/react';

import beetlejuice from '../../mocks/assets/beetlejuice.jpg';
import { Genres } from '../../types/genres';

import { IMovieItemComponent, MovieItemComponent } from './movie-item.component';

export default {
  argTypes: {
    actors: {
      description: 'List of actors separated by comma. Example: "Alec Baldwin, Geena Davis"',
    },
    genres: {
      description: `Enum of genres: ${(Object.keys(Genres) as (keyof typeof Genres)[])
        .map((genre) => `"${Genres[genre]}"`)
        .join(', ')}`,
    },
    posterUrl: {
      description: 'url or base64',
    },
  },
  component: MovieItemComponent,
  title: 'Components',
} as Meta<IMovieItemComponent>;

const Template: Story<IMovieItemComponent> = (props): JSX.Element => <MovieItemComponent {...props} />;

export const MovieItem: Story<IMovieItemComponent> = Template.bind({});

MovieItem.args = {
  actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
  director: 'Tim Burton',
  genres: [Genres.Comedy, Genres.Fantasy],
  id: 1,
  plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
  posterUrl: beetlejuice,
  runtime: '92',
  title: 'Beetlejuice',
  year: '1988',
};
