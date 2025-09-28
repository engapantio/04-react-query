import axios from 'axios';
import { type Movie } from '../types/movie';

interface MoviesHttpResponse {
  results: Movie[];
}

const tmdbToken = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/search';
axios.defaults.headers.common['Authorization'] = `Bearer ${tmdbToken}`;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesHttpResponse>(`/movie?query=${query}`);
  return response.data.results;
};
