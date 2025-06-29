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

### Challenge: Matrix Rotation and Sum Calculation

#### Problem Description

Given a square matrix, implement two operations:
1. **Rotate Matrix**: Rotate the matrix 90 degrees clockwise.
2. **Sum of Diagonals**: Calculate the sum of the diagonals (both primary and secondary) of the original and rotated matrices.

#### Example Input/Output

**Input:**
```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

**Output:**
- **Original Matrix Diagonals Sum**: 
  - Primary Diagonal: Sum = 1 + 5 + 9 = 15
  - Secondary Diagonal: Sum = 3 + 5 + 7 = 15

- **Rotated Matrix Diagonals Sum**:
  - Primary Diagonal: Sum = 7 + 5 + 3 = 15
  - Secondary Diagonal: Sum = 9 + 5 + 1 = 15

#### Constraints
- The input matrix is guaranteed to be a square matrix.
- The matrix will contain only integers.

#### Most Efficient Solution in Python

```python
def rotate_and_sum(matrix):
    def transpose(matrix):
        return list(map(list, zip(*matrix)))
    
    def reverse_each_row(matrix):
        return [row[::-1] for row in matrix]
    
    def sum_of_diagonals(matrix):
        n = len(matrix)
        primary_diagonal_sum = sum(matrix[i][i] for i in range(n))
        secondary_diagonal_sum = sum(matrix[i][n-i-1] for i in range(n))
        return primary_diagonal_sum + secondary_diagonal_sum
    
    # Original Matrix Diagonals Sum
    original_sum = sum_of_diagonals(matrix)
    
    # Rotate Matrix 90 degrees clockwise
    rotated_matrix = reverse_each_row(transpose(matrix))
    
    # Rotated Matrix Diagonals Sum
    rotated_sum = sum_of_diagonals(rotated_matrix)
    
    return original_sum, rotated_sum

# Example usage:
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

original_sum, rotated_sum = rotate_and_sum(matrix)
print(f"Original Matrix Diagonals Sum: {original_sum}")
print(f"Rotated Matrix Diagonals Sum: {rotated_sum}")
```

### Detailed Explanation of the Algorithm

1. **Transpose Matrix**: The `transpose` function uses Python's built-in `zip` function to transpose the matrix.
   - This operation changes rows into columns and vice versa.
   - Time Complexity: O(n^2), where n is the number of rows (or columns).
   - Space Complexity: O(n^2) for storing the transposed matrix.

2. **Reverse Each Row**: The `reverse_each_row` function uses list slicing (`[::-1]`) to reverse each row of the matrix.
   - This operation reverses the order of elements in each row.
   - Time Complexity: O(n^2), where n is the number of rows.
   - Space Complexity: O(n^2) for storing the reversed rows.

3. **Sum of Diagonals**: The `sum_of_diagonals` function calculates the sum of both primary and secondary diagonals.
   - Primary Diagonal: Elements from top-left to bottom-right.
   - Secondary Diagonal: Elements from top-right to bottom-left.
   - Time Complexity: O(n), where n is the number of rows (or columns).
   - Space Complexity: O(1) since it only uses a constant amount of space to store sums.

### Complexity Analysis

- The overall time complexity of the solution involves transposing and reversing operations, which are both linear operations on square matrices.
  - Thus, the total time complexity is O(n^2) for transposing and O(n^2) for reversing, resulting in a total time complexity of O(n^2).
  
- The space complexity involves storing intermediate matrices during transpose and reverse operations.
  - Therefore, the total space complexity remains O(n^2).

### Why This Approach is Optimal

This approach is optimal because it directly addresses both challenges (rotating and summing diagonals) with minimal additional overhead.

1. **Rotating Matrix**: Transposing and then reversing each row achieves a 90-degree clockwise rotation efficiently.
2. **Sum of Diagonals**: Calculating sums directly using diagonal indices avoids unnecessary computations.

Additionally, using built-in operations like slicing (`[::-1]`) and transposing with `zip` ensures that the implementation is both concise and efficient.

### Difficulty Rating

This problem requires understanding matrix operations, specifically transposing and reversing rows. While it's not extremely