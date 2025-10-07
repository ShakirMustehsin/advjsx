import React from "react";
import ReactDOM from "react-dom/client";

// this is js codde 

const jsxheading = <h1 className="jsxheading" tabIndex={5}> this is the h1 from jsx </h1>
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(jsxheading);
