import { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageContainer from '../../../shared/components/image/Image';
import MovieView from '../components/movie-view/MovieView';
import { IMAGE_URL } from '../../../shared/const';
import { useMovie } from '../../service/useMovie';
// import { Image } from 'antd';

const MovieDetail = () => {
  const {id} = useParams()
  const {getMovieById, getMovieItems} = useMovie()

  const {data, isLoading} = getMovieById(Number(id))
  const {data: images, isLoading: isLoadingImages} = getMovieItems(Number(id), "images")
  const {data: similarData} = getMovieItems(Number(id), "similar")
  const {data: creditsData} = getMovieItems(Number(id), "credits")
  const {data: videosData} = getMovieItems(Number(id), "videos")
  const navigate = useNavigate()

  console.log(videosData);
  

  if(isLoading) {
    return <div className='text-center text-4xl'>Loading...</div>
  }

  return (
    <div className="MovieDetail">
      <div>
        <ImageContainer height={400} className='h-[400px]' src={`${IMAGE_URL}${data.backdrop_path}` }/>
      </div>
      <div>
        <h1 className='text-3xl'>{data?.title}</h1>
      </div>
      
      <div className='flex flex-wrap'>
        {
          images?.backdrops?.slice(0, 10)?.map((item:any, index: number) => (
            <img key={index} src={`${IMAGE_URL}${item.file_path}`} width={150} alt="" />
            // <Image key={index} src={`${IMAGE_URL}${item.file_path}`} width={150} alt=""/>
          ))
        }
      </div>
      <div className='flex flex-wrap gap-3'>
        {
          creditsData?.cast?.map((cast: any)=> {
            const image = cast.profile_path ? `${IMAGE_URL}${cast.profile_path}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
            return <div className='w-[150px]' key={cast.id}>
              <img onClick={()=> navigate(`/cast/${cast.id}`)} loading='lazy' src={image} width={60} alt="" />
              <h3>{cast.name}</h3>
              <p className='text-gray-500'>{cast.character}</p>
            </div>
          })
        }
      </div>
      <div>
        <MovieView data={similarData?.results?.slice(0, 8)}/>
      </div>
    </div>
  );
};

export default memo(MovieDetail);