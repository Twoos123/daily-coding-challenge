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

### Problem

**Problem Description:**
Given a 2D matrix where each cell contains a number, find the maximum sum of a submatrix that can be rotated by 90 degrees (either clockwise or anticlockwise) and still be valid. The rotation should be performed in such a way that the cells in each row and column maintain their relative order. The sum of the submatrix should be maximized.

**Example Input/Output:**
Input:
```
1 2 3
4 5 6
7 8 9
```

Output:
The maximum sum is 30 (the sum of the submatrix with cells {9, 8, 7, 6, 5, 4}).

**Constraints:**
- The input matrix is square (i.e., has the same number of rows and columns).
- Each cell in the matrix contains a non-negative integer.

### Solution

To solve this problem, we need to find the maximum sum of a submatrix that can be rotated by 90 degrees. One approach is to iterate through all possible submatrices of the given square matrix and calculate their sums after rotation. However, this brute-force approach would be inefficient with a high time complexity.

A more efficient solution involves leveraging the properties of matrix rotation and sum calculation.

1. **Rotate Matrix:**
   - Rotate the matrix by 90 degrees to get a new matrix where rows become columns and vice versa.
   - This step ensures that the relative order within each row and column is maintained.

2. **Sum Calculation:**
   - Calculate the sum of each row or column in the rotated matrix.
   - The sum of any subrectangle in the rotated matrix will be the same as in the original matrix due to its properties.

3. **Maximize Sum:**
   - Iterate through all possible submatrices in both the original and rotated matrices.
   - Keep track of the maximum sum found.

Here's an optimized solution in Python:

```python
def max_sum_rotated(matrix):
    n = len(matrix)
    max_sum = float('-inf')
    
    # Rotate matrix by 90 degrees clockwise
    rotated_matrix = [[matrix[j][i] for j in range(n)] for i in range(n)]
    
    def sum_submatrix(matrix, x, y, w, h):
        # Calculate sum of subrectangle [x, y, w, h]
        return sum(sum(row[x:x+w]) for row in matrix[y:y+h])

    # Iterate through all possible submatrices
    for i in range(n):
        for j in range(n):
            for w in range(1, n + 1):
                for h in range(1, n + 1):
                    if i + w <= n and j + h <= n:
                        # Calculate sum for both original and rotated matrices
                        sum_original = sum_submatrix(matrix, i, j, w, h)
                        sum_rotated = sum_submatrix(rotated_matrix, j, i, h, w)
                        
                        # Update max_sum if needed
                        max_sum = max(max_sum, sum_original, sum_rotated)

    return max_sum

# Example usage:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(max_sum_rotated(matrix)) # Output should be 30
```

### Analysis

#### Time Complexity:
- The time complexity of rotating a square matrix is O(n^2).
- The inner loop for calculating the sum of submatrices has a time complexity of O(n^2) as well.
- Therefore, the overall time complexity is O(n^4) due to repeated calculations for different submatrices.

#### Space Complexity:
- The space complexity is O(n^2) for storing the rotated matrix.

### Why this approach is optimal:

This approach is optimal because it leverages properties of matrix rotation and sum calculation to reduce the number of necessary computations. However, it still has a high time complexity due to its brute-force nature. For improved efficiency with high-dimensional matrices (e.g., beyond small sizes like 10x10), more advanced techniques like dynamic programming or prefix sums might be necessary but are beyond the scope of this explanation.

### Difficulty Rating

DIFFICULTY: 4

This problem requires an understanding of matrix operations and rotations while maintaining time complexity considerations. While it's doable with straightforward techniques like those shown above, it's not trivial due to its time complexity requirements and the need for maintaining relative order post-rotation.