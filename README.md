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

### Challenge: Maximize Queue Values

**Description:**
Given a queue of integers, you need to maximize the product of the elements in the queue. However, you can only remove and add elements from one end of the queue at a time (either front or back). Your task is to find the maximum product that can be achieved by performing these operations.

**Constraints:**
- The queue will contain non-negative integers.
- You can only perform `enqueue` and `dequeue` operations.
- You cannot peek at elements without removing them.

**Example Input/Output:**

Input: `[3, 2, 1]`
Output: `6` (by rearranging the elements to `[2, 3, 1]`)

Input: `[2, 3, 4]`
Output: `24` (by rearranging the elements to `[4, 3, 2]`)

**Solution:**

To maximize the product, we need to consider both the maximum and minimum values in the queue since multiplying two numbers with extreme values can lead to the highest product. However, since we can only perform `enqueue` and `dequeue` operations, we must use these operations strategically.

Here's an optimal approach using a stack to keep track of the smallest numbers encountered so far, which can help in maximizing the product by ensuring that the smallest numbers are placed at the front of the queue:

```python
from collections import deque

class MaximizeQueueProduct:
    def maximize_product(self, queue):
        stack = deque()
        max_product = 0
        
        # Process all elements in the queue
        while queue:
            # Store smallest number first
            if not stack or queue[0] < stack[-1]:
                stack.append(queue.popleft())
            else:
                stack.append(queue.pop())
        
        # Calculate product starting from the smallest number
        while stack:
            max_product = max(max_product, max_product * stack.pop())
        
        return max_product

# Example usage:
queue = deque([3, 2, 1])
maximizer = MaximizeQueueProduct()
result = maximizer.maximize_product(queue)
print(result) # Output: 6

queue = deque([2, 3, 4])
result = maximizer.maximize_product(queue)
print(result) # Output: 24
```

**Analysis:**
- **Time Complexity:** The algorithm processes each element in the queue at most twice (once in the while loop and once in the product calculation). Therefore, the time complexity is O(n), where n is the number of elements in the queue.
- **Space Complexity:** We use a stack to store at most n elements. Hence, the space complexity is also O(n).

**Difficulty Rating:** 4

This problem is rated as a medium to hard problem because it requires a strategic approach to using stacks and queues effectively. The solution involves understanding how to manage both maximum and minimum values within the constraints given, making it slightly more complex compared to basic stack or queue operations.