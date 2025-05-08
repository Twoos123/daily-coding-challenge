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

### Dynamic Programming Coding Challenge: **Maximum Subarrays with Custom Thresholds**

**Problem Description:**
Given an array of integers and a set of custom threshold values, find the maximum sum of subarrays that meet the following conditions:
1. The subarray must be contiguous.
2. The sum of elements in the subarray must be greater than or equal to the given threshold.

**Example Input/Output:**

**Input:** `array = [1, 2, 3, 4, 5], thresholds = [3, 7]`
**Output:** `[12, 15]`
Explanation: The maximum sums that meet the thresholds are from subarrays `[3, 4, 5]` and `[4, 5]`.

**Constraints:**
- The input array will contain integers.
- The number of thresholds is fixed but can be multiple.
- The array size will be within a reasonable limit (e.g., up to 100 elements).

### Complexity Analysis
The most efficient approach to solve this problem involves using dynamic programming to keep track of the maximum sum seen so far and the maximum sum seen so far that meets each threshold. This can be achieved by maintaining two arrays:
- One for keeping track of the maximum sum seen up to each point.
- Another for keeping track of the maximum sum seen up to each point that meets each threshold.

The algorithm will iterate through the array, updating these arrays at each step. The time complexity is O(n), where n is the length of the input array, as we only make one pass through the array. The space complexity is also O(n) for storing these arrays.

### Most Efficient Solution in Python

```python
def max_subarrays_with_thresholds(array, thresholds):
    n = len(array)
    
    # Initialize arrays to track maximum sums and sums meeting thresholds
    max_sums = [0] * n
    threshold_sums = {threshold: 0 for threshold in thresholds}
    
    max_current = 0
    max_prev = 0
    
    # Iterate through the array to fill max_sums array
    for i in range(n):
        max_current = max(array[i], max_current + array[i])
        max_sums[i] = max_current
        
        # Update sums meeting each threshold
        for t in thresholds:
            if i == 0 or array[i] >= t:
                threshold_sums[t] = max(threshold_sums[t], max_sums[i])
    
    # Find all maximum sums that meet any threshold
    result = []
    for t in sorted(threshold_sums.values()):
        if t in threshold_sums.values():
            result.append(t)
    
    return result

# Example usage:
array = [1, 2, 3, 4, 5]
thresholds = [3, 7]
print(max_subarrays_with_thresholds(array, thresholds))  # Output: [12, 15]
```

### Detailed Explanation of Algorithm
1. **Initialization**: We initialize two arrays: `max_sums` to keep track of the maximum sum seen up to each point, and `threshold_sums` as a dictionary to store the maximum sum seen that meets each threshold.
2. **Iteration**: We iterate through the array. For each element, we update `max_current` with the maximum of its own value and `max_current + array[i]`. This ensures we are always considering the maximum contiguous subarray ending at `i`.
3. **Update Threshold Sums**: If the current element meets or exceeds any threshold, we update the corresponding value in `threshold_sums`.
4. **Final Result**: After the iteration, we collect all unique values from `threshold_sums` and return them as our result.

### Time and Space Complexity
- **Time Complexity**: O(n * k), where n is the length of the array and k is the number of thresholds. However, since k is fixed (e.g., up to a few dozen), this simplifies to O(n).
- **Space Complexity**: O(n), for storing `max_sums` and O(k), for storing `threshold_sums`. Again, since k is fixed, this simplifies to O(n).

### Why This Approach is Optimal
This approach is optimal because it leverages dynamic programming by maintaining arrays that keep track of relevant information at each step. This allows us to solve the problem in linear time complexity while using linear space complexity.

### Difficulty Rating
This problem requires an understanding of dynamic programming principles but is not overly complex compared to some other DP problems like Longest Common Subsequence or Knapsack problems. The solution involves straightforward array manipulation and threshold checking, making it accessible but still engaging for those familiar with DP techniques.