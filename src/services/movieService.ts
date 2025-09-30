import axios from 'axios';
import { type Movie } from '../types/movie';
import { toast } from 'react-hot-toast';

interface MoviesHttpResponse {
  results: Movie[];
  total_pages: number;
}

const tmdbToken = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/search';
axios.defaults.headers.common['Authorization'] = `Bearer ${tmdbToken}`;

export const fetchMovies = async (query: string, page: number) => {
  const response = await axios.get<MoviesHttpResponse>(
    `/movie?query=${query}&page=${page}`
  );
  if (response.data.results.length === 0) {
    toast.error('No movies found for your request.');
  }
  return response.data;
};
