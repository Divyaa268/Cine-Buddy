import { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'


const TrailerVideoBackground = ({ movieId }) => {

    const [trailerId, setTrailerId ]= useState(null);

    const getMovieTrailer = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/466420/videos?language=en-US', 
        API_OPTIONS);
            
            const json = await data.json();

            console.log(json);

            const trailers = json.results.filter((video) => video.type == "Trailer");

            const trailer = trailers.length ? trailers[0] : json.results[0];
            console.log(trailer);
            setTrailerId(trailer.key);
    }

    useEffect(() => {

        getMovieTrailer();

    }, [])

  return (
    <div>
      <iframe width="560" 
      height="315" 
      src={"https://www.youtube.com/embed/" + trailerId} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>
    </div>
  )
}

export default TrailerVideoBackground
