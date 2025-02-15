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

### **Problem Description:**
Given an `m x n` matrix `A`, where each element is a real number, implement a function to find the maximum sum of a rectangular sub-matrix within the given matrix. The sub-matrix must be non-empty and contiguous.

**Example Input/Output:**

```python
# Input matrix A
A = [
    [1, 2, -1, -4, -20],
    [-8, -3, 4, 2, 1],
    [3, 8, 10, 1, 3],
    [15, 2, 5, -8, -3]
]

# Output: The maximum sum of a rectangular sub-matrix
max_sum = max_submatrix_sum(A)

print(max_sum) # Output should be 29 (Maximum sum is in the sub-matrix [[4,2],[10,1],[15,-8]])
```

**Constraints:**
- The input matrix `A` will be a list of lists where each inner list represents a row of the matrix.
- The elements in the matrix are real numbers.
- The size of the matrix `(m x n)` is assumed to be positive integers.

### Most Efficient Solution

To find the maximum sum of a rectangular sub-matrix within a given matrix, we can use Kadane's algorithm to scan through the matrix and keep track of the maximum sum encountered so far. This approach ensures that we efficiently handle both horizontal and vertical scans of the matrix.

Here's the Python solution:

```python
def max_submatrix_sum(matrix):
    if not matrix or not matrix[0]:
        return 0
    
    m, n = len(matrix), len(matrix[0])
    
    # Initialize result with negative infinity
    res = float('-inf')
    
    # Iterate over all possible widths of sub-matrices
    for width in range(1, n + 1):
        dp = [[0] * (n - width + 1) for _ in range(m)]
        
        # Initialize first row with cumulative sums using Kadane's algorithm
        for j in range(n - width + 1):
            for i in range(m):
                dp[i][j] = max(dp[i][j], matrix[i][j] + dp[(i - 1) % m][j] if i > 0 else matrix[i][j])
        
        # Update result with maximum sum for each width
        for j in range(n - width + 1):
            res = max(res, max_subarray(dp, width))
    
    return res

def max_subarray(dp, width):
    max_end_here = dp[0][0]
    max_so_far = dp[0][0]
    
    for i in range(1, len(dp)):
        dp[i][0] += dp[(i - 1) % len(dp)][0]
        
        max_end_here = max(dp[i][0], max_end_here + dp[i][0])
        
        if max_end_here > max_so_far:
            max_so_far = max_end_here
            
    return max_so_far

# Example usage
A = [
    [1, 2, -1, -4, -20],
    [-8, -3, 4, 2, 1],
    [3, 8, 10, 1, 3],
    [15, 2, 5, -8, -3]
]

print(max_submatrix_sum(A)) # Output should be 29 (Maximum sum is in the sub-matrix [[4,2],[10,1],[15,-8]])
```

### Analysis of Complexity:

- **Time Complexity:** The outer loop iterates over all possible widths (`O(n)`), and for each width, we perform a scan using Kadane's algorithm (`O(m*n)`). Therefore, the overall time complexity is `O(m*n*n)` or `O(m*n^2)`.

- **Space Complexity:** We use additional space to store cumulative sums (`O(m*n)`).

This approach ensures that we efficiently handle both horizontal and vertical scans of the matrix without needing to consider every possible sub-matrix individually.

### Explanation of the Algorithm:

1. **Initialization:** We initialize an auxiliary dynamic programming matrix (`dp`) where each element will store cumulative sums up to that point.
2. **First Scan:** We perform an initial scan using Kadane's algorithm for cumulative sums along each row.
3. **Subsequent Scans:** For each possible width of sub-matrices starting from `width=1`, we update our `dp` matrix by adding cumulative sums from previous rows.
4. **Local Maxima Calculation:** We use Kadane's algorithm again within this dynamically updated `dp` matrix to find local maxima within each width.
5