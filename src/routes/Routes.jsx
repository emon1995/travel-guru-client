import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Carousel from "../Components/Carousel/Carousel";
import Travel from "../Components/Travel/Travel";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Carousel></Carousel>,
      },
      {
        path: "/travel/:id",
        element: <Travel></Travel>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/destination/${params.id}`),
      },
    ],
  },
]);

export default Routes;
