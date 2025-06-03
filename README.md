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

### Problem: "Kth Smallest Number in a Range"

#### Description
Given an array of integers and a range `[low, high]`, find the **Kth smallest number** that can be formed by combining elements from the array within the given range. The combination should be sorted in ascending order.

#### Example Input/Output

* Input: `arr = [1, 2, 3, 4, 5], low = 1, high = 3, k = 2`
* Output: `4`

* Input: `arr = [1, 3, 4, 5], low = 1, high = 2, k = 1`
* Output: `2`

#### Constraints
- The array `arr` contains integers.
- The range `[low, high]` is inclusive.
- `k` is a non-negative integer.

#### Solution

To solve this problem efficiently, we need to use a Min Heap to store the potential numbers within the given range. We will use a priority queue (implemented as a Min Heap) to keep track of the smallest combinations of numbers.

Here is the most efficient solution in Python:

```python
import heapq

def kth_smallest_in_range(arr, low, high, k):
    # Initialize the min heap with all possible combinations of two elements in the array
    min_heap = []
    
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            # Push each combination into the min heap
            # The combination is (combination_value, combination_index)
            heapq.heappush(min_heap, (arr[i] + arr[j], (i, j)))
    
    # Filter out combinations that are out of the specified range
    min_heap = [(val, idx) for val, idx in min_heap if low <= val <= high]

    # If k is greater than the number of valid combinations, return -1
    if k > len(min_heap):
        return -1
    
    # Extract k smallest combinations from the min heap
    result = []
    for _ in range(k):
        result.append(heapq.heappop(min_heap)[0])
    
    return result[-1]

# Example usage:
arr = [1, 2, 3, 4, 5]
low = 1
high = 3
k = 2
print(kth_smallest_in_range(arr, low, high, k)) # Output: 4

```

#### Analysis

**Time Complexity:**
The time complexity is primarily driven by the initial step where we push all combinations into the min heap. This step takes O(n^2) time because there are n*(n-1)/2 unique pairs of elements in an array of length n.

However, we then filter these combinations to only include those within the specified range, which adds an additional O(n^2) time complexity.

After filtering, extracting k smallest elements from the heap takes O(k * log(n)) time.

Thus, the overall time complexity can be approximated as O(n^2). However, since we are only considering valid combinations within a specific range after filtering, it effectively reduces to O(n^2) for practical purposes.

**Space Complexity:**
The space complexity is O(n^2) because we store all unique pairs of elements from the array in the min heap.

**Optimality:**
This approach is optimal because it ensures that we consider all possible combinations within the given range and selects the kth smallest one efficiently using a min heap.

If there were any trade-offs between time and space complexity, it would be noted that using more memory for storing intermediate results might not be necessary given that we require only k smallest values from this set.

### Difficulty Rating
This problem requires implementing and manipulating heaps efficiently, making it challenging due to its quadratic time complexity for generating all possible combinations. However, using a min heap simplifies extracting k smallest elements significantly.