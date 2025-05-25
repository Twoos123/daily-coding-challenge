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
**Matrix Summation and Diagonal Elements**
Given an `m x n` matrix `matrix`, calculate the sum of all elements in each diagonal (both primary and secondary diagonals) and return them as a list of sums. The primary diagonal runs from top-left to bottom-right, and the secondary diagonal runs from top-right to bottom-left.

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
```python
[15, 15]  # Sum of primary and secondary diagonals respectively
```

### Constraints
- The input matrix is a square matrix (i.e., it has the same number of rows and columns).
- The matrix will not be empty.

### Most Efficient Solution

```python
def sum_diagonals(matrix):
    n = len(matrix)
    primary_diagonal_sum = secondary_diagonal_sum = 0
    
    # Calculate sum of primary diagonal
    for i in range(n):
        primary_diagonal_sum += matrix[i][i]
    
    # Calculate sum of secondary diagonal
    for i in range(n):
        secondary_diagonal_sum += matrix[i][n - i - 1]
    
    return [primary_diagonal_sum, secondary_diagonal_sum]

# Example usage:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
result = sum_diagonals(matrix)
print(result)  # Output: [15, 15]
```

### Detailed Explanation of the Algorithm

1. **Identify Matrix Dimensions:** The number of rows (`n`) in the matrix is used to traverse both diagonals.
2. **Primary Diagonal Sum:** Traverse the matrix from top-left to bottom-right, adding each element at position `(i, i)` to `primary_diagonal_sum`.
3. **Secondary Diagonal Sum:** Traverse the matrix from top-right to bottom-left, adding each element at position `(i, n - i - 1)` to `secondary_diagonal_sum`.
4. **Return Result:** Return a list containing the sums of both diagonals.

### Time Complexity Analysis

- The algorithm iterates through each element once for both primary and secondary diagonals.
- Therefore, the time complexity is O(n), where n is the number of rows (or columns) in the square matrix.

### Space Complexity Analysis

- The space complexity is O(1), excluding output space which is also O(1), since we only use constant space to store our sums without any additional data structures that scale with input size.

### Why This Approach is Optimal

This approach is optimal because it directly sums up each element on both diagonals without using any additional data structures that could increase space complexity. It leverages constant-time operations (addition) and avoids unnecessary iterations or data storage.

### Trade-offs

There are no significant trade-offs between time and space complexity in this approach. It is both efficient in terms of time (O(n)) and space (O(1)).

### Difficulty Rating

DIFFICULTY: 3

This problem requires understanding of matrix indices and basic traversal techniques but does not involve complex algorithms or data structures beyond simple sums. It is challenging enough to require careful attention to details but not overwhelmingly difficult.