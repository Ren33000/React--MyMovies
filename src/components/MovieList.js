import React from 'react';

const MovieList = (props) => { 
    const FavouriteComponent = props.favourite;
    
    return (
        <div className='d-flex'>
            {props.movies.map((movie, index) => 
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} key={movie.uniqueId}/>
                <div onClick={() => props.handleFavouritesClick(movie)} className='overlay d-flex align-items-center justify-center'>
                    <FavouriteComponent />
                </div>
                
            </div>
            )}
        </div>
    );
};

export default MovieList;