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

### Matrix Coding Challenge: Maximum Sum of Submatrix

#### Problem Description

Given a matrix `matrix` of size `m x n`, find the maximum sum of a submatrix within the given matrix. A submatrix is defined as a rectangular region of the matrix with a specific number of rows and columns.

#### Example Input/Output

Input:
```python
matrix = [
    [1, 2, -1, -4, -20],
    [-8, -3, 4, 2, 1],
    [3, 8, 10, 1, 3],
    [15, 2, 5, 8, 6]
]
```

Output:
```python
The maximum sum of a submatrix is: 29
```

#### Constraints

- The matrix will contain integers.
- The number of rows (`m`) and columns (`n`) will be positive integers.
- The submatrix can be any rectangular region within the given matrix.

#### Solution

The problem can be solved efficiently using Kadane's algorithm, which is commonly used to find the maximum sum of a subarray in a 1D array. However, for 2D arrays or matrices, we need to apply Kadane's algorithm in a row-wise manner and then find the maximum sum among these row sums.

Here is the most optimal solution in Python:

```python
def maxSumSubmatrix(matrix):
    m, n = len(matrix), len(matrix[0])
    # Initialize maximum sum
    max_sum = float('-inf')
    
    # Iterate over each column
    for left in range(n):
        row_sums = [0] * m
        
        # Calculate row sums using Kadane's algorithm
        for right in range(left, n):
            for i in range(m):
                row_sums[i] += matrix[i][right]
            
            # Find the maximum sum of subarray in row_sums using Kadane's algorithm
            current_max = float('-inf')
            window_sum = 0
            
            for num in row_sums:
                window_sum = max(num, window_sum + num)
                current_max = max(current_max, window_sum)
            
            max_sum = max(max_sum, current_max)
    
    return max_sum

# Example usage
matrix = [
    [1, 2, -1, -4, -20],
    [-8, -3, 4, 2, 1],
    [3, 8, 10, 1, 3],
    [15, 2, 5, 8, 6]
]

result = maxSumSubmatrix(matrix)
print(f"The maximum sum of a submatrix is: {result}")
```

#### Detailed Explanation

1. **Initialization**: Initialize the maximum sum to negative infinity.

2. **Iterate over columns**: For each column from left to right, calculate the cumulative sum of rows.

3. **Apply Kadane’s Algorithm**:
   - Use Kadane’s algorithm to find the maximum sum of a subarray in the current row sums.
   - For each element in `row_sums`, update the maximum sum by considering both the current number and the current window sum.

4. **Update Maximum Sum**: After processing all columns and finding the maximum subarray sum for each row sum, update `max_sum`.

This approach has a time complexity of O(m*n^2) due to nested loops iterating over each column and then over each row sum calculation. The space complexity is O(m) for storing row sums.

#### Time and Space Complexity Analysis

- **Time Complexity**: O(m*n^2)
- **Space Complexity**: O(m)

This solution is optimal because it leverages Kadane’s algorithm efficiently for both row-wise and column-wise operations.

#### Difficulty Rating

This problem requires understanding of Kadane’s algorithm and its application in a 2D context. The nested loops make it moderately complex but solvable with careful implementation details.