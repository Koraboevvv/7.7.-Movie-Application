import { memo } from 'react';
import MovieView from '../../movies/components/movie-view/MovieView';
import { useMovie } from '../../service/useMovie';
import Carousel from '../../../shared/components/carousel/Carousel';

const Home = () => {
  const {getMovies} = useMovie()
  const {data} = getMovies()
  
  return (
    <div className="Home">
      <Carousel/>
      <MovieView data={data?.results}/>
    </div>
  );
};

export default memo(Home);