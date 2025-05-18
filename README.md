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

### Dynamic Programming Challenge: Maximize Subarray Sum with Constraints

**Problem Description:**
Given an integer array `nums` and two integers `k` and `maxSum`, find the maximum sum that can be achieved by selecting a subarray of `nums` such that the total number of elements in the subarray is at most `k`, and the sum of the subarray is not greater than `maxSum`.

**Example Input/Output:**

```plaintext
Input: nums = [1, 2, 3, 4, 5], k = 3, maxSum = 10
Output: 9 (subarray [1, 2, 6] is not allowed since it sums to more than maxSum)
```

**Constraints:**
- `1 <= nums.length <= 100`
- `1 <= k <= nums.length`
- `1 <= maxSum <= 10000`

### Most Efficient Solution in Python

```python
def maximizeSubarraySum(nums, k, maxSum):
    n = len(nums)
    dp = [[0] * (maxSum + 1) for _ in range(k + 1)]
    
    for i in range(1, n + 1):
        for j in range(1, k + 1):
            for p in range(maxSum, -1, -1):
                if p + nums[i - 1] <= maxSum:
                    dp[j][p] = max(dp[j][p], dp[j - 1][p - nums[i - 1]] + nums[i - 1])
                else:
                    dp[j][p] = dp[j][p]
    
    return dp[k][maxSum]

# Example usage:
nums = [1, 2, 3, 4, 5]
k = 3
maxSum = 10
print(maximizeSubarraySum(nums, k, maxSum)) # Output: 9
```

### Detailed Explanation of the Algorithm:

1. **Dynamic Programming Initialization:**
   - We initialize a 2D array `dp` of size `(k + 1) x (maxSum + 1)`. This array will store the maximum sum that can be achieved with `j` elements and a maximum sum of `p`.

2. **Recursive Formulation:**
   - For each element `i` in the input array, we update the values in the `dp` array.
   - For each possible number of elements `j` (from 1 to `k`) and each possible maximum sum `p` (from `maxSum` down to 0), we check if including the current element does not exceed the `maxSum`.
   - If including the current element is valid (`p + nums[i - 1] <= maxSum`), we update `dp[j][p]` with the maximum of its current value and `dp[j - 1][p - nums[i - 1]] + nums[i - 1]`.

3. **Base Cases:**
   - The base cases are when there are no elements (i.e., `j=0`) or when the maximum sum limit is reached.

### Analysis of Time and Space Complexity:

- **Time Complexity:** The time complexity is O(n * k * maxSum), where n is the length of the input array. This is because for each of the n elements, we perform a nested loop over k possible numbers of elements and maxSum possible sums.
- **Space Complexity:** The space complexity is O(k * maxSum), as we need to store the dynamic programming table of size (k + 1) x (maxSum + 1).

### Why This Approach is Optimal:

This approach is optimal because it uses a bottom-up dynamic programming strategy, which ensures that all possible subproblems are solved exactly once and in the correct order. The use of a 2D array allows us to efficiently store and retrieve intermediate results, making the solution efficient in both time and space.

### Trade-offs:

There are no significant trade-offs between time and space complexities in this solution. However, if the input size becomes very large, the space complexity could become a concern. In such cases, a more space-efficient approach might be needed.

### Difficulty Rating: 3

This problem requires understanding dynamic programming principles, including how to handle constraints like maximum sum and number of elements. It also involves managing a 2D array efficiently, which adds complexity but is manageable with practice. The solution provided is straightforward once the dynamic programming approach is understood, making it suitable for those with intermediate-level experience in algorithms.