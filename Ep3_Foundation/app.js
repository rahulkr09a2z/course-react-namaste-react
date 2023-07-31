import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElement(render)

/**
 *  JSX - HTML-like or XML-like syntax
 *  JSX (transpiled before it reaches the JS engine) - PARCEL uses Babel
 *  Babel -convert JSX -> code which understand by JS Engine
 */

// React Element
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
