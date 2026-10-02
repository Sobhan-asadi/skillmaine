import { createBrowserRouter } from "react-router-dom";

import CoursesPage from "../pages/CoursesPage";
import DetailsPage from "../pages/DetailsPage";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import ShoppingCart from "../pages/ShoppingCart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "courses/:courseId",
        element: <DetailsPage />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
