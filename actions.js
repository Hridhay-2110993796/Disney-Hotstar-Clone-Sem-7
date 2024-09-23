export const FETCH_MOVIES = "FETCH_MOVIES";

export const fetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies
});