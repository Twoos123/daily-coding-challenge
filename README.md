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

### Challenge: Implement a Sliding Window Stack

**Problem Description:**
Implement a Sliding Window Stack where you have a stack with a sliding window of size `k`. The following operations should be supported:
- `push(x)`: Push an element `x` onto the stack.
- `pop()`: Remove the topmost element from the stack.
- `peek()`: Return the topmost element without removing it.
- `getMax()`: Return the maximum element within the current window.
- `moveWindow()`: Move the window by one position to the right.

The challenge lies in efficiently managing the stack to ensure that all operations, including maintaining the sliding window and finding the maximum element within it, are performed in O(1) or O(log n) time complexity.

**Example Input/Output:**
```
push(1)
push(2)
push(3)
getMax() -> 3
moveWindow()
push(4)
getMax() -> 4
```

**Constraints:**
1. The size of the sliding window is fixed at `k`.
2. All operations should be performed efficiently.
3. The stack should not store duplicate elements.

### Solution

To solve this problem efficiently, we can use a combination of two stacks: one to handle the elements within the current window and another to keep track of the maximum elements encountered so far.

```python
class SlidingWindowStack:
    def __init__(self, k):
        self.k = k
        self.stack = []
        self.max_stack = []

    def push(self, x):
        if x not in self.stack:
            self.stack.append(x)
            if not self.max_stack or x >= self.max_stack[-1]:
                self.max_stack.append(x)

    def pop(self):
        if self.stack:
            if self.stack[-1] == self.max_stack[-1]:
                self.max_stack.pop()
            self.stack.pop()

    def peek(self):
        if self.stack:
            return self.stack[-1]

    def getMax(self):
        if self.max_stack:
            return self.max_stack[-1]

    def moveWindow(self):
        if len(self.stack) == self.k:
            self.pop()
        else:
            raise ValueError("Window size not reached")

# Example usage:
s = SlidingWindowStack(3)
s.push(1)
s.push(2)
s.push(3)
print(s.getMax())  # Output: 3
s.moveWindow()
s.push(4)
print(s.getMax())  # Output: 4

```

### Analysis of Complexity:

- **Time Complexity:**
  - `push(x)`: O(1) since it involves checking if `x` is already in the stack and appending it if not. The maximum stack operation is also O(1).
  - `pop()`: O(1) as it involves removing the top element from both stacks if it matches with the maximum stack.
  - `peek()`: O(1) since it simply returns the top element of the stack.
  - `getMax()`: O(1) as it returns the top element of the maximum stack.
  - `moveWindow()`: O(1) if the window size is reached; otherwise, it raises an error.

- **Space Complexity:** 
  - The space complexity is O(k) for storing up to k elements in both stacks.

### Difficulty Rating

This problem requires implementing a custom stack with additional functionality to manage a sliding window and find the maximum element within it. The use of two stacks ensures efficient operations while maintaining the required properties of the sliding window. The solution is moderately complex due to the need to balance between efficient operations and maintaining structural integrity across different operations.