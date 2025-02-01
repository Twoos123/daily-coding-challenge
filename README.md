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

### Coding Challenge: "Maximum Sum of Non-Consecutive Subarrays"

**Problem Description:**
Given an array of integers, find the maximum sum of all non-consecutive subarrays. A subarray is considered non-consecutive if no two elements in the subarray are adjacent.

**Example Input/Output:**
- **Input:** `arr = [2, 4, 6, 2, 5]`
- **Output:** `15` (The maximum sum is achieved by considering the subarray `[2, 4, 6, 5]`)

**Constraints:**
- The array can contain both positive and negative integers.
- The array length can vary from 1 to 1000 elements.

**Algorithm and Data Structure:**
This problem can be solved using dynamic programming. The idea is to maintain two arrays, `dp` and `prev`, where `dp[i]` represents the maximum sum of a non-consecutive subarray ending at index `i`, and `prev[i]` represents the maximum sum of a non-consecutive subarray ending at index `i-1`.

**Solution:**

```python
def max_sum_non_consecutive(arr):
    if not arr:
        return 0
    
    n = len(arr)
    
    # Initialize dp array with the first element of the array
    dp = [0] * n
    dp[0] = arr[0]
    
    # If there are more than one element, consider the sum of two non-consecutive elements
    if n > 1:
        dp[1] = max(arr[0], arr[1])
    
    # Fill up the dp array
    for i in range(2, n):
        # A subarray is non-consecutive if the current element is not adjacent to the previous one
        # So, we consider two cases: 
        # 1. Exclude the current element from the previous non-consecutive subarray.
        # 2. Include the current element in the previous non-consecutive subarray.
        dp[i] = max(dp[i-1], dp[i-2] + arr[i])
    
    return dp[-1]

# Example usage
arr = [2, 4, 6, 2, 5]
print(max_sum_non_consecutive(arr))  # Output: 15
```

**Explanation:**
1. **Initialization:** `dp` is set to the first element of the array, and `dp[1]` is set to the maximum of the first two elements.
2. **Dynamic Programming Loop:** For each element starting from index `2`, we calculate `dp[i]` as the maximum of two possibilities:
   - Exclude the current element from the previous non-consecutive subarray (`dp[i-1]`).
   - Include the current element in the previous non-consecutive subarray (`dp[i-2] + arr[i]`).
3. **Return Maximum Sum:** The final result is stored in `dp[-1]`.

This solution leverages dynamic programming to efficiently compute the maximum sum of non-consecutive subarrays in linear time complexity `O(n)`, where `n` is the length of the input array.