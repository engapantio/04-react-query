import axios from 'axios';
import { type Movie } from '../types/movie';

interface MoviesHttpResponse {
  results: Movie[];
  total_pages: number;
}

const tmdbToken = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/search';
axios.defaults.headers.common['Authorization'] = `Bearer ${tmdbToken}`;

export const fetchMovies = async (query: string, page: number): Promise<MoviesHttpResponse> => {
  const response = await axios.get<MoviesHttpResponse>(
    `/movie?query=${query}&page=${page}`
  );

  return response.data;
};
