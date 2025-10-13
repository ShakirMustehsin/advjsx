import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

const App = ()=> {
  return (
    <div>
<NavBar/>
<Body/>

    </div>
  )
}
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App/>);
