import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import Genre from "../pages/Genre";
import Trending from "../pages/Trending";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/genres",
        element: <Genre />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
    ],
  },
]);

export default router;
