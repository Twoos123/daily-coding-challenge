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

### Problem: Matrix Rotation and Zeroing

Given a square matrix \( M \) of size \( n \times n \), perform the following operations in a single pass:

1. **Rotate the Matrix**: Rotate the matrix \( M \) by \( 90^\circ \) clockwise.
2. **Zero Certain Rows and Columns**: If any element in a row or column is set to zero, mark the entire row and column for zeroing.

**Example Input/Output**:

Input:
```
[
  [1, 2, 3],
  [4, 5, 0],
  [7, 8, 9]
]
```

Output:
```
[
  [7, 4, 1],
  [8, 5, 0],
  [9, 0, 0]
]
```

### Constraints

- The input matrix is guaranteed to be square (\( n \times n \)).
- The matrix size \( n \) is less than or equal to 10.
- The elements in the matrix are integers.

### Solution in Python

```python
def rotate_and_zero(matrix):
    n = len(matrix)
    
    # Step 1: Transpose the matrix
    matrix = [list(i) for i in zip(*matrix)]
    
    # Step 2: Reverse each row to achieve clockwise rotation
    for row in matrix:
        row.reverse()
    
    # Step 3: Initialize sets to keep track of rows and columns that need to be zeroed
    rows_to_zero = set()
    cols_to_zero = set()
    
    # Check for rows and columns that need to be zeroed
    for i in range(n):
        for j in range(n):
            if matrix[i][j] == 0:
                rows_to_zero.add(i)
                cols_to_zero.add(j)
    
    # Step 4: Zero the identified rows and columns
    for i in range(n):
        for j in range(n):
            if i in rows_to_zero or j in cols_to_zero:
                matrix[i][j] = 0
    
    return matrix

# Example usage:
matrix = [
  [1, 2, 3],
  [4, 5, 0],
  [7, 8, 9]
]
result = rotate_and_zero(matrix)
print(result)
```

### Explanation

1. **Transpose**: The first step involves transposing the matrix using `zip(*matrix)`, which swaps rows with columns.
2. **Reverse Rows**: To achieve a \(90^\circ\) clockwise rotation, we reverse each row using `row.reverse()`.
3. **Identify Rows and Columns to Zero**: We use sets (`rows_to_zero` and `cols_to_zero`) to track indices of rows and columns that contain zeros.
4. **Zero Identified Rows and Columns**: We iterate through the transposed matrix with reversed rows and set elements identified by indices in `rows_to_zero` or `cols_to_zero` to zero.

### Time and Space Complexity

- **Time Complexity**: The overall time complexity is \( O(n^2) \) due to transposing, reversing rows, and checking/zeroing rows/columns.
- **Space Complexity**: The space complexity is \( O(n^2) \) for storing the transposed matrix with reversed rows.

### Difficulty Rating

This problem combines matrix manipulation techniques (transpose and reverse) with element-wise operations, making it moderately challenging. The use of sets for efficient tracking of rows/columns to zero adds an additional layer of complexity, but the overall solution remains efficient in terms of both time and space complexity.