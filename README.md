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

### **Matrix Challenge: Maximum Rectangle with All 1s**

Given a binary matrix where each cell can be either 0 or 1, find the maximum size rectangular sub-matrix with all 1s. The matrix is not necessarily square, and the sub-matrix can be rotated.

#### Problem Description

You are given a binary matrix `matrix` of size `m x n`. The task is to find the maximum size of a rectangular sub-matrix that consists only of 1s. The sub-matrix can be oriented in any direction (i.e., it can be rotated). 

#### Example Input/Output

**Input:**
```python
matrix = [
    [1, 0, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1]
]
```

**Output:**
The maximum size of a rectangular sub-matrix with all 1s is `4 x 1`.

#### Constraints
- The matrix will not be empty.
- Each cell in the matrix will be either 0 or 1.

### Solution

The solution involves using a histogram-based approach to track the height of the current rectangle and the maximum rectangle found so far. We iterate through each row and column to maintain these heights and widths.

#### Algorithm

```python

def maxRectangle(matrix):
    if not matrix or not matrix[0]:
        return 0

    m, n = len(matrix), len(matrix[0])
    heights = [0] * (n + 1)
    max_area = 0

    for i in range(m):
        for j in range(n):
            heights[j] = heights[j] + 1 if matrix[i][j] == '1' else 0
        
        stack = []
        for k in range(n + 1):
            while stack and heights[stack[-1]] >= heights[k]:
                h = heights[stack.pop()]
                w = k if not stack else k - stack[-1] - 1
                max_area = max(max_area, h * w)
            stack.append(k)

    return max_area

# Example usage:
matrix = [
    ['1', '0', '1', '0'],
    ['1', '0', '1', '1'],
    ['1', '1', '1', '1'],
    ['0', '0', '0', '1'],
]

print(maxRectangle(matrix)) # Output: 4

```

#### Time and Space Complexity Analysis
- **Time Complexity:** The time complexity is O(m * n), where m is the number of rows and n is the number of columns. This is because we are iterating through each cell once.
- **Space Complexity:** The space complexity is O(n), which includes the space used by `heights` and `stack`.

### Explanation

1. **Initialization:** We initialize an array `heights` of size n+1 to keep track of the heights of the histogram.
2. **Row Iteration:** For each row, we update the heights array based on the current row's values.
3. **Stack-Based Approach:** We use a stack to maintain the indices where the histogram would decrease. For each index k, we pop elements from the stack and calculate the area covered by these elements. We then push k back onto the stack.
4. **Area Calculation:** The maximum area covered by a rectangle is calculated as `h * w`, where `h` is the height of the rectangle and `w` is its width.

This approach ensures that we efficiently track the maximum size of rectangular sub-matrices with all 1s by treating each row as a histogram and using a stack to efficiently handle the decreasing heights.

### Trade-Offs

- **Time vs Space:** The space complexity could be optimized by not storing the full histogram but only necessary elements in the stack. However, this would complicate the implementation without significantly reducing space usage.

By maintaining a simple but effective approach with a linear time complexity and constant space complexity per row iteration, this solution optimizes both aspects.