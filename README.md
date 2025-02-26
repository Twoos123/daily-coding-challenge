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

****

### Challenge: "Reversing a Queue Using Two Stacks"

#### Problem Description

Given a queue, implement a function that reverses the order of elements in the queue using two stacks. The queue is represented as a linked list, and the function should modify the original queue.

#### Example Input/Output

**Input:**
```
Queue: ["A", "B", "C", "D"]
```

**Output:**
```
Reversed Queue: ["D", "C", "B", "A"]
```

#### Constraints

- The queue is initially empty or contains elements.
- Only one pass through the queue is allowed.
- The use of two stacks is mandatory.
- The original queue should be modified.

#### Solution

To reverse a queue using two stacks efficiently, we follow these steps:

1. **Push all elements from the queue onto the first stack.**
2. **Pop all elements from the first stack and push them onto the second stack.**
3. **Clear the first stack and enqueue all elements from the second stack back into the original queue.**

Here's the implementation in Python:

```python
from collections import deque

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.head = None

    def enqueue(self, value):
        node = Node(value)
        if not self.head:
            self.head = node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = node

    def dequeue(self):
        if not self.head:
            return None
        value = self.head.value
        self.head = self.head.next
        return value

def reverse_queue(queue):
    # Stack 1 to hold elements from the queue
    stack1 = []
    
    # Push all elements from the queue onto stack1
    while queue.head:
        stack1.append(queue.dequeue())
    
    # Stack 2 to hold reversed elements
    stack2 = []
    
    # Pop all elements from stack1 and push them onto stack2
    while stack1:
        stack2.append(stack1.pop())
    
    # Clear stack1 (not necessary but for clarity)
    while stack1:
        stack1.pop()
    
    # Enqueue all elements from stack2 back into the original queue
    while stack2:
        queue.enqueue(stack2.pop())

# Example usage:
queue = Queue()
for char in "ABCD":
    queue.enqueue(char)

print("Original Queue:", end=' ')
current = queue.head
while current:
    print(current.value, end=' ')
    current = current.next

reverse_queue(queue)

print("\nReversed Queue:", end=' ')
current = queue.head
while current:
    print(current.value, end=' ')
    current = current.next

```

### Complexity Analysis

- **Time Complexity:**
  - Pushing all elements from the queue onto `stack1`: O(n) where n is the number of elements in the queue.
  - Popping all elements from `stack1` and pushing them onto `stack2`: O(n) because each pop operation from `stack1` and push operation onto `stack2` takes constant time.
  - Enqueueing all elements from `stack2` back into the original queue: O(n) because each enqueue operation takes constant time.
  
  Therefore, the overall time complexity is O(n).

- **Space Complexity:**
  - Two stacks are used, each with a maximum size of n. Therefore, the space complexity is O(n).

This approach is optimal because it ensures that we use two stacks to reverse the queue without modifying other parts of the algorithm or using additional data structures beyond what is required by the problem statement. The space complexity is linear due to the use of two stacks, which is unavoidable in this context given that we need to reverse the order of elements.

### Difficulty Rating: 4

The difficulty rating is 4 because:
- The problem requires understanding how to manipulate data structures efficiently.
- The use of two stacks adds complexity compared to simpler problems involving single stacks or queues.
- The constraint of modifying only the original queue adds another layer of complexity.

However, the solution provided is straightforward and follows logical steps, making it manageable with a good understanding of stacks and queues.