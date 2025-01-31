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

### Challenge: "Array Subarray Sum"

**Problem Description:**
Given an integer array `arr` and an integer `target`, find all non-empty subarrays within `arr` whose sum equals `target`. The challenge requires efficient handling of subarrays and the use of dynamic programming to optimize the solution.

**Example Input/Output:**
- **Input:** `arr = [5, 7, 1, 3, 4, 3, 5]`, `target = 10`
- **Output:** `[7, 3], [4, 3]`

**Constraints:**
- The array `arr` has a length between 1 and 10,000.
- The integer `target` is within the range of possible sums of subarrays.
- The solution should be efficient and scalable.

### Solution in Python
```python
def find_subarrays(arr, target):
    n = len(arr)
    prefix_sum = {0: -1}  # Initialize with 0 sum at index -1
    current_sum = 0
    subarrays = []
    
    for i in range(n):
        current_sum += arr[i]
        
        # Check if the current sum minus the target exists in the prefix_sum dictionary
        if current_sum - target in prefix_sum:
            # Iterate through all possible start indices of subarrays
            for j in range(prefix_sum[current_sum - target] + 1, i + 1):
                subarrays.append(arr[j:i + 1])
        
        # Update the prefix_sum dictionary with the current sum and its index
        if current_sum not in prefix_sum:
            prefix_sum[current_sum] = i
    
    return subarrays

# Example usage:
arr = [5, 7, 1, 3, 4, 3, 5]
target = 10
print(find_subarrays(arr, target))  # Output: [[7, 3], [4, 3]]
```

### Explanation:
1. **Prefix Sum Array:** We use a dictionary `prefix_sum` to store the cumulative sums and their indices. This allows us to quickly check if a given sum minus the target exists in the array.
2. **Dynamic Programming:** By using dynamic programming through the `prefix_sum` dictionary, we avoid recalculating the same sums multiple times.
3. **Scalability:** This approach ensures that the time complexity is O(n), making it efficient for large arrays.

### Algorithmic Approach:
- **Hash Table:** We leverage a hash table (dictionary in Python) to store and retrieve cumulative sums efficiently.
- **Dynamic Programming:** The use of dynamic programming ensures that we solve subproblems only once and store their solutions for future use.
- **Array Operations:** We iterate through the array once, performing constant-time operations for each element.

This challenge combines the use of hash tables (dynamic programming) with array operations to efficiently find all subarrays whose sums equal a given target value.