import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1" }, // ✅ Added key here
      [
        React.createElement("h1", {key : "malice"}, "this is h1 from child 1"),
        React.createElement("h2", {key : "maliced"}, "this is h2 from child 1"),
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child2" }, // ✅ Added key here
      [
        React.createElement("h1", {key : "malicadfe"}, "this is h1 from child 2"),
        React.createElement("h2", {key : "malicdfadfe"}, "this is h2 from child 2"),
      ]
    ),
  ]
);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);
