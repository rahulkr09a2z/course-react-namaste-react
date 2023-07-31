1. **What is Emmet?**
Emmet is a productivity tool for web developers that allows them to write HTML and CSS code using a shorthand syntax and then expand it into full-fledged code snippets with just a few keystrokes.

2. **Difference between a library and framework?**
Libraries and frameworks are both software components used for developing applications, but they differ in their approach and level of support provided to developers. A library is a collection of pre-written code that offers specific functionalities that developers can use as needed. It is more flexible and allows developers to pick and choose the functionalities they require. On the other hand, a framework is a more comprehensive software package that provides a structured and integrated environment to build applications. It dictates the overall architecture and flow of the application, and developers work within the framework's structure.

3. **What is CDN? Why do we use it?**
CDN stands for Content Delivery Network. It is a network of servers distributed across various locations worldwide. Developers use CDN to serve certain resources, such as JavaScript libraries or CSS files, from a location geographically closer to the user's location. This results in faster loading times for web pages since the content is delivered from a server closer to the user, reducing latency and improving overall performance.

4. **Why is React known as React?**
The name "React" for the JavaScript library developed by Facebook is derived from the way it handles changes to a user interface. Instead of updating the entire user interface when data changes, React selectively "reacts" to changes and efficiently updates only the necessary parts of the interface, making it highly performant and responsive.

5. **What is cross-origin in the script tag?**
In the context of the `<script>` tag, "cross-origin" refers to making requests to fetch JavaScript files from a different domain than the one from which the webpage is being served. Due to security concerns, modern web browsers restrict cross-origin requests for scripts. To allow cross-origin scripts, the server needs to include the appropriate CORS (Cross-Origin Resource Sharing) headers, or the script must be served from a domain that allows cross-origin requests.

6. **What is the difference between React and ReactDOM?**
React and ReactDOM are both part of the React library, but they serve different purposes. React is the core library responsible for handling the component-based architecture, virtual DOM, and managing application state. ReactDOM, on the other hand, is a specific binding for the DOM, enabling React to render components into the actual browser DOM. It provides methods like `render()` to update the DOM with React's virtual DOM representation.

7. **What is the difference between react.development.js and react.production.js files via CDN?**
When using React via CDN, the "react.development.js" file is meant for development purposes. It contains additional debugging information and error messages to aid developers during development and debugging. On the other hand, the "react.production.js" file is optimized for production use. It has been minified and stripped of unnecessary debugging code to reduce its size and improve performance. Developers should use "react.production.js" in production environments for better efficiency.

8. **What are async and defer?**
"async" and "defer" are attributes used in `<script>` tags when loading external JavaScript files. When a script is marked with the "async" attribute, it will be downloaded asynchronously while the HTML parsing continues. Once the script is downloaded, it will pause HTML parsing and execute immediately, potentially before the entire page is loaded. On the other hand, when a script is marked with the "defer" attribute, it will also be downloaded asynchronously but will be executed after the HTML parsing is complete. "defer" ensures that the scripts execute in the order they appear in the HTML, and it waits for the entire page to be parsed before executing.