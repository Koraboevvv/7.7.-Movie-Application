import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../features/home/pages/Home"));
const Bookmark = lazy(() => import("../features/bookmark/pages/Bookmark"));
const Movies = lazy(() => import("../features/movies/pages/Movies"));
const MovieDetail = lazy(() => import("../features/movies/pages/MovieDetail"));
const ActorDetail = lazy(() => import("../features/movies/pages/ActorDetail"));
const PosterDetail = lazy(
  () => import("../features/Poster/pages/PosterDetail")
);
const Seances = lazy(() => import("../features/seances/pages/Seances"));
const Ticket = lazy(() => import("../features/ticket/pages/Ticket"));

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "bookmark", element: <Bookmark /> },
        { path: "movies", element: <Movies /> },
        { path: "PosterDetail", element: <PosterDetail /> },
        { path: "seances", element: <Seances /> },
        { path: "ticket", element: <Ticket /> },
        {
          path: "movie/:id",
          element: <MovieDetail />,
          children: [
            {
              path: "actor/:actorId",
              element: <ActorDetail />,
            },
          ],
        },
      ],
    },
  ]);
};

export default React.memo(AppRoutes);
