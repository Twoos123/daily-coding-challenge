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

### Coding Challenge: Reversing a Queue Using Stacks

**Problem Description:**
Given a queue, reverse the order of its elements using a stack. Implement this process in such a way that it is efficient in both time and space complexity.

**Example Input/Output:**
Input:
```python
queue = [1, 2, 3, 4, 5]
```
Output:
```python
reversed_queue = [5, 4, 3, 2, 1]
```

**Constraints:**
- The input queue is represented as an array or list.
- The `enqueue` and `dequeue` operations on the queue are provided.
- The solution should not use any additional data structures other than a stack.

**Solution:**

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        else:
            return None

    def is_empty(self):
        return len(self.items) == 0

def reverse_queue(queue):
    stack = []
    while not queue.is_empty():
        stack.append(queue.dequeue())
    
    while stack:
        queue.enqueue(stack.pop())

# Example usage:
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

print("Original Queue:", q.items) # Output: [1, 2, 3, 4, 5]

reverse_queue(q)

print("Reversed Queue:", q.items) # Output: [5, 4, 3, 2, 1]
```

**Detailed Explanation of the Algorithm:**
1. **Initialize the Stack:** Start by creating an empty stack.
2. **Pop Elements from Queue:** While the input queue is not empty, pop each element from the front of the queue and push it onto the stack.
3. **Reconstruct Queue:** Once all elements are popped from the queue and stacked in reverse order, start popping elements from the stack and enqueuing them back into the original queue.
4. **Repeat Until Empty:** Continue popping and enqueuing until all elements are back in their reversed order.

**Analysis of Time Complexity:**
- The `while` loop that pops elements from the queue and pushes them onto the stack runs in O(n) time where n is the number of elements in the queue.
- The second `while` loop that pops elements from the stack and enqueues them back into the queue runs in O(n) time as well.
- Therefore, the overall time complexity is O(n) + O(n) = O(2n), which simplifies to O(n).

**Analysis of Space Complexity:**
- The space used by our solution is primarily due to the stack which holds n elements temporarily.
- Therefore, the space complexity is O(n).

**Optimality Explanation:**
This approach is optimal because it leverages both stacks and queues efficiently without using any additional data structures beyond what is specified. The use of a stack allows us to efficiently reverse the order of elements, and then reconstructing it back into a queue ensures that we maintain constant time operations for both enqueue and dequeue operations on the original queue.

### Difficulty Rating
This challenge requires understanding how to manipulate data structures like stacks and queues efficiently and effectively. The solution involves understanding how to temporarily reverse the order of elements using a stack and then reconstructing it back into its original form. The time and space complexities are both linear (O(n)), making it a challenging yet manageable problem for someone familiar with basic data structures.