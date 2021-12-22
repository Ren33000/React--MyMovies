import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [userQuery, setUserQuery] = useState ('');

  const getMovieRequest = async (userQuery) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=0b6254970863d027fde0a82757987a56&query=${userQuery}`   
    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log(responseJson)
    if(responseJson.results) {
      setMovies(responseJson.results);
    }
  }

  useEffect (() =>{
    getMovieRequest(userQuery);
  }, [userQuery]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header heading="Movies"/>
        <SearchBar userQuery={userQuery} setUserQuery={setUserQuery}/>
      </div>
      <div className='row'>
        <MovieList movies={movies} key={movies.uniqueId}/>
      </div> 
    </div>
  );
};

export default App;