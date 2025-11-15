/** @format */

import { createBrowserRouter } from "react-router-dom";
import DatailsPage from "../pages/DetailsPage";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layout";
import ShoppingCart from "../pages/ShoppingCart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "Shopping-cart", element: <ShoppingCart /> },
      { path: ":id", element: <DatailsPage /> },
    ],
  },
]);
