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

### Problem Description: Maximum Sum Segment with Consecutive Elements

Given an array of integers, find the maximum sum segment where the distance between consecutive elements is at most 6. The segment can start and end anywhere in the array.

**Example Input/Output:**

- **Input:** `[2, 3, -1, 5, -3, 4, 0, -1, 5, 4]`
- **Output:** `14` (The sum of the segment `[4, 0, -1, 5, 4]` is 12, but there is a bigger sum segment `[5, -3, 4]` which is not valid because it doesn't meet the distance condition. However, `[4, 0, -1, 5, 4]` meets this condition and has a higher sum.)

**Constraints:**
1. The array can be empty.
2. The array contains non-negative integers.
3. The distance between consecutive elements in a valid segment must be at most 6.
4. The sum of a valid segment is calculated by adding all elements within the segment.

### Most Efficient Solution

To solve this problem efficiently, we can use a dynamic programming approach combined with a sliding window technique. We maintain two arrays: one for the maximum sum ending at each position (`max_sum_end`) and one for the maximum sum segment that meets the distance condition (`max_valid_sum`).

```python
def max_sum_segment_with_distance(arr):
    n = len(arr)
    
    # Initialize arrays to store maximum sums
    max_sum_end = [0] * n
    max_valid_sum = [0] * n
    
    # Calculate maximum sum ending at each position (no distance constraint)
    max_sum = float('-inf')  # Initialize max sum as negative infinity
    for i in range(n):
        if i == 0:
            max_sum_end[i] = arr[i]
        else:
            max_sum_end[i] = max(max_sum_end[i-1] + arr[i], arr[i])
        
        # Update global max_sum if necessary
        if max_sum_end[i] > max_sum:
            max_sum = max_sum_end[i]

    # Calculate maximum valid sum segment
    max_valid_sum[0] = float('-inf')
    
    for i in range(1, n):
        # Extend current valid segment by at most 6 steps
        for j in range(max(0, i-6), i):
            if i-j <= 6:
                max_valid_sum[i] = max(max_valid_sum[i], max_sum_end[j] + sum(arr[j+1:i]))
        
        # Update global max_valid_sum if necessary
        if max_valid_sum[i] > max_valid_sum[i-1]:
            max_valid_sum[i] = max_valid_sum[i]

    return max_valid_sum[-1]

# Example usage
array = [2, 3, -1, 5, -3, 4, 0, -1, 5, 4]
result = max_sum_segment_with_distance(array)
print("Maximum Sum Segment:", result)
```

### Complexity Analysis

1. **Time Complexity:** The time complexity is `O(n)` where `n` is the length of the array. This is because we iterate through the array twice: once to calculate `max_sum_end` and once to calculate `max_valid_sum`.

2. **Space Complexity:** The space complexity is also `O(n)` due to the use of two arrays (`max_sum_end` and `max_valid_sum`) each of size `n`.

### Difficulty Rating

This problem requires a good understanding of dynamic programming and how to apply it with a sliding window technique. The solution involves maintaining two arrays which may seem complex but is actually straightforward once understood clearly. The key insight here is using `max_sum_end` to efficiently calculate the maximum sum without considering distance constraints and then extending these sums while ensuring they meet the distance requirement. 

This difficulty rating reflects that while it's not trivially easy, it's still within reach for developers who have a solid grasp on basic dynamic programming concepts and can apply them creatively with additional constraints like the sliding window approach.