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

**DIFFICULTY: 4**

### Challenge: Median Maintenance in Real-Time

Given a stream of numbers, implement a data structure to maintain the median of the numbers seen so far. The stream may contain duplicate numbers, and you need to handle both max and min heaps for efficient median calculation.

#### Problem Description

You are given a stream of integers. Your task is to maintain the median of these integers in real-time. The median is defined as the middle value in the sorted list of integers. If the list has an even number of integers, the median is the average of the two middle values. You need to use both max and min heaps to efficiently handle the calculation and updating of the median.

#### Example Input/Output

- **Input:** `[1, 3, 2, 5, 3, 7]`
- **Output:** `[1, 2, 2, 5, 3, average of 3 and 5 (which is 4), average of 5 and 7 (which is 6)]`

#### Constraints

- The stream of numbers is unbounded.
- The numbers can be any integer value.
- You should handle both insertion and deletion operations.

#### Solution in Python

```python
import heapq

class MedianFinder:
    def __init__(self):
        self.max_heap = []  # Stores lower half of the numbers
        self.min_heap = []  # Stores higher half of the numbers

    def addNum(self, num):
        # Add the number to the appropriate heap
        if not self.max_heap or num <= -self.max_heap[0]:
            heapq.heappush(self.max_heap, -num)
        else:
            heapq.heappush(self.min_heap, num)

        # Balance the heaps to maintain O(1) complexity for finding the median
        if len(self.max_heap) > len(self.min_heap) + 1:
            heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
        elif len(self.min_heap) > len(self.max_heap):
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

    def findMedian(self):
        # Determine whether the total count of numbers is odd or even
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0] + self.min_heap[0]) / 2.0
        else:
            return -self.max_heap[0]

# Example usage:
median_finder = MedianFinder()
median_finder.addNum(1)
median_finder.addNum(3)
median_finder.addNum(2)
print(median_finder.findMedian()) # Output: 2
median_finder.addNum(5)
print(median_finder.findMedian()) # Output: (average of 2 and 5) = 3.5
```

#### Detailed Explanation

1. **Initialization:**
   - We initialize two heaps: `max_heap` and `min_heap`.
   - The `max_heap` will store the lower half of the numbers, and the negative value is used to simulate a max heap with Python's heapq module, which only supports min heaps.

2. **Adding Numbers:**
   - The `addNum` method checks whether the incoming number should go into the `max_heap` or `min_heap`.
   - It then ensures that the two heaps are balanced to maintain O(1) complexity for finding the median.
   - This balancing step involves moving elements from one heap to another if necessary.

3. **Finding Median:**
   - The `findMedian` method calculates the median based on whether there is an odd or even number of elements.
   - If there are an odd number of elements, it returns the negative root of the `max_heap`.
   - If there are an even number of elements, it returns the average of the roots of both heaps.

#### Complexity Analysis

1. **Time Complexity:**
   - **Insertion:** O(log n) due to heap operations.
   - **Finding Median:** O(1) because we ensure that one heap always has one more element than the other.

2. **Space Complexity:** O(n) for storing all elements in the two heaps.

The solution provided uses both max and min heaps efficiently to maintain the median in real-time while ensuring optimal time complexity for both insertion and finding operations.

### Trade-offs

While this solution uses O(log n) time complexity for insertions, it requires O(n) space complexity if all elements are stored in the heaps. However, this trade-off is necessary for maintaining O(1) complexity when finding the median. For applications where memory efficiency is crucial, additional optimizations might be needed.

This challenge requires a deep understanding of heap properties and efficient insertion/deletion operations, making it suitable for a moderate to advanced difficulty level.