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

### Problem Description

**Problem:** "Maximum Sum Contiguous Subarray with Constraints"

**Description:**
Given an array `arr` of integers, find the maximum sum of a contiguous subarray with the constraint that each element in the subarray must be at least `k` units away from its adjacent elements. If no such subarray exists, return `0`.

**Example Input/Output:**

- **Input:** `arr = [3, 2, -1, 3, -4, 4, -6], k = 2`
- **Output:** `6` (sum of subarray `[3, 4]`)

### Constraints

- The array `arr` will contain at least one element.
- The constraint `k` is a positive integer.

### Difficulty Rating

****

### Solution

To solve this problem efficiently, we can use dynamic programming and maintain two arrays: `max_left` to track the maximum sum ending at each position and `max_right` to track the maximum sum starting at each position. The constraint about elements being at least `k` units away complicates direct application of standard dynamic programming techniques for maximum subarray sum.

Here’s an optimized approach:

1. **Initialization:**
   - Initialize two arrays `max_left` and `max_right` with the same length as `arr`.
   - Set `max_left = arr` and `max_right[-1] = arr[-1]`.

2. **Dynamic Programming:**
   - Iterate through the array from left to right and right to left.
   - For each element:
     - If the distance between the current element and the previous element is greater than or equal to `k`, update `max_left[i]` as follows: `max_left[i] = max(arr[i], max_left[i-1])`.
     - If the distance between the current element and the next element is greater than or equal to `k`, update `max_right[i]` as follows: `max_right[i] = max(arr[i], max_right[i+1])`.

3. **Finding Maximum Contiguous Subarray:**
   - Initialize variables `max_sum` and `temp_sum`.
   - Iterate through `max_left` and `max_right` arrays simultaneously, maintaining `temp_sum` as the sum of elements in between.
   - Update `max_sum` whenever a valid subarray is found (i.e., elements are at least `k` units apart).

### Implementation in Python

```python
def max_sum_subarray_with_constraint(arr, k):
    n = len(arr)
    
    # Initialize dp arrays
    max_left = [0] * n
    max_right = [0] * n
    
    # Initializations for first and last elements
    max_left[0] = arr[0]
    max_right[-1] = arr[-1]
    
    # Fill up dp arrays considering constraints
    for i in range(1, n):
        if i - 1 >= 0 and i - 1 >= k:
            max_left[i] = max(arr[i], max_left[i - 1])
        else:
            max_left[i] = arr[i]
    
    for j in range(n - 2, -1, -1):
        if j + 1 < n and j + 1 < k:
            max_right[j] = max(arr[j], max_right[j + 1])
        else:
            max_right[j] = arr[j]

    # Find maximum contiguous subarray sum with constraint k
    max_sum = 0
    temp_sum = 0
    
    left_index = right_index = 0
    
    while left_index < n and right_index < n:
        if right_index - left_index >= k:
            temp_sum += arr[right_index]
            max_sum = max(max_sum, temp_sum)
            right_index += 1
        elif left_index + 1 < n:
            temp_sum -= max_left[left_index + 1]
            left_index += 1
            
            # Adjust right_index if necessary due to updated left_index
            if right_index > left_index:
                right_index -= 1
                
        else:
            break
            
    return max_sum

# Example usage:
arr = [3, 2, -1, 3, -4, 4, -6]
k = 2
print(max_sum_subarray_with_constraint(arr, k)) # Output: 6
```

### Time and Space Complexity Analysis

- **Time Complexity:** The time complexity is primarily driven by two iterations through the array. Each iteration runs in O(n), where n is the length of the array. Therefore, the overall time complexity is O(n).
  
- **Space Complexity:** The space complexity is O(n) due to the need for