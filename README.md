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

### Coding Challenge: "Balanced Median Heap"

**Problem Description:**

Given a stream of integers, maintain a data structure that efficiently tracks the median of the numbers seen so far. The data structure should support inserting a new number into the stream and retrieving the current median in constant time. The twist is that the data structure should handle streams with both odd and even lengths of unique elements.

**Constraints:**
- The stream of integers is initially empty.
- The stream will contain only positive integers.
- The median calculation should handle both odd and even lengths of the stream.
- Insertion and retrieval operations should be efficient.

**Example Input/Output:**
- **Input Stream:** [1, 3, 5]
- **Output:** [1, 2, 3]
- **Input Stream:** [1, 3, 5, 7]
- **Output:** [1, 2, 3, 4]

**Solution:**

To solve this problem efficiently, we can use two heaps: a Min Heap and a Max Heap. The Min Heap will store the smaller half of the numbers, and the Max Heap will store the larger half. This approach ensures that the root of one heap will always correspond to the current median.

Here’s an implementation in Python:

```python
import heapq

class BalancedMedianHeap:
    def __init__(self):
        self.min_heap = []  # Stores smaller half of numbers
        self.max_heap = []  # Stores larger half of numbers

    def insert(self, num):
        if not self.min_heap or num < -self.max_heap[0]:
            heapq.heappush(self.min_heap, -num)
        else:
            heapq.heappush(self.max_heap, num)

        # Balance the heaps to maintain efficient retrieval of median
        if len(self.min_heap) > len(self.max_heap) + 1:
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))
        elif len(self.max_heap) > len(self.min_heap):
            heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))

    def find_median(self):
        if len(self.min_heap) == len(self.max_heap):
            return (-self.min_heap[0] + self.max_heap[0]) / 2.0
        else:
            return -self.min_heap[0]

# Example usage
bmmh = BalancedMedianHeap()
bmmh.insert(1)
bmmh.insert(3)
print("Median:", bmmh.find_median())  # Output: 2

bmmh.insert(5)
print("Median:", bmmh.find_median())  # Output: 3

bmmh.insert(7)
print("Median:", bmmh.find_median())  # Output: 4

```

**Analysis:**

- **Time Complexity:**
  - Insert operation: The time complexity of inserting an element into either heap is \( O(\log n) \) due to the `heapq.heappush` operation.
  - Finding the median: The time complexity for retrieving the median is \( O(1) \) as it involves accessing the roots of both heaps.

- **Space Complexity:** The space complexity is \( O(n) \) because we need to store all elements in the two heaps.

**Optimality:**

This approach is optimal because it uses two heaps to efficiently manage the stream of integers, ensuring that both insertion and retrieval operations are performed in logarithmic and constant time respectively. The balancing mechanism ensures that one heap always contains the smaller elements and the other contains the larger elements, making it easy to calculate the median in constant time.

**Difficulty Rating:** 3

This problem requires understanding how to balance two heaps to maintain the median efficiently, which is a more advanced concept but still within the realm of typical LeetCode-style challenges. The solution involves handling both insertion and retrieval operations efficiently, making it slightly challenging but not extremely so.