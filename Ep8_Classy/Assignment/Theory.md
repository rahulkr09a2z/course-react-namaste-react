Why we use super(props)?

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Parent Constructor
       ||
Parent Render
       ||
First Child Constructor
       ||
First Child Render
       ||
Second Child Constructor
       ||
Second Child Render
       ||
First Child Componend did mount
       ||
Second Child Componend did mount
       ||
Parent Component did mount


**1. How do you create Nested Routes in react-router-dom configuration?**
Nested routes in `react-router-dom` are routes that are defined within the scope of other routes. To create nested routes, you typically use the `Route` component inside the components rendered by other `Route` components. Here's how you can create nested routes:

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <Route path="/products/:id" component={ProductDetail} />
    </div>
  );
}

function ProductDetail({ match }) {
  const { id } = match.params;
  return <p>Product ID: {id}</p>;
}
```

In this example, the `Products` component contains a nested route for `ProductDetail`.

**2. Read about createHashRouter and createMemoryRouter from React Router docs.**
- `createHashRouter` is a router that uses the URL hash (e.g., `/#/route`) for routing. It's suitable for single-page applications (SPAs) that don't have server-side routing configured.
- `createMemoryRouter` is a router that doesn't rely on the browser's URL. It's useful for testing, server-side rendering (SSR), and scenarios where you need routing in a non-browser environment.

**3. What is the order of life cycle method calls in Class-Based Components? Why do we use `componentDidMount`?**
In class-based components, the order of lifecycle method calls is typically as follows:
1. `constructor(props)`
2. `static getDerivedStateFromProps(props, state)`
3. `render()`
4. `componentDidMount()`

`componentDidMount` is called after the component has been rendered in the DOM. It's a common place to perform side effects such as data fetching, setting up subscriptions, or interacting with the DOM. It's used for operations that should occur after the component has been mounted and is ready for interaction.

**4. Why do we use `componentWillUnmount`? Show with an example.**
`componentWillUnmount` is used to perform cleanup or teardown operations before a component is removed from the DOM. It's commonly used to cancel network requests, unsubscribe from event listeners, or release any resources held by the component.

Here's an example of using `componentWillUnmount` to unsubscribe from a timer:

```jsx
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId); // Clean up the timer when the component is unmounted
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}
```

In this example, we set up a timer in `componentDidMount` and clear it in `componentWillUnmount` to prevent memory leaks when the component is removed.

**5. (Research) Why do we use `super(props)` in constructor?**
In class-based React components, when you define a constructor, you should call `super(props)` as the first statement within the constructor. This is necessary because it invokes the constructor of the parent class (`React.Component`), which is essential for initializing the component correctly.

Passing `props` to `super(props)` ensures that the component inherits and properly initializes the props from its parent component. Without it, you may encounter unexpected behavior or errors related to props usage.

**6. (Research) Why can't we have the callback function of `useEffect` async?**
In React's `useEffect` hook, you cannot define the callback function as `async` because React expects the callback function to return either nothing or a cleanup function (a function to clean up side effects). An `async` function always returns a Promise, and React doesn't handle Promises returned from the `useEffect` callback.

To work with asynchronous operations within `useEffect`, you can define an inner async function and call it within the `useEffect` callback. For example:

```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://example.com/data');
      const data = await response.json();
      // Handle data...
    } catch (error) {
      // Handle errors...
    }
  };

  fetchData();
}, []); // Empty dependency array means the effect runs once on mount.
```

This pattern ensures that you can use `async/await` within the `useEffect` while still adhering to its expected callback structure.