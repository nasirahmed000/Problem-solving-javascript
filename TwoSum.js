// Problem: Two Sum
// Problem Statement: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
// I may assume that each input would have exactly one solution, and I may not use the same element twice.
// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
// Approach:
// To solve this problem, I can use a hash map (or JavaScript's Map object) to keep track of the numbers you’ve seen so far and their indices. This allows you to find the solution in a single pass through the array.

// code Implementation :

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    // In case there's no solution, but as per the problem statement, there's always one
    return [];
}

// Test the function
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(`The indices of the two numbers that add up to ${target} are: [${result}]`);

// Explanation:
// Hash Map (Map Object):

// The Map object is used to store the numbers you’ve already encountered in the array along with their indices.
// Complement Calculation:

// For each number in the array, calculate its complement by subtracting the current number from the target (complement = target - nums[i]).
// Check for Complement:

// If the complement exists in the Map, it means you’ve found two numbers that add up to the target. Return the index of the complement and the current index.
// Store in Map:

// If the complement doesn’t exist in the Map, store the current number and its index in the Map.
// Single Pass:

// The algorithm solves the problem in a single pass through the array, making it efficient.
// Example Walkthrough:
// For the input nums = [2, 7, 11, 15] and target = 9:

// On the first iteration, nums[0] = 2, and its complement is 9 - 2 = 7. Since 7 is not in the map, we store 2 with its index 0.
// On the second iteration, nums[1] = 7, and its complement is 9 - 7 = 2. The complement 2 is found in the map, so we return the indices [0, 1].
// Complexity:
// Time Complexity: O(n), where n is the number of elements in the array. Each element is processed at most once.
// Space Complexity: O(n), where n is the number of elements stored in the map.
// This problem is a fundamental example of how to use a hash map to solve problems efficiently by trading space for time.


