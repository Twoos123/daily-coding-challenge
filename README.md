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

### Problem Description: **Array Partitioning for Maximum Product**

Given an array `arr` of integers, partition the array into two parts such that the product of the elements in the first part is maximized. The elements in the first part can be chosen such that their product is maximized while ensuring that the remaining elements in the second part are also non-zero.

### Example Input/Output

- **Input:** `[1, 2, 3, 4, 5]`
- **Output:** `[5, 4, 3], [1, 2]`
  - The product of elements in the first part is `5 * 4 * 3 = 60`, which is maximized.
  - The remaining elements `1` and `2` form the second part.

### Constraints
- The array may contain zeros.
- The solution must ensure that the product in the first part is maximized and all elements in the second part are non-zero.

### Solution

```python
def maximize_product_partition(arr):
    if not arr or sum(arr) == 0:
        return [], []

    n = len(arr)
    dp = [[0] * (n + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for j in range(i, n + 1):
            if i == j:
                dp[i][j] = arr[i - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], arr[i - 1] * dp[i - 1][j - 1])

    max_product = dp[n][n]
    
    # Reconstruct the partition
    i, j = n, n
    first_part = []
    while i > 0 and j > 0:
        if dp[i][j] == dp[i - 1][j]:
            i -= 1
        else:
            first_part.append(arr[j - 1])
            j -= 2
            
    return first_part[::-1], arr[:i] or arr[:j]

# Example usage:
arr = [1, 2, 3, 4, 5]
first_part, second_part = maximize_product_partition(arr)
print(f"First part: {first_part}, Second part: {second_part}")
```

### Analysis:

#### Time Complexity:
The time complexity of this solution is **O(n^2)** because we are using a dynamic programming table `dp` which is filled in a nested loop structure.

#### Space Complexity:
The space complexity is **O(n^2)** as well because we need to store the `dp` table which has dimensions `(n + 1) x (n + 1)`.

#### Difficulty Rating:
Given the complexity analysis:
- **Time Complexity:** O(n^2)
- **Space Complexity:** O(n^2)
- **Implementation Difficulty:** This problem requires understanding how to use dynamic programming with arrays to solve a partitioning problem efficiently. It involves reconstructing the optimal partition based on the computed maximum product, which adds to its difficulty level.

****

This rating reflects that while it's not extremely challenging like some hard LeetCode problems, it requires a good grasp of dynamic programming techniques and array manipulation to optimize the solution effectively.