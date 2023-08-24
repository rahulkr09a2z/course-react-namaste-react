**1. What is a Microservice?**
A microservice is a software architectural style where an application is built as a collection of loosely coupled, independently deployable services. Each service focuses on a specific business capability and communicates with other services through well-defined APIs. Microservices promote modularity, scalability, and ease of development by breaking down an application into smaller, manageable components.

**2. What is Monolith architecture?**
A monolith architecture refers to building an application as a single, self-contained unit where all functionalities are tightly integrated and share the same codebase. In a monolith, different components, modules, and features are often interconnected, making the application's codebase large and complex.

**3. Difference between Monolith and Microservice:**
- **Monolith:** A single, tightly integrated application. Changes or updates affect the entire application. Scaling might require scaling the entire application.
- **Microservice:** Composed of loosely coupled services. Each service can be developed, deployed, and scaled independently. Changes to one service have minimal impact on others.

**4. Why do we need a useEffect Hook?**
The `useEffect` Hook in React is used to perform side effects in functional components. Side effects can include data fetching, DOM manipulation, subscriptions, and more. `useEffect` ensures these side effects are performed after rendering, avoiding blocking the main thread. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

**5. What is Optional Chaining?**
Optional Chaining is a feature in JavaScript that allows you to access properties or methods of an object without causing an error if the property or method is undefined or null. It uses the `?.` syntax.

**6. What is Shimmer UI?**
Shimmer UI is a loading animation technique used to provide visual feedback to users while content or data is being fetched or loaded. It displays a placeholder animation that mimics content loading, reducing the perceived delay and improving user experience.

**7. Difference between JS expression and JS statement:**
- **Expression:** Produces a value. For example: `2 + 2` or `myFunction()`.
- **Statement:** Performs an action. For example: `if` statement, `for` loop, function declaration.

**8. What is Conditional Rendering, explain with a code example:**
Conditional rendering is the practice of displaying different UI components or content based on certain conditions. Example:
```jsx
function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
```

**9. What is CORS?**
Cross-Origin Resource Sharing (CORS) is a security feature that controls how web browsers allow web pages from one origin to request resources (like data) from another origin. It prevents unauthorized access to resources and enhances the security of web applications.

**10. What is async and await?**
`async` and `await` are features in JavaScript that simplify working with asynchronous code, especially Promises. An `async` function returns a Promise, and within an `async` function, you can use the `await` keyword to pause the execution until a Promise is resolved.

**11. What is the use of `const json = await data.json();` in `getRestaurants()`?**
In the context of a function like `getRestaurants()`, `await data.json()` is used to asynchronously wait for the response data to be converted from a JSON string to a JavaScript object using the `.json()` method. The result, assigned to the `json` constant, represents the parsed JSON data, which can be further processed and used in the code.