/** @format */
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/route";

import "@fontsource/jost";
import "@fontsource/poppins/700.css";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
