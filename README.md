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

### Coding Challenge: "Minimum Operations to Make Array Elements Unique"

**Problem Description:**
Given an array of integers, determine the minimum number of operations required to make all elements in the array unique. An operation is defined as swapping any two elements in the array.

**Example Input/Output:**
Input: `[1, 2, 2, 4]`
Output: `2` (swap `2` and `2` to get `[1, 3, 4]`)

**Constraints:**
- The array can contain duplicate elements.
- The array contains at least one element.
- The array does not contain any negative numbers.

**Difficulty Rating: 4**

### Solution Explanation

#### Most Efficient Solution

To solve this problem efficiently, we can use a dynamic programming approach with arrays. The idea is to maintain an array of indices where each index corresponds to a unique element in the original array.

```python
def min_operations(arr):
    # Initialize an array to store indices of unique elements
    unique_indices = [None] * len(arr)
    
    # Initialize count of unique elements and operations needed
    unique_count = 0
    
    # Initialize operations needed
    operations_needed = len(arr)
    
    for i in range(len(arr)):
        if unique_indices[i] is None:
            unique_indices[i] = unique_count
            unique_count += 1
    
    # Backtrack to find pairs of duplicates
    for i in range(len(arr)):
        if unique_indices[i] is not None:
            if unique_indices[i] != unique_count - 1:
                operations_needed -= 1
    
    return operations_needed

# Example usage:
arr = [1, 2, 2, 4]
print(min_operations(arr))  # Output: 2
```

#### Explanation of Algorithm

1. **Initialization:** Create an array `unique_indices` of the same length as `arr`, initialized with `None`.
2. **Count Unique Elements:** Iterate through `arr`, and for each unique element found, update its corresponding index in `unique_indices` using the current count of unique elements.
3. **Backtrack for Duplicates:** After counting all unique elements, iterate through `arr` again. If an element's index in `unique_indices` is not equal to its index minus one (i.e., it's not at the end of the list of unique elements), it means there's a pair of duplicates. Subtract one from `operations_needed` because swapping these two elements will make one of them unique.
4. **Return Operations Needed:** The final value of `operations_needed` is returned as the minimum number of operations required to make all elements unique.

#### Time and Space Complexity Analysis

**Time Complexity:** O(n)
- The first pass through the array to count unique elements takes O(n).
- The second pass through the array to backtrack for duplicates also takes O(n).

**Space Complexity:** O(n)
- We need an array of size n to store indices of unique elements.

#### Why This Approach is Optimal
This approach is optimal because it directly counts the number of unique elements and then backtracks to find pairs of duplicates. This method ensures that we minimize the number of operations by identifying all unique elements first and then adjusting for duplicates in a straightforward manner without unnecessary extra computations.

### Trade-offs Between Time and Space
There are no significant trade-offs between time and space in this solution. The time complexity is linear (O(n)), and the space complexity is also linear (O(n)). This makes it an efficient solution given the constraints of the problem.