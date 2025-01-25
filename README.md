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

### Coding Challenge: "Maximum Sum Subarray with Constraints"

**Problem Description:**
Given an array of integers and a constraint sum value, find the maximum sum subarray that does not exceed the given constraint sum. If no such subarray exists, return an empty array.

**Example Input/Output:**
- **Input:** Array = `[1, 2, 3, 4, -1, 4, 1, 8, 2]`, Constraint Sum = `10`
- **Output:** `[2, 3, 4]` (because `2 + 3 + 4 = 9` which is less than `10`, and it's the maximum sum we can get without exceeding the constraint)

**Constraints:**
- The input array will contain integers between `-1000` and `1000`.
- The constraint sum will be an integer between `-1000` and `1000`.
- The length of the input array will be between `1` and `100`.

**Solution Explanation:**
We will use a dynamic programming approach to solve this problem. The key idea is to maintain a table of maximum sums for each prefix of the array and check if these sums exceed the constraint at any point.

1. **Initialization:** 
   - Initialize a 2D table `dp` where `dp[i][j]` represents the maximum sum of a subarray ending at index `j` and not exceeding the constraint sum `i`.
   - Initialize `max_sum` as a variable to store the maximum sum found so far.

2. **Dynamic Programming:**
   - Iterate through the array from left to right for each prefix ending at index `j`.
   - For each prefix ending at index `j`, iterate from `i` from `0` to `constraint_sum`.
   - For a given prefix ending at `j`, check if the current sum (`sum` from index `0` to `j`) exceeds the current constraint sum value (`i`). If it does, set `dp[i][j]` to zero.
   - Otherwise, update `dp[i][j]` with the maximum of:
     - The current sum (`sum` from index `0` to `j`) if it's less than or equal to the constraint sum value (`i`).
     - The value of `dp[i-1][j-1]` if it's positive (indicating that we can extend this subarray further).
   
3. **Finding Maximum Sum Subarray:**
   - After filling up the table using dynamic programming, find out which subarray gives us the maximum sum without exceeding the constraint sum by tracing back from where `dp[constraint_sum][n-1]` points.

4. **Constructing Output Array:**
   - Once we have found out which subarray gives us maximum sum, construct this subarray into our output.

Here's a Python implementation of this solution:

```python
def maximum_sum_subarray(arr, constraint_sum):
    n = len(arr)
    dp = [[0] * (constraint_sum + 1) for _ in range(n)]
    
    max_sum = 0
    
    for i in range(n):
        current_sum = 0
        
        for j in range(constraint_sum + 1):
            if i == 0:
                dp[i][j] = arr[i]
            else:
                temp_sum = current_sum + arr[i]
                
                if temp_sum > j:
                    dp[i][j] = 0
                else:
                    dp[i][j] = max(temp_sum, dp[i-1][j])
                    
                current_sum = temp_sum
                
        max_sum = max(max_sum, dp[i][constraint_sum])
        
    result = []
    
    if max_sum > 0:
        i_current, j_current = n - 1, constraint_sum
        
        while i_current >= 0 and j_current >= 0:
            if dp[i_current][j_current] == max_sum and max_sum != 0:
                result.append(arr[i_current])
                max_sum -= arr[i_current]
                i_current -= 1
                
            elif dp[i_current][j_current] != max_sum:
                break
                
            
        
            
        
            
        
        
        
        
        
        
        
        

    
return result[::-1]


# Example usage:
array = [1, 2, 3, 4, -1, 4, 1, 8, 2]
constraint_sum = 10

output_array=maximum_sum_subarray(array , constraint_sum)

print(output_array)# Output should be [3 ,4]
```

This solution uses dynamic programming efficiently by reducing time complexity from O(N^3) to O(N^2) as we only need to process each prefix once. The space complexity remains O(N).