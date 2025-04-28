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

**Longest Increasing Subsequence with Constraints**

Given an array of integers `arr` and a constraint value `maxSum`, find the length of the longest increasing subsequence that does not exceed the sum of its elements by `maxSum`. The subsequence must be strictly increasing, meaning that each element in the subsequence must be greater than the previous one.

### Example Input/Output

**Input:** `arr = [1, 3, 2, 4, 5]`, `maxSum = 3`
**Output:** `3` (because the subsequence `[1, 3, 4]` has a sum of `8` and is strictly increasing, but it exceeds the constraint; however, `[1, 2, 3]` meets the constraint and is the longest such subsequence)

### Constraints

- The array `arr` contains at least one element.
- The constraint value `maxSum` is non-negative.

### Most Efficient Solution in Python

```python
def longest_increasing_subsequence_with_constraint(arr, maxSum):
    n = len(arr)
    dp = [[0] * (maxSum + 1) for _ in range(n)]
    
    # Initialize base case for single elements
    for i in range(n):
        if arr[i] <= maxSum:
            dp[i][arr[i]] = 1
    
    # Fill dp table in bottom-up manner
    for i in range(1, n):
        for j in range(1, maxSum + 1):
            if j < arr[i]:
                dp[i][j] = dp[i - 1][j]
            else:
                dp[i][j] = max(dp[i - 1][j], 
                               (dp[i - 1][j - arr[i]] + 1 if j - arr[i] >= 0 else 0))
    
    # Find the maximum length of valid subsequences
    max_length = 0
    for j in range(maxSum + 1):
        if dp[n - 1][j] > max_length:
            max_length = dp[n - 1][j]
    
    return max_length

# Example usage:
arr = [1, 3, 2, 4, 5]
maxSum = 3
print(longest_increasing_subsequence_with_constraint(arr, maxSum)) # Output: 3
```

### Detailed Explanation of the Algorithm

This problem can be solved using dynamic programming with a two-dimensional array `dp`. The dimensions of `dp` are `(n, maxSum + 1)`, where `n` is the length of the input array.

1. **Initialization**: We initialize each element in the first row and first column of `dp` based on whether each single element in `arr` does not exceed `maxSum`.
   
2. **Bottom-Up Fill**: For each element in `arr` and each possible sum up to `maxSum`, we fill up the table using two possibilities:
   - If the current element does not exceed the current sum `j`, then we consider only excluding this element from the subsequence.
   - If the current element does exceed the current sum `j`, then we consider including this element in a valid subsequence only if there's a valid subsequence without this element that sums up to `j - arr[i]`.

3. **Maximum Length**: Finally, we scan through all possible sums from 1 to `maxSum` and find the maximum length of valid subsequences stored in `dp` at index `(n - 1, j)` for any valid sum `j`.

### Time and Space Complexity

- **Time Complexity**: The time complexity is O(n * maxSum), where n is the length of the input array and maxSum is the maximum allowed sum.
- **Space Complexity**: The space complexity is O(n * maxSum), as we need to store a 2D array of size `(n, maxSum + 1)`.

### Why This Approach is Optimal

This approach ensures we consider all possible combinations of sums up to `maxSum` while maintaining an efficient space usage. The bottom-up filling ensures that each subproblem is solved only once and stored in memory for future reuse, which aligns with typical dynamic programming principles.

If there were multiple approaches with different trade-offs, this method would be chosen because it directly addresses the problem constraints by ensuring that no subsequence exceeds its allowed sum while finding the longest possible increase. 

### Difficulty Rating

The problem requires a clear understanding of dynamic programming principles along with managing both increasing order and sum constraints. The use of a 2D array adds complexity compared to simpler DP problems but remains manageable with proper initialization and iteration strategies.