// even 

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}


// Function to print a multiplication table for a given number
function printMultiplicationTable(number) {
    console.log(`Multiplication Table for ${number}:\n`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
    console.log('\n'); // Add a line break for better separation
}

// Print multiplication tables for numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    printMultiplicationTable(i);
}

// Create a length converter function

function convertLength(value, fromUnit, toUnit) {
    const conversionFactors = {
        'meters': {
            'feet': 3.28084,
            'inches': 39.3701,
            'centimeters': 100,
            'millimeters': 1000
        },
        'feet': {
            'meters': 0.3048,
            'inches': 12,
            'centimeters': 30.48,
            'millimeters': 304.8
        },
        'inches': {
            'meters': 0.0254,
            'feet': 0.0833333,
            'centimeters': 2.54,
            'millimeters': 25.4
        },
        'centimeters': {
            'meters': 0.01,
            'feet': 0.0328084,
            'inches': 0.393701,
            'millimeters': 10
        },
        'millimeters': {
            'meters': 0.001,
            'feet': 0.00328084,
            'inches': 0.0393701,
            'centimeters': 0.1
        }
    };

    if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors[fromUnit])) {
        console.error('Invalid units specified.');
        return null;
    }

    const conversionFactor = conversionFactors[fromUnit][toUnit];
    const result = value * conversionFactor;
    return result;
}

// Example usage:
const lengthInMeters = 5;
const convertedLengthInFeet = convertLength(lengthInMeters, 'meters', 'feet');
console.log(`${lengthInMeters} meters is equal to ${convertedLengthInFeet} feet.`);
