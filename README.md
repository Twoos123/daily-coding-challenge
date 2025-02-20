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

**Problem: "Maximum Sum of Submatrices with Constraints"**

Given a 2D array `matrix` of size `m x n` and an integer `k`, find the maximum sum of all possible **k x k** submatrices within the given matrix. However, there is a constraint that the sum of any two submatrices must not exceed a given limit `limit`.

**Example Input/Output:**

**Input:**
```plaintext
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
k = 2
limit = 10
```
**Output:**
```
Maximum sum of submatrices: 22
```

### Constraints:
1. The size of the submatrix (`k x k`) is fixed.
2. The sum of any two submatrices must not exceed the given limit (`limit`).
3. The goal is to maximize the sum of all possible submatrices.

### Solution

The problem involves dynamic programming and efficient matrix operations. We can approach this problem by first calculating all possible sums of `k x k` submatrices and then filtering out those that violate the constraint.

1. **Calculate Sum of Submatrices:**
   - Use a sliding window approach to calculate the sum of all possible `k x k` submatrices.

2. **Filter Constraints:**
   - Check if the sum of any two submatrices exceeds the given limit.

Here is an optimal solution in Python:

```python
def max_sum_submatrices(matrix, k, limit):
    m, n = len(matrix), len(matrix[0])
    if k > min(m, n):
        return 0
    
    # Prefix sums for each row
    prefix_sums = [[0] * (n - k + 1) for _ in range(m)]
    
    # Calculate prefix sums for each row
    for i in range(m):
        for j in range(n - k + 1):
            prefix_sums[i][j] = sum(matrix[i][j:j+k])
    
    # Initialize maximum sum
    max_sum = float('-inf')
    
    # Iterate over all possible submatrices
    for i in range(m):
        for j in range(n - k + 1):
            # Calculate sum of current submatrix
            current_sum = prefix_sums[i][j]
            
            # Check if adding another submatrix would exceed limit
            for x in range(i + 1, m):
                for y in range(j + k + 1, n):
                    if current_sum + prefix_sums[x][y] > limit:
                        break
                    max_sum = max(max_sum, current_sum + prefix_sums[x][y])
                    
                    # Update current sum for next iteration
                    current_sum += current_sum
                    
                    # Adjust limits for next iteration
                    if current_sum + prefix_sums[x][y] > limit:
                        break
                    
    return max_sum

# Example usage:
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
k = 2
limit = 10

result = max_sum_submatrices(matrix, k, limit)
print("Maximum sum of submatrices:", result)
```

### Analysis of Complexity:

1. **Time Complexity:**
   - The time complexity is dominated by the two nested loops that iterate over all possible submatrices and check constraints. This results in a time complexity of \(O(m * n * k)\).

2. **Space Complexity:**
   - The space complexity is \(O(m * (n-k+1))\) due to the prefix sums array.

### Difficulty Rating:
This problem requires efficient handling of matrix operations, dynamic programming, and careful constraint-checking. The solution provided optimizes both time and space complexity while ensuring that it handles the given constraints effectively.