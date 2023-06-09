import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Carousel from "../Components/Carousel/Carousel";
import Travel from "../Components/Travel/Travel";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";
import Auth from "../Components/Auth/Auth";
import PrivateRoute from "./PrivateRoute";
import Destination from "../Components/Destination/Destination";
import Contact from "../Components/Contact/Contact";

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
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
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
]);

export default Routes;
