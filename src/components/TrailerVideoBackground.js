import { useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo';

const TrailerVideoBackground = ({ movieId }) => {

    const trailerVideoSelect = useSelector(store => store.movies?.trailerVideo);

    useTrailerVideo(movieId);

  return (
    <div>
      <iframe width="560" 
      height="315" 
        //   src={"https://www.youtube.com/embed/" + trailerId} 
      src={"https://www.youtube.com/embed/" + trailerVideoSelect?.key} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>
    </div>
  )
}

export default TrailerVideoBackground
