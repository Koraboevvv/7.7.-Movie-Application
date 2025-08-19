import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../shared/api";

interface Actor {
  id: number;
  name: string;
  biography: string;
  profile_path: string | null;
}

export default function ActorDetail() {
  const { actorId } = useParams();
  const [actor, setActor] = useState<Actor | null>(null);

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

  if (!actor) return <p>Загрузка...</p>;

  return (
    <div className="p-4 bg-gray-100 rounded-lg mt-4">
      {actor.profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
          alt={actor.name}
          className="w-32 h-32 rounded-full mb-4"
        />
      )}
      <h2 className="text-xl font-bold">{actor.name}</h2>
      <p className="text-sm mt-2">
        {actor.biography || "Биография отсутствует"}
      </p>
    </div>
  );
}
