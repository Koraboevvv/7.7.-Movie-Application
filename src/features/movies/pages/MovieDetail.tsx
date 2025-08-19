import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs } from "antd";
import ImageContainer from "../../../shared/components/image/Image";
import MovieView from "../components/movie-view/MovieView";
import { IMAGE_URL } from "../../../shared/const";
import { useMovie } from "../../service/useMovie";
import { Image } from 'antd';
import Logo from "../../../shared/assets/LOGOTYPE – BILETICK.svg"

const { TabPane } = Tabs;

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById, getMovieItems } = useMovie();

  const { data, isLoading } = getMovieById(Number(id));
  const { data: images } = getMovieItems(Number(id), "images");
  const { data: similarData } = getMovieItems(Number(id), "similar");
  const { data: creditsData } = getMovieItems(Number(id), "credits");
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex flex-row justify-between items-center ">
        <img src={Logo} alt=""  className="mx-auto mt-[10%] animate-spin"/>
      </div>
    );
  }

  return (
    <div className="MovieDetail bg-black min-h-screen text-white">
      <div className="relative w-full h-[900px] overflow-hidden">
        <ImageContainer
          height={400}
          className="h-full w-full object-cover opacity-70"
          src={`${IMAGE_URL}${data.backdrop_path}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex gap-10 mt-16 mb-16 justify-center">
          <div className="w-[300px] h-[450px] bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img
              src={`${IMAGE_URL}${data?.poster_path}`}
              alt={data?.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl font-extrabold text-white">
              {data?.title}
            </h1>

            {data?.tagline && (
              <p className="italic text-gray-400">"{data.tagline}"</p>
            )}

            <p className="text-yellow-400 font-semibold">
              {data?.vote_average?.toFixed(1)} / 10 ({data?.vote_count} голосов)
            </p>

            <p className="text-gray-300">Release: {data?.release_date}</p>

            {data?.runtime && (
              <p className="text-gray-300">Duration: {data.runtime} min</p>
            )}

            {data?.genres && (
              <p className="text-gray-300">
                Genres: {data.genres.map((g: any) => g.name).join(", ")}
              </p>
            )}

            <p className="text-gray-300">Popularity: {data?.popularity}</p>

            <p className="text-lg leading-relaxed text-gray-200">
              {data?.overview}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {images?.backdrops?.slice(0, 10)?.map((item: any, index: number) => (
            <Image key={index} src={`${IMAGE_URL}${item.file_path}`} width={150} alt=""/>
          ))}
        </div>

        <Tabs
          defaultActiveKey="1"
          className="[&_.ant-tabs-tab]:text-white [&_.ant-tabs-tab]:hover:text-red-500 [&_.ant-tabs-ink-bar]:bg-red-500"
        >
          <TabPane tab="Cast" key="1">
            <div className="flex flex-wrap gap-4">
              {creditsData?.cast?.slice(0, 12).map((cast: any) => {
                const image = cast.profile_path
                  ? `${IMAGE_URL}${cast.profile_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";
                return (
                  <div
                    key={cast.id}
                    className="w-[150px] bg-gray-900 rounded-xl p-3 shadow-md hover:scale-105 transition cursor-pointer"
                    onClick={() => navigate(`/cast/${cast.id}`)}
                  >
                    <img
                      loading="lazy"
                      src={image}
                      alt={cast.name}
                      className="w-full h-[200px] object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-bold text-sm line-clamp-1">
                      {cast.name}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-1">
                      {cast.character}
                    </p>
                  </div>
                );
              })}
            </div>
            {creditsData?.cast?.length > 12 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => navigate(`/cast/all/${id}`)}
                  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                >
                  Show More
                </button>
              </div>
            )}
          </TabPane>

          <TabPane tab="Similar" key="2">
            <MovieView data={similarData?.results?.slice(0, 8)} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
