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

### Matrix Operations Challenge: "Matrix Transformation Matrix"

**Problem Description:**
Given two matrices `A` and `B`, both of which are `m x n`, perform the following operations:
1. Rotate matrix `A` clockwise by 90 degrees.
2. Transpose matrix `B`.
3. Add the rotated matrix `A` to the transposed matrix `B`.

The resulting matrix should be an `m x n` matrix containing the sum of corresponding elements from the rotated `A` and transposed `B`.

**Example Input/Output:**

Input:
```python
A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

B = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
]
```

Output:
```python
Resulting Matrix = [
    [16 + 8, 17 + 7, 18 + 6],
    [17 + 8, 18 + 7, 19 + 6],
    [18 + 8, 19 + 7, 20 + 6]
]
```

### Constraints:
- Both matrices `A` and `B` are 2D arrays with dimensions `m x n`.
- All elements in both matrices are integers.
- The operation should be performed in-place or using minimal additional space.

### Most Efficient Solution:

#### Step-by-Step Solution:
1. **Rotate Matrix `A` Clockwise by 90 Degrees:**
    - Use a transpose followed by a reverse operation to achieve this efficiently.
    - Transpose involves swapping rows with columns.
    - Reverse each row to get the clockwise rotation.

```python
def rotate_matrix(matrix):
    # Transpose matrix
    matrix_t = list(map(list, zip(*matrix)))
    
    # Reverse each row to get clockwise rotation
    return [row[::-1] for row in matrix_t]
```

2. **Transpose Matrix `B`:**
    - Simply use Python's built-in `zip` function to transpose the matrix.

```python
def transpose_matrix(matrix):
    return list(map(list, zip(*matrix)))
```

3. **Add Rotated Matrix `A` to Transposed Matrix `B`:**
    - Perform element-wise addition of corresponding elements from both matrices.

```python
def add_matrices(rotated_A, transposed_B):
    return [[a + b for a, b in zip(row_a, row_b)] for row_a, row_b in zip(rotated_A, transposed_B)]
```

#### Combined Function:

```python
def transform_matrix():
    A = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    B = [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ]

    # Rotate matrix A clockwise by 90 degrees
    rotated_A = rotate_matrix(A)

    # Transpose matrix B
    transposed_B = transpose_matrix(B)

    # Add rotated matrix A to transposed matrix B
    resulting_matrix = add_matrices(rotated_A, transposed_B)
    
    return resulting_matrix

resulting_matrix = transform_matrix()
for row in resulting_matrix:
    print(row)
```

### Analysis:
- **Time Complexity:** 
    - Rotating a matrix involves two operations (transpose and reverse), each taking O(m*n) time.
    - Transposing a matrix takes O(m*n) time.
    - Adding two matrices element-wise also takes O(m*n) time.
    Therefore, the overall time complexity is O(3m*n) ≈ O(m*n).

- **Space Complexity:** 
    - The space complexity is dominated by storing the intermediate results:
      - Transpose operation requires O(m*n) space.
      - Adding two matrices requires O(m*n) space.
      Therefore, the overall space complexity is O(2m*n) ≈ O(m*n).

### Difficulty Rating:
This problem requires efficient manipulation of matrices involving rotation and transposition operations which are fundamental concepts but require careful handling to achieve optimal performance. The solution provided minimizes additional space usage and ensures efficient execution time.