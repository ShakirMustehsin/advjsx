import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/error";
import Rest from "./components/Rest";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/rest",
        element: <Rest />,
      },
    ],
  errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouters} />);
