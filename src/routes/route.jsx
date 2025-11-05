/** @format */

import { createBrowserRouter } from "react-router-dom";
import Homepage from "../page/Homepage";
import Layout from "../page/Layout";

export const routes = createBrowserRouter([
  { path: "/", element: <Layout />, children: [{ index: true, element: <Homepage /> }] },
]);
