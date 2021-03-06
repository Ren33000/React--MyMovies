import React from 'react';


const MovieList = (props) => { 
    const FavouriteComponent = props.favourite;
    
    return (
        <div className='row-container d-flex'>
            {props.movies.map((movie, index) => 
            <div className='movie-container d-flex justify-content-start m-3' >
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} key={movie.id} className='cover-image' />
                <div className='movie-title'>{movie.title}</div>
                <div className="info-column">
                    <div className="movie-infos">{movie.release_date.slice(0, 4)}</div>
                    <div className="movie-infos">{movie.vote_average} /10</div>
                </div>
                <div onClick={() => props.handleFavouritesClick(movie)} className='overlay d-flex'>
                    <div className='text-overlay'>{movie.overview}</div>
                    <FavouriteComponent />
                </div>    
            </div>
            )}
        </div>
        );
    };

export default MovieList; 

//   <div className='row-container d-flex'>
//             <div className='movie-container d-flex justify-content-start m-3'>
//                 <img src="" alt="title" className='cover-image'/>
//                 <div className='movie-title'>Movie Title</div>
//                 <div className="info-column">
//                     <div className="movie-infos">Year: 2012</div>
//                     <div className="movie-infos">Genre: Thriller</div>
//                 </div>
//             </div>
//         </div>




