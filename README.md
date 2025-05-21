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

### Matrix Operations Challenge

**Problem Description:**
Given a 2D matrix `matrix` and two integers `R` and `C`, perform the following operations:
1. **Rotate Matrix**: Rotate the matrix clockwise by 90 degrees.
2. **Submatrix Sum**: For each submatrix of size `R x C`, calculate the sum of its elements.
3. **Filter Submatrices**: Filter out submatrices where the sum is greater than or equal to a given threshold `threshold`.

**Example Input/Output:**

```
Input:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
R = 2
C = 2
threshold = 15

Output:
Submatrices with sum >= threshold:
- Submatrix starting at (0, 0): Sum = 5 (elements [1, 2])
- Submatrix starting at (0, 1): Sum = 6 (elements [2, 3])
- Submatrix starting at (1, 0): Sum = 7 (elements [4, 5])
- Submatrix starting at (1, 1): Sum = 8 (elements [5, 6])
```

**Constraints:**
- The input matrix is a list of lists where each inner list represents a row in the matrix.
- All inner lists have the same length.
- R and C should be such that they form a valid submatrix within the given matrix.
- Threshold is an integer that determines which submatrices to include.

### Solution

```python
def rotate_matrix(matrix):
    # Transpose the matrix
    matrix[:] = list(map(list, zip(*matrix)))
    
    # Reverse each row to get clockwise rotation
    for row in matrix:
        row.reverse()

def submatrix_sum(matrix, R, C):
    # Helper function to check if a submatrix fits within bounds
    def check_submatrix(row_start, col_start):
        return row_start + R <= len(matrix) and col_start + C <= len(matrix[0])

    # Calculate sum for each possible submatrix and store them in a list
    sums = []
    for row_start in range(len(matrix)):
        for col_start in range(len(matrix[0])):
            if check_submatrix(row_start, col_start):
                submatrix_sum = sum(matrix[row_start + i][col_start + j] for i in range(R) for j in range(C))
                sums.append((row_start, col_start, submatrix_sum))

    return sums

def filter_submatrices(sums, threshold):
    # Filter out submatrices where the sum is greater than or equal to the threshold
    return [(row_start, col_start, submatrix_sum) for row_start, col_start, submatrix_sum in sums if submatrix_sum >= threshold]

# Main function to perform all operations
def main(matrix, R, C, threshold):
    rotate_matrix(matrix)
    
    # Calculate sums of all possible submatrices
    sums = submatrix_sum(matrix, R, C)
    
    # Filter submatrices based on the given threshold
    filtered_sums = filter_submatrices(sums, threshold)

    return filtered_sums

# Example usage
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

R = 2
C = 2
threshold = 15

result = main(matrix, R, C, threshold)
print(result)
```

### Analysis of Complexity:
1. **Time Complexity:**
   - The `rotate_matrix` function modifies the input matrix in-place and thus has a time complexity of O(n^2), where n is the number of elements in the matrix.
   - The `submatrix_sum` function iterates over all possible submatrices of size `R x C`. The number of such submatrices is O(n * m), where n is the number of rows and m is the number of columns in the original matrix.
   - The `filter_submatrices` function has a time complexity proportional to the number of submatrices found which is also O(n * m).
   Therefore, the overall time complexity for the main function is O(n^2 + n * m).

2. **Space Complexity:**
   - The space complexity for storing and processing submatrices is also O(n * m) as we need to store information about each submatrix.
   
### Difficulty Rating:
This challenge requires understanding matrix operations like rotation and submatrix calculation along with filtering based on a threshold value. It involves basic algorithms but requires careful handling of multiple aspects making it moderately challenging.