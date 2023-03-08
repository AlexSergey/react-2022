import axios from 'axios';
import { useState, useEffect } from 'react';

import { IMovie } from '../../types/movie';

export interface IUseFetchMovie {
  loading: boolean;
  error: boolean;
  data: IMovie[] | null;
}

export const useFetchMovies = (): IUseFetchMovie => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IMovie[]>([]);

  useEffect(() => {
    axios
      .get<IMovie[]>(`${process.env.API_URL}/api/movies`)
      .then((req) => {
        setError(false);
        setLoading(false);
        setData((d) => d.concat(req.data));
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return {
    data,
    error,
    loading,
  };
};
