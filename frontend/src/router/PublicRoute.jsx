import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "./../pages/home/Home";
import Movies from "./../pages/movies/Movies";

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
    ],
  },
]);

export default router;
