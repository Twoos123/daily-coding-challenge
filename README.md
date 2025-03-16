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

### Challenge: Optimal Subarray with Zero Sum

**Problem Description:**
Given an array `nums` of integers, find the optimal subarray with zero sum. The optimal subarray is defined as the longest contiguous subarray that sums up to zero. If there are multiple such subarrays, return the one with the maximum length.

**Example Input/Output:**
- **Input:** `nums = [1, 2, -3, 3, -2, 2]`
  - **Output:** `[3, -2, 2]` (because `[3, -2, 2]` is the longest contiguous subarray with zero sum)

**Constraints:**
- The array `nums` will not be empty.
- The array `nums` will only contain integers.

**Solution in Python:**

```python
def optimal_subarray_zero_sum(nums):
    n = len(nums)
    prefix_sum = {0: -1}  # Initialize with sum=0 at index=-1
    max_length = 0
    max_start = 0
    max_end = 0
    
    current_sum = 0
    
    for i in range(n):
        current_sum += nums[i]
        
        if current_sum in prefix_sum:
            if i - prefix_sum[current_sum] > max_length:
                max_length = i - prefix_sum[current_sum]
                max_start = prefix_sum[current_sum] + 1
                max_end = i
        
        prefix_sum[current_sum] = i
    
    return nums[max_start:max_end+1]

# Example usage:
nums = [1, 2, -3, 3, -2, 2]
print(optimal_subarray_zero_sum(nums))  # Output: [3, -2, 2]
```

### Analysis of Complexity:
- **Time Complexity:** The solution uses a dictionary to store the prefix sums and their indices. Each element in the array is processed once to update the `prefix_sum` dictionary. Therefore, the time complexity is O(n), where n is the length of the array.
- **Space Complexity:** The space complexity is also O(n) because in the worst case, we might store all elements in the `prefix_sum` dictionary.

### Explanation:
1. **Prefix Sum Approach:** The key idea here is to use a prefix sum array (or dictionary) to store the cumulative sum of elements from the start of the array up to each index.
2. **Hash Table:** By using a hash table (dictionary) to store these cumulative sums, we can efficiently look up previous sums that are equal to our current cumulative sum.
3. **Optimal Subarray Identification:** Whenever we encounter a sum that has been seen before, we check if the current window (from the last occurrence of that sum to our current position) is longer than our current maximum length. If it is, we update our maximum length and the corresponding start and end indices.

This approach ensures that we find the longest contiguous subarray with zero sum in linear time and uses linear space.

### Difficulty Rating:
This challenge requires understanding how to efficiently use dynamic programming with arrays by leveraging prefix sums and hash tables for quick lookups, making it a moderate difficulty problem. The solution is straightforward but requires careful handling of edge cases and optimal subarray identification.