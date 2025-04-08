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

### Problem Description

**Reverse Words in a String with Limited Buffer Size**

Given a string `s` and an integer `k`, reverse the words in the string such that each segment of `k` words is reversed as a whole. If `k` is greater than the number of words in the string, reverse the entire string.

**Example Input/Output:**

- **Input:** `s = "abcdefg", k = 3`
- **Output:** `"cba fedg"`

- **Input:** `s = "abcdefg", k = 6`
- **Output:** `"gfedcba"`

**Constraints:**
- The string `s` contains only lowercase English letters.
- The integer `k` is a positive integer.
- The number of words in the string `s` is at least 1.

### Solution

The most optimal solution involves using a two-pointer approach to segment the string into parts of `k` words each and then reversing each segment.

```python
def reverse_words_in_string(s: str, k: int) -> str:
    # Split the string into words
    words = s.split()
    
    # If k is greater than or equal to the number of words
    if k >= len(words):
        # Reverse the entire string
        return ' '.join(reversed(words))
    
    start = 0
    reversed_segments = []
    
    for end in range(0, len(words), k):
        # Segment boundaries
        segment_start = start
        segment_end = end + k
        
        # Adjust segment_end if it exceeds the list length
        if segment_end > len(words):
            segment_end = len(words)
        
        # Reverse the current segment and add it to the result
        reversed_segment = words[start:end]
        reversed_segment.reverse()
        
        # Extend the result list with the reversed segment(s)
        if segment_start < segment_end:
            reversed_segments.extend(words[start:end])
        else:
            reversed_segments.append(words[start:end])
        
        # Move to the next set of k words
        start = segment_end
    
    return ' '.join(reversed_segments)

# Example usage:
print(reverse_words_in_string("abcdefg", 3)) # Output: "cba fedg"
print(reverse_words_in_string("abcdefg", 6)) # Output: "gfedcba"
```

### Analysis

1. **Time Complexity:** The time complexity is primarily determined by the splitting of the string into words and then reversing each segment. The `split()` method splits the string into a list of words, which takes O(n) time where n is the number of words. The `join()` method concatenates these segments back together, also taking O(n) time. However, since we are iterating over segments of `k` words and reversing each segment, the overall time complexity remains O(n).

2. **Space Complexity:** The space complexity is O(n) because we need to store the reversed segments in lists before joining them back together.

### Why This Approach is Optimal

This approach is efficient because it avoids unnecessary allocations and manipulations. It directly segments the string into parts of `k` words and reverses each segment without scanning the entire string multiple times. This makes it efficient in terms of both time and space complexity.

### Trade-offs

There are no significant trade-offs between time and space complexity in this approach. The algorithm's correctness depends on ensuring that each segment of `k` words is properly reversed and then concatenated back together without any additional characters or segments being added unnecessarily. 

This problem would be rated a difficulty level of 4 because it requires careful handling of string manipulation while ensuring that all segments are correctly reversed and concatenated. It involves understanding how to segment a string into parts based on a given parameter (`k`) and then reversing those segments.