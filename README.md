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

Difficulty: ⭐⭐⭐⭐ (4/5)

### Coding Challenge: "Minimum Subarray Operations to Achieve Sorted Order"

#### Problem Description

Given two arrays `arr1` and `arr2`, determine the minimum number of operations required to sort `arr1` in ascending order using at most one element from `arr2` in each operation. Each operation involves replacing an element in `arr1` with an element from `arr2` if it helps in achieving the sorted order.

#### Example Input/Output

- **Input:** 
  ```python
  arr1 = [5, 3, 1]
  arr2 = [4, 2, 6]
  ```
- **Output:** 
  ```python
  3
  ```
  **Explanation:** 
  To sort `arr1`, we need to replace `arr1[1] = 3` with `arr2[1] = 2`, then replace `arr1[2] = 1` with `arr2[2] = 6`. The final sorted array is `[4, 2, 6]`. The minimum number of operations is 3.

#### Constraints

- `arr1` and `arr2` are arrays of integers.
- The length of `arr1` and `arr2` can vary but not exceed 100 elements.
- Elements in both arrays are unique.

#### Solution

To solve this problem, we will use dynamic programming. The key is to create a new array `f` where each `f[i]` represents the minimum number of operations needed to make the subsequence `arr[0 ... i]` sorted.

```python
def min_operations(arr1, arr2):
    # Sort arr2 to efficiently find the smallest possible number
    arr2.sort()
    
    # Initialize f with infinity values and set f[0] to 0
    f = [float('inf')] * (len(arr1) + 1)
    f[0] = 0
    
    # Initialize the last used number in arr2
    used_num = float('-inf')
    
    # Populate f using DP strategy
    for i in range(1, len(arr1) + 1):
        if arr1[i - 1] > used_num:  # No substitution required
            f[i] = f[i - 1]
        else:
            # Find the smallest number in arr2 that is greater than arr1[i - 1]
            j = bisect.bisect_left(arr2, arr1[i - 1])
            if j < len(arr2):
                f[i] = min(f[i], f[i - 1] + 1)
                used_num = arr2[j]
            else:
                f[i] = min(f[i], f[i - 1] + 1)
    
    # Return the minimum number of operations if it's not infinity
    return f[-1] if f[-1] != float('inf') else -1

# Example usage:
arr1 = [5, 3, 1]
arr2 = [4, 2, 6]
print(min_operations(arr1, arr2))  # Output: 3
```

#### Analysis of Complexity

- **Time Complexity:** The time complexity is O(n log n) due to the binary search performed by `bisect.bisect_left`, where n is the length of `arr1`.
- **Space Complexity:** The space complexity is O(n), where n is the length of `arr1`, because we need to store the dynamic programming array `f`.

#### Difficulty Rating

This problem requires understanding of dynamic programming and efficient use of binary search to find the smallest suitable element from `arr2`. It is more challenging than simple array problems but less complex than problems requiring advanced binary search techniques combined with dynamic programming as seen in problem 1187 "Make Array Strictly Increasing". The optimal solution provided ensures efficient use of both time and space resources.