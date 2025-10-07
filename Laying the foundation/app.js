import React from "react";
import ReactDOM from "react-dom/client";

// this is js codde

const JsxHeading =  (
  <h1 className="jsxheading" tabIndex={5}>
    this is the h1 from jsx
  </h1>
);

const FrstComponent = () => (
  <div>
    {JsxHeading}
    <h1>This is functional componnedt hahahah</h1>
  </div>
);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<FrstComponent />);
