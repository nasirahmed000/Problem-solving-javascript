// Problem Statement: Given a string s, find the length of the longest substring without repeating characters.

// Example:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test the function
const input = "abcabcbb";
const result = lengthOfLongestSubstring(input);
console.log(`The length of the longest substring without repeating characters is: ${result}`);



// Explanation:
// Set to Track Characters:

// A Set is used to store the characters in the current substring without duplicates.
// Two Pointers (Sliding Window):

// left and right are two pointers representing the start and end of the current substring.
// The right pointer moves one step forward each iteration, expanding the window.
// The left pointer moves forward to shrink the window when a duplicate character is encountered.
// While Loop:

// When the character at the right pointer is already in the set (i.e., a duplicate character is found), the left pointer moves right until the duplicate is removed, shrinking the window.
// Calculate Maximum Length:

// The maximum length of the substring without repeating characters is updated during each iteration.
// Example Walkthrough:
// For the input string "abcabcbb":

// The sliding window starts with "a", then expands to "ab", "abc".
// When the second "a" is encountered, the window shrinks to exclude the first "a", and so on.
// The maximum length of the substring without repeating characters found is 3, corresponding to "abc".
// Complexity:
// Time Complexity: O(n), where n is the length of the string. Each character is processed at most twice.
// Space Complexity: O(min(n, m)), where m is the size of the character set (e.g., 26 for lowercase English letters).
// This problem is a common example of the sliding window technique and is useful for practicing efficient string manipulation in JavaScript.






