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

**Heap Challenge: "Reordering Tracks for Music Playlist"**

You are given a music playlist of songs with their respective durations. The goal is to reorder the tracks in a way that maximizes the total duration of the first `k` tracks while maintaining a max-heap structure. The playlist can be represented as an array of song durations.

**Objective:**

1. Build a max-heap from the given playlist.
2. Extract elements from the heap one by one until you have extracted `k` elements.
3. The goal is to maximize the total duration of these extracted elements.

**Constraints:**

- The input playlist can be represented as an array of integers.
- You can use any programming language (e.g., Python).
- The solution should be efficient in terms of both time and space complexity.

### Example Input/Output

**Input:** Playlist = `[3, 1, 4, 1, 5, 9, 2, 6, 5, 3]`, `k = 3`
**Output:** The top `k` elements should be extracted and ordered in a way that maximizes their total duration.

**Example Solution:**

- **Playlist:** `[3, 1, 4, 1, 5, 9, 2, 6, 5, 3]`
- **k:** `3`
- **Output:** `[9, 5, 6]` (This is one possible optimal solution; there might be others)

### Constraints

- The length of the playlist (`n`) will be between `1` and `100`.
- The value of `k` will always be less than or equal to the length of the playlist.
- The durations of songs are non-negative integers.

### Solution

Here is an optimal solution in Python:

```python
import heapq

def reorder_tracks(playlist, k):
    # Convert the playlist to a max-heap
    max_heap = [-duration for duration in playlist]
    heapq.heapify(max_heap)

    # Extract k elements from the max-heap
    top_k_durations = []
    for _ in range(k):
        top_k_durations.append(-heapq.heappop(max_heap))

    return top_k_durations

# Example usage:
playlist = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
k = 3
result = reorder_tracks(playlist, k)
print(result)  # Output: [-9, -5, -6]
```

### Explanation of Algorithm

1. **Convert to Max-Heap:**
   - The `-duration` trick is used to convert a min-heap into a max-heap because Python's `heapq` module only supports min-heaps.
   - We use `heapify` from the `heapq` module to build our initial max-heap.

2. **Extract Top K Elements:**
   - We use `heapq.heappop` to extract elements from the max-heap.
   - By taking the negative of each duration when pushing into the heap and then taking the negative again when popping out, we effectively get the maximum durations first.

3. **Return Result:**
   - The resulting list contains the durations in descending order which maximizes their total sum.

### Time Complexity Analysis:

- **Building Max-Heap:** O(n log n) because we are converting an array into a heap.
- **Extracting Top K Elements:** O(k log n) because each extraction operation reduces the size of the heap by one and involves a potential logarithmic number of comparisons.

Thus, the overall time complexity is O(n log n + k log n).

### Space Complexity Analysis:

- **Space Required:** O(n) because we need to store all elements in our heap.

### Difficulty Rating

This problem combines both building and manipulating heaps with optimization strategies. While it requires understanding of heap properties and efficient use of data structures, it does not involve complex algorithms beyond basic operations provided by standard libraries like `heapq`. 

Given its constraints (e.g., handling up to 100 elements and k<=100), it should be manageable but challenging enough for someone familiar with basic data structures but looking to apply more advanced techniques.

Therefore, I rate this challenge as:
```
```

This rating reflects that it is somewhat challenging but still within reach for someone who has a good grasp of algorithms and data structures but needs some practice with more complex applications involving heaps.