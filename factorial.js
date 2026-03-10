function factorial(number) {
    let sum = 1;

    for (let i = 1; i <= number; i++) {
        sum = sum * i;
    }

    return sum;
}

const result = factorial(10);
console.log(result);



Output
3628800

// Because factorial formula is:

// n!=1×2×3×...×n

// Example (5!)
// 1 × 2 × 3 × 4 × 5 = 120
