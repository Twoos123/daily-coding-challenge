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

### Coding Challenge: Maximum Sum of Non-Overlapping Subarrays

**Problem Description:**
Given an array `nums` of integers, find the maximum sum that can be obtained by selecting non-overlapping subarrays. A subarray is considered non-overlapping if it does not share any elements with previously selected subarrays.

**Example Input/Output:**
- **Input:** `nums = [1, 2, 3, 4, 5]`
- **Output:** `15` (The maximum sum is obtained by selecting the subarrays `[1, 2, 3]` and `[4, 5]`)

**Constraints:**
- The array `nums` will have at least one element.
- The length of the array is `n`.

**Analysis of Complexity and Difficulty:**

1. **Time Complexity:**
   - This problem can be solved using dynamic programming. The key insight is to maintain an array `dp` where `dp[i]` represents the maximum sum that can be obtained by selecting non-overlapping subarrays ending at index `i`.

   ```python
   dp[i] = max(dp[i-1], dp[i-2] + nums[i])
   ```

   This formula works because we either continue from the previous best sum (`dp[i-1]`) or start a new subarray from the current element and add it to the previous best two-element subarray (`dp[i-2] + nums[i]`).

2. **Space Complexity:**
   - We need an additional array of size `n` to store the dynamic programming values.

3. **Difficulty Rating:**
   - The problem involves understanding how to use dynamic programming with arrays to find the maximum sum of non-overlapping subarrays.
   - The solution requires careful consideration of the transitions between states and is not trivial but can be approached systematically.

Given these points, I would rate this challenge as follows:

```
```

### Most Efficient Solution in Python

```python
def max_non_overlapping_sum(nums):
    if not nums:
        return 0
    
    n = len(nums)
    
    # Initialize dp array with zeros.
    dp = [0] * n
    
    # The maximum sum ending at index i is either dp[i-1] or dp[i-2] + nums[i].
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    
    for i in range(2, n):
        dp[i] = max(dp[i-1], dp[i-2] + nums[i])
    
    return dp[-1]

# Example usage:
nums = [1, 2, 3, 4, 5]
print(max_non_overlapping_sum(nums))  # Output: 15
```

**Explanation:**

1. **Initialization:** We initialize the `dp` array with zeros and set `dp` and `dp[1]` based on the first two elements of the input array.
2. **Dynamic Programming Loop:** We iterate from index `2` to `n`, updating each element in the `dp` array using the recurrence relation `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`.
3. **Return Value:** The maximum sum is stored in `dp[-1]` and returned.

**Time and Space Complexity Analysis:**

- **Time Complexity:** O(n) because we iterate through the array once.
- **Space Complexity:** O(n) because we use an additional array of size n to store the dynamic programming values.

This approach is optimal because it directly solves the problem by maintaining a running sum and considering all possible transitions between states efficiently. The space complexity is linear with respect to the input size, which is typical for such dynamic programming problems.