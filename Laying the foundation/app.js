import React from "react";
import ReactDOM from "react-dom/client";

// this is js codde

const JsxHeading =  (
  <h1 className="jsxheading" tabIndex={5}>
    this is the h1 from jsx
  </h1>
);
const JsxHead = () =>  <h2>This is h2 from jsx</h2>;
const FrstComponent = () => (
  <div>
    {JsxHeading}
    {JsxHead}
    <h1>This is functional componnedt hahahah</h1>
  </div>
);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<FrstComponent />);
