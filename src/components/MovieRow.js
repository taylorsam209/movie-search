import React,  {Component} from 'react';

class MovieRow extends Component{

    viewMovie(movie) {
        const url = `https://www.themoviedb.org/movie/${movie}`
        window.location.href = url
    }
    
    render() {
        return this.props.movies.map((movie, key) => {
            return (
              <div className='movie-container' key={key}>
                <div className='img-container'>
                  <img className="movie-photo" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} width='50' alt="react" />
                </div>
                <div className="movie-description-container">
                  <h1>{movie.original_title}</h1>
                  <p>{movie.overview}</p>
                  <input type='button' value='View' onClick={()=>this.viewMovie(movie.id)}/>
                </div>
              </div>
            );
          })
    }
}

export default MovieRow;