import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

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

    dispatch(addNowPlayingMovies(json.results)); 

    };

    // using hook to call the api
    useEffect(() => {
      getNowPlayingMovies();
    }, [])
};

export default useNowPlayingMovies;