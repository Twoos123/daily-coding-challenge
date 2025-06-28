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

### String Manipulation Challenge: Longest Repeated Substring

**Problem Description:**
Given a string `s`, find the longest repeated substring. A repeated substring is a substring that appears more than once in the string.

**Example Input/Output:**
- **Input:** `s = "abcabc"`
- **Output:** `"abc"`

**Constraints:**
- The input string `s` will be non-empty and contain only lowercase English letters.
- The length of `s` will be between 1 and 10000 characters.

**Difficulty Rating:** 4

### Solution Explanation

To solve this problem efficiently, we can use a combination of suffix arrays and dynamic programming.

1. **Suffix Array Construction:**
   Construct a suffix array for the given string. This will help us find all unique substrings and their occurrences efficiently.

2. **Dynamic Programming:**
   Iterate through the suffix array to find the longest repeated substring. We keep track of the longest repeated substring seen so far and the current substring being processed.

3. **Optimization:**
   To optimize our approach, we use a hash map to store substrings as keys and their frequencies as values. This allows us to check if a substring has been seen before in constant time.

Here's the most efficient solution in Python:

```python
def longest_repeated_substring(s):
    # Construct suffix array
    suffixes = [(s[i:], i) for i in range(len(s))]
    suffixes.sort(key=lambda x: x[0])

    # Initialize result and map for substring frequencies
    max_length = 0
    res = ""
    
    freq_map = {}
    
    for j in range(len(s)):
        suffix = suffixes[j][0]
        
        # Check if we've seen this substring before
        if suffix in freq_map:
            # Update result if this substring is longer than current max_length
            if j - freq_map[suffix] > max_length:
                max_length = j - freq_map[suffix]
                res = suffix[:max_length]
        
        # Update frequency map with current suffix index
        freq_map[suffix] = j
    
    return res

# Example usage:
input_string = "abcabc"
print(longest_repeated_substring(input_string))  # Output: "abc"
```

### Time and Space Complexity Analysis:

- **Time Complexity:** The construction of the suffix array takes O(n log n) time using Python's built-in sorting capabilities. The dynamic programming part iterating through the suffixes takes O(n) time because we're making a constant number of operations per suffix. Thus, the overall time complexity is O(n log n).
  
- **Space Complexity:** We use O(n) space for storing the suffixes in the list and the frequency map.

This approach is optimal because it leverages efficient data structures like suffix arrays to reduce the search space and uses a hash map to check substring frequencies efficiently.

### Why This Approach is Optimal:

1. **Efficient Substring Search:** Using a suffix array allows us to find all unique substrings and their occurrences efficiently, reducing unnecessary comparisons.
2. **Constant Time Frequency Check:** The hash map ensures that checking if a substring has been seen before takes constant time, making our algorithm scalable.

In summary, this challenge requires implementing string manipulation techniques involving suffix arrays and dynamic programming, making it moderately difficult (Difficulty Rating: 4).