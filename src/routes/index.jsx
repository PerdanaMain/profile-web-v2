import Home from "../pages/Home.jsx";
import Project from "../pages/Project.jsx";
import DetailProject from "../pages/DetailProject.jsx";

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
];

export default router;
