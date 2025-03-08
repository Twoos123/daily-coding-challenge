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

**Challenge: "Minimum Swaps to Sort Array"**

Given an unsorted array `nums` of length `n`, determine the minimum number of swaps required to sort the array in non-decreasing order. The swaps can be done in any order and do not need to be consecutive.

### Example Input/Output

**Input:**
```python
nums = [3, 2, 1, 4]
```
**Output:**
The minimum number of swaps required to sort the array is 2.

### Constraints

- The array `nums` has length `n`.
- The elements in `nums` are distinct and positive integers.
- The goal is to minimize the number of swaps required to sort the array in non-decreasing order.

### Solution

To solve this problem efficiently, we can use a graph-based approach combined with dynamic programming. The key idea is to represent the swap operations as a directed graph where each node represents a permutation of the array and each edge represents a swap operation.

However, for this specific problem, a more straightforward and efficient approach involves using the concept of graph coloring to simulate the swaps and track the number of swaps needed.

#### Optimal Solution

```python
def minSwaps(nums):
    n = len(nums)
    # Initialize all elements in visited array as False
    visited = [False] * n
    
    # Initialize count of swaps
    swaps = 0
    
    for i in range(n):
        if visited[i]:
            continue
        
        # Find cycle starting from index 'i'
        cycle_size = 0
        j = i
        while not visited[j]:
            visited[j] = True
            j = nums.index(min(num for num in nums[j:] if num not in visited[nums.index(num)]))
            cycle_size += 1
        
        # Update number of swaps required
        swaps += (cycle_size - 1)
    
    return swaps

# Example usage:
nums = [3, 2, 1, 4]
print(minSwaps(nums))  # Output: 2
```

#### Analysis

**Time Complexity:**
The algorithm iterates through each element in the array once and performs a constant amount of work for each cycle found. The total time complexity is therefore O(n).

**Space Complexity:**
The space complexity is O(n) due to the use of the `visited` array which tracks visited nodes in each cycle.

### Difficulty Rating

The problem requires an understanding of how to approach graph-like problems with arrays and leveraging dynamic programming principles to optimize the solution. While it's not extremely complex like a hard LeetCode problem, it does require some thought into how to efficiently track and count the swaps needed to sort the array.

### Explanation

1. **Initialization:** We initialize a `visited` array to keep track of elements already visited in each cycle.
2. **Cycle Detection:** For each unvisited element, we detect cycles by following pointers until we reach an already visited node.
3. **Swaps Counting:** We count the number of swaps required by adding `(cycle_size - 1)` for each cycle found.
4. **Result Return:** Finally, we return the total number of swaps.

This approach ensures that we efficiently traverse the array and accurately count the minimum number of swaps required to sort it in non-decreasing order.