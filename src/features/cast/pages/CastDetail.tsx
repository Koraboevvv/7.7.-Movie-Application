import { memo } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../../../shared/const";
import { useMovie } from "../../service/useMovie";
import Logo from "../../../shared/assets/LOGOTYPE – BILETICK.svg"

const CastDetail = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovie();

  const { data: actorData, isLoading } = getMovieItems(Number(id), "person");
  const { data: creditsData } = getMovieItems(Number(id), "person_credits");
  const { data: imagesData } = getMovieItems(Number(id), "person_images");

  if (isLoading) {
    return (
      <div className="flex flex-row justify-between items-center ">
        <img src={Logo} alt=""  className="mx-auto mt-[10%] animate-spin"/>
      </div>
    );
  }

  const profile = actorData?.profile_path
    ? `${IMAGE_URL}${actorData.profile_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";

  return (
    <div className="bg-gradient-to-b from-red-900 via-black to-black min-h-screen text-white">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="md:w-1/3 flex justify-center">
          <img
            src={profile}
            alt={actorData?.name}
            className="w-[300px] h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>


        <div className="md:w-2/3 space-y-4">
          <h1 className="text-4xl font-extrabold">{actorData?.name}</h1>
          {actorData?.birthday && (
            <p className="text-gray-300">
              {actorData.birthday}{" "}
              {actorData?.place_of_birth && `• ${actorData.place_of_birth}`}
            </p>
          )}
          {actorData?.biography && (
            <p className="text-lg leading-relaxed max-w-2xl">
              {actorData.biography}
            </p>
          )}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-500">🎬 Movies</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {creditsData?.cast?.map((movie: any) => (
            <div
              key={movie.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-red-600/50 transition cursor-pointer"
            >
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_URL}${movie.poster_path}`
                    : "https://via.placeholder.com/200x300?text=No+Poster"
                }
                alt={movie.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-3">
                <h3 className="text-white font-bold text-sm line-clamp-1">
                  {movie.title}
                </h3>
                <p className="text-gray-400 text-xs">{movie.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-500">📸 Photos</h2>
        <div className="flex flex-wrap gap-3">
          {imagesData?.profiles?.map((img: any, index: number) => (
            <img
              key={index}
              src={`${IMAGE_URL}${img.file_path}`}
              alt="actor"
              className="w-[200px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(CastDetail);
