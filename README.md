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
**Matrix Operations Challenge: Non-Overlapping Sub-Matrices**

Given a 2D matrix `matrix` of size `m x n`, where each element is a positive integer, find the number of non-overlapping sub-matrices within `matrix` such that each sub-matrix is a square with side length `k` (where `k` is a given integer).

### Example Input/Output

**Input:**
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
k = 2
```
**Output:**
```python
Number of non-overlapping sub-matrices: 6
```

### Constraints
- The matrix `matrix` is a 2D list of integers.
- The side length `k` of the sub-matrices is a positive integer.
- All sub-matrices must be non-overlapping.

### Solution in Python

The optimal solution involves counting the number of possible starting positions for a sub-matrix of size `k x k` and then summing these counts. Since each sub-matrix can start at any position where its top-left corner aligns with the top-left corner of the original matrix, we need to consider all such positions.

```python
def countSubmatrices(matrix, k):
    m, n = len(matrix), len(matrix[0])
    count = 0
    
    # Check rows for valid starting positions
    for i in range(m):
        # Check columns for valid starting positions
        for j in range(n):
            # Validate if a sub-matrix of size k x k can be formed starting at position (i, j)
            if i + k <= m and j + k <= n:
                count += 1
                
    return count

# Example usage:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
k = 2
print(countSubmatrices(matrix, k))  # Output: 6
```

### Analysis

#### Time Complexity:
The time complexity is O(m*n), where m and n are the dimensions of the matrix. This is because we iterate through each cell in the matrix once.

#### Space Complexity:
The space complexity is O(1), as we only use a constant amount of space to store variables like `count`.

This solution is optimal because it directly counts the number of valid starting positions for sub-matrices without needing additional data structures or complex algorithms.

### Difficulty Rating:
DIFFICULTY: 3

This problem requires basic understanding of matrix operations and simple counting logic. However, it does involve careful consideration of valid starting positions for sub-matrices within a given matrix structure, which adds a slight complexity level compared to simpler matrix-related problems.