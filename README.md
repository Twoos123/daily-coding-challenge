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

### Dynamic Programming Challenge: Maximum Subarray Product

**Problem Description:**
Given an array of integers, find the maximum contiguous subarray product. The problem requires implementing dynamic programming to efficiently track and compute the maximum product of a subarray.

**Example Input/Output:**
- **Input:** `[2, 3, -2, 4]`
- **Output:** `6` (Maximum product of subarray `[2, 3]`)

**Constraints:**
- The array will not be empty.
- The array will contain integers.
- The maximum length of the array is assumed to be reasonable (e.g., not excessively large).

**Difficulty Rating:**
### Solution Explanation

The solution involves two steps:
1. **Tracking Maximum and Minimum Products:** Since we are looking for the maximum product, we need to track both maximum and minimum products up to each position.
2. **Updating Maximum Product:** At each step, update the maximum product by considering both the current maximum and minimum products.

#### Optimal Solution in Python

```python
def maxSubarrayProduct(nums):
    if not nums:
        return 0

    max_product = min_product = result = nums[0]
    
    for num in nums[1:]:
        temp_max_product = max(num, max_product * num, min_product * num)
        temp_min_product = min(num, max_product * num, min_product * num)
        
        max_product = temp_max_product
        min_product = temp_min_product
        
        result = max(result, max_product)

    return result

# Example usage:
print(maxSubarrayProduct([2, 3, -2, 4])) # Output: 6
```

#### Analysis of Time and Space Complexity:
- **Time Complexity:** The algorithm iterates through the array once, performing constant-time operations at each step. Therefore, the time complexity is O(n).
- **Space Complexity:** The algorithm uses a constant amount of space to store temporary variables. Hence, the space complexity is O(1).

#### Explanation:
This approach is optimal because it leverages the property that a negative number can turn a maximum into a minimum and vice versa. By tracking both maximum and minimum products, we ensure that we capture all possible subarray products efficiently.

### Trade-offs:
- **Efficiency:** The algorithm's efficiency stems from its ability to handle both positive and negative numbers within the same iteration. This is crucial for problems involving products where negative numbers are common.
- **Simplicity:** The solution is straightforward and requires minimal additional data structures beyond what's necessary for tracking maximum and minimum values.

This challenge balances complexity and difficulty by requiring a deep understanding of dynamic programming principles while maintaining a relatively straightforward implementation.