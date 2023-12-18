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
        <TrailerTitle title = { original_title } overview = { overview } />
        <TrailerVideoBackground movieId = { id } />
      
    </div>
  )
}

export default PrimaryVideoContainer
