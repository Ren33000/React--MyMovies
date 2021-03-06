import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MovieList from './components/MovieList';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Favourite from './components/Favourite'
import RemoveFav from './components/RemoveFav';
import Data from './components/Data';


const App = () => {
  const [movies, setMovies] = useState(Data);
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
    saveToLocalStorage(newFavouriteList);
  }
  // Save favourites to Local Storage
  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-my-movies-favourites'));
    setFavourites(movieFavourites);
  }, [])
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-my-movies-favourites', JSON.stringify(items))
  }

  // Remove movies from favourite list
  const removeFavouriteMovies = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    )
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <div>
      <div className='container-fluid movie-app'>
        {/* Movie List Header + SearchBar + List display */}
        <div className='header row d-flex align-items-center mt-4 mb-4'>
          <Header heading="My Movies" />
          <SearchBar userQuery={userQuery} setUserQuery={setUserQuery}/>
        </div>
        <div className='row'>
          <MovieList 
            movies={movies} 
            handleFavouritesClick={addFavouriteMovies} 
            favourite={Favourite}/>
        </div> 

        {/* Favourite List Header + List display */}
        <div className='header row d-flex align-items-center mt-4 mb-4'>
          <Header heading="Favourites"/>
        </div>
        <div className='row'>
          <MovieList 
            movies={favourites} 
            handleFavouritesClick={removeFavouriteMovies} 
            favourite={RemoveFav}/>
        </div> 
      </div> 
      <Footer />
    </div>  
  );
};

export default App;