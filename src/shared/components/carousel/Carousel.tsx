import { useEffect, useState, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/Thumbs";
import { api } from "../../api";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
}

const Carousel: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get("/movie/popular", {
          params: { language: "ru-RU", page: 1 },
        });
        setMovies(res.data.results);
      } catch (err) {
        console.error("Hatolik Yuz berdi!!!", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Swiper
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mb-4"
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-white text-2xl font-bold">{movie.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        watchSlidesProgress
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="h-[100px] rounded-lg overflow-hidden cursor-pointer border border-gray-700">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
