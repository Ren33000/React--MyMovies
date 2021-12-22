import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=0b6254970863d027fde0a82757987a56&query=Spi"   
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson)
    setMovies(responseJson.results);
  }

  useEffect (() =>{
    getMovieRequest();
  }, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList movies={movies} key={movies.uniqueId}/>
      </div>
    </div>
  );
};

export default App;