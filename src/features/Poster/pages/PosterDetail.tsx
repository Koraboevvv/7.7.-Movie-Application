import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';
import Carousel from '../../../shared/components/carousel/Carousel';

const PosterDetail = () => {
    const {getMovies} = useMovie()
    const {data} = getMovies()
  return (
    <div className="container PosterDetail mt-[50px]">
      <Carousel/>
      <h2 className='mb-[20px]'>На неделе</h2>
      <MovieView data={data?.results}/>
    </div>
  );
};

export default memo(PosterDetail);
