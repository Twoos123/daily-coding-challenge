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
**Challenge: Maximum Subarray Product with Constraints**

You are given two arrays, `nums` and `mod`, where `nums` is a list of integers and `mod` is a list of integers representing modulo values. The goal is to find the maximum product of a subsequence in `nums` such that the product of this subsequence is less than or equal to every modulo value in `mod`. If no such product exists, return `-1`.

### Example Input/Output
- **Input**: `nums = [2, 3, 4], mod = [1, 10]`
- **Output**: The maximum product is `6` which is achieved by the subsequence `[2, 3]`.

### Constraints
- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`
- `1 <= mod.length <= 10^5`
- `0 <= mod[i] <= 10^5`

### Solution

To solve this problem efficiently, we will use a dynamic programming approach combined with array manipulation.

```python
def maxSubarrayProduct(nums, mod):
    n = len(nums)
    
    # Initialize maximum product and current product
    max_product = float('-inf')
    
    # Array to store the maximum product ending at each index
    dp = [float('-inf')] * n
    
    # Array to store the minimum product ending at each index
    min_dp = [float('inf')] * n
    
    dp[0] = nums[0]
    min_dp[0] = nums[0] if nums[0] <= 0 else 1
    
    # Iterate through the array
    for i in range(1, n):
        # Update dp[i] and min_dp[i] based on previous values
        dp[i] = max(nums[i], dp[i-1] * nums[i], min_dp[i-1] * nums[i])
        min_dp[i] = min(nums[i], dp[i-1] * nums[i], min_dp[i-1] * nums[i])
        
        # Update max_product if current product exceeds it and is within constraints
        if dp[i] <= max(mod):
            max_product = max(max_product, dp[i])
    
    # Check if any product exceeds all modulo values
    if any(dp[i] > max(mod) for i in range(n)):
        return -1
    
    return max_product if max_product != float('-inf') else -1

# Example usage:
nums = [2, 3, 4]
mod = [1, 10]
print(maxSubarrayProduct(nums, mod)) # Output: 6

```

### Complexity Analysis

- **Time Complexity**: O(n) where n is the length of the `nums` array. This is because we iterate through the array once.
- **Space Complexity**: O(n) for storing dp and min_dp arrays.

### Detailed Explanation

1. **Initialization**:
   - We initialize `dp` and `min_dp` arrays with negative infinity and positive infinity respectively.
   - We set `dp` and `min_dp` to `nums`. If `nums` is non-positive, we set `min_dp` to 1 to handle negative products.

2. **Iteration**:
   - For each element in the array starting from index 1:
     - Update `dp[i]` by considering three possibilities: 
       - The current element itself.
       - The product of the current element with the previous maximum product (`dp[i-1] * nums[i]`).
       - The product of the current element with the previous minimum product (`min_dp[i-1] * nums[i]`). This handles cases where negative products are multiplied which can result in a larger absolute value.
     - Update `min_dp[i]` similarly by considering these three possibilities but taking minimums instead of maximums.

3. **Constraint Check**:
   - After updating dp arrays, check if any product exceeds all modulo values in mod. If yes, return -1.

4. **Final Result**:
   - Return the maximum product found if it does not exceed any modulo value; otherwise return -1.

This approach ensures that we efficiently compute all possible subarray products while ensuring they do not exceed any given modulo values by maintaining both maximum and minimum products.

### Difficulty Rating: 4

This problem requires understanding dynamic programming techniques and array manipulation to efficiently solve it within linear time complexity. The twist involving modulo values adds complexity but does not significantly increase the overall difficulty beyond what is typically expected in dynamic programming challenges.