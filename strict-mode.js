// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

// "use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.
// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):

// The "use strict"; Syntax
// The syntax, for declaring strict mode, was designed to be compatible with older versions of JavaScript.

// Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. It simply compiles to a non existing variable and dies.

// So "use strict"; only matters to new compilers that "understand" the meaning of it.
Strict mode makes it easier to write "secure" JavaScript.

// Strict mode changes previously accepted "bad syntax" into real errors.

// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.



<script>
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will cause an error (y is not defined)
}
</script>
