import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants';

const Browse = () => {

  // WE CAN WRITE LIKE THIS AS WELL
  // fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));

  const getNowPlayingMovies = async () => {
    const data = await fetch (
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    // we receive a promise from above so converting it to json
    const json = await data.json();
    console.log(json.results);
    };

    // using hook to call the api
    useEffect(() => {
      getNowPlayingMovies();
    }, [])


  return (
    <div>
        <Header />
      
    </div>
  )
}

export default Browse
