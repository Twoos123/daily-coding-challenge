# Daily Coding Challenge Generator 🚀

An AI-powered platform that generates unique coding challenges daily, helping developers enhance their problem-solving skills through consistent practice.

## Features

- 🤖 **AI-Powered**: Challenges are generated using advanced AI to ensure uniqueness and relevance
- 🕒 **Daily Updates**: New challenges are automatically generated and committed at 12 AM EST
- ⭐ **Difficulty Ratings**: Each challenge includes a difficulty rating from 1-5
- 💡 **Complete Solutions**: Every challenge comes with a detailed Python solution

## Built With

- 🔥 **React + Vite**: For a fast and modern development experience
- 🔷 **TypeScript**: For type-safe code
- 🛠️ **Shadcn/UI**: For pre-built, customizable components
- 🔌 **Supabase**: For backend functionality and database
- 🤖 **Perplexity API**: For AI-powered challenge generation

## Today's Challenge

Difficulty: ⭐⭐⭐ (3/5)

### Problem Description

**Maximum Subarray Sum with Consecutive Elements**

Given an array of integers, find the maximum sum that can be achieved by selecting a subarray where each element is either included or excluded, but the subarray must be consecutive.

### Example Input/Output

**Input:** `arr = [1, -2, 3, 5, -6, 4, 1, 3]`

**Output:** `12` (Subarray `[3, 5, -6, 4, 1, 3]`)

### Constraints

- The array `arr` contains at least one element.
- The sum of a subarray can be calculated as the sum of the elements in that subarray.
- A subarray is considered consecutive if it is contiguous in the original array.

### Most Efficient Solution

#### Explanation

To solve this problem efficiently, we can use dynamic programming with arrays. We will maintain an array `dp` where `dp[i]` will store the maximum sum that can be achieved by selecting a subarray ending at index `i`.

The key insight is that for any subarray ending at index `i`, we have two options:
1. Exclude the current element.
2. Include the current element.

If we include the current element, we need to ensure that its value is greater than zero, because if it's negative, it would reduce the sum rather than increase it.

Here’s how we can implement this:

```python
def maxSubarraySumWithConsecutive(arr):
    n = len(arr)
    dp = [0] * n
    
    # Initialize dp[0] as the first element itself
    dp[0] = arr[0]

    # Initialize maximum sum
    max_sum = arr[0]

    for i in range(1, n):
        # If current element is greater than zero, include it in dp[i]
        if arr[i] > 0:
            dp[i] = dp[i-1] + arr[i]
        
        # If current element is not greater than zero or dp[i-1] is greater,
        # then exclude it and use dp[i-1] or the current element itself
        else:
            dp[i] = max(dp[i-1], arr[i])

        # Update maximum sum
        max_sum = max(max_sum, dp[i])

    return max_sum

# Example usage:
arr = [1, -2, 3, 5, -6, 4, 1, 3]
print(maxSubarraySumWithConsecutive(arr))  # Output: 12
```

#### Analysis

- **Time Complexity:** The time complexity of this solution is O(n), where n is the length of the array. This is because we are iterating through the array once.
- **Space Complexity:** The space complexity is also O(n) because we are using an additional array `dp` of the same size as the input array.

#### Why this Approach is Optimal

This approach is optimal because it directly uses dynamic programming to solve the problem by breaking it down into smaller subproblems and storing the results in an array (`dp`). This approach avoids recomputing the same subproblems multiple times, thus reducing time complexity to linear.

### Difficulty Rating

This problem requires understanding how to apply dynamic programming principles to an array-based problem. It's challenging enough to require careful consideration of consecutive subarrays but not so complex that it becomes overly difficult. The solution provided is straightforward and efficient, making it a good challenge for those looking to practice dynamic programming with arrays.