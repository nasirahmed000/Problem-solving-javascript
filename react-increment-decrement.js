//  Here's a simple example demonstrating some core concepts of React.js. This example will create a basic counter application where you can increment and decrement a counter value:
// // 




import React, { useState } from 'react';

function Counter() {
  // Define state using the useState hook
  const [count, setCount] = useState(0);

  // Event handler functions to increment and decrement the counter
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // JSX to render the counter component
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
