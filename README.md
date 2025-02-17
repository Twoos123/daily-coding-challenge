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

### Problem Description

**Challenge: Median Maintenance with Heaps**

Given a sequence of integers, maintain the median of the sequence using two heaps: one max heap and one min heap. The max heap should store the smaller half of the integers, and the min heap should store the larger half. Ensure that both heaps are balanced and that the median is efficiently updated.

**Constraints:**
- The input sequence can be very large.
- The median needs to be updated after each insertion.
- The heaps must be balanced (i.e., both heaps should have approximately equal sizes).

### Example Input/Output

**Input:** `[3, 1, 4, 1, 5, 9, 2, 6]`
**Output:** `Median values: 1, 1, 2, 2, 3, 3, 4, 4`

### Complexity Analysis

1. **Time Complexity:**
   - **Insertion:** \(O(\log n)\) because we need to insert an element into either the max heap or the min heap.
   - **Median Update:** Since we are maintaining two heaps, the worst-case scenario is that we have to restore balance by moving elements between heaps, which takes \(O(\log n)\) time.
   - **Total:** The overall time complexity for maintaining the median with insertions is \(O(\log n)\).

2. **Space Complexity:**
   - The space complexity is \(O(n)\) because in the worst case, we might need to store all elements in both heaps.

### Optimal Solution

Here is the most efficient solution in Python:

```python
import heapq

class MedianFinder:
    def __init__(self):
        # Max heap to store smaller half of the numbers
        self.max_heap = []
        # Min heap to store larger half of the numbers
        self.min_heap = []

    def add_num(self, num):
        if not self.max_heap or num < -self.max_heap[0]:
            heapq.heappush(self.max_heap, -num)
        else:
            heapq.heappush(self.min_heap, num)

        # Maintain balance between two heaps
        if len(self.max_heap) > len(self.min_heap) + 1:
            heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
        elif len(self.min_heap) > len(self.max_heap):
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

    def find_median(self):
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0] + self.min_heap[0]) / 2
        else:
            return -self.max_heap[0]

# Example usage:
median_finder = MedianFinder()
median_finder.add_num(3)
median_finder.add_num(1)
print("Median after adding 1: ", median_finder.find_median())
median_finder.add_num(4)
print("Median after adding 4: ", median_finder.find_median())
```

### Explanation

- **Initialization:** Two heaps are initialized, one as a max heap and one as a min heap.
- **Insertion:** When adding a new number, it is either inserted into the max heap if it is smaller than the smallest element in the max heap, or into the min heap if it is larger than the largest element in the min heap.
- **Balancing Heaps:** After each insertion, the heaps are checked to ensure they are balanced. If the max heap has more than one more element than the min heap, an element is moved from the max heap to the min heap and vice versa to balance them.
- **Median Calculation:** The median is calculated by finding the middle value between the roots of both heaps when they have equal sizes, or just taking the root of the larger heap when one heap is significantly larger.

This approach ensures that both heaps remain balanced and that the median can be efficiently updated in \(O(\log n)\) time per insertion.

### Difficulty Rating

This challenge requires understanding the properties of min and max heaps, balancing them efficiently, and implementing these operations in a Python solution. While it involves standard operations like heap insertion and balancing, the need to maintain balance between two heaps adds complexity, making it more challenging than typical beginner-friendly problems.