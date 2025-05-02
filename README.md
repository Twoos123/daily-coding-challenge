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
**Kth Smallest Element in an Array using a Min Heap**

Given an array of integers, implement an efficient algorithm to find the kth smallest element using a Min Heap.

**Problem Statement:**
You are given an array of integers and an integer `k`. Your task is to find the kth smallest element in this array using a Min Heap. The algorithm should ensure that it uses the Min Heap data structure optimally to minimize both time and space complexity.

### Example Input/Output

**Input:**
- Array: `[3, 2, 1, 5, 6, 4]`
- `k`: `3`

**Output:**
- The 3rd smallest element: `2`

### Constraints
- The array contains distinct integers.
- `k` is a valid index in the range `[1, n]`, where `n` is the length of the array.

### Most Efficient Solution in Python

```python
import heapq

def kth_smallest_element(array, k):
    # Convert the array into a min heap
    min_heap = []
    for num in array:
        # Push each element into the min heap
        heapq.heappush(min_heap, num)
    
    # Pop elements from the min heap until we reach the kth smallest element
    for _ in range(k - 1):
        heapq.heappop(min_heap)
    
    # The top of the heap will be the kth smallest element
    return min_heap[0]
```

### Detailed Explanation
The solution uses the `heapq` module in Python to implement a Min Heap. Here’s how it works:

1. **Initialization**: The `min_heap` list is initialized to store elements from the input array.
2. **Heapify**: Each element from the input array is pushed into the `min_heap` using `heapq.heappush`, which ensures that the heap property is maintained.
3. **Extraction**: We then pop elements from the `min_heap` using `heapq.heappop` until we have processed `k - 1` elements. This effectively removes all elements smaller than or equal to the kth smallest element.
4. **Result**: After extracting `k - 1` elements, the top of the remaining heap will be the kth smallest element.

### Analysis of Complexity
**Time Complexity**:
- **Building Min Heap**: The initial push operation into `min_heap` takes O(n log n) time where n is the length of the input array because each push operation takes log n time due to heap properties.
- **Extraction Phase**: Extracting k - 1 elements from the heap takes O((k - 1) log n) time because each pop operation also involves maintaining heap properties.
  
Thus, the total time complexity is O(n log n + (k - 1) log n) ≈ O(n log n).

**Space Complexity**:
- The space required to store elements in terms of auxiliary space remains O(k) as we only need to store k elements in our heap.

### Why This Approach is Optimal
This approach leverages Python's built-in `heapq` module which provides efficient implementation details such as maintaining heap properties with each operation. This ensures that both time and space complexities are minimized.

### Difficulty Rating
This problem requires understanding how to utilize a Min Heap efficiently while also handling edge cases related to finding a specific index within an ordered set. The use of Python's built-in module simplifies some complexities but still demands knowledge about heap operations and their implications on performance metrics like time and space complexities.