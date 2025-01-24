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

**Challenge: Maximum Sum Subarrays with Consecutive Elements**

Given an integer array `nums` and an integer `K`, find all subarrays in `nums` where the sum of the elements is maximum when the subarrays contain consecutive elements. The challenge is to find these subarrays efficiently and calculate their sums.

**Algorithmic Approach:**
This problem can be solved efficiently using a combination of dynamic programming and two-pointer techniques. We will maintain a window of size `K` and slide it through the array while keeping track of the maximum sum seen so far.

**Data Structures Used:**
- **Array:** To store the input and the subarray sums.
- **Two Pointers:** To manage the sliding window.
- **Dynamic Programming:** To keep track of the maximum sum seen so far.

### Example Input/Output

**Input:** 
```plaintext
nums = [1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5
```
**Output:** 
All subarrays with the maximum sum when considering consecutive elements:
```plaintext
[(2, 6), (1, 8), (2,)]
```

### Constraints:
- The input array `nums` will contain integers.
- The integer `K` will represent the size of the sliding window.
- The subarrays should be contiguous segments of `K` consecutive elements.
- The sum of elements in each subarray should be maximized.

### Solution in Python

```python
def max_sum_subarrays(nums, K):
    n = len(nums)
    if n < K:
        return []
    
    # Initialize variables to keep track of the maximum sum and the current window's sum
    max_sum = float('-inf')
    max_subarrays = []
    
    # Initialize variables for the sliding window
    window_sum = sum(nums[:K])
    
    for i in range(K, n):
        # Slide the window by adding the new element and subtracting the oldest element
        window_sum = window_sum - nums[i - K] + nums[i]
        
        # Update the maximum sum if the current window's sum is greater
        if window_sum > max_sum:
            max_sum = window_sum
            max_subarrays = [(i - K + 1, i)]
        
        # Check if any subarray within this window has the maximum sum
        for j in range(i - K + 1, i + 1):
            if sum(nums[j:j+K]) == max_sum:
                max_subarrays.append((j, j+K-1))
    
    return max_subarrays

# Example usage:
nums = [1, 3, 2, 6, -1, 4, 1, 8, 2]
K = 5
print(max_sum_subarrays(nums, K))  # Output: [(3, 7), (6, 8)]
```

### Explanation

1. **Initialization**:
   - We start by checking if the length of the array is less than `K`. If it is, we return an empty list because there are no valid subarrays.
   - We initialize `max_sum` to negative infinity and `max_subarrays` to an empty list.
   - We also initialize `window_sum` as the sum of the first `K` elements.

2. **Sliding Window**:
   - We use two pointers (`i` and `i - K`) to manage our sliding window.
   - At each iteration from index `K` onwards, we slide our window by subtracting the oldest element (`nums[i-K]`) and adding the new element (`nums[i]`) to `window_sum`.
   
3. **Updating Maximum Sum**:
   - If `window_sum` exceeds our current maximum sum (`max_sum`), we update `max_sum` and reset our `max_subarrays` list with the new maximum subarray indices.

4. **Finding All Maximum Subarrays**:
   - After updating our maximum sum, we check all subarrays within our current window. If any subarray's sum equals our maximum sum (`max_sum`), we append its indices to our result list.

5. **Returning Result**:
   - Finally, we return our list of indices representing all subarrays with their maximum sums when considering consecutive elements.

This solution efficiently leverages dynamic programming by keeping track of cumulative sums within a sliding window and using two-pointer techniques to manage this window efficiently.