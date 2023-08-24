**1. Various ways to add images into our App with code examples:**

a. **Inline Images:** You can use inline images by including them as data URLs in your HTML or CSS.

```html
<img src="data:image/png;base64,iVBORw0KG..." alt="Inline Image" />
```

b. **Local Images:** Store images in your project directory and reference them with relative paths.

```jsx
import React from 'react';
import imageSrc from './path/to/image.png';

function App() {
  return <img src={imageSrc} alt="Local Image" />;
}
```

c. **External Images:** Use external image URLs directly.

```jsx
import React from 'react';

function App() {
  return <img src="https://example.com/image.jpg" alt="External Image" />;
}
```

**2. What would happen if we do `console.log(useState())`?**
`console.log(useState())` would log an array containing two elements to the console: the current state value and a function to update that state value. The output might look like this:

```javascript
[initialStateValue, function]
```

However, this log statement doesn't provide much useful information because it doesn't capture the current state value. To see the current state, you should log it directly, like `console.log(initialStateValue)`.

**3. How will `useEffect` behave if we don't add a dependency array?**
If you don't add a dependency array to the `useEffect` hook (i.e., you omit the second argument), the effect will run after every render, including the initial render. This means it behaves as if you provided an empty dependency array (`[]`).

**4. What is SPA?**
SPA stands for Single Page Application. It is a web application or website that loads a single HTML page and dynamically updates its content as the user interacts with it, without requiring full page reloads. SPAs use JavaScript to fetch and render data, making the user experience faster and more fluid.

**5. Difference between Client Side Routing and Server Side Routing:**

- **Client Side Routing:** In client-side routing, navigation between different views or pages of a web application is handled on the client side (in the browser) using JavaScript. When a user clicks on a link or enters a URL, JavaScript changes the view without making a request to the server for a new HTML page. Common libraries for client-side routing include React Router and Vue Router. Client-side routing is faster and provides a smoother user experience but may require more initial loading time.

- **Server Side Routing:** In server-side routing, navigation triggers requests to the server, which responds with the appropriate HTML page for the requested route. Each route corresponds to a separate server-side route on the server. Server-side routing is typically associated with traditional multi-page applications (MPAs). It can be slower because it involves server requests for each page change, but it's also more SEO-friendly and can work without JavaScript enabled on the client side.