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

### Coding Challenge: "Minimum Removals to Sort an Array"

**Problem Description:**
Given an unsorted array of integers, determine the minimum number of elements that need to be removed from the array to sort it in ascending order.

**Example Input/Output:**
- **Input:** `[5, 4, 3, 2, 1]`
- **Output:** `0` (The array is already sorted)
- **Input:** `[6, 5, 3, 1, 8, 7, 2, 4]`
- **Output:** `3` (Removing elements 6, 8, and 5 will sort the array)

**Constraints:**
- The input array will contain integers in the range `[1, n]`.
- The size of the array `n` will be between `1` and `100`.
- The array may contain duplicates.

**Algorithmic Approach:**
To solve this problem efficiently, we can use a combination of sorting and dynamic programming.

1. **Step 1: Sort the Array**
   - First, sort the given array in ascending order. This step has a time complexity of `O(n log n)`.

2. **Step 2: Dynamic Programming for Minimum Removals**
   - Initialize an array `dp` of size `n + 1` where `dp[i]` represents the minimum number of elements that need to be removed to sort the first `i` elements.
   - For `i` ranging from `1` to `n`, if the current element is equal to its index, then `dp[i] = dp[i-1]`. Otherwise, `dp[i] = dp[i-1] + 1`.
   - The final answer will be stored in `dp[n]`.

**Solution in Python:**

```python
def min_removals_to_sort(arr):
    # Step 1: Sort the Array
    arr.sort()
    
    # Step 2: Dynamic Programming for Minimum Removals
    n = len(arr)
    if n == 1:
        return 0
    
    # Initialize dp array
    dp = [0] * (n + 1)
    
    for i in range(1, n):
        if arr[i] == i:
            dp[i] = dp[i - 1]
        else:
            dp[i] = dp[i - 1] + 1
    
    return dp[n]

# Example usage:
input_array = [6, 5, 3, 1, 8, 7, 2, 4]
output = min_removals_to_sort(input_array)
print("Minimum elements to remove:", output)
```

**Explanation:**
- The `arr.sort()` function sorts the input array in ascending order.
- The dynamic programming approach initializes an array `dp` where each element represents the minimum number of elements that need to be removed up to that index.
- The loop iterates through each element in the sorted array. If the current element matches its index (`arr[i] == i`), it means it's already in its correct position and doesn't need to be removed. Otherwise (`arr[i] != i`), it increments by one because one more element needs to be removed.
- Finally, the function returns `dp[n]`, which holds the total minimum number of elements that need to be removed from the entire array.

This solution efficiently leverages both sorting and dynamic programming to solve the problem within reasonable time complexity (`O(n log n)` for sorting plus `O(n)` for dynamic programming).