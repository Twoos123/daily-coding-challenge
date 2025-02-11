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

### Challenge: Efficient Median Maintenance Using Two Heaps

**Problem Description:**
Given a stream of integers, design an efficient algorithm to maintain a running median of the numbers in the stream. The algorithm should use two heaps, one min-heap and one max-heap, to achieve this.

**Constraints:**
- The stream of integers can be either ascending or descending.
- The median should be updated whenever a new number is added.
- The implementation should be efficient in terms of time complexity.

**Example Input/Output:**
- Input: `[1, 2, 3, 4, 5]`
- Output: `[1, 1.5, 2, 2.5, 3]`
- Explanation: The median is calculated as follows:
  - For `[1]`, median = `1`.
  - For `[1, 2]`, median = `(1 + 2) / 2 = 1.5`.
  - For `[1, 2, 3]`, median = `(1 + 2) / 2 = 1.5`.
  - For `[1, 2, 3, 4]`, median = `(2 + 3) / 2 = 2.5`.
  - For `[1, 2, 3, 4, 5]`, median = `(3 + 4) / 2 = 3`.

**Solution:**

```python
import heapq

class MedianFinder:
    def __init__(self):
        self.min_heap = []  # Stores smaller half of numbers (max heap)
        self.max_heap = []  # Stores larger half of numbers (min heap)

    def add_num(self, num):
        # Add the number to the appropriate heap
        if not self.max_heap or num < -self.max_heap[0]:
            # If max_heap is empty or num is smaller than max_heap's root,
            # add it to max_heap.
            heapq.heappush(self.max_heap, -num)
        else:
            # Otherwise, add it to min_heap.
            heapq.heappush(self.min_heap, num)
        
        # Balance heaps to ensure size difference does not exceed one.
        if len(self.max_heap) > len(self.min_heap) + 1:
            # If max_heap has more than one more element than min_heap,
            # move an element from max_heap to min_heap.
            heapq.heappush(self.min_heap, heapq.heappop(self.max_heap))
        elif len(self.min_heap) > len(self.max_heap):
            # If min_heap has more elements than max_heap,
            # move an element from min_heap to max_heap.
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

    def find_median(self):
        if len(self.max_heap) == len(self.min_heap):
            # If heaps have equal number of elements,
            # median is the average of roots.
            return (-self.max_heap[0] + self.min_heap[0]) / 2.0
        else:
            # If max_heap has more elements,
            # median is the root of max_heap.
            return (-self.max_heap[0])

# Example usage:
mf = MedianFinder()
mf.add_num(1)
mf.add_num(2)
mf.add_num(3)
print("Median:", mf.find_median())  # Output: 2.0
```

**Complexity Analysis:**
- **Time Complexity:**
  - `add_num` operation: \(O(\log n)\) due to heap operations.
  - `find_median` operation: \(O(1)\) as it simply accesses the roots of the heaps.
  
**Explanation of Approach:**
The solution uses two heaps: one max-heap (`self.max_heap`) for storing smaller numbers (inverted to represent max heap), and one min-heap (`self.min_heap`) for storing larger numbers. This allows efficient insertion and retrieval of the median value.

1. **Insertion:** The new number is added to either the max-heap or the min-heap based on whether it is smaller than the root of the max-heap. After insertion, the heaps are balanced to ensure that their size difference does not exceed one, maintaining efficiency.

2. **Median Calculation:** The median is calculated by accessing the roots of both heaps. If the number of elements in both heaps is equal, the median is the average of these roots; otherwise, it is the root from the heap with more elements (which represents the max value).

This approach ensures that both insertion and retrieval operations are performed efficiently, leveraging the properties of heaps for maintaining a balanced distribution of numbers.

### Difficulty Rating: This challenge requires a deep understanding of heap properties and operations, as well as an effective strategy for