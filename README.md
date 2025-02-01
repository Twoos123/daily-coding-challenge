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

Difficulty: ⭐⭐ (2/5)

# Matrix Operations Challenge: Rotate Matrix 90 Degrees

## Problem Description

Given a 2D matrix `matrix`, implement a function `rotate` that rotates the matrix 90 degrees clockwise. The function should perform the rotation in-place, meaning it should modify the original matrix without creating a new one.

## Example Input/Output

Input:
```
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
```

Output after rotation:
```
[[7, 4, 1],
 [8, 5, 2],
 [9, 6, 3]]
```

## Constraints

- The input matrix will be a square matrix (i.e., it has the same number of rows and columns).
- The size of the matrix will be between 1 and 1000.

## Solution in Python

```python
def rotate(matrix):
    n = len(matrix)
    
    # Transpose the matrix
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each row
    for i in range(n):
        matrix[i] = matrix[i][::-1]

# Example usage
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

print("Before Rotation:")
for row in matrix:
    print(row)

rotate(matrix)

print("\nAfter Rotation:")
for row in matrix:
    print(row)
```

## Explanation

1. **Transpose the Matrix**: The first step is to transpose the matrix. This can be done by swapping elements from the current row with the corresponding elements from the next row. This operation transforms the matrix from:
   ```plaintext
   1 2 3 
   4 5 6 
   7 8 9  
   ```
   into:
   ```plaintext
   1 4 7 
   2 5 8 
   3 6 9  
   ```
   
2. **Reverse Each Row**: After transposing the matrix, each row needs to be reversed. This can be achieved by slicing each row with a step of `-1`, which reverses it in place.

By combining these two operations, we effectively rotate the matrix 90 degrees clockwise.

This solution has a time complexity of O(n^2), where n is the size of the matrix. The space complexity remains O(1) since we are modifying the original matrix in-place.