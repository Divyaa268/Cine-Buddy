import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import PrimaryVideoContainer from './PrimaryVideoContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';


const Browse = () => {

useNowPlayingMovies();
usePopularMovies();

  return (
    <div>
        <Header />
        <PrimaryVideoContainer />
        <SecondaryContainer/>
      
    </div>
  )
}

export default Browse
