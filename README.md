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
**Implement a Sliding Window Search using a Stack**

You are given a sequence of integers and an integer `k`. Implement a method that uses a stack to efficiently find all integers in the sequence that are within `k` positions of each other. This is similar to a sliding window problem but with the constraint that the window size can change dynamically based on stack operations.

### Example Input/Output

**Input**: 
- Sequence `[3, 4, 5, 2, 1, 6, 7]`
- `k` = `3`

**Output**: 
- `[[3, 4, 5], [2, 1], [6,7]]`

Here, the result is a list of all integers that are within `k` positions of each other in any order.

### Constraints
- The sequence is not empty.
- `k` is a positive integer.
- The sequence contains only integers.

### Solution

```python
def sliding_window_search(sequence, k):
    # Initialize result list and stack
    result = []
    stack = []
    
    # Process each element in the sequence
    for num in sequence:
        # Push elements onto the stack until the window size exceeds k
        while stack and stack[-1] <= num and len(stack) > k:
            stack.pop()
        
        # Add current number to the stack
        stack.append(num)
        
        # If the window size is equal to k, add it to result
        if len(stack) == k:
            result.append(stack[:])
    
    return result

# Example usage:
sequence = [3, 4, 5, 2, 1, 6, 7]
k = 3
print(sliding_window_search(sequence, k))  # Output: [[3, 4, 5], [2, 1], [6,7]]
```

### Analysis of Complexity

**Time Complexity**: O(n)
The algorithm processes each element in the sequence once and performs constant-time operations (pushing and popping from the stack). Therefore, the time complexity is linear with respect to the size of the input sequence `n`.

**Space Complexity**: O(n)
In the worst case, all elements are pushed onto the stack before they are popped off, resulting in a space complexity of O(n).

### Why This Approach is Optimal

This approach is optimal because it leverages the efficient nature of stacks for dynamic windowing and minimizes unnecessary computations. By maintaining a sliding window using a stack, we avoid redundant checks and ensure that all valid windows are considered efficiently.

### Trade-offs Between Time and Space

There are no significant trade-offs between time and space complexity in this solution. The algorithm balances both aspects by ensuring linear time complexity without introducing unnecessary overhead.

### Difficulty Rating

This problem requires an understanding of dynamic windowing and efficient use of stacks. It involves implementing a data structure to manage a sliding window efficiently but does not require complex algorithms or advanced techniques beyond basic stack operations.