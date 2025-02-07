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

**Challenge: Maximum Subarray Sum with Consecutive Elements**

Given an array `arr` of integers, find the maximum sum of any subarray where all elements are consecutive. The subarray can start at any index and end at any index within the bounds of the array.

### Example Input/Output

**Input:**
```
arr = [1, -2, 3, -4, 5]
```

**Output:**
```
Maximum sum of consecutive subarray: 7 (subarray: [3, -4, 5])
```

### Constraints
- The array `arr` will not be empty.
- The integers in the array are not guaranteed to be positive.

### Detailed Explanation and Optimal Solution

To solve this problem efficiently using dynamic programming, we can utilize a 2D array `dp` where `dp[i][j]` represents the maximum sum of a subarray starting from index `i` and ending at index `j`.

#### Solution in Python

```python
def max_consecutive_subarray_sum(arr):
    n = len(arr)
    
    # Initialize dp array with zeros
    dp = [[0]*n for _ in range(n)]
    
    # Initialize maximum sum variable
    max_sum = float('-inf')
    
    # Fill dp array using bottom-up approach
    for i in range(n):
        for j in range(i, n):
            if i == j:
                dp[i][j] = arr[i]
            else:
                dp[i][j] = max(dp[i][j-1] + arr[j], arr[j])
            
            # Update max_sum if current sum is greater
            max_sum = max(max_sum, dp[i][j])
    
    return max_sum
```

#### Analysis of Complexity and Difficulty Rating

#### Time Complexity: 
The time complexity is O(n^2) due to the nested loops used to fill the dp array. This is because we iterate over each possible subarray and calculate its maximum sum.

#### Space Complexity: 
The space complexity is O(n^2) as well, since we use a 2D dp array to store the maximum sums of all possible subarrays.

#### Difficulty Rating:
This problem requires a good understanding of dynamic programming and how to apply it to solve problems involving arrays. The solution involves a 2D dp array, which adds complexity compared to simpler dynamic programming problems like Fibonacci or subsets sum problems. However, it remains within the realm of moderately challenging problems suitable for someone with basic dynamic programming skills.

The chosen approach is most efficient because it systematically builds up the dp array by considering all possible subarrays and their sums, ensuring that we find the maximum sum among all consecutive subarrays in a single pass. This approach avoids redundant calculations and ensures that we capture all potential solutions efficiently.