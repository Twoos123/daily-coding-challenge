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

### DIFFICULTY: 4

**Problem Description:**
**"Minimum Window Substring with Maximum Vowels"**

Given two strings `s` and `t`, find the minimum window substring of `s` that contains all vowels at least once and has the maximum vowel count among all possible substrings of `s`. If no such substring exists, return an empty string.

**Example Input/Output:**
- Input: `s = "aeiou", t = "aa"`
  - Output: `"a"`, because it contains all vowels and has a maximum vowel count.
- Input: `s = "abc", t = "aeiou"`
  - Output: `""`, because there is no substring of `s` containing all vowels.

**Constraints:**
- Both strings `s` and `t` are composed of lowercase English letters.
- The length of `s` is between 1 and 10000.
- The length of `t` is between 1 and 26 (all possible vowels).

### Optimal Solution

To solve this problem efficiently, we need to use a combination of techniques including maintaining a sliding window, tracking vowel counts, and using a set for quick lookups.

**Algorithm Explanation:**

1. **Initialize Data Structures:**
   - Use a set `vowels` to store all vowels.
   - Initialize counters for the window: `count_vowels` to track the number of unique vowels in the current window, and `max_count` to keep track of the maximum vowel count found so far.
   - Initialize variables for the minimum window: `min_window_start`, `min_window_end`, and `min_window_length`.

2. **Extend the Sliding Window:**
   - Iterate through the string `s` and extend the sliding window to the right.
   - For each character in `s`, check if it is a vowel by looking up in `vowels`. If it is, increment `count_vowels`.
   - Update `max_count` if the current window contains more vowels than any previous window.

3. **Shrink the Sliding Window:**
   - If the current window contains more vowels than any previous window, update `min_window_start`, `min_window_end`, and `min_window_length`.
   - Continue to shrink the window from the left by removing the leftmost character from consideration. If this character was a vowel, decrement `count_vowels`.

4. **Return Result:**
   - After processing all characters in `s`, check if any valid substring was found. If yes, return it; otherwise return an empty string.

```python
def min_window_substring(s, t):
    # Initialize set of vowels
    vowels = set('aeiou')
    
    # Initialize counters and variables
    count_vowels = 0
    max_count = 0
    min_window_start = 0
    min_window_end = 0
    min_window_length = float('inf')
    
    # Initialize result substring
    result = ""
    
    # Iterate through string s
    for end in range(len(s)):
        # Check if current character is a vowel
        if s[end] in vowels:
            count_vowels += 1
        
        # Update max count if current window has more unique vowels
        if count_vowels == len(t):
            while True:
                start = min_window_start
                
                # Check if current window has all unique vowels
                if any(s[start + i] != t[i] for i in range(len(t))):
                    break
                
                # Update minimum window length & indices if needed
                if end - start + 1 < min_window_length:
                    min_window_length = end - start + 1
                    min_window_start = start
                    min_window_end = end
                
                # Shrink window by moving left pointer to right
                if s[start] in vowels:
                    count_vowels -= 1
                
                min_window_start += 1
                
            # Update max count & result if necessary 
            if end - min_window_start + 1 < min_window_length:
                min_window_length = end - min_window_start + 1
                
            result = s[min_window_start:min_window_end+1]
            
            # Reset counters & variables for next window 
            min_window_start += 1
            
            # Reset counters after finding valid substring 
            if not (any(s[end+i] != t[i] for i in range(len(t)))):
                break
                
    
   return result


# Example usage 
print(min_window_substring("aeiou", "aa")) # Output should be 'a'
print(min_window_substring("abc", "aeiou")) # Output should be ''
```

### Complexity Analysis:

- **Time Complexity:** O(n * m), where n is the length of string s and m is