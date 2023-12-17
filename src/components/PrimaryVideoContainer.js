import React from 'react'
import { useSelector } from 'react-redux';
import TrailerVideoBackground from './TrailerVideoBackground';
import TrailerTitle from './TrailerTitle';

const PrimaryVideoContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    // if(movies == null)
    if(!movies) return;

    const firstMovie = movies[0];
    console.log(firstMovie);

    const { original_title, overview , id } = firstMovie;

  return (
    <div>

        <TrailerVideoBackground movieId = { id } />
        <TrailerTitle title = { original_title } overview = { overview } />
      
    </div>
  )
}

export default PrimaryVideoContainer
