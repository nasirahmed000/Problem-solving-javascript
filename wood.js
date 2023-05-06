let length = 2; // meters
let width = 1; // meter
let height = 0.75; // meter
let thickness = 0.02; // meters

let surfaceArea = 2 * length * width + 2 * length * height + 2 * width * height;
let woodRequired = surfaceArea * thickness;

console.log("Wood required: " + woodRequired + " cubic meters");
