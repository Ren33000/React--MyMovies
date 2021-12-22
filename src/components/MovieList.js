import React from 'react';

const MovieList = (props) => { 
    
    return (
        <div className='d-flex'>
            {props.movies.map((movie, index) => 
            <div className='d-flex justify-content-start m-3'>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} key={movie.uniqueId}/>
            </div>
            )}
        </div>
    );
};

export default MovieList;