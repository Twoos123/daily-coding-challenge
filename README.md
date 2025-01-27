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

### Coding Challenge: Maximum Subarray with k-Size Window

**Problem Description:**
Given an array of integers and an integer `k`, find the maximum sum of a subarray that has at most `k` elements. This problem involves using the **Sliding Window** technique to efficiently manage the subarray and **Dynamic Programming** to keep track of the maximum sum.

**Example Input/Output:**

**Input:** 
- `array = [1, 2, 3, 4, 5]`
- `k = 3`

**Output:** 
- `Maximum sum = 12` (Subarray `[3, 4, 5]`)

**Constraints:**
- The array will contain at least one element.
- The integer `k` will be at least 1 and not greater than the length of the array.

### Solution in Python

```python
def max_subarray_sum_with_k_elements(arr, k):
    """
    Find the maximum sum of a subarray with at most k elements in the given array.
    
    :param arr: The input array of integers.
    :type arr: List[int]
    :param k: The maximum number of elements in the subarray.
    :type k: int
    :return: The maximum sum of a subarray with at most k elements.
    :rtype: int
    """
    
    # Initialize variables to keep track of the maximum sum and the current window sum
    max_sum = float('-inf')
    window_sum = 0
    
    # Initialize variables for the sliding window
    left = 0
    
    # Iterate over the array using the sliding window technique
    for right in range(len(arr)):
        window_sum += arr[right]
        
        # If the window size exceeds k, slide the window to the right by subtracting elements on the left
        if right - left + 1 > k:
            window_sum -= arr[left]
            left += 1
        
        # Update max_sum if the current window sum is greater than max_sum
        if right - left + 1 <= k and window_sum > max_sum:
            max_sum = window_sum

    return max_sum

# Example usage:
array = [1, 2, 3, 4, 5]
k = 3
result = max_subarray_sum_with_k_elements(array, k)
print(f"Maximum sum = {result}")
```

### Explanation:
The solution uses a **Sliding Window** approach to efficiently manage the subarray. Here’s how it works:
1. **Initialization:** We initialize `max_sum` as negative infinity and `window_sum` as zero. We also initialize `left` to zero to keep track of the start of the window.
2. **Sliding Window:** We iterate over the array using `right`. For each element, we add it to `window_sum`.
3. **Window Size Management:** If the size of the window (`right - left + 1`) exceeds `k`, we slide the window to the right by subtracting elements on the left until the size is less than or equal to `k`.
4. **Update Maximum Sum:** We update `max_sum` if `window_sum` is greater than `max_sum`.
5. **Return Result:** Finally, we return the maximum sum found.

This approach ensures that we consider all possible subarrays with at most `k` elements and efficiently handle them using dynamic programming concepts within a sliding window framework.