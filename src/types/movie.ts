import { Genres } from './genres';

export interface IMovie {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: Genres[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}
