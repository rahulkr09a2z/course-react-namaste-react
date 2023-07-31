import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElement(render)

/**
 * JSX - HTML-like or XML-like syntax
 * JSX (transpiled before it reaches the JS engine) - PARCEL uses Babel
 * Babel -convert JSX -> code which understand by JS Engine
 */

// React Element
const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    Namaste React using JSX
  </h1>
);

/**
 * React Component
 * Class Based Component - OLD
 * Functional Component - NEW
 */

const Title = () => (
  <h1 className="head" tabIndex="5">
    Title Component
  </h1>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      {/* Component Composition */}
      <Title />
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
