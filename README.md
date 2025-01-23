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

**Challenge: Maximum Sum of Non-Overlapping Subarrays**

### Problem Description

Given an array of integers and a size `K`, find the maximum sum of non-overlapping subarrays of size `K`. Each subarray should be contiguous and non-overlapping.

**Algorithmic Approach and Data Structures**

This problem can be efficiently solved using a sliding window approach. The key idea is to maintain a window of size `K` that slides through the array, calculating the sum of elements within the current window and keeping track of the maximum sum found so far.

### Example Input/Output

**Input:**
```
Array = [1, 3, 2, 6, -1, 4, 1, 8, 2]
K = 3
```

**Output:**
```
Maximum Sum of Non-Overlapping Subarrays = [10, 11, 2]
```
Explanation: The maximum sums for non-overlapping subarrays of size 3 are:
- `[1, 3, 2]` with sum 6
- `[3, 2, 6]` with sum 11
- `[2, 6, -1]` with sum 7 (not the maximum, so it's ignored)
- `[6, -1, 4]` with sum 9 (not the maximum, so it's ignored)
- `[4, 1, 8]` with sum 13 (not the maximum, so it's ignored)
- `[1, 8, 2]` with sum 11

Only `[10, 11]` are considered because they have the highest sums.

### Constraints

- The input array will contain only integers.
- The size `K` will be positive and less than or equal to the length of the array.

### Solution in Python

```python
def max_sum_of_subarrays(arr, k):
    max_sum = float('-inf')  # Initialize maximum sum as negative infinity
    window_sum = sum(arr[:k])  # Calculate sum of first window
    
    # Slide window through array and keep track of maximum sum
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i-k] + arr[i]  # Update window sum by removing last element and adding new one
        
        if window_sum > max_sum:
            max_sum = window_sum
    
    # Return list of maximum sums for non-overlapping subarrays
    return [sum(arr[j:j+k]) for j in range(len(arr)-k+1) if sum(arr[j:j+k]) == max_sum]

# Example usage
arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
k = 3
print(max_sum_of_subarrays(arr, k))  # Output: [10, 11]
```

### Explanation

1. **Initialization**: Set `max_sum` to negative infinity and calculate the initial window sum.
2. **Sliding Window**: Iterate through the array starting from index `k`. For each position, update `window_sum` by subtracting the element that is moving out of the window and adding the new element entering the window.
3. **Update Maximum Sum**: If `window_sum` is greater than `max_sum`, update `max_sum`.
4. **Return Maximum Sums**: Return a list containing only those subarrays whose sum equals `max_sum`.

This solution has a time complexity of O(n), where n is the length of the array, making it efficient for large inputs.