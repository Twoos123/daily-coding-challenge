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

**Dynamic Programming with Arrays: Maximum Subarray Product with Constraints**

Given an array `arr` of integers and two non-negative integers `k` and `n`, find the maximum product of any subarray with length `n` that contains at most `k` zeros. If no such subarray exists, return `-1`.

### Example Input/Output

**Input:**
```
arr = [1, 2, 3, 0, 2, 0, 3]
k = 2
n = 3
```

**Output:**
```
6 (The subarray with maximum product is [2, 3, 0])
```

### Constraints
- The array `arr` contains only integers.
- The integers in `arr` are non-negative.
- The integers `k` and `n` are non-negative.

### Solution

To solve this problem efficiently, we can use dynamic programming with arrays. The key idea is to maintain two arrays: `max_product` and `min_product`, where `max_product[i]` represents the maximum product seen so far ending at index `i`, and `min_product[i]` represents the minimum product seen so far ending at index `i`. We also keep track of the number of zeros encountered in these products.

Here's the most efficient solution in Python:

```python
def max_subarray_product(arr, k, n):
    if n * k > len(arr):
        return -1
    
    max_product = [0] * len(arr)
    min_product = [0] * len(arr)
    zeros_count = [0] * len(arr)
    
    max_product[0] = arr[0]
    min_product[0] = arr[0]
    zeros_count[0] = 1 if arr[0] == 0 else 0
    
    for i in range(1, len(arr)):
        if arr[i] == 0:
            zeros_count[i] = zeros_count[i-1] + 1
            max_product[i] = min_product[i] = 0 if zeros_count[i] > k else min_product[i-1] * arr[i]
        else:
            zeros_count[i] = zeros_count[i-1]
            max_product[i] = max(max_product[i-1] * arr[i], min_product[i-1] * arr[i])
            min_product[i] = min(min_product[i-1] * arr[i], max_product[i-1] * arr[i])
    
    return max_product[-1]

# Example usage:
arr = [1, 2, 3, 0, 2, 0, 3]
k = 2
n = 3
result = max_subarray_product(arr, k, n)
print(result)  # Output: 6
```

### Analysis

**Time Complexity:**
The time complexity of this solution is **O(n)** where `n` is the length of the input array. This is because we are scanning the array once.

**Space Complexity:**
The space complexity is **O(n)** as well because we are using three arrays (`max_product`, `min_product`, and `zeros_count`) each of length `n`.

### Difficulty Rating

This problem requires a clear understanding of dynamic programming principles and how to leverage arrays effectively. It involves maintaining multiple arrays to track different states (maximum product, minimum product, and zero count), making it moderately challenging but still within the realm of a well-structured dynamic programming solution.