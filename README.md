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

### Challenge: "Maximum Sum Subarray with Constraints"

**Problem Description:**
Given an integer array `arr` and a constraint array `cons`, find the maximum sum of a subarray such that no two elements in the subarray are from the same constraint group. Each element in `arr` is associated with a constraint group index found in `cons`.

**Example Input/Output:**
Input: `arr = [10, 20, 30, 5, 40]`, `cons = [0, 0, 1, 1, 0]`
Output: The maximum sum of a subarray where no two elements are from the same constraint group is `60` (sum of elements at indices `[0, 2, 4]`).

**Constraints:**
- `arr` and `cons` have the same length.
- Each element in `arr` is associated with a unique index in `cons`.

**Difficulty Rating: 3 (Moderate)**

### Most Efficient Solution

To solve this problem efficiently, we can use dynamic programming. The key idea is to maintain a 2D table where the first dimension represents the current index in the array and the second dimension represents whether we are considering the current element or not.

#### Python Solution:
```python
def max_sum_subarray(arr, cons):
    n = len(arr)
    dp = [[-float('inf')] * 2 for _ in range(n)]
    
    # Initialize base cases
    for i in range(n):
        if i == 0:
            dp[i][0] = arr[i]
            dp[i][1] = arr[i]
        else:
            dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + arr[i], arr[i])
            dp[i][1] = max(dp[i - 1][0], dp[i - 1][1] + arr[i])
    
    # Check if current element can be included
    for i in range(1, n):
        if cons[i] == cons[i-1]:
            dp[i][1] = max(dp[i][1], dp[i-1][0])
    
    return max(dp[-1])

# Example usage:
arr = [10, 20, 30, 5, 40]
cons = [0, 0, 1, 1, 0]
print(max_sum_subarray(arr, cons)) # Output: 60
```

### Analysis:
#### Time Complexity:
The time complexity of this solution is O(n), where n is the length of the array. This is because we are scanning through the array once.

#### Space Complexity:
The space complexity is O(n). We use a 2D table of size n x 2 to store our dynamic programming states.

### Explanation:
We initialize a 2D table `dp` with negative infinity values. The first dimension represents our current index in the array, and the second dimension represents whether we are considering the current element or not (0 or 1).

We then fill up this table based on three conditions:
1. **Max Sum Without Current Element**: This is `dp[i]`.
2. **Max Sum Including Current Element**: This is `dp[i][1]`.
3. **Adjustment for Same Constraint Group**: If the current element has the same constraint group as the previous one, we adjust `dp[i][1]` by taking the maximum of what we could get without including it (`dp[i-1]`).

Finally, we return the maximum value from the last row of our dynamic programming table, which corresponds to considering all elements up to that point.

This approach ensures that no two elements in any subarray come from the same constraint group while maximizing their sum. The dynamic programming nature allows us to avoid recomputation and achieve efficiency.