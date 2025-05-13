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

# Matrix Coding Challenge: Spiral Traversal

## Problem Description

Given a square matrix `matrix` of size `n x n`, perform a spiral traversal starting from the top-left corner. The traversal should proceed in a clockwise direction: right, down, left, up. You need to return the visited elements in order.

### Example Input/Output

**Input:**
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```
**Output:**
```
[1, 2, 3, 6, 9, 8, 7, 4, 5]
```

## Constraints

- The input matrix is guaranteed to be a square matrix.
- The size of the matrix (`n`) will be at least 1.

## Solution

The most efficient approach to solve this problem is to use a simple four-pointer approach that keeps track of the boundaries of the remaining unvisited elements in the matrix. This method ensures that we visit each element exactly once and in the correct order.

```python
def spiralTraversal(matrix):
    if not matrix or not matrix[0]:
        return []

    n = len(matrix)
    result = []
    top, bottom, left, right = 0, n -1, 0, n -1
    
    while top <= bottom and left <= right:
        # Traverse from left to right
        for i in range(left, right + 1):
            result.append(matrix[top][i])
        top += 1
        
        # Traverse from top to bottom
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        
        # Traverse from right to left
        if top <= bottom:
            for i in range(right, left -1, -1):
                result.append(matrix[bottom][i])
            bottom -= 1
        
        # Traverse from bottom to top
        if left <= right:
            for i in range(bottom, top -1, -1):
                result.append(matrix[i][left])
            left += 1
    
    return result

# Example usage:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(spiralTraversal(matrix)) # Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
```

## Analysis of Time and Space Complexity

- **Time Complexity:** 
  The algorithm visits each cell in the matrix exactly once. The four-pointer approach ensures that we traverse each row and column exactly once for each direction (right-to-left, top-to-bottom, left-to-right, bottom-to-top). Therefore, the time complexity is O(n^2).

- **Space Complexity:** 
  The space complexity is O(n^2) because we need to store the result of all visited elements.

## Difficulty Rating

DIFFICULTY: 3

This problem requires understanding of basic matrix operations and traversal techniques. While it's not extremely complex like some LeetCode problems, it still demands careful analysis and implementation details to ensure correctness and efficiency. The algorithm is straightforward but requires attention to boundary conditions and traversal order.