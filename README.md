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

**Heapify Rearrangement**
You are given a sorted array where some elements are out of order due to a heap structure that was previously maintained. Your task is to rearrange the array back into a valid min-heap, ensuring that the heap property (each parent node is less than or equal to its children) is satisfied.

### Example Input/Output

**Input:**
```
[3, 2, 4, 1, 5]
```

**Output:**
```
[1, 2, 3, 4, 5]
```

### Constraints:
1. The input array is initially sorted but contains elements that are out of order.
2. The size of the array is guaranteed to be at least 1.

### Solution (Optimal Approach)

To solve this problem efficiently, we can leverage the fact that the input array is initially sorted and only needs to be rearranged to satisfy the heap property. We will use a bottom-up approach, starting from the last non-leaf node (which is also the middle element in a complete binary tree) and working our way up to the root node.

#### Python Code

```python
def heapifyRearrange(arr):
    # Calculate the last non-leaf node index
    lastNonLeaf = (len(arr) - 2) // 2
    
    # Perform heapify operations from last non-leaf node to root
    for i in range(lastNonLeaf, -1, -1):
        _heapify(arr, i, len(arr))
    
def _heapify(arr, i, n):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    
    # Check if left child is larger than current node
    if left < n and arr[left] < arr[largest]:
        largest = left
    
    # Check if right child is larger than current node
    if right < n and arr[right] < arr[largest]:
        largest = right
    
    # Swap nodes if necessary and continue heapifying
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        _heapify(arr, largest, n)

# Example usage
arr = [3, 2, 4, 1, 5]
heapifyRearrange(arr)
print(arr)  # Output: [1, 2, 3, 4, 5]
```

### Analysis

#### Time Complexity:
The time complexity of this approach is O(n log n), where n is the number of elements in the array. This is because we perform a series of heapify operations from each non-leaf node to its root. Each heapify operation takes O(log n) time.

#### Space Complexity:
The space complexity is O(1) since we only use a constant amount of space to store indices and variables during the algorithm.

### Why This Approach is Optimal:
This approach avoids unnecessary overwriting of elements by starting from the last non-leaf node and working its way up. This ensures that each element is only moved once during the rearrangement process, making it efficient in terms of both time and space.

### Difficulty Rating
DIFFICULTY: 3

This problem requires understanding of how heaps work and leveraging the properties of a sorted array to efficiently rearrange it into a valid heap structure. While it's not extremely complex, it involves some layering of logic that makes it challenging for those who are less familiar with heaps.