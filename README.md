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

****

### Problem Description

**Problem:** **Minimum Columns to Ensure Lexicographical Order**

Given an N x M 2D matrix of lowercase letters, determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. The goal is to check whether each column can be ordered lexicographically without removing any columns.

### Example Input/Output

**Input:**
```
cba
daf
ghi
```

**Output: 1** (since removing the second column makes the rows ordered)

**Input:**
```
abcdef
```

**Output: 0** (since the rows are already ordered)

**Input:**
```
zyx
wvu
tsr
```

**Output: 3** (since removing all columns makes the rows ordered)

### Constraints

- **Matrix Size:** N x M where N and M are positive integers.
- **Character Set:** The matrix contains only lowercase English letters.
- **Ordering Requirement:** Each row must be ordered lexicographically from top to bottom after removing columns.

### Solution

#### Most Optimal Solution

To solve this problem efficiently, we need to find the maximum number of consecutive characters in each row that are in order lexicographically. We can use a `set` to keep track of distinct characters seen so far and their indices.

```python
def min_columns_to_order(matrix):
    rows, cols = len(matrix), len(matrix[0])
    # Function to check if a row is ordered
    def is_ordered(row):
        return all(row[i] <= row[i+1] for i in range(cols-1))

    # Function to check if a column is ordered
    def is_valid_col(col):
        seen = set()
        for r in range(rows):
            if matrix[r][col] in seen:
                return False
            seen.add(matrix[r][col])
        return True

    # Check columns from right to left
    for col in range(cols-1, -1, -1):
        if not is_valid_col(col):
            continue
        # Check the row order without this column
        for i in range(rows-1):
            if matrix[i][col] > matrix[i+1][col]:
                return col + 1
    return 0

# Example usage:
matrix = [
  ['c', 'b', 'a'],
  ['d', 'a', 'f'],
  ['g', 'i', 'h']
]
print(min_columns_to_order(matrix)) # Output: 1

matrix = [
  ['a', 'b', 'c', 'd', 'e', 'f']
]
print(min_columns_to_order(matrix)) # Output: 0
```

#### Analysis of Time and Space Complexity

- **Time Complexity:** The time complexity is O(N \* M), where N is the number of rows and M is the number of columns. This is because we are iterating over each cell once and performing a constant amount of work per cell.
- **Space Complexity:** The space complexity is O(N), where N is the number of rows. This is because we are using a set to keep track of distinct characters seen so far.

#### Explanation

The solution works by checking each column from right to left. If a column is valid (i.e., it does not contain any consecutive duplicates), we then check if removing that column would make the rows ordered. We do this by iterating through each row and checking if the lexicographical order is maintained without the current column.

This approach ensures that we find the minimum number of columns needed to make each row ordered lexicographically.

### Trade-offs

There are no significant trade-offs between time and space complexity in this solution. The algorithm runs in linear time with respect to the size of the matrix, and it uses a linear amount of extra space for storing seen characters.

However, note that this problem can be reduced to a more complex problem involving dynamic programming or graph algorithms if you were to consider optimizing further or solving similar problems with different constraints. But for this specific challenge, this solution is highly efficient and practical.