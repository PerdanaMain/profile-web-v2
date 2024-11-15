import Home from "../pages/Home.jsx";
import Project from "../pages/Project.jsx";
import DetailProject from "../pages/DetailProject.jsx";
import NotFound from "../pages/NotFound.jsx";
import Dashboard from "../pages/Admin/Dashboard.jsx";
import Login from "../pages/auth/Login.jsx";

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
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
];

export default router;
