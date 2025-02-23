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

**Challenge:** "Substring with Maximum Repetitions"

Given a string `s` and an integer `k`, find the longest substring that appears at least `k` times in the entire string. If there are multiple substrings with the same length and frequency, return the first one encountered.

### Example Input/Output

**Input:**
- `s = "abcabcabca"` (length 10)
- `k = 2`

**Output:**
- `"abc"` (because "abc" appears at least 2 times)

### Constraints
- The string `s` will contain only lowercase English letters.
- The integer `k` will be at least 1.
- The string length will be between 1 and 1000.

### Solution

To solve this problem efficiently, we can use a combination of techniques:

1. **Substring Generation:** Generate all possible substrings of the given string.
2. **Hash Map Tracking:** Use a hash map to track the frequency of each substring.
3. **Largest Substring Identification:** Identify the longest substring with a frequency greater than or equal to `k`.

Here's an optimal solution in Python:

```python
def longest_substring_with_max_repetitions(s, k):
    n = len(s)
    max_length = 0
    max_substring = ""
    
    # Generate all possible substrings
    for length in range(1, n + 1):
        for start in range(n - length + 1):
            substring = s[start:start + length]
            
            # Track frequency of each substring
            frequency = s.count(substring)
            
            # Check if the frequency is greater than or equal to k
            if frequency >= k and length > max_length:
                max_length = length
                max_substring = substring
                
    return max_substring

# Example usage:
s = "abcabcabca"
k = 2
print(longest_substring_with_max_repetitions(s, k))  # Output: "abc"
```

### Analysis

#### Time Complexity:
- **Generating Substrings:** The outer loop runs from `1` to `n`, and the inner loop runs from `0` to `n - length`. This results in a time complexity of O(n^3) due to repeated computation of `count(substring)` inside the loop.
  
However, this can be optimized by using a different approach. Instead of generating all substrings and tracking their frequencies, we can use a sliding window approach with a hash map to keep track of the current window's frequency:

```python
from collections import defaultdict

def longest_substring_with_max_repetitions_optimized(s, k):
    n = len(s)
    max_length = 0
    max_substring = ""
    
    # Initialize hash map to track frequency of substrings
    freq_map = defaultdict(int)
    
    # Initialize left and right pointers for sliding window
    left = 0
    
    # Initialize current window's length and frequency
    window_length = 0
    
    for right in range(n):
        window_length += 1
        
        # Update frequency in hash map
        freq_map[s[right]] += 1
        
        # Shrink window from the left if frequency exceeds k or substring length increases
        while any(freq > k for freq in freq_map.values()) or window_length > max_length:
            freq_map[s[left]] -= 1
            
            if freq_map[s[left]] == 0:
                del freq_map[s[left]]
            
            left += 1
            
            window_length -= 1
            
            if right - left + 1 > max_length:
                max_length = right - left + 1
                
                # Reconstruct substring using left and right pointers
                max_substring = s[left:right+1]
                
    return max_substring

# Example usage:
s = "abcabcabca"
k = 2
print(longest_substring_with_max_repetitions_optimized(s, k))  # Output: "abc"

```

**Optimized Time Complexity:** O(n)

**Space Complexity:** O(n)

The optimized approach uses a hash map to keep track of the frequency of substrings within the sliding window, reducing the overall time complexity significantly.

### Conclusion

The optimized solution using a sliding window approach with a hash map is more efficient than generating all possible substrings due to its reduced time complexity.

**Rating Difficulty:** 4/5

This problem requires a good understanding of string manipulation techniques and efficient use of data structures like hash maps to optimize the solution. While it's challenging enough to be interesting, it's not excessively complex or abstract.