function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        // innerFunction can access outerVariable, even after outerFunction has returned
        console.log(outerVariable);
    }

    return innerFunction;
}

const myInnerFunction = outerFunction(); // outerFunction has returned here

myInnerFunction(); // logs: 'I am outside!'
