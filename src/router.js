import { createBrowserRouter, Navigate, Router } from "react-router-dom";
import About from "./about";
import App from "./App";
// import Display from "./Display";
// import Home from "./Home";\
import Reviews from "./reviews";
import Searchbloggers from "./searchbloggers";

import Start from "./start";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "start",
        element: <Start />,
      },
      { path: "about", element: <About /> },

      {
        path: "home",
        element: <Navigate to="/" replace />,
      },
      // {
      //   path: ":id",
      //   element: <Display />,
      // },
      {
        path: "search",
        element: <Searchbloggers />,
      },
      {
        path: "review",
        element: <Reviews />,
      },
    ],
  },
]);
