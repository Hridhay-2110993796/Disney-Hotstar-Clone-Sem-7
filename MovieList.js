import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions';
import { db } from '../firebase';
import MovieCard from './MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    db.collection('movies').get().then((snapshot) => {
      const moviesData = snapshot.docs.map((doc) => doc.data());
      dispatch(fetchMovies(moviesData));
    });
  }, [dispatch]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;