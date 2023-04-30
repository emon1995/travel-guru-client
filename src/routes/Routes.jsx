import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Carousel from "../Components/Carousel/Carousel";
import Travel from "../Components/Travel/Travel";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";
import Auth from "../Components/Auth/Auth";

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
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);

export default Routes;
