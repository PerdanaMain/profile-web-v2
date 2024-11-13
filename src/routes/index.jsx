import Home from "../pages/Home.jsx";
import Project from "../pages/Project.jsx";
import DetailProject from "../pages/DetailProject.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/project/:slug",
    element: <DetailProject />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
