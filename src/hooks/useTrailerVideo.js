import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/movieSlice';

const useTrailerVideo = (movieId) => {

    const dispatch = useDispatch();

    // FETCHING TRAILER AND UPDATING THE STORE WITH TRAILER VIDEO DATA
    const getMovieTrailer = async () => {

    // const [trailerId, setTrailerId ]= useState(null);

    const data = await fetch('https://api.themoviedb.org/3/movie/'
     + movieId + 
     '/videos?language=en-US',
    API_OPTIONS
    );
        
        const json = await data.json();

        console.log(json);

        const trailers = json.results.filter((video) => video.type == "Trailer");

        const trailer = trailers.length ? trailers[0] : json.results[0];
        console.log(trailer);
        // setTrailerId(trailer.key);

        dispatch(addTrailerVideo(trailer));
}

useEffect(() => {

    getMovieTrailer();

}, [])
};

export default useTrailerVideo;
