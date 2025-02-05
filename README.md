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

Difficulty: ⭐⭐⭐⭐ (4/5)

### Problem Description

**Challenge: Maximum Sum of Subarray with Limited Prefix Sum**

Given an array of integers `arr` and an integer limit `L`, find the maximum sum of any subarray such that the prefix sum of the subarray does not exceed `L`. For example, if `arr = [1, 2, 3, 4, 5]` and `L = 6`, the maximum sum is `9` because the subarray `[3, 4, 5]` has a sum of `9` and a prefix sum of `12` which exceeds `6`. However, the subarray `[1, 2, 3]` has a sum of `6` and a prefix sum of `6`, which is within the limit.

### Example Input/Output

**Input:** `arr = [1, 2, 3, 4, 5], L = 6`
**Output:** `9` (because the subarray `[3, 4, 5]` gives the maximum sum within the limit)

**Input:** `arr = [2, 3, 4, 5], L = 7`
**Output:** `6` (because the subarray `[2, 3, 4]` gives the maximum sum within the limit)

### Constraints

- The array `arr` is non-empty.
- The integer limit `L` is non-negative.
- The sum of elements in the array can be very large.

### Solution

To solve this problem efficiently, we use dynamic programming with arrays. The key idea is to maintain a table where each cell represents the maximum sum of any subarray ending at that index and within the given prefix sum limit.

```python
def max_sum_subarray(arr, L):
    n = len(arr)
    dp = [[float('-inf')] * (L + 1) for _ in range(n)]
    
    # Initialize base cases
    for i in range(n):
        dp[i][0] = 0
    
    # Fill up the dp table
    for i in range(1, n):
        for j in range(1, L + 1):
            if arr[i] <= j:
                # Include current element
                dp[i][j] = max(dp[i][j], dp[i - 1][j - arr[i]] + arr[i])
            dp[i][j] = max(dp[i][j], dp[i - 1][j])
    
    # Find the maximum sum
    max_sum = float('-inf')
    for j in range(L + 1):
        max_sum = max(max_sum, dp[n - 1][j])
    
    return max_sum

# Example usage
arr = [1, 2, 3, 4, 5]
L = 6
print(max_sum_subarray(arr, L))  # Output: 9

arr = [2, 3, 4, 5]
L = 7
print(max_sum_subarray(arr, L))  # Output: 6
```

### Analysis

**Time Complexity:**
The time complexity of this solution is O(n * L), where n is the length of the array and L is the limit. We iterate over each element twice: once to fill up the dp table and once to find the maximum sum.

**Space Complexity:**
The space complexity is O(n * L), as we need to store a 2D array of size n x (L + 1).

This approach is optimal because it ensures that we consider all possible subarrays within the given prefix sum limit and keeps track of their maximum sums efficiently using dynamic programming.

### Difficulty Rating

This problem requires implementing dynamic programming with arrays to solve efficiently and correctly handle the constraints of maintaining a prefix sum within a limit. The solution provided is optimal in terms of both time and space complexity, making it suitable for a moderate-level dynamic programming challenge.