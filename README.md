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

### Problem Description: Matrix Element Rotation

**Problem:**
Given a 2D matrix `matrix` of size `n x m` where each element is a non-negative integer, rotate the elements in the matrix such that each element moves to a position that is one position counterclockwise from its original position. For example, if we have a 3x3 matrix:
```plaintext
1 2 3
4 5 6
7 8 9
```
The rotated matrix would be:
```plaintext
7 4 1
8 5 2
9 6 3
```
**Input/Output Example:**
Input:
```plaintext
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
Output:
```plaintext
[[7, 4, 1], [8, 5, 2], [9, 6, 3]]
```
**Constraints:**
- The matrix is a square matrix with dimensions `n x n`.
- Each element in the matrix is a non-negative integer.

### Solution in Python

```python
def rotate_matrix(matrix):
    n = len(matrix)
    
    # Transpose the matrix
    transposed_matrix = list(zip(*matrix))
    
    # Reverse each row in the transposed matrix
    rotated_matrix = [list(reversed(row)) for row in transposed_matrix]
    
    return rotated_matrix

# Example usage:
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotated_matrix = rotate_matrix(matrix)
print(rotated_matrix)  # Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
```

### Analysis of Complexity

**Time Complexity:**
The time complexity of this solution is O(n^2) due to the following operations:
1. Transposing the matrix: This involves creating tuples from rows and then zipping them, which is O(n^2).
2. Reversing each row: This involves iterating over each row and reversing it, which is also O(n^2).

Thus, the total time complexity is O(n^2) + O(n^2) = O(2n^2), but since we drop constants in Big O notation, it simplifies to O(n^2).

**Space Complexity:**
The space complexity is O(n^2) because we are creating a new transposed matrix and then reversing each row to form the final rotated matrix.

### Difficulty Rating: 3

This problem requires understanding basic matrix operations like transposition and row reversal. It also involves handling the 2D nature of matrices effectively. While it's not extremely challenging, it does require some insight into how matrices can be transformed efficiently. Therefore, it rates a 3 in difficulty.

### Explanation of Approach

The chosen solution is optimal because it leverages two well-known matrix operations:
1. **Transposition**: This operation switches rows and columns, which helps in achieving the counterclockwise rotation.
2. **Row Reversal**: After transposing, reversing each row achieves the desired effect of rotating elements counterclockwise.

Using these operations together ensures that we achieve the rotation in O(n^2) time complexity without any additional overheads like nested loops or complex algorithms. The approach is straightforward and efficient for this specific task.