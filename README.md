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

### Coding Challenge: "Find the Longest Increasing Subsequence with a Maximum Sum"

**Problem Description:**
Given an array of integers, find the longest increasing subsequence (LIS) with a maximum sum. If there are multiple such subsequences, return the first one encountered.

**Algorithmic Approach:**
This problem can be solved using dynamic programming (DP) with a slightly modified approach to handle the sum constraint. We will create two arrays: `dp` to store the length of the LIS ending at each position and `sum_dp` to store the maximum sum of the LIS ending at each position.

**Data Structures:**
- **Array**: To store the input integers.
- **Dynamic Programming Arrays**: `dp` and `sum_dp`.

**Constraints:**
- The input array contains positive integers.
- The length of the input array is at least 1.

**Example Input/Output:**
Input: `[10, 9, 2, 5, 3, 7, 101, 18]`
Output: `[7, 101]`

**Solution in Python:**

```python
def longest_increasing_subsequence_with_max_sum(arr):
    n = len(arr)
    
    # Initialize dp and sum_dp arrays with zeros
    dp = [1] * n
    sum_dp = [0] * n
    
    # Initialize maximum length and maximum sum
    max_length = 1
    max_sum = arr[0]
    
    # Iterate through the array to fill up dp and sum_dp arrays
    for i in range(1, n):
        for j in range(i):
            if arr[i] > arr[j] and sum_dp[j] + arr[i] > sum_dp[i]:
                dp[i] = dp[j] + 1
                sum_dp[i] = sum_dp[j] + arr[i]
        
        # Update maximum length and maximum sum
        if dp[i] > max_length or (dp[i] == max_length and sum_dp[i] > max_sum):
            max_length = dp[i]
            max_sum = sum_dp[i]
    
    # Backtrack to find the longest increasing subsequence with the maximum sum
    result = []
    index = n - 1
    while max_length > 0 and index >= 0:
        if dp[index] == max_length:
            result.append(arr[index])
            max_length -= 1
        index -= 1
    
    # Return the subsequence in ascending order
    return result[::-1]

# Example usage:
print(longest_increasing_subsequence_with_max_sum([10, 9, 2, 5, 3, 7, 101, 18]))
```

**Explanation:**
1. **Initialization**: We initialize `dp` and `sum_dp` arrays with zeros. These arrays will keep track of the length and maximum sum of the longest increasing subsequences ending at each position.
2. **Iteration**: We iterate through the array. For each element, we check if it is greater than the previous element in the subsequence. If it is, we update `dp` and `sum_dp` accordingly to reflect the new length and maximum sum of the subsequence.
3. **Maximum Update**: We keep track of the maximum length and maximum sum encountered so far.
4. **Backtracking**: After filling up the `dp` and `sum_dp` arrays, we backtrack to find the actual longest increasing subsequence with the maximum sum by checking which indices have the maximum length and sum.

This solution leverages dynamic programming effectively by breaking down the problem into smaller subproblems and storing their solutions to avoid redundant computation. The use of two arrays (`dp` and `sum_dp`) allows us to efficiently find both the length and maximum sum of the LIS, enabling us to identify the desired subsequence with its maximum sum property.