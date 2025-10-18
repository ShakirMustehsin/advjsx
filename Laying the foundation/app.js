import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/error";

const App = ()=> {
  return (
    <div>
<NavBar/>
<Body/>
    </div>
  )
}

const appRouters = createBrowserRouter([
  {
    "path" : "/",
      "element" : <App></App>,
      "errorElement" : <Error/>
  },
  {
    "path" : "/about",
    "element" : <About/>,
    "errorElement" : <Error/>
  },
  {
    "path" : "/contact",
    "element" : <Contact/>,
    "errorElement" : <Error/>
  }
])


const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router = {appRouters}/>);
