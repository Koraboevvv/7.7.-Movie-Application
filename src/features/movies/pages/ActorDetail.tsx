import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../shared/api";

interface ActorDetailType {
  id: number;
  name: string;
  biography: string;
  profile_path: string | null;
  birthday: string | null;
  place_of_birth: string | null;
}

export default function ActorDetail() {
  const { actorId } = useParams();
  const navigate = useNavigate();
  const [actor, setActor] = useState<ActorDetailType | null>(null);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        const res = await api.get(`/person/${actorId}`);
        setActor(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchActor();
  }, [actorId]);

  if (!actor) return <p className="text-center text-gray-500">Загрузка...</p>;

  return (
    <div className="mt-10 bg-white rounded-xl shadow p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition"
      >
        ← Назад
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {actor.profile_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
            alt={actor.name}
            className="rounded-xl w-60 h-auto object-cover"
          />
        )}

        <div>
          <h2 className="text-3xl font-bold mb-2">{actor.name}</h2>
          <p className="text-gray-600 mb-2">
            <b>Дата рождения:</b> {actor.birthday || "—"}
          </p>
          <p className="text-gray-600 mb-4">
            <b>Место рождения:</b> {actor.place_of_birth || "—"}
          </p>
          <p className="text-gray-800 leading-relaxed whitespace-pre-line">
            {actor.biography || "Нет биографии"}
          </p>
        </div>
      </div>
    </div>
  );
}
