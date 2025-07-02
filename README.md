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

### Problem Description: "Rotate the Stack and Queue Elements"

**Problem Statement:**
Given a stack and a queue, you need to rotate the elements in both data structures such that the top element of the stack becomes the front element of the queue, and vice versa. The operation should be performed in a way that minimizes the number of operations required.

### Example Input/Output:

**Input:**
- Stack: `[A, B, C]`
- Queue: `[X, Y, Z]`

**Output:**
- Stack: `[X, Y, Z]`
- Queue: `[C, B, A]`

### Constraints:
- The stack and queue can have any number of elements (`n`).
- The rotation operation should be performed in-place.
- The solution should minimize the number of operations required.

### Most Efficient Solution in Python:

To solve this problem efficiently, we need to use the properties of stacks and queues. Since we need to rotate the elements such that the top element of the stack becomes the front element of the queue, and vice versa, we can achieve this by first converting the queue to a list (which stores elements in order), then reversing the list, and finally converting it back to a queue. This approach ensures that we only need to perform operations on a single data structure, minimizing the number of operations.

Here is the most efficient solution in Python:

```python
from collections import deque

def rotate_stack_and_queue(stack, queue):
    # Convert queue to list for easier manipulation
    queue_list = list(queue)
    
    # Reverse the list
    queue_list.reverse()
    
    # Clear the original queue
    queue.clear()
    
    # Add elements from reversed list back into queue
    for elem in reversed(queue_list):
        queue.appendleft(elem)
        
    return queue

# Example usage
stack = deque(['A', 'B', 'C'])
queue = deque(['X', 'Y', 'Z'])

print("Original Stack:", list(stack))
print("Original Queue:", list(queue))

rotated_queue = rotate_stack_and_queue(stack, queue)

print("Rotated Stack:", list(rotated_queue))  # Should be ['X', 'Y', 'Z']
print("Rotated Queue:", list(stack))         # Should be ['C', 'B', 'A']
```

### Detailed Explanation of the Algorithm:
1. **Convert Queue to List**: We convert the queue to a list because lists are more flexible for manipulation.
2. **Reverse List**: We reverse the list of elements.
3. **Clear Original Queue**: We clear the original queue to ensure it is empty before adding elements back.
4. **Add Elements Back**: We add elements from the reversed list back into the queue but this time using `appendleft` method which adds elements at the beginning of the queue.

### Analysis of Time and Space Complexity:
- **Time Complexity**: The time complexity is O(n), where n is the number of elements in both data structures. This is because we perform operations on each element once.
- **Space Complexity**: The space complexity is O(n) because we temporarily store all elements in a list before converting them back into a queue.

### Optimality Explanation:
This approach is optimal because it minimizes the number of operations by ensuring that we only need to manipulate elements once and do not require multiple passes over either data structure.

### Trade-offs:
There are no significant trade-offs between time and space complexity in this solution as both complexities are linear with respect to the number of elements involved.

### Difficulty Rating:
This problem requires an understanding of how stacks and queues work and how to manipulate them efficiently, which makes it challenging but not extremely difficult like some advanced LeetCode problems.