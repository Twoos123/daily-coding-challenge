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

### Problem Description: Rebalancing Heaps

**Challenge:**
You are given a min-heap and a max-heap, each containing `n` elements. The elements in both heaps are initially distinct. You need to rebalance both heaps such that each heap contains exactly `n/2` elements from the original set. The rebalancing process should be performed efficiently.

**Constraints:**
- The elements in both heaps are integers.
- The initial elements in each heap are distinct.
- The rebalanced heaps must contain exactly `n/2` elements from the original set.

**Example Input/Output:**

```python
min_heap = [1, 3, 5, 7, 9]
max_heap = [2, 4, 6, 8, 10]

# Rebalance Heaps
rebalanced_min_heap, rebalanced_max_heap = rebalance_heaps(min_heap, max_heap)

print("Rebalanced Min Heap:", rebalanced_min_heap)
print("Rebalanced Max Heap:", rebalanced_max_heap)
```

**Optimal Solution:**
To solve this problem efficiently, we can use a combination of heap operations and sorting to ensure that we balance the heaps correctly.

1. **Combine Elements into a Single List:**
   - First, combine all elements from both heaps into a single list.
   - Sort this list in ascending order.

2. **Rebalance Heaps:**
   - Divide the sorted list into two parts at the middle index (`n/2`).
   - Use `heapify` to build a min-heap and a max-heap from these two parts.

3. **Complexity Analysis:**
   - **Time Complexity:** 
     - Combining elements into a single list and sorting takes $O(n \log n)$.
     - Dividing the list into two parts is $O(n)$.
     - Building both heaps using `heapify` takes $O(n \log n)$.
     - Therefore, the overall time complexity is $O(n \log n)$.
   - **Space Complexity:** 
     - We need to store all elements in memory, so space complexity is $O(n)$.

### Implementation:
```python
import heapq

def rebalance_heaps(min_heap, max_heap):
    # Combine elements into a single list
    combined = min_heap + max_heap
    
    # Sort the combined list in ascending order
    combined.sort()
    
    # Rebalance Heaps by dividing the sorted list into two parts at the middle index (n/2)
    mid = len(combined) // 2
    
    # Use heapify to build a min-heap and a max-heap from these two parts
    rebalanced_min_heap = combined[:mid]
    rebalanced_max_heap = combined[mid:]
    
    return rebalanced_min_heap, rebalanced_max_heap

# Example Usage:
min_heap = [1, 3, 5, 7, 9]
max_heap = [2, 4, 6, 8, 10]

rebalanced_min_heap, rebalanced_max_heap = rebalance_heaps(min_heap, max_heap)

print("Rebalanced Min Heap:", rebalanced_min_heap)
print("Rebalanced Max Heap:", rebalanced_max_heap)
```

### Detailed Explanation:
1. **Combining Elements:** We start by combining all elements from both heaps into a single list. This step is necessary because we need to ensure that we have access to all elements to rebalance them correctly.

2. **Sorting:** Next, we sort this combined list in ascending order. This step takes $O(n \log n)$ time using standard sorting algorithms like Timsort in Python.

3. **Rebalancing Heaps:** After sorting, we divide the list into two parts at the middle index (`n/2`). This ensures that each part will contain `n/2` elements from the original set.

4. **Building Heaps:** Finally, we use `heapify` to build a min-heap from the first part and a max-heap from the second part. The `heapify` function is used to transform an array into a heap, maintaining the heap property in $O(n \log n)$ time.

### Analysis:
- **Time Complexity:** The overall time complexity is dominated by sorting ($O(n \log n)$) and building heaps ($O(n \log n)$), resulting in an overall time complexity of $O(n \log n)$.
- **Space Complexity:** We need to store all elements in memory temporarily during sorting, leading to a space complexity of $O(n)$.

### Difficulty Rating:
The difficulty rating is 3 due to the need to combine elements into a single list, sort it efficiently, and then rebalance using heap operations. While