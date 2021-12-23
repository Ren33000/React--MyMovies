import React from 'react';

const MovieDetails = ({movies}) => {
    console.log(movies)
    return (
        <div>
            <h1>Movie Details</h1>
            {movies.map( movie  => 
                <p>{movies.title} </p>)}
        </div>
    );
};

export default MovieDetails;