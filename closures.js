// Closures:
// A closure is formed when a function is defined within another function, allowing the inner function to access the outer function's variables and parameters, even after the outer function has finished execution. This concept enables powerful and flexible programming patterns in JavaScript.

function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs: I am from the outer function
