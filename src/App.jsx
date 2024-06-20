import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Films from "./pages/films/Films";
import Photos from "./pages/photos/Photos";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/films",
    element: <Films />,
  },
  {
    path: "/photos",
    element: <Photos />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
