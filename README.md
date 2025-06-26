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
**Problem: "Reversing a Queue with Stacks"**

Given a standard queue implementation (FIFO), implement a function that reverses the order of elements in the queue without using any additional data structures other than stacks. The function should take the queue as input and return the reversed queue.

### Example Input/Output
```python
# Example usage:
queue = [1, 2, 3, 4, 5]
reversed_queue = reverse_queue_with_stacks(queue)
print(reversed_queue)  # Output: [5, 4, 3, 2, 1]
```

### Constraints
- The input queue can contain any type of elements.
- The size of the queue is unknown at compile time.
- The function should modify the original queue to reverse its elements.

### Complexity Analysis

#### Time Complexity:
The time complexity of this problem is O(n), where n is the number of elements in the queue. This is because we need to pop each element from the original queue and push it onto a stack to reverse the order.

#### Space Complexity:
The space complexity is also O(n), as we are using an auxiliary stack to store the elements temporarily.

### Most Efficient Solution in Python

```python
def reverse_queue_with_stacks(queue):
    # Create two stacks to store the elements
    stack1, stack2 = [], []

    # Move all elements from the queue to stack1
    while queue:
        # Pop an element from the queue and push it onto stack1
        stack1.append(queue.pop(0))

    # Move all elements from stack1 to stack2 (reversing the order)
    while stack1:
        # Pop an element from stack1 and push it onto stack2 (in reverse order)
        stack2.append(stack1.pop())

    # Move all elements back to the original queue (now in reversed order)
    while stack2:
        # Dequeue an element from stack2 and enqueue it back to the original queue
        queue.insert(0, stack2.pop())

    return queue

# Example usage:
queue = [1, 2, 3, 4, 5]
reversed_queue = reverse_queue_with_stacks(queue)
print(reversed_queue)  # Output: [5, 4, 3, 2, 1]
```

### Detailed Explanation of the Algorithm

1. **Initialization**: Two empty stacks (`stack1` and `stack2`) are created to temporarily hold the elements.
2. **Copy Elements to Stack1**: The elements are popped from the original queue and pushed onto `stack1`. This step ensures that all elements are stored in a single stack (`stack1`) in their original order.
3. **Reverse Elements**: The elements are then popped from `stack1` and pushed onto `stack2`. Since elements are popped from top to bottom in a stack, this operation effectively reverses the order of elements.
4. **Reinsert Elements**: Finally, the elements are dequeued from `stack2` and reinserted back into the original queue but at the beginning (due to insert operation), effectively reversing its order.

### Analysis of Time and Space Complexity

- **Time Complexity (O(n))**: Each element is processed twice—once when moving to `stack1` and once when moving back to the original queue. This results in a linear time complexity of O(n).
- **Space Complexity (O(n))**: An auxiliary stack (`stack2`) is used to store temporary elements. Since we use only one additional data structure and all elements are stored temporarily at some point, the space complexity remains linear at O(n).

### Why This Approach is Optimal

This approach leverages the properties of stacks where elements are added and removed from one end (top). By using two stacks, we can efficiently reverse the order of elements by simply moving them from one stack to another while maintaining constant time operations for insertion and deletion.

### Trade-offs Between Time and Space

There are no significant trade-offs between time and space complexity in this solution. The use of two stacks ensures that we handle all operations efficiently with minimal additional space requirements proportional to the input size.

DIFFICULTY: 3