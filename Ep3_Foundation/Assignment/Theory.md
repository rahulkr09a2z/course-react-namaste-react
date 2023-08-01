**What is JSX?**
JSX (JavaScript XML) is an extension to JavaScript used in React. It allows developers to write HTML-like syntax within JavaScript code. JSX makes it easier to describe the structure of React components and their UI in a more declarative and intuitive manner.

**React.createElement vs JSX**
`React.createElement` is a method provided by React to create React elements programmatically without using JSX. JSX, on the other hand, is a syntax extension that allows developers to write React elements using HTML-like syntax directly in their JavaScript code. JSX is then transpiled by tools like Babel to convert it into `React.createElement` calls before execution.

**Benefits of JSX**
- JSX provides a more familiar and expressive syntax, making the code easier to read and understand.
- It allows developers to write UI components in a way that closely resembles HTML templates.
- JSX enables better tooling support with editor syntax highlighting and linting for HTML-like elements in JavaScript code.
- It can help catch syntax errors and provide compile-time checks for invalid JSX code.

**Behind the scenes of JSX**
During the build process, JSX is transpiled by tools like Babel into regular JavaScript code. Each JSX element is converted into a corresponding `React.createElement` call, which creates a React element object representing the component and its props.

**Babel & Parcel role in JSX**
Babel is a JavaScript compiler that can transpile JSX code into standard JavaScript code. Parcel is a build tool that, among other things, handles JSX transpilation using Babel as part of its bundling process. Together, they ensure that JSX code is converted to compatible JavaScript before the application is run in the browser.

**Components**
Components in React are reusable building blocks that encapsulate logic and UI. They can be class-based or functional components.

**Functional Components**
Functional components are written as functions and return JSX to define the UI. They are simpler, more lightweight, and don't have state or lifecycle methods.

**Composing Components**
Composing components means using one component inside another to build complex UIs. Components can be nested and combined to create a hierarchy of UI elements.

**Role of type attribute in script tag? What options can I use there?**
The `type` attribute in the `<script>` tag specifies the MIME type of the script being included. The most common options are:
- `type="text/javascript"` (default): Indicates JavaScript code.
- `type="module"`: Indicates an ECMAScript module file.
- `type="text/babel"`: Used with Babel to transpile JSX code in the browser (not recommended for production).

**{Component()} vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/>} in JSX**
- `{Component()}`: Renders the result of a function call `Component()` within the JSX.
- `{<TitleComponent/>}`: Renders the JSX component `<TitleComponent/>`.
- `{<TitleComponent><TitleComponent/>}`: This will throw a syntax error because JSX elements must be self-closing or have a closing tag. A proper usage would be `{<TitleComponent><ChildComponent/></TitleComponent>}`.