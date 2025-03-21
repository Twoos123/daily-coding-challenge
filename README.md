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

****

### Problem Description

**Challenge:**
**Max Heap Construction with Repeated Elements**

Given an array of integers where elements can be repeated, construct a max heap from the array. The heap should satisfy the max heap property: the value of each node must be greater than or equal to the values of its children.

**Constraints:**
- The array contains only integers.
- Repeated elements are allowed.
- The input array is unsorted.
- The max heap should be constructed efficiently.

### Example Input/Output

**Input:** `[45, 50, 35, 30, 20, 15]`
**Output:** `[50, 45, 35, 30, 20, 15]`

### Solution

To solve this problem efficiently, we will use the `heapq` module in Python, which provides an implementation of the heap queue algorithm, also known as the priority queue algorithm. However, since we need a max heap, we'll need to invert the values when inserting them into the min heap provided by `heapq`.

Here is the most efficient solution in Python:

```python
import heapq

def construct_max_heap(arr):
    # Create a min heap and invert values
    min_heap = []
    for num in arr:
        heapq.heappush(min_heap, -num)  # Invert values for max heap property
    
    # Convert min heap to max heap by reversing the list
    max_heap = []
    while min_heap:
        max_heap.append(-heapq.heappop(min_heap))
    
    return max_heap

# Example usage
arr = [45, 50, 35, 30, 20, 15]
result = construct_max_heap(arr)
print(result)  # Output: [50, 45, 35, 30, 20, 15]
```

### Explanation

1. **Initialization:** The function `construct_max_heap` takes an array `arr` as input.
2. **Invert Values:** We use `heapq.heappush(min_heap, -num)` to push each number into a min heap. By inverting the values with a negative sign, we effectively create a max heap because Python's `heapq` module implements a min heap.
3. **Conversion:** After all elements are inserted, we pop each element from the min heap and append it to the `max_heap` list with its original value (inverted back).
4. **Return Result:** The function returns `max_heap`, which is now a list representing a max heap where each element is greater than or equal to its children.

### Time Complexity Analysis

- **Insertion:** Pushing elements into the min heap occurs in O(log n) time complexity due to the underlying binary heap property of `heapq`.
- **Conversion:** Popping all elements from the min heap and adding them to `max_heap` also takes O(n log n) time because each pop operation is log(n) and we do it n times.
Therefore, the overall time complexity is O(n log n).

### Space Complexity Analysis

- **Space Complexity:** The space required to store both the `min_heap` and `max_heap` is proportional to n.
Thus, the space complexity is O(n).

### Trade-offs

- **Efficiency vs Space:** The approach uses additional space for storing both heaps but ensures that we maintain the correct order and properties of a max heap efficiently.
- **Alternative Approach:** A more space-efficient approach could involve directly building a max heap from scratch using Python's list methods and heapify operations, but this would be less straightforward and less efficient in terms of time complexity.

This method leverages Python's built-in functionality for min heaps (`heapq`) efficiently and effectively transforms it into a max heap by inverting values during insertion.

**Analysis Rating:**
Given the use of built-in modules and efficient algorithms, this problem is rated as moderately challenging (difficulty level 3). The solution involves straightforward usage of Python's `heapq` module while ensuring that we understand how to transform a min heap into a max heap using inversion of values.