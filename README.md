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

**Hash Table_found Elements**
Given a list of integers `arr` and an integer `target`, find all elements in `arr` that have been found in a previous array `prev_arr`. The goal is to track which elements from `prev_arr` have been encountered in `arr` and return their indices.

### Example Input/Output

**Input**:
```python
arr = [5, 2, 8, 1, 6]
prev_arr = [2, 8]
target = 3
```

**Output**:
```python
indices = [1]  # The index of the element 8 in arr
```

### Constraints
- The input arrays `arr` and `prev_arr` contain non-negative integers.
- The size of `arr` and `prev_arr` is less than 1000.
- The number of elements in `arr` and `prev_arr` is at least 1.

### Solution

To solve this problem efficiently, we can use a hash table to keep track of the elements from `prev_arr` and their indices in `prev_arr`. We then iterate over `arr`, checking if each element exists in the hash table. If an element exists, we add its index in `arr` to the result.

Here is the most efficient solution in Python:

```python
def found_elements(arr, prev_arr, target):
    # Create a hash table to store elements from prev_arr with their indices
    prev_map = {num: idx for idx, num in enumerate(prev_arr)}
    
    # Initialize a set to store unique indices of found elements in arr
    found_indices = set()
    
    # Iterate over arr and check if each element exists in the hash table
    for idx, num in enumerate(arr):
        if num in prev_map:
            found_indices.add(idx)
    
    return list(found_indices)

# Example usage:
arr = [5, 2, 8, 1, 6]
prev_arr = [2, 8]
target = 3
result = found_elements(arr, prev_arr, target)
print(result)  # Output: [1] (The index of the element 8 in arr)
```

### Analysis

- **Time Complexity**: The time complexity is dominated by two operations:
  - Creating the hash table: `O(n)` where `n` is the size of `prev_arr`.
  - Iterating over `arr` and checking each element in the hash table: `O(m)` where `m` is the size of `arr`.
  - Therefore, the total time complexity is `O(n + m)`.

Since `n` and `m` are typically small integers according to the constraints, we can approximate this as linear time complexity.

- **Space Complexity**: The space complexity is primarily determined by storing elements from `prev_arr` in a hash table:
  - The size of the hash table is proportional to the number of unique elements in `prev_arr`, which is at most equal to its size (`n`). Therefore, the space complexity is `O(n)`.

### Why This Approach is Optimal

This approach leverages the constant-time lookup property of hash tables (`O(1)` average case) to efficiently check for the presence of elements from `prev_arr` in `arr`. By using a set to store unique indices, we avoid duplicate values and ensure that only distinct indices are returned.

This solution balances both time and space complexity effectively, making it suitable for practical applications where efficiency is crucial.

### Difficulty Rating

This problem requires a good understanding of hash tables and their efficient use in solvingassistant

### Problem Description

**Hash Table_found Elements**
Given a list of integers `arr` and an integer `target`, find all elements in `arr` that have been found in a previous array `prev_arr`. The goal is to track which elements from `prev_arr` have been encountered in `arr` and return their indices.

### Example Input/Output

**Input**:
```python
arr = [5, 2, 8, 1, 6]
prev_arr = [2, 8]
target = 3
```

**Output**:
```python
indices = [1]  # The index of the element 8 in arr
```

### Constraints
- The input arrays `arr` and `prev_arr` contain non-negative integers.
- The size of `arr` and `prev_arr` is less than 1000.
- The number of elements in `arr` and `prev_arr` is at least 1.

### Solution

To solve this problem efficiently, we can use a hash table to keep track of the elements from `prev_arr` and their indices in `prev_arr`. We then iterate over `arr`, checking if each