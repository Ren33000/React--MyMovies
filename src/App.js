import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Favourite from './components/Favourite'
import RemoveFav from './components/RemoveFav';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([])
  const [userQuery, setUserQuery] = useState ('');

  // API Fetch
  const getMovieRequest = async (userQuery) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=0b6254970863d027fde0a82757987a56&query=${userQuery}`   
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.results) {
      setMovies(responseJson.results);
    }
  }

  // Get Query from user in Searchbar
  useEffect (() =>{
    getMovieRequest(userQuery);
  }, [userQuery]);

  // Create the list of favourite movies
  const addFavouriteMovies = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  }

  return (
    <div className='container-fluid movie-app'>
      {/* Movie List Header + SearchBar + List display */}
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header heading="Movies"/>
        <SearchBar userQuery={userQuery} setUserQuery={setUserQuery}/>
      </div>

      <div className='row'>
        <MovieList 
          movies={movies} 
          handleFavouritesClick={addFavouriteMovies} 
          key={movies.uniqueId} 
          favourite={Favourite}/>
      </div> 

      {/* Favourite List Header + List display */}
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header heading="Favourites"/>
      </div>
      <div className='row'>
        <MovieList 
          movies={favourites} 
          handleFavouritesClick={addFavouriteMovies} 
          key={movies.uniqueId} 
          favourite={Favourite}/>
      </div> 
    </div>
  );
};

export default App;